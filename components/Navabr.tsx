'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import LoginDialog from './LoginDialog';
import SignupDialog from './SignupDialog';

const Navbar: React.FC = () => {
  const router = useRouter();
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);
  const [isSignupDialogOpen, setIsSignupDialogOpen] = useState(false);

  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (typeof window !== 'undefined') {
      router.push(`/#${sectionId}`);
      setTimeout(() => {
        const newSection = document.getElementById(sectionId);
        if (newSection) {
          newSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  const openLoginDialog = () => {
    setIsLoginDialogOpen(true);
  };

  const closeLoginDialog = () => {
    setIsLoginDialogOpen(false);
  };

  const openSignupDialog = () => {
    setIsSignupDialogOpen(true);
  };

  const closeSignupDialog = () => {
    setIsSignupDialogOpen(false);
  };

  return (
    <nav className="fixed pl-14 top-0 px-10 left-0 right-0 flex justify-between items-center z-10 pt-1">
      <div className="flex-1 max-w-[70%] p-4 bg-gradient-to-b from-black/50 to-transparent dark:from-white/50 dark:to-transparent backdrop-blur-sm rounded-lg">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">
            <Link href="/">Logo</Link>
          </div>
          <div className="flex gap-6">
            <Link href="/" className="text-black hover:text-blue-500 dark:text-white dark:hover:text-blue-500">Home</Link>
            <a href="#courses-section" onClick={scrollToSection('courses-section')} className="text-black hover:text-blue-500 dark:text-white dark:hover:text-blue-500 cursor-pointer">Our Courses</a>
            <Link href="/services" className="text-black hover:text-blue-500 dark:text-white dark:hover:text-blue-500">Services</Link>
            <a href='/contact' className="text-black hover:text-blue-500 dark:text-white dark:hover:text-blue-500 cursor-pointer">Contact</a>
          </div>
        </div>
      </div>
      <div className="flex gap-3 ml-3">
        <button onClick={openLoginDialog} className="px-4 py-2 text-black bg-white hover:bg-gray-100 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700 border border-black dark:border-white rounded-md transition duration-300 ease-in-out">Login</button>
        <button onClick={openSignupDialog} className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 rounded-md transition duration-300 ease-in-out">Sign up</button>
      </div>
      <LoginDialog isOpen={isLoginDialogOpen} closeDialog={closeLoginDialog} />
      <SignupDialog isOpen={isSignupDialogOpen} closeDialog={closeSignupDialog} />
    </nav>
  );
};

export default Navbar;
