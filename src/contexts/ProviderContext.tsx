"use client";

import { QueryClient, QueryClientProvider, HydrationBoundary, DehydratedState } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

interface ProvidersProps {
  children: ReactNode;
  dehydratedState?: DehydratedState;
}

export default function Providers({ children, dehydratedState }: ProvidersProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydratedState}>
        {children}
      </HydrationBoundary>
    </QueryClientProvider>
  );
}
