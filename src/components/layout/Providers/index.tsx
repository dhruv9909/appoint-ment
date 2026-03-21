"use client";

import { UserProvider } from '@/contexts/UserContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { SessionProvider } from 'next-auth/react';
import React from 'react'

function Providers({ children }: { children: React.ReactNode }) {
    const queryClient = new QueryClient();
    return (
        <SessionProvider>
            <QueryClientProvider client={queryClient}>
                <UserProvider>
                    {children}
                    <ReactQueryDevtools initialIsOpen={false} />
                </UserProvider>
            </QueryClientProvider>
        </SessionProvider>
    )
}

export default Providers