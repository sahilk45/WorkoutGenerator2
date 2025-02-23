"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useSession, signOut } from "next-auth/react";
import SparkleButton from './SparkleButton';
import Image from 'next/image';  // Add this import

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { data: session, status } = useSession();  // Add status check

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Workout Library', path: '/library' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Progress Tracker', path: '/progress' }, // Changed from '/pTracker' to '/progress'
    { name: 'About Us', path: '/about' },
  ];

  const linkStyle = (path) => `
    nav-link relative px-4 py-2
    ${pathname === path 
      ? 'text-[#00df82] font-bold' 
      : 'text-gray-300 hover:text-[#00df82]'}
  `;

  const handleSignOut = async () => {
    await signOut({ redirect: true, callbackUrl: '/' });
  };

  const AuthButtons = ({ isMobile = false }) => {
    if (status === "loading") return null;

    if (session) {
      return (
        <SparkleButton onClick={handleSignOut}>
          Sign Out
        </SparkleButton>
      );
    }

    return (
      <>
        <Link href="/login" passHref>
          <SparkleButton as="a">
            Log In/Out
          </SparkleButton>
        </Link>
      </>
    );
  };

  return (
    <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-[#03624c]/20">
      <div className="max-w-7xl mx-auto px-4 h-20">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
        
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/fit.jpg"
                alt="PowerHouse Logo" 
                className="h-14 w-14 rounded-full object-cover border-2 border-[#00df82]"
                width={70}
                height={70}
                priority  // Remove the ={true} and just use priority flag
              />
              <span className="text-[#00df82] text-2xl font-bold">PowerHouse</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.path} 
                className={linkStyle(link.path)}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Desktop Auth Buttons */}
            <div className="flex items-center space-x-3 ml-6">
              <AuthButtons />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#00df82]"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="mobile-menu-enter"
              animate="mobile-menu-enter-active"
              exit="mobile-menu-exit-active"
              className="md:hidden absolute left-0 right-0 mt-2 p-4 bg-black/95 border-b border-[#03624c]/20"
            >
              <div className="space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block ${linkStyle(link.path)}`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4 space-y-2">
                  <AuthButtons isMobile={true} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;