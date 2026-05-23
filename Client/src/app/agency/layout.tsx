import Sidebar from '@/components/agency/Sidebar';
import React from 'react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar/>
      <main className="flex-1 md:p-10 p-4 bg-gray-100">
        {children}
      </main>
    </div>
  );
}
