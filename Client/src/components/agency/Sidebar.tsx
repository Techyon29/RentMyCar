'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { 
  LayoutDashboard, 
  Car, 
  X, 
  DollarSign, 
  LogOut, 
  Settings, 
  User, 
  Menu,
  ChevronRight,
  ShieldCheck,
  CreditCard
} from 'lucide-react'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Dashboard', href: '/agency/dashboard', icon: LayoutDashboard },
    { name: 'Add Car', href: '/agency/add', icon: Car },
    { name: 'Revenue', href: '/agency/revenue', icon: DollarSign },
    { name: 'Status', href: '/agency/status', icon: ShieldCheck },
  ]

  const toggleMenu = () => setIsOpen(prev => !prev)

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        className='p-3 rounded-xl bg-white border border-gray-100 shadow-lg fixed top-4 left-4 z-50 md:hidden hover:bg-gray-50 transition-all duration-300' 
        onClick={toggleMenu}
      >
        {isOpen ? <X size={24} className="text-primary" /> : <Menu size={24} className="text-primary" />}
      </button>

      {/* Backdrop for Mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-primary/20 backdrop-blur-sm z-40 md:hidden"
          onClick={toggleMenu}
        />
      )}

      {/* Sidebar Container */}
      <aside className={cn(
        'fixed inset-y-0 left-0 z-40 w-72 bg-[#102a43] text-white transition-transform duration-300 ease-in-out md:sticky md:translate-x-0',
        !isOpen && '-translate-x-full'
      )}>
        <div className="flex flex-col h-full">
          {/* Header / Brand */}
          <div className='p-8'>
            <div className='flex items-center gap-3 mb-2'>
              <div className='w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shadow-lg shadow-secondary/20'>
                <Car size={24} className="text-white" />
              </div>
              <div>
                <h1 className='text-xl font-black tracking-tight'>RentMyCar</h1>
                <span className='text-[10px] font-bold uppercase tracking-widest text-secondary/80'>Agency Portal</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-4 py-4 space-y-2">
            <p className="px-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-4 opacity-50">Main Menu</p>
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname.endsWith(item.href.split('/').pop() || '');
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'group flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all duration-300',
                    isActive 
                      ? 'bg-white/10 text-white shadow-inner' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center gap-3">
                    <item.icon size={20} className={cn(
                      'transition-colors duration-300',
                      isActive ? 'text-secondary' : 'group-hover:text-gray-300'
                    )} />
                    <span className="font-bold text-sm tracking-wide">{item.name}</span>
                  </div>
                  {isActive && (
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary shadow-lg shadow-secondary/50" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Bottom Section / User Card */}
          <div className='p-6 mt-auto'>
            <div className="bg-white/5 rounded-[2rem] p-5 border border-white/10 relative overflow-hidden group">
              {/* Subtle background decoration */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-secondary/10 rounded-full blur-2xl transition-all group-hover:bg-secondary/20"></div>
              
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                  <User size={20} className="text-gray-300" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Agency Admin</p>
                  <p className="text-[10px] font-medium text-gray-500 uppercase tracking-wider">Premium Partner</p>
                </div>
              </div>

              <div className="space-y-1 relative z-10">
                <Link 
                  href="/agency/settings" 
                  className="flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-bold text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                >
                  <Settings size={16} /> Settings
                </Link>
                <button 
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-bold text-red-400 hover:text-red-300 hover:bg-red-500/5 transition-all"
                >
                  <LogOut size={16} /> Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar