'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const hideNavbar = pathname === '/signup'; // Add more routes if needed
  
  return (
    <>
      {!hideNavbar && <Navbar />}
      <main style={{ paddingTop: !hideNavbar ? '80px' : '0px' }} className="relative overflow-hidden">
        {children}
      </main>
    </>
  );
};

export default AppWrapper;
