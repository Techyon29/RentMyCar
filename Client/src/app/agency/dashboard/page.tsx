'use client'
import { cn } from '@/lib/utils';
import { Bell, CarIcon, Calendar, TrendingUp, Users, ArrowUpRight, MoreHorizontal } from 'lucide-react';
import React, { useState } from 'react';
import RevenueChart from '@/components/agency/RevenueChart';

export default function AdminDashboard() {
  const [chartOption, setChartOption] = useState<string>('Monthly')
  
  const bookingInfo = [
    {
      id: "booking_001",
      initials: "JD",
      name: "Julianne Deidre",
      memberSince: "2023",
      membershipType: "Member",
      item: {
        name: "Porsche 911 GT3",
        type: "Car",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=200&auto=format&fit=crop"
      },
      date: "2024-10-24",
      formattedDate: "Oct 24, 2024",
      amount: 1200,
      currency: "USD",
      status: "CONFIRMED",
      statusColor: "green"
    },
    {
      id: "booking_002",
      initials: "MK",
      name: "Marcus Koenig",
      memberSince: null,
      membershipType: "Corporate Account",
      item: {
        name: "BMW M4 Competition",
        type: "Car",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=200&auto=format&fit=crop"
      },
      date: "2024-10-22",
      formattedDate: "Oct 22, 2024",
      amount: 850,
      currency: "USD",
      status: "ACTIVE",
      statusColor: "blue"
    },
    {
      id: "booking_003",
      initials: "AS",
      name: "Aria Sterling",
      memberSince: null,
      membershipType: "Premium Member",
      item: {
        name: "Ferrari F8 Tributo",
        type: "Car",
        image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=200&auto=format&fit=crop"
      },
      date: "2024-10-21",
      formattedDate: "Oct 21, 2024",
      amount: 2400,
      currency: "USD",
      status: "MAINTENANCE",
      statusColor: "orange"
    }
  ]

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Title Section */}
      <section className='flex flex-col md:flex-row gap-4 items-start md:items-center justify-between'>
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#102a43] tracking-tight">Fleet Overview</h1>
          <p className="mt-1 text-gray-500 font-medium">Real-time performance metrics and active operations.</p>
        </div>
        <div className='flex items-center gap-3'>
          <div className='inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-green-50 border border-green-100 text-xs font-bold text-green-700 uppercase tracking-wider'>
            <span className='relative flex h-2 w-2'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-2 w-2 bg-green-500'></span>
            </span>
            System Live
          </div>
          <button className='p-2.5 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-primary transition-all duration-200 shadow-sm relative'>
            <Bell size={20}/>
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
        </div>
      </section>

      {/* Information Section */}
      <section>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {/* Stat Card 1 */}
          <div className='group bg-white p-6 rounded-[2rem] border border-gray-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300'>
            <div className='bg-primary/5 p-3 rounded-2xl inline-block mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300'>
              <CarIcon size={24} className='text-primary group-hover:text-white'/>
            </div>
            <p className='text-gray-500 text-sm font-semibold uppercase tracking-wider mb-1'>Total Fleet</p>
            <div className='flex items-end gap-2'>
              <h2 className='text-3xl font-bold text-primary'>40</h2>
              <span className='text-green-600 text-sm font-bold mb-1 flex items-center'>
                <ArrowUpRight size={14}/> +4
              </span>
            </div>
          </div>

          {/* Stat Card 2 */}
          <div className='group bg-white p-6 rounded-[2rem] border border-gray-100 hover:border-secondary/20 hover:shadow-2xl hover:shadow-secondary/5 transition-all duration-300'>
            <div className='bg-secondary/5 p-3 rounded-2xl inline-block mb-4 group-hover:bg-secondary group-hover:text-white transition-colors duration-300'>
              <Calendar size={24} className='text-secondary group-hover:text-white'/>
            </div>
            <p className='text-gray-500 text-sm font-semibold uppercase tracking-wider mb-1'>Total Bookings</p>
            <div className='flex items-end gap-2'>
              <h2 className='text-3xl font-bold text-primary'>32</h2>
              <span className='text-green-600 text-sm font-bold mb-1 flex items-center'>
                <ArrowUpRight size={14}/> 66%
              </span>
            </div>
          </div>

          {/* Revenue Card (Spans 2 columns on large screens) */}
          <div className='lg:col-span-2 relative overflow-hidden bg-gradient-to-br from-[#102a43] via-[#1a3a5a] to-[#244a71] p-8 rounded-[2rem] shadow-xl group'>
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors duration-500"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <p className='text-gray-300 text-sm font-bold uppercase tracking-widest mb-2 opacity-80'>Total Revenue (MTD)</p>
              <div className="flex items-start justify-between">
                <div>
                  <h2 className='text-5xl md:text-6xl font-black text-white tracking-tighter mb-6'>$500,000</h2>
                  <div className='flex flex-wrap gap-3'>
                    <div className='px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 group-hover:bg-white/20 transition-all'>
                      <p className='text-gray-400 text-[10px] font-bold uppercase'>Growth</p>
                      <p className='text-white font-bold text-sm'>+12.4%</p>
                    </div>
                    <div className='px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 group-hover:bg-white/20 transition-all'>
                      <p className='text-gray-400 text-[10px] font-bold uppercase'>Avg Daily</p>
                      <p className='text-white font-bold text-sm'>$4,150</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-md border border-white/10">
                  <TrendingUp size={24} className="text-secondary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <section className='bg-white rounded-[2rem] p-6 md:p-8 border border-gray-100 shadow-sm'>
        <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8'>
          <div>
            <h2 className='text-2xl font-bold text-primary'>Revenue Momentum</h2>
            <p className='text-gray-500 text-sm font-medium mt-1'>
              {chartOption} comparison across luxury and premium tiers
            </p>
          </div>
          <div className='flex p-1 bg-gray-100 rounded-xl'>
            {['Monthly', 'Quarterly'].map((opt) => (
              <button
                key={opt}
                onClick={() => setChartOption(opt)}
                className={cn(
                  'px-5 py-2 rounded-lg text-sm font-bold transition-all duration-200',
                  chartOption === opt 
                    ? 'bg-white text-primary shadow-sm' 
                    : 'text-gray-500 hover:text-primary'
                )}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
        <div className="w-full">
          <RevenueChart option={chartOption} />
        </div>
      </section>

      {/* Recent Rentals Section */}
      <section>
        <div className='flex justify-between items-center mb-6'>
          <h2 className='text-2xl font-bold text-primary'>Recent Rentals</h2>
          <button className='text-secondary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all group'>
            View All Bookings <ArrowUpRight size={18} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Desktop Table View */}
        <div className='hidden md:block overflow-hidden bg-white rounded-[2rem] border border-gray-100 shadow-sm'>
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100">
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Customer</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Car Model</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Date</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Amount</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {bookingInfo.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50/80 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                        {booking.initials}
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{booking.name}</p>
                        <p className="text-xs text-gray-500">{booking.membershipType}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={booking.item.image} alt={booking.item.name} className="w-12 h-8 object-cover rounded-lg" />
                      <p className="font-semibold text-gray-700">{booking.item.name}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-600">{booking.formattedDate}</td>
                  <td className="px-6 py-4 font-bold text-gray-900">${booking.amount.toLocaleString()}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={cn(
                      'px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border',
                      booking.status === "CONFIRMED" && 'bg-green-50 text-green-700 border-green-100',
                      booking.status === "ACTIVE" && 'bg-blue-50 text-blue-700 border-blue-100',
                      booking.status === "MAINTENANCE" && 'bg-orange-50 text-orange-700 border-orange-100'
                    )}>
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className='md:hidden space-y-4'>
          {bookingInfo.map((booking) => (
            <div key={booking.id} className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm space-y-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {booking.initials}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{booking.name}</p>
                    <p className="text-xs text-gray-500">{booking.membershipType}</p>
                  </div>
                </div>
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <MoreHorizontal size={20} />
                </button>
              </div>
              
              <div className="flex items-center gap-4 bg-gray-50 p-3 rounded-2xl">
                <img src={booking.item.image} alt={booking.item.name} className="w-16 h-12 object-cover rounded-xl" />
                <div>
                  <p className="font-bold text-sm text-gray-900">{booking.item.name}</p>
                  <p className="text-xs text-gray-500">{booking.formattedDate}</p>
                </div>
              </div>

              <div className="flex justify-between items-center pt-2">
                <span className="text-lg font-black text-primary">${booking.amount.toLocaleString()}</span>
                <span className={cn(
                  'px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border',
                  booking.status === "CONFIRMED" && 'bg-green-50 text-green-700 border-green-100',
                  booking.status === "ACTIVE" && 'bg-blue-50 text-blue-700 border-blue-100',
                  booking.status === "MAINTENANCE" && 'bg-orange-50 text-orange-700 border-orange-100'
                )}>
                  {booking.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
