import { type Record } from './records.js';
import { EventType } from '@puzzlehq/types';
import { getWalletConnectModalSignClient } from '../client.js';
import { SessionTypes } from '@walletconnect/types';

/// dapps send this to the sdk
export type CreateEventRequestData = {
  address?: string;
  type: EventType;
  programId: string;
  functionId: string;
  fee: number;
  inputs: (Record | string)[];
};

/// sdk maps records to ciphertexts
export type CreateEventRequest = {
  address?: string;
  type: EventType;
  programId: string;
  functionId: string;
  fee: number;
  inputs: string[];
};

/// wallet passes this back to dapp
export type CreateEventResponse = {
  eventId?: string;
  /// pass in whole event here?
  error?: string;
};

export const requestCreateEvent = async (
  requestData?: CreateEventRequestData
): Promise<CreateEventResponse> => {
  const connection = await getWalletConnectModalSignClient();
  const session: SessionTypes.Struct | undefined =
    await connection?.getSession();
  const chainId = 'aleo:1';

  if (!session || !chainId || !connection) {
    return { error: 'no session, chainId, or connection' };
  }

  const inputs = requestData?.inputs.map((input) => {
    if (typeof input === 'string') {
      return input;
    }
    return input.plaintext;
  });

  try {
    const response: CreateEventResponse = await connection.request({
      topic: session.topic,
      chainId: chainId,
      request: {
        id: 1,
        jsonrpc: '2.0',
        method: 'requestCreateEvent',
        params: {
          ...requestData,
          inputs,
        } as CreateEventRequest,
      },
    });
    return response;
  } catch (e) {
    const error = (e as Error).message;
    console.error('createEvent error', error);
    return { error };
  }
};