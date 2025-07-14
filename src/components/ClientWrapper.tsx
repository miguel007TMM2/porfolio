'use client';

import { LocaleProvider } from './LocaleProvider';

interface ClientWrapperProps {
  children: React.ReactNode;
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  return (
    <LocaleProvider>
      {children}
    </LocaleProvider>
  );
}
