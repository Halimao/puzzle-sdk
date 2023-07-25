import { useEffect } from 'react';
import { PuzzleAccount, projectId } from '../index.js';
import useClientWalletStore from './clientWalletStore.js';
import { ISignClient, SessionTypes } from '@walletconnect/types';
import { getSdkError } from '@walletconnect/utils';
import { SignClient } from '@walletconnect/sign-client';
import { useRequest } from '@walletconnect/modal-sign-react';
import { Core } from '@walletconnect/core';
import { Local } from '../data/Local.js';

export const useWallet = () => {
  const [setSession, setAccount, setAccounts, session, signClient] = useClientWalletStore(
    (state) => [state.setSession, state.setAccount, state.setAccounts, state.session, state.signClient]
  );

  const { request: disconnect } = useRequest({
    topic: session?.topic,
    chainId: 'aleo:1',
    request: {
      id: 1,
      jsonrpc: '2.0',
      method: 'aleo_disconnect'
    },
  });

  const addSession = async (newSession: SessionTypes.Struct) => {
    console.log("Removing old session"); 
    if (session && signClient) {
      try {
        await disconnect()
      } catch (e) {}
      try {
        await signClient.disconnect({
          topic: session.topic,
          reason: getSdkError('USER_DISCONNECTED')
        })
      } catch (e) {}
    }
    console.log("Adding new session"); 
    setSession(newSession);

    window.localStorage.removeItem('WALLETCONNECT_DEEPLINK_CHOICE'); // remove to prevent walletconnect from redirecting to the wallet page

    const accounts = newSession.namespaces.aleo.accounts.map((account) => {
      const split = account.split(':');
      return {
        network: split[0],
        chainId: split[1],
        address: split[2],
      } as PuzzleAccount;
    });
    setAccounts(accounts ?? []);
    accounts[0] && setAccount(accounts[0]);
  };

  return { addSession, session };
};

export const useInitWallet = () => {
  const { addSession } = useWallet();
  const [signClient, setSignClient] = useClientWalletStore((state) => [
    state.signClient,
    state.setSignClient,
  ]);

  useEffect(() => {
    (async () => {
      // const core = new Core({
      //   projectId,
      //   storage: {
      //     async getKeys(): Promise<string[]> {
      //       return Local.getKeys()
      //     },
      //     async getEntries<T = any>(): Promise<[string, T][]> {
      //       return Local.getEntries()
      //     },
      //     async getItem<T = any>(key: string): Promise<T | undefined> {
      //       return Local.getItem(key)
      //     },
      //     async setItem<T = any>(key: string, value: T): Promise<void> {
      //       Local.setItem(key, value);
      //     },
      //     async removeItem(key: string): Promise<void> {
      //       Local.removeItem(key)
      //     },
      //   },
      // });
      // await core.start();
      const signClient: ISignClient = await SignClient.init({ projectId });

      setSignClient(signClient);
      const lastKeyIndex = signClient.session.getAll().length - 1;
      const lastSession =
        lastKeyIndex >= 0
          ? signClient.session.getAll()[lastKeyIndex]
          : undefined;
      
      console.log(lastSession)

      if (lastSession) {
        addSession(lastSession);
      }
    })();
  }, []);

  useEffect(() => {
    if (!signClient) return;
    signClient.events.on('session_delete', ({ id, topic }) => {
      console.log('session deleted! topic: ', topic);
    });
  }, [signClient]);
};
