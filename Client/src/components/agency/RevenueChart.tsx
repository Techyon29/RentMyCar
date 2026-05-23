'use client';
import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const dataMonthly = [
  { name: 'Jan', revenue: 45000 },
  { name: 'Feb', revenue: 52000 },
  { name: 'Mar', revenue: 48000 },
  { name: 'Apr', revenue: 61000 },
  { name: 'May', revenue: 55000 },
  { name: 'Jun', revenue: 67000 },
  { name: 'Jul', revenue: 72000 },
];

const dataQuarterly = [
  { name: 'Q1', revenue: 145000 },
  { name: 'Q2', revenue: 183000 },
  { name: 'Q3', revenue: 210000 },
  { name: 'Q4', revenue: 250000 },
];

interface RevenueChartProps {
  option: string;
}

const RevenueChart = ({ option }: RevenueChartProps) => {
  const data = option === 'Monthly' ? dataMonthly : dataQuarterly;

  return (
    <div className="w-full h-[300px] mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#007bff" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#007bff" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#6b7280', fontSize: 12 }}
            dy={10}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#6b7280', fontSize: 12 }}
            tickFormatter={(value) => `$${value / 1000}k`}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#fff', 
              borderRadius: '12px', 
              border: 'none', 
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' 
            }} 
            formatter={(value: any) => [`$${Number(value).toLocaleString()}`, 'Revenue']}
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#007bff"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorRevenue)"
            animationDuration={1500}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;