'use client';
import { Footer } from '@/components/molecules/Footer';
import { Navbar } from '@/components/molecules/Navbar';
import { MenuItem, SidebarMenu } from '@/components/molecules/SidebarMenu';
import { Providers } from '@/providers/Provider';
import { useState } from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
  );
}

export function MainLayout(props: MainLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleSidebarMenu = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar handleSidebarMenu={handleSidebarMenu} />
      </header>
      <main className="flex flex-1 h-full bg-base-content">
        <div className="h-fit">
          <SidebarMenu collapsed={isSidebarOpen}>
            <MenuItem
              label="Dashboard"
              icon={<Icon />}
              href="/"
              collapsed={isSidebarOpen}
            />
            <MenuItem label="CTFL" icon={<Icon />} collapsed={isSidebarOpen}>
              <MenuItem
                label="Detalhes"
                href="/ctfl"
                icon={<Icon />}
                collapsed={isSidebarOpen}
              />
              <MenuItem
                label="Simulados"
                href="/ctfl/simulados"
                icon={<Icon />}
                collapsed={isSidebarOpen}
              />
            </MenuItem>
          </SidebarMenu>
        </div>
        <div className="content">{props.children}</div>
      </main>
      <div className="sticky bottom-0">
        <Footer />
      </div>
    </div>
  );
}
