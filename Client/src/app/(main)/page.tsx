"use client";

import React, { useState } from 'react';
import { IoLocationOutline, IoPerson } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { GoShieldCheck } from "react-icons/go";
import { MdElectricCar } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { TbGpsFilled } from "react-icons/tb";
import { BsSuitcaseLgFill } from "react-icons/bs";
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface CarAsset {
  id: number;
  name: string;
  sub_name: string;
  engine_type: string;
  power_hp: string;
  seats: string;
  image: string;
}

export default function Home() {
  const router = useRouter();
  const date = new Date();
  const todaydate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

  const [today, setToday] = useState(todaydate);
  const [location, setLocation] = useState('');

  const assets: CarAsset[] = [
    {
      id: 1,
      name: 'Porsche 911 Carrera',
      sub_name: 'Ultimate Sport Experience',
      engine_type: 'Auto',
      power_hp: '379 HP',
      seats: '4 Seats',
      image: '/Images/homeimage1.jpg'
    },
    {
      id: 2,
      name: 'Porsche 911 Carrera',
      sub_name: 'Ultimate Sport Experience',
      engine_type: 'Auto',
      power_hp: '379 HP',
      seats: '4 Seats',
      image: '/Images/homeimage1.jpg'
    },
    {
      id: 3,
      name: 'Porsche 911 Carrera',
      sub_name: 'Ultimate Sport Experience',
      engine_type: 'Auto',
      power_hp: '379 HP',
      seats: '4 Seats',
      image: '/Images/homeimage1.jpg'
    },
  ];

  const handleSearch = () => {
    console.log({ location, date: today });
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20 md:pb-0">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 md:pt-0 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-primary">
              Explore the World, <span className="text-secondary">One Mile</span> at a Time
            </h1>
            
            <p className="text-lg text-gray-500 max-w-lg">
              Experience the pinnacle of automotive luxury with our curated fleet. 
              From coastlines to cityscapes, drive with the confidence of a concierge-backed journey.
            </p>

            {/* Search Card */}
            <div className="bg-white rounded-3xl shadow-xl p-3 md:p-4">
              <div className="grid md:grid-cols-4 gap-3 bg-gray-100 rounded-3xl p-2">
                {/* Location */}
                <div className="relative md:col-span-1">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 text-secondary">
                    <IoLocationOutline size={24} />
                  </div>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Where are you going?"
                    className="w-full pl-14 pr-4 py-4 bg-white rounded-3xl text-primary placeholder:text-gray-400 focus:outline-none border border-transparent focus:border-secondary transition-all"
                  />
                </div>

                {/* Date */}
                <div className="md:col-span-1">
                  <input
                    type="date"
                    value={today}
                    onChange={(e) => setToday(e.target.value)}
                    className="w-full py-4 px-6 bg-white rounded-3xl text-primary focus:outline-none border border-transparent focus:border-secondary transition-all"
                  />
                </div>

                {/* Vehicle Type */}
                <div className="md:col-span-1">
                  <select className="w-full py-4 px-6 bg-white rounded-3xl text-primary focus:outline-none border border-transparent focus:border-secondary transition-all appearance-none">
                    <option value="suv">SUV</option>
                    <option value="sedan">Sedan</option>
                    <option value="sports">Sports Car</option>
                    <option value="electric">Electric</option>
                  </select>
                </div>

                {/* Search Button */}
                <button
                  onClick={handleSearch}
                  className="bg-secondary hover:bg-secondary/90 text-white font-semibold py-4 px-8 rounded-3xl transition-all active:scale-95 flex items-center justify-center gap-2 text-lg"
                >
                  Search
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hidden xl:block relative">
            <Image 
              src="/Images/homeimage1.jpg" 
              alt="Luxury Car" 
              width={800}
              height={600}
              className="w-full rounded-3xl shadow-2xl rotate-6 hover:rotate-3 transition-transform duration-500" 
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 md:px-12 lg:px-20 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl font-semibold text-primary">Redefining Mobility</h2>
              <p className="text-gray-500 mt-3 max-w-md">
                Our commitment to quality extends beyond the vehicle. It's about the seamless motion of your life.
              </p>
            </div>
            <a href="#" className="text-secondary flex items-center gap-2 mt-6 md:mt-0 hover:gap-3 transition-all text-lg font-medium">
              Explore Our Philosophy <FaArrowRight />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-xl transition-all group">
              <div className="h-64 bg-[url('/Images/Engine.jpg')] bg-cover bg-center relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-8">
                <div className="inline-flex bg-primary text-white p-3 rounded-2xl mb-6">
                  <GoShieldCheck size={32} />
                </div>
                <h3 className="text-2xl font-semibold text-primary mb-3">Concierge Level Quality</h3>
                <p className="text-gray-500">
                  Every vehicle undergoes a rigorous 200-point inspection before it reaches your driveway.
                </p>
              </div>
            </div>

            {/* Feature 2 - Electric */}
            <div className="bg-secondary rounded-3xl p-8 flex flex-col h-full hover:shadow-xl transition-all">
              <MdElectricCar className="text-white text-6xl mb-8" />
              <h3 className="text-3xl font-semibold text-white mb-4">Eco-Luxury Performance</h3>
              <p className="text-white/80 flex-1">
                Experience the future with our premium electric fleet, combining exhilarating power with true sustainability.
              </p>
            </div>

            {/* Feature 3 - Instant Booking */}
            <div className="bg-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all">
              <h3 className="text-3xl font-semibold text-primary mb-6">Instant Booking</h3>
              <p className="text-gray-600">
                No paperwork. No waiting. Unlock your car via our app in seconds with seamless digital experience.
              </p>
            </div>

            {/* 24/7 Concierge */}
            <div className="lg:col-span-2 bg-primary rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-3xl font-semibold text-white mb-4">24/7 Roadside Concierge</h3>
                <p className="text-white/80 text-lg max-w-md">
                  Never walk alone. Our elite support team is one tap away, anywhere in the world.
                </p>
                <div className="flex gap-3 mt-8">
                  <button className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all border border-white/30">Global Support</button>
                  <button className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all border border-white/30">Rapid Response</button>
                </div>
              </div>
              <div className="hidden md:block w-80 h-80 bg-[url('/Images/Repair.webp')] bg-cover bg-center rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <p className="text-secondary font-medium tracking-wider">THE FLEET</p>
          <h2 className="text-4xl font-semibold text-primary mt-2">Featured Motion Curations</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {assets.map((asset) => (
            <div 
              key={asset.id} 
              className="bg-white rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              <div className="overflow-hidden h-64 relative">
                <Image 
                  src={asset.image} 
                  alt={asset.name} 
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-semibold text-primary">{asset.name}</h3>
                <p className="text-gray-500 mb-6">{asset.sub_name}</p>

                <div className="flex justify-between text-sm text-gray-500 mb-8">
                  <span className="flex items-center gap-1"><IoMdSettings className="text-secondary" />{asset.engine_type}</span>
                  <span className="flex items-center gap-1"><AiTwotoneThunderbolt className="text-secondary" />{asset.power_hp}</span>
                  <span className="flex items-center gap-1"><IoPerson className="text-secondary" />{asset.seats}</span>
                </div>

                <button 
                  onClick={() => router.push('/car')}
                  className="w-full bg-gray-900 hover:bg-secondary transition-all py-4 rounded-2xl text-white font-semibold"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Rider / Agency Section */}
      <section className="px-6 md:px-12 lg:px-20 py-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-primary rounded-3xl p-10 md:p-14 text-white">
            <h3 className="text-3xl font-semibold mb-6">Find Your Next Ride</h3>
            <p className="text-white/70 mb-10 text-lg">
              Join thousands of satisfied travelers and experience the road like never before.
            </p>
            <button className="flex items-center gap-3 bg-secondary hover:bg-white hover:text-primary transition-all px-8 py-4 rounded-2xl font-semibold">
              Start Journey <TbGpsFilled className="text-xl" />
            </button>
          </div>

          <div className="bg-gray-100 rounded-3xl p-10 md:p-14">
            <h3 className="text-3xl font-semibold text-primary mb-6">List Your Fleet</h3>
            <p className="text-gray-600 mb-10 text-lg">
              Scale your car rental business with our premium management platform and reach elite clients.
            </p>
            <button className="flex items-center gap-3 border-2 border-primary hover:bg-primary hover:text-white transition-all px-8 py-4 rounded-2xl font-semibold text-primary">
              Agency Hub <BsSuitcaseLgFill className="text-xl" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12 px-6 md:px-20 mb-16 md:mb-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <h1 className="text-3xl font-semibold text-primary">RentMyCar</h1>
          <p className="text-sm text-gray-400">
            © 2026 The Editorial Motion. Premium Concierge Car Rentals.
          </p>
        </div>
      </footer>
    </div>
  );
}
