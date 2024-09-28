'use client'; // This component will be a client component

import { usePathname } from 'next/navigation';
import Navbar from './Navabr';
import Footer from './Footer';

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  // Check if the current route is login or signup
  const isAuthPage = pathname === '/login' || pathname === '/signup';

  return (
    <>
      {/* Render Navbar only if not on login or signup page */}
      {!isAuthPage && <Navbar />}
      
      {children}

      {/* Render Footer only if not on login or signup page */}
      {!isAuthPage && <Footer />}
    </>
  );
};

export default LayoutWrapper;
