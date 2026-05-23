"use client";

import React, { useEffect, useState } from 'react';
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { SiSpeedtest } from "react-icons/si";
import { IoMdPerson } from "react-icons/io";
import { HiOfficeBuilding } from "react-icons/hi";
import Image from 'next/image';

interface BenefitItem {
  title: string;
  subTitle: string;
  image: React.ReactNode;
}

const Box = ({ title, subTitle, image }: BenefitItem) => {
  return (
    <div className="flex items-start gap-6 group">
      <div className="bg-white p-4 rounded-2xl shadow-sm group-hover:shadow-md transition-all duration-200 flex-shrink-0">
        {image}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-primary">{title}</h3>
        <p className="text-sm text-gray-500 mt-1 leading-relaxed">{subTitle}</p>
      </div>
    </div>
  );
};

export default function RegistrationPage() {
  const assets: BenefitItem[] = [
    {
      title: "Secure Verification",
      subTitle: "Advanced document handling for a seamless onboarding experience.",
      image: <VscWorkspaceTrusted className="text-3xl text-secondary" />,
    },
    {
      title: "Instant Approval",
      subTitle: "Our concierge team processes agency listings within 24 hours.",
      image: <SiSpeedtest className="text-3xl text-secondary" />,
    },
  ];

  const [type, setType] = useState('customer');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    type: 'customer',
  });

  // Sync formData.type when tab changes
  useEffect(() => {
    setFormData((prev) => ({ ...prev, type }));
  }, [type]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // TODO: Add your API call here
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Side - Details */}
        <div className="space-y-12">
          <div>
            <h1 className="text-6xl font-semibold text-primary leading-tight">
              Join the <span className="text-secondary">Elite</span> Circle.
            </h1>
            <p className="mt-6 max-w-md text-gray-400 text-lg">
              Experience automotive excellence through our curated fleet management and concierge services. 
              Choose your path to prestige.
            </p>
          </div>

          {/* Benefits */}
          <div className="space-y-10">
            {assets.map((item, index) => (
              <Box 
                key={index} 
                title={item.title} 
                subTitle={item.subTitle} 
                image={item.image} 
              />
            ))}
          </div>

          {/* Decorative Image */}
          <div className="group overflow-hidden rounded-3xl shadow-xl max-w-md">
            <Image 
              src="/Images/homeimage1.jpg" 
              alt="Luxury automotive experience" 
              width={500}
              height={300}
              className="w-full rounded-3xl group-hover:scale-105 transition-transform duration-500 ease-out" 
            />
          </div>
        </div>

        {/* Right Side - Form Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          
          {/* Tab Switcher */}
          <div className="flex bg-gray-100 p-2">
            <button
              onClick={() => setType('customer')}
              className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-2xl text-base font-medium transition-all duration-200 ${
                type === 'customer' 
                  ? 'bg-white shadow text-secondary' 
                  : 'text-gray-500 hover:bg-gray-200'
              }`}
            >
              <IoMdPerson className="text-2xl" />
              Customer
            </button>
            
            <button
              onClick={() => setType('car agency')}
              className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-2xl text-base font-medium transition-all duration-200 ${
                type === 'car agency' 
                  ? 'bg-white shadow text-secondary' 
                  : 'text-gray-500 hover:bg-gray-200'
              }`}
            >
              <HiOfficeBuilding className="text-2xl" />
              Car Agency
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-10 space-y-8">
            <div className="space-y-8">
              
              {/* Name Field */}
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  {type === 'customer' ? "Full Name" : "Agency Name"}
                </label>
                <input 
                  type="text" 
                  placeholder={type === 'customer' ? "John Doe" : "Elite Motors Pvt Ltd"}
                  className="w-full px-5 py-4 bg-gray-50 border border-transparent focus:border-secondary rounded-2xl focus:outline-none text-primary placeholder:text-gray-400 transition-all duration-200"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  {type === 'customer' ? "Email Address" : "Business Email"}
                </label>
                <input 
                  type="email" 
                  placeholder={type === 'customer' ? "john@example.com" : "contact@elitemotors.com"}
                  className="w-full px-5 py-4 bg-gray-50 border border-transparent focus:border-secondary rounded-2xl focus:outline-none text-primary placeholder:text-gray-400 transition-all duration-200"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Password
                </label>
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full px-5 py-4 bg-gray-50 border border-transparent focus:border-secondary rounded-2xl focus:outline-none text-primary placeholder:text-gray-400 transition-all duration-200"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-secondary to-blue-500 text-white font-semibold py-4 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-lg"
            >
              Create Account
            </button>

            <p className="text-center text-xs text-gray-400 mt-4">
              By creating an account, you agree to our Terms and Privacy Policy.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
