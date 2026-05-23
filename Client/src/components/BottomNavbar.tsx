"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome, FaCar } from "react-icons/fa";
import { MdOutlineMiscellaneousServices, MdOutlineContacts } from "react-icons/md";

const BottomNavbar = () => {
  const pathname = usePathname();

  const navItems = [
    { to: "/", icon: <FaHome />, label: "Home" },
    { to: "/car", icon: <FaCar />, label: "Cars" },
    { to: "/service", icon: <MdOutlineMiscellaneousServices />, label: "Services" },
    { to: "/contact", icon: <MdOutlineContacts />, label: "Contact" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 shadow-lg md:hidden">
      <ul className="flex items-center justify-around py-2 px-2 max-w-md mx-auto">
        {navItems.map((item, index) => {
          const isActive = pathname === item.to;
          return (
            <li key={index} className="flex-1">
              <Link
                href={item.to}
                className={`
                  flex flex-col items-center justify-center py-3 px-3 rounded-3xl transition-all duration-200
                  ${isActive 
                    ? 'text-secondary bg-gray-50 scale-105' 
                    : 'text-gray-500 hover:text-gray-700'
                  }
                `}
              >
                <div className={`text-3xl mb-1 transition-transform ${isActive ? 'scale-110' : ''}`}>
                  {item.icon}
                </div>
                
                <span className={`text-[10px] font-medium mt-0.5 tracking-widest
                  ${isActive ? 'text-secondary font-semibold' : 'text-gray-500'}`}
                >
                  {item.label}
                </span>

                {/* Active dot indicator */}
                {isActive && (
                  <div className="w-1 h-1 bg-secondary rounded-full mt-1" />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BottomNavbar;
