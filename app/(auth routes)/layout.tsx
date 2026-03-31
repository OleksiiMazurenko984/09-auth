'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getMe, refresh } from '@/lib/api/clientApi';
import { useAuthStore } from '@/lib/store/authStore';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const setUser = useAuthStore(s => s.setUser);
  const clearUser = useAuthStore(s => s.clearIsAuthenticated);

  useEffect(() => {
    let isMounted = true;

    async function checkAuth() {
      try {
        await refresh();
        const user = await getMe();

        if (!isMounted) return;

        if (user) {
          setUser(user);
          setLoading(false);
          return;
        }

        clearUser();
        router.replace('/sign-in');
      } catch {
        if (!isMounted) return;

        clearUser();
        router.replace('/sign-in');
      }
    }

    checkAuth();

    return () => {
      isMounted = false;
    };
  }, [router, setUser, clearUser]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}
