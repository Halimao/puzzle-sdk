import { useEffect } from 'react';
import useClientWalletStore from './clientWalletStore.js';
import { useRequest, useSession, useOnSessionEvent } from '@walletconnect/modal-sign-react';
import { GetSelectedAccountResponse } from '../messaging/account.js';
import { SessionTypes } from '@walletconnect/types';

/// ADDRESSES AND ALIASES
export const shortenAddress = (
  address: string
) => {
  const length = 5;
  if (address.length < length * 2) return address;
  return `${address.slice(
    0,
    length + 'aleo1'.length
  )}...${address.slice(address.length - length, address.length)}`;
};

export const useAccount = () => {
  const session: SessionTypes.Struct | undefined = useSession();

  const [account, accounts, chainId, setAccount] =
    useClientWalletStore((state) => [
      state.account,
      state.accounts,
      state.chainId,
      state.setAccount,
    ]);
  
    const { request, data: wc_data, error: wc_error, loading } = useRequest({
      topic: session?.topic,
      chainId: chainId ?? 'aleo:1',
      request: {
        id: 1,
        jsonrpc: '2.0',
        method: 'getSelectedAccount'
      },
    });

  // listen for wallet-originated account updates
  useOnSessionEvent(({ params, topic }) => {
    const eventName = params.event.name;
    if (eventName === 'accountSelected' && session && session.topic === topic) {
      const address = params.event.data;
      const network = params.chainId.split(':')[0];
      const chainId = params.chainId.split(':')[1];
      setAccount({
        network,
        chainId,
        address,
        shortenedAddress: shortenAddress(address)
      });
    }
  });

  // send initial account request...
  useEffect(() => {
    if (session && !loading) {
      request();
    }
  }, [session?.topic])

  // ...and listen for response
  useEffect(() => { 
    if (wc_data) {
      const puzzleData: GetSelectedAccountResponse | undefined = wc_data;
      const account = puzzleData?.account;
      if (account) {
        setAccount(account);
      }
    }
  }, [wc_data]);

  const error: string | undefined = wc_error ? wc_error.message : (wc_data && wc_data.error);

  return {
    account,
    accounts,
    error,
    loading
  };
};
