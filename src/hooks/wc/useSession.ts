import { useEffect, useState } from 'react';
import type { WalletConnectModalSignInstance } from '../../client.js';
import { emitter, getWalletConnectModalSignClient } from '../../client.js';
import { useOnSessionDelete } from './useOnSessionDelete.js';
import { useOnSessionExpire } from './useOnSessionExpire.js';
import { useOnSessionUpdate } from './useOnSessionUpdate.js';

type Data = Awaited<ReturnType<WalletConnectModalSignInstance['getSession']>>;

export function useSession() {
  const [session, setSession] = useState<Data | undefined>(undefined);

  useOnSessionDelete((event) => {
    if (event.topic === session?.topic) {
      setSession(undefined);
    }
  });

  useOnSessionUpdate((event) => {
    if (session && event.topic === session?.topic) {
      const { namespaces } = event.params;
      const updatedSession = { ...session, namespaces };
      setSession(updatedSession);
    }
  });

  useOnSessionExpire((event) => {
    if (session && event.topic === session?.topic) {
      setSession(undefined);
    }
  });

  useEffect(() => {
    async function getActiveSession() {
      const client = await getWalletConnectModalSignClient();
      const response = await client.getSession();
      setSession(response);
    }
    getActiveSession();

    // WORKAROUND: This needs to be replaced with new session_connect event
    emitter.on('session_update', getActiveSession);
    emitter.on('session_change', getActiveSession);

    return () => {
      emitter.off('session_update', getActiveSession);
      emitter.off('session_change', getActiveSession);

    };
  }, []);

  return session;
}
