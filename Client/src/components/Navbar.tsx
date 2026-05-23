"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Car', href: '/car' },
    { name: 'Service', href: '/service' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className='w-full px-5 md:px-22 flex justify-between py-4 items-center bg-white shadow-sm'>
      {/* Title */}
      <Link href="/">
        <h1 className='text-xl md:text-3xl font-bold text-primary cursor-pointer'>RentMyCar</h1>
      </Link>

      {/* Links */}
      <ul className='gap-7 text-gray-500 text-sm font-semibold hidden md:flex'>
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`${
                  isActive ? "text-secondary border-b-2 pb-1 border-b-secondary" : "pb-1 hover:text-secondary transition-colors"
                }`}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Side Buttons */}
      <div className='flex items-center'>
        <Link 
          href="/login"
          className={`text-gray-500 cursor-pointer hover:text-secondary text-sm md:text-base ${pathname === '/login' ? 'hidden' : ""}`}
        >
          Login
        </Link>
        <button
          className={`md:ml-3 ml-5 text-white px-4 py-1.5 bg-secondary rounded-full cursor-pointer text-sm md:text-base transition-transform active:scale-95 ${pathname === '/registration' ? 'hidden' : ""}`}
          onClick={() => router.push('/registration')}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Navbar;
