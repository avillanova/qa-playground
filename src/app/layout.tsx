import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { MainLayout } from '@/layouts/MainLayout';
import { Providers } from '@/providers/Provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'QA Playground',
  description: 'Lugar para brincar com QA'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${inter.className} min-h-screen`}>
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
