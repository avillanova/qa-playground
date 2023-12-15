'use client';

import { ThemeProvider } from './ThemeProvider';

export function Providers({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
