"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const [userType, setUserType] = useState('customer'); // 'customer' or 'agency'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim() || !password.trim()) {
      alert('Please fill in all fields');
      return;
    }

    console.log({ email, password, userType });
    // TODO: Add your login API call here
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">
        
        {/* Left Side - Hero Image */}
        <div className="relative hidden md:block">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/Images/Registration.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/40" />
          
          <div className="absolute inset-0 flex flex-col justify-center px-12 text-white">
            <h1 className="text-5xl font-semibold leading-tight">
              DRIVE THE<br />DISTINCTION
            </h1>
            <p className="mt-6 text-lg text-gray-200 max-w-sm">
              Access your premium fleet or manage your concierge services with RentMyCar's secure portal.
            </p>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex flex-col justify-center px-8 md:px-16 py-12">
          
          {/* Tab Switcher */}
          <div className="flex bg-gray-100 p-1.5 rounded-full mx-auto mb-10">
            <button
              onClick={() => setUserType('customer')}
              className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                userType === 'customer' 
                  ? 'bg-white shadow text-secondary' 
                  : 'text-gray-500 hover:bg-gray-200'
              }`}
            >
              Customer Login
            </button>
            <button
              onClick={() => setUserType('agency')}
              className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                userType === 'agency' 
                  ? 'bg-white shadow text-secondary' 
                  : 'text-gray-500 hover:bg-gray-200'
              }`}
            >
              Agency Login
            </button>
          </div>

          <div className="mb-10">
            <h2 className="text-4xl font-semibold text-primary">Welcome Back</h2>
            <p className="text-gray-500 mt-2">
              Please enter your credentials to continue your journey
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Email Field */}
            <div>
              <label className="block text-xs font-semibold text-primary mb-2 tracking-wider">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                placeholder="name@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-secondary transition-all duration-200 text-primary placeholder:text-gray-400"
              />
            </div>

            {/* Password Field */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold text-primary tracking-wider">
                  PASSWORD
                </label>
                <span 
                  className="text-xs text-secondary font-medium cursor-pointer hover:underline transition-all"
                  onClick={() => alert('Forgot password flow coming soon')}
                >
                  Forgot Password?
                </span>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-secondary transition-all duration-200 text-primary placeholder:text-gray-400"
              />
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-secondary to-blue-600 hover:from-secondary hover:to-blue-700 text-white font-semibold py-4 rounded-2xl shadow-lg hover:shadow-xl active:scale-[0.985] transition-all duration-200 text-lg mt-4 cursor-pointer"
            >
              SIGN IN
            </button>

          </form>

          {/* Register Link */}
          <p className="text-center text-sm text-gray-400 mt-10">
            Don't have an account?{' '}
            <Link 
              href="/registration"
              className="text-secondary font-medium hover:underline cursor-pointer transition-all"
            >
              Register your interest
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
