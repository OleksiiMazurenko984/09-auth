'use client';

import { getMe, refresh } from '@/lib/api/clientApi';
import { useAuthStore } from '@/lib/store/authStore';
import { useEffect } from 'react';

interface AuthProviderProps {
  children: React.ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const setUser = useAuthStore(s => s.setUser);

  useEffect(() => {
    async function fetchData() {
      await refresh();
      const data = await getMe();
      if (data) {
        setUser(data);
      }
    }

    fetchData();
  }, [setUser]);

  return children;
}
