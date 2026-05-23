"use client"
import { cn } from '@/lib/utils';
import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Car, 
  CheckCircle2, 
  Wrench, 
  Clock, 
  DollarSign, 
  User, 
  Calendar, 
  Fuel, 
  Gauge, 
  Cpu, 
  ShieldCheck, 
  Plus,
  SlidersHorizontal,
  X,
  FileText,
  AlertTriangle,
  ChevronDown,
  Activity
} from 'lucide-react';
import Link from 'next/link';

// Detailed type definition for our Fleet Vehicle
interface FleetVehicle {
  id: string;
  initials: string;
  name: string;
  memberSince: string | null;
  membershipType: string;
  item: {
    name: string;
    type: string;
    image: string;
    pricePerDay: number;
    category: string;
    specs: {
      power: string;
      engine: string;
      transmission: string;
      fuel: string;
    };
  };
  date: string;
  formattedDate: string;
  amount: number;
  currency: string;
  status: "CONFIRMED" | "available" | "MAINTENANCE" | "service";
}

export default function AdminStatus() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedVehicleId, setSelectedVehicleId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("name-asc");
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);

  // Core fleet state with high-fidelity, detailed mock data
  const [vehicles, setVehicles] = useState<FleetVehicle[]>([
    {
      id: "booking_001",
      initials: "JD",
      name: "Julianne Deidre",
      memberSince: "2023",
      membershipType: "Premium Renter",
      item: {
        name: "Porsche 911 GT3",
        type: "Car",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600&auto=format&fit=crop",
        pricePerDay: 1200,
        category: "Supercar",
        specs: {
          power: "502 HP",
          engine: "4.0L Flat-6",
          transmission: "7-Speed PDK",
          fuel: "Premium Gas"
        }
      },
      date: "2024-10-24",
      formattedDate: "Oct 24, 2024",
      amount: 1200,
      currency: "USD",
      status: "CONFIRMED"
    },
    {
      id: "booking_002",
      initials: "MK",
      name: "Marcus Koenig",
      memberSince: "2022",
      membershipType: "Corporate Partner",
      item: {
        name: "BMW M4 Competition",
        type: "Car",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=600&auto=format&fit=crop",
        pricePerDay: 850,
        category: "Coupe",
        specs: {
          power: "503 HP",
          engine: "3.0L Twin-Turbo I6",
          transmission: "8-Speed Auto",
          fuel: "Premium Gas"
        }
      },
      date: "2024-10-22",
      formattedDate: "Oct 22, 2024",
      amount: 850,
      currency: "USD",
      status: "available"
    },
    {
      id: "booking_003",
      initials: "AS",
      name: "Aria Sterling",
      memberSince: "2024",
      membershipType: "Elite Gold Member",
      item: {
        name: "Ferrari F8 Tributo",
        type: "Car",
        image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=600&auto=format&fit=crop",
        pricePerDay: 2400,
        category: "Supercar",
        specs: {
          power: "710 HP",
          engine: "3.9L Twin-Turbo V8",
          transmission: "7-Speed Dual-Clutch",
          fuel: "Premium Gas"
        }
      },
      date: "2024-10-21",
      formattedDate: "Oct 21, 2024",
      amount: 2400,
      currency: "USD",
      status: "MAINTENANCE"
    },
    {
      id: "booking_004",
      initials: "HL",
      name: "Helena Lawrence",
      memberSince: "2021",
      membershipType: "VIP Diamond Renter",
      item: {
        name: "Lamborghini Huracán",
        type: "Car",
        image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=600&auto=format&fit=crop",
        pricePerDay: 2200,
        category: "Supercar",
        specs: {
          power: "631 HP",
          engine: "5.2L V10",
          transmission: "7-Speed DCT",
          fuel: "Premium Gas"
        }
      },
      date: "2024-10-25",
      formattedDate: "Oct 25, 2024",
      amount: 4400,
      currency: "USD",
      status: "CONFIRMED"
    },
    {
      id: "booking_005",
      initials: "TW",
      name: "Tobias Wagner",
      memberSince: null,
      membershipType: "Standard Guest",
      item: {
        name: "Mercedes-AMG GT",
        type: "Car",
        image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=600&auto=format&fit=crop",
        pricePerDay: 950,
        category: "Sports Car",
        specs: {
          power: "523 HP",
          engine: "4.0L Twin-Turbo V8",
          transmission: "7-Speed DCT",
          fuel: "Premium Gas"
        }
      },
      date: "2024-10-20",
      formattedDate: "Oct 20, 2024",
      amount: 950,
      currency: "USD",
      status: "available"
    },
    {
      id: "booking_006",
      initials: "NC",
      name: "Nicolette Crain",
      memberSince: "2023",
      membershipType: "Corporate Partner",
      item: {
        name: "Tesla Model S Plaid",
        type: "Car",
        image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=600&auto=format&fit=crop",
        pricePerDay: 750,
        category: "Electric Sedan",
        specs: {
          power: "1020 HP",
          engine: "Tri-Motor Electric",
          transmission: "Single-Speed",
          fuel: "Electric"
        }
      },
      date: "2024-10-23",
      formattedDate: "Oct 23, 2024",
      amount: 1500,
      currency: "USD",
      status: "service"
    }
  ]);

  // Compute dynamic stats based on local state
  const stats = useMemo(() => {
    const total = vehicles.length;
    const available = vehicles.filter(v => v.status === "available").length;
    const rented = vehicles.filter(v => v.status === "CONFIRMED").length;
    const maintenance = vehicles.filter(v => v.status === "MAINTENANCE").length;
    const service = vehicles.filter(v => v.status === "service").length;
    
    return {
      total,
      available,
      rented,
      maintenanceAndService: maintenance + service,
      utilizationRate: total > 0 ? Math.round((rented / total) * 100) : 0
    };
  }, [vehicles]);

  // Handle status update for a specific vehicle
  const handleStatusChange = (id: string, newStatus: "CONFIRMED" | "available" | "MAINTENANCE" | "service") => {
    setVehicles(prevVehicles =>
      prevVehicles.map(vehicle => {
        if (vehicle.id === id) {
          // If moving to available, clear the renter details
          if (newStatus === "available") {
            return {
              ...vehicle,
              status: newStatus,
              name: "",
              initials: "",
              membershipType: "Standard Guest",
              memberSince: null,
              amount: 0
            };
          }
          // If moving to rented and had no renter, create mock renter
          if (newStatus === "CONFIRMED" && !vehicle.name) {
            return {
              ...vehicle,
              status: newStatus,
              name: "Walk-in Guest",
              initials: "WG",
              membershipType: "Standard Guest",
              memberSince: "2026",
              amount: vehicle.item.pricePerDay,
              formattedDate: "Today",
              date: new Date().toISOString().split('T')[0]
            };
          }
          return {
            ...vehicle,
            status: newStatus
          };
        }
        return vehicle;
      })
    );
  };

  // Find currently selected vehicle details
  const selectedVehicle = useMemo(() => {
    return vehicles.find(v => v.id === selectedVehicleId) || null;
  }, [vehicles, selectedVehicleId]);

  // Tab configurations with dynamic counters
  const tabs = [
    { label: "All Cars", value: "all", count: vehicles.length },
    { label: "Available", value: "available", count: vehicles.filter(v => v.status === "available").length },
    { label: "Rented Out", value: "CONFIRMED", count: vehicles.filter(v => v.status === "CONFIRMED").length },
    { label: "Maintenance", value: "MAINTENANCE", count: vehicles.filter(v => v.status === "MAINTENANCE").length },
    { label: "Service", value: "service", count: vehicles.filter(v => v.status === "service").length }
  ];

  // Filtering & Sorting Logic
  const processedVehicles = useMemo(() => {
    let result = vehicles.filter(vehicle => {
      const matchesTab = activeTab === "all" || vehicle.status === activeTab;
      const matchesSearch = vehicle.item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            vehicle.item.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });

    return result.sort((a, b) => {
      switch (sortBy) {
        case "name-asc":
          return a.item.name.localeCompare(b.item.name);
        case "name-desc":
          return b.item.name.localeCompare(a.item.name);
        case "price-asc":
          return a.item.pricePerDay - b.item.pricePerDay;
        case "price-desc":
          return b.item.pricePerDay - a.item.pricePerDay;
        default:
          return 0;
      }
    });
  }, [vehicles, activeTab, searchQuery, sortBy]);

  return (
    <div className="space-y-8 max-w-[1400px] mx-auto pb-12">
      {/* 1. Header Section */}
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-[#102a43] flex items-center gap-2.5">
            <ShieldCheck className="text-secondary w-8 h-8" />
            Fleet Status
          </h1>
          <p className="mt-1.5 text-sm text-gray-500 font-medium">
            Monitoring {vehicles.length} premium vehicles in real-time
          </p>
        </div>
        
        <Link 
          href="/agency/add" 
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-secondary text-white font-bold text-sm shadow-lg shadow-secondary/25 hover:bg-secondary/95 hover:shadow-secondary/35 active:scale-95 transition-all duration-300 self-start md:self-auto"
        >
          <Plus size={18} />
          Add New Vehicle
        </Link>
      </div>

      {/* 2. Operational Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Fleet */}
        <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex items-center gap-5 hover:shadow-[0_8px_30px_rgb(0,0,0,0.05)] transition-all duration-300">
          <div className="w-12 h-12 rounded-2xl bg-[#102a43]/5 flex items-center justify-center text-[#102a43]">
            <Car size={24} />
          </div>
          <div>
            <p className="text-[11px] font-black uppercase tracking-wider text-gray-400">Total Fleet</p>
            <h3 className="text-2xl font-black text-[#102a43]">{stats.total} Vehicles</h3>
          </div>
        </div>

        {/* Available Fleet */}
        <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex items-center gap-5 hover:shadow-[0_8px_30px_rgb(0,0,0,0.05)] transition-all duration-300">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/5 flex items-center justify-center text-emerald-600">
            <CheckCircle2 size={24} />
          </div>
          <div>
            <p className="text-[11px] font-black uppercase tracking-wider text-gray-400">Available Now</p>
            <h3 className="text-2xl font-black text-[#102a43]">{stats.available} Vehicles</h3>
          </div>
        </div>

        {/* Active Rentals */}
        <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.05)] transition-all duration-300 flex flex-col justify-between min-h-[105px]">
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 rounded-2xl bg-secondary/5 flex items-center justify-center text-secondary">
              <Activity size={24} />
            </div>
            <div>
              <p className="text-[11px] font-black uppercase tracking-wider text-gray-400">Active Rentals</p>
              <h3 className="text-2xl font-black text-[#102a43]">{stats.rented} Rented</h3>
            </div>
          </div>
          <div className="mt-3">
            <div className="flex items-center justify-between text-[10px] font-bold text-gray-500 mb-1">
              <span>Fleet Utilization</span>
              <span>{stats.utilizationRate}%</span>
            </div>
            <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-secondary transition-all duration-500" 
                style={{ width: `${stats.utilizationRate}%` }}
              />
            </div>
          </div>
        </div>

        {/* Maintenance / Service */}
        <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex items-center gap-5 hover:shadow-[0_8px_30px_rgb(0,0,0,0.05)] transition-all duration-300">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/5 flex items-center justify-center text-amber-600">
            <Wrench size={24} />
          </div>
          <div>
            <p className="text-[11px] font-black uppercase tracking-wider text-gray-400">In Workshop</p>
            <h3 className="text-2xl font-black text-[#102a43]">{stats.maintenanceAndService} Vehicles</h3>
          </div>
        </div>
      </div>

      {/* 3. Search, Sort, and Filtering Control Bar */}
      <div className="bg-white p-4 rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] space-y-4 md:space-y-0 md:flex md:items-center md:justify-between gap-4">
        {/* Tab Controls */}
        <div className="flex overflow-x-auto no-scrollbar py-1 gap-1.5 md:flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              className={cn(
                'py-2.5 px-4 rounded-xl text-xs font-bold transition-all duration-300 whitespace-nowrap flex items-center gap-2 cursor-pointer',
                activeTab === tab.value
                  ? 'bg-[#102a43] text-white shadow-lg shadow-[#102a43]/15'
                  : 'bg-gray-50 text-gray-500 hover:text-[#102a43] hover:bg-gray-100'
              )}
              onClick={() => setActiveTab(tab.value)}
            >
              {tab.label}
              <span className={cn(
                'text-[10px] px-1.5 py-0.5 rounded-md font-extrabold',
                activeTab === tab.value
                  ? 'bg-white/20 text-white'
                  : 'bg-gray-200/60 text-gray-600'
              )}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Search and Sort controls */}
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
          {/* Search Field */}
          <div className="relative flex-1 sm:w-64">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search fleet..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-100 bg-gray-50 text-xs font-semibold text-[#102a43] placeholder-gray-400 focus:outline-none focus:border-secondary/40 focus:bg-white focus:ring-2 focus:ring-secondary/5 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 rounded-full"
              >
                <X size={12} />
              </button>
            )}
          </div>

          {/* Sort Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
              className="flex items-center justify-between gap-2.5 px-4 py-2.5 w-full sm:w-auto rounded-xl border border-gray-100 bg-gray-50 text-xs font-bold text-gray-600 hover:text-[#102a43] hover:bg-gray-100 transition-all cursor-pointer"
            >
              <SlidersHorizontal size={14} />
              <span>
                {sortBy === "name-asc" && "Name (A-Z)"}
                {sortBy === "name-desc" && "Name (Z-A)"}
                {sortBy === "price-asc" && "Rate (Low-High)"}
                {sortBy === "price-desc" && "Rate (High-Low)"}
              </span>
              <ChevronDown size={14} className={cn("transition-transform duration-300", isSortDropdownOpen && "rotate-180")} />
            </button>
            
            {isSortDropdownOpen && (
              <>
                <div 
                  className="fixed inset-0 z-10" 
                  onClick={() => setIsSortDropdownOpen(false)} 
                />
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-xl z-20 overflow-hidden py-1.5 animate-in fade-in slide-in-from-top-1 duration-200">
                  {[
                    { value: "name-asc", label: "Name (A-Z)" },
                    { value: "name-desc", label: "Name (Z-A)" },
                    { value: "price-asc", label: "Rate (Low-High)" },
                    { value: "price-desc", label: "Rate (High-Low)" }
                  ].map((option) => (
                    <button
                      key={option.value}
                      className={cn(
                        "w-full text-left px-4 py-2 text-xs font-bold transition-all cursor-pointer",
                        sortBy === option.value
                          ? "bg-[#102a43]/5 text-[#102a43]"
                          : "text-gray-500 hover:bg-gray-50 hover:text-[#102a43]"
                      )}
                      onClick={() => {
                        setSortBy(option.value);
                        setIsSortDropdownOpen(false);
                      }}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* 4. Vehicles Grid Layout */}
      {processedVehicles.length === 0 ? (
        <div className="bg-white rounded-[2rem] border border-gray-100 p-16 text-center shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
          <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mx-auto mb-4 text-gray-400">
            <Car size={32} />
          </div>
          <h3 className="text-lg font-black text-[#102a43]">No Vehicles Found</h3>
          <p className="text-gray-400 text-xs mt-1.5 max-w-sm mx-auto">
            Try adjusting your search query or choosing a different status filter above.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processedVehicles.map((vehicle) => (
            <div 
              key={vehicle.id} 
              className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col group"
            >
              {/* Media Section */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-50">
                {/* Floating Status Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className={cn(
                    "inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-black tracking-wider uppercase backdrop-blur-md shadow-sm border",
                    vehicle.status === "available" && "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
                    vehicle.status === "CONFIRMED" && "bg-blue-500/10 text-blue-600 border-blue-500/20",
                    vehicle.status === "MAINTENANCE" && "bg-amber-500/10 text-amber-600 border-amber-500/20",
                    vehicle.status === "service" && "bg-purple-500/10 text-purple-600 border-purple-500/20"
                  )}>
                    <span className={cn(
                      "w-1.5 h-1.5 rounded-full",
                      vehicle.status === "available" && "bg-emerald-500 animate-pulse",
                      vehicle.status === "CONFIRMED" && "bg-blue-500 animate-pulse",
                      vehicle.status === "MAINTENANCE" && "bg-amber-500",
                      vehicle.status === "service" && "bg-purple-500"
                    )} />
                    {vehicle.status === "available" && "Available"}
                    {vehicle.status === "CONFIRMED" && "Rented Out"}
                    {vehicle.status === "MAINTENANCE" && "Maintenance"}
                    {vehicle.status === "service" && "In Service"}
                  </span>
                </div>

                {/* Main Vehicle Image */}
                <img 
                  src={vehicle.item.image} 
                  alt={vehicle.item.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                
                {/* Image Gradient Cover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Information Section */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-secondary bg-secondary/5 px-2.5 py-1 rounded-md">
                      {vehicle.item.category}
                    </span>
                    <div className="flex items-baseline text-[#102a43]">
                      <span className="text-lg font-black">${vehicle.item.pricePerDay}</span>
                      <span className="text-[10px] font-semibold text-gray-400">/day</span>
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold text-[#102a43] tracking-tight mb-4 group-hover:text-secondary transition-colors duration-300">
                    {vehicle.item.name}
                  </h2>

                  <div className="h-px bg-gray-100 mb-4" />

                  {/* Card Body - Conditional Content based on status */}
                  {vehicle.status === "CONFIRMED" && (
                    <div className="space-y-4">
                      {/* Customer Renter Info */}
                      <div className="flex items-center gap-3 bg-gray-50/70 p-3 rounded-2xl border border-gray-100/50">
                        <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center font-black text-xs text-blue-600">
                          {vehicle.initials}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-black text-[#102a43] truncate">{vehicle.name}</p>
                          <p className="text-[10px] font-medium text-gray-400 truncate">{vehicle.membershipType}</p>
                        </div>
                      </div>
                      
                      {/* Dates and Rental Progress Bar */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-[10px] font-bold text-gray-500">
                          <span className="flex items-center gap-1"><Calendar size={12} /> Return Date</span>
                          <span>{vehicle.formattedDate}</span>
                        </div>
                        {/* Static Trip Progress Representation */}
                        <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div className="w-[65%] h-full bg-blue-500 rounded-full" />
                        </div>
                      </div>
                    </div>
                  )}

                  {vehicle.status === "available" && (
                    <div className="py-2.5 flex flex-col items-center justify-center border border-dashed border-emerald-500/20 bg-emerald-500/[0.02] rounded-2xl">
                      <CheckCircle2 size={24} className="text-emerald-500 mb-1.5" />
                      <span className="text-xs font-black text-emerald-600">Ready for Rent</span>
                      <span className="text-[10px] text-gray-400 font-medium mt-0.5">No active issues. Ready to dispatch.</span>
                    </div>
                  )}

                  {vehicle.status === "MAINTENANCE" && (
                    <div className="py-2.5 flex flex-col items-center justify-center border border-dashed border-amber-500/20 bg-amber-500/[0.02] rounded-2xl">
                      <Wrench size={24} className="text-amber-500 mb-1.5" />
                      <span className="text-xs font-black text-amber-600">Under Diagnostic Check</span>
                      <span className="text-[10px] text-gray-400 font-medium mt-0.5">Estimated completion: Tomorrow</span>
                    </div>
                  )}

                  {vehicle.status === "service" && (
                    <div className="py-2.5 flex flex-col items-center justify-center border border-dashed border-purple-500/20 bg-purple-500/[0.02] rounded-2xl">
                      <Clock size={24} className="text-purple-500 mb-1.5" />
                      <span className="text-xs font-black text-purple-600">Routine Maintenance</span>
                      <span className="text-[10px] text-gray-400 font-medium mt-0.5">Oil & safety inspection filters</span>
                    </div>
                  )}
                </div>

                {/* Manage Action Button */}
                <button 
                  onClick={() => setSelectedVehicleId(vehicle.id)}
                  className="mt-6 w-full py-3 px-4 rounded-2xl bg-gray-50 border border-gray-100 text-xs font-extrabold text-[#102a43] hover:bg-secondary hover:text-white hover:border-secondary hover:shadow-lg hover:shadow-secondary/20 active:scale-98 transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  Manage Status
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 5. Detailed Vehicle & Status Change Modal */}
      {selectedVehicle && (
        <div className="fixed inset-0 bg-[#102a43]/40 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop Closer */}
          <div className="fixed inset-0" onClick={() => setSelectedVehicleId(null)} />

          {/* Modal Container */}
          <div className="relative bg-white w-full max-w-4xl rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden flex flex-col md:flex-row z-10 animate-in fade-in zoom-in-95 duration-300">
            {/* Modal Exit Button */}
            <button 
              className="absolute right-6 top-6 z-20 bg-white/90 backdrop-blur shadow-md hover:shadow-lg hover:bg-white text-gray-500 hover:text-red-500 p-2.5 rounded-full transition-all active:scale-90 cursor-pointer"
              onClick={() => setSelectedVehicleId(null)}
            >
              <X size={18} />
            </button>

            {/* Left Side: Photo & Specs Grid */}
            <div className="md:w-[45%] bg-gray-50 relative flex flex-col">
              {/* Cover Image */}
              <div className="relative aspect-[4/3] md:h-64 overflow-hidden">
                <img 
                  src={selectedVehicle.item.image} 
                  alt={selectedVehicle.item.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent" />
                
                {/* Details Category Float */}
                <div className="absolute bottom-4 left-6">
                  <span className="px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-white/20 backdrop-blur-md text-white">
                    {selectedVehicle.item.category}
                  </span>
                  <h3 className="text-lg font-black text-white mt-1">{selectedVehicle.item.name}</h3>
                </div>
              </div>

              {/* Specifications Tag Grid */}
              <div className="p-6 flex-1 flex flex-col justify-center">
                <h4 className="text-[10px] font-black uppercase tracking-wider text-gray-400 mb-3.5">Vehicle Specifications</h4>
                <div className="grid grid-cols-2 gap-3.5">
                  <div className="bg-white p-3 rounded-2xl border border-gray-100 flex items-center gap-2.5">
                    <Gauge size={16} className="text-secondary" />
                    <div>
                      <p className="text-[9px] font-bold text-gray-400 uppercase">Power</p>
                      <p className="text-xs font-black text-[#102a43]">{selectedVehicle.item.specs.power}</p>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-2xl border border-gray-100 flex items-center gap-2.5">
                    <Cpu size={16} className="text-secondary" />
                    <div>
                      <p className="text-[9px] font-bold text-gray-400 uppercase">Engine</p>
                      <p className="text-xs font-black text-[#102a43] truncate max-w-[80px]">{selectedVehicle.item.specs.engine}</p>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-2xl border border-gray-100 flex items-center gap-2.5">
                    <Clock size={16} className="text-secondary" />
                    <div>
                      <p className="text-[9px] font-bold text-gray-400 uppercase">Gearbox</p>
                      <p className="text-xs font-black text-[#102a43]">{selectedVehicle.item.specs.transmission}</p>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-2xl border border-gray-100 flex items-center gap-2.5">
                    <Fuel size={16} className="text-secondary" />
                    <div>
                      <p className="text-[9px] font-bold text-gray-400 uppercase">Fuel Type</p>
                      <p className="text-xs font-black text-[#102a43]">{selectedVehicle.item.specs.fuel}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Operational Status Management */}
            <div className="flex-1 p-8 md:p-10 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-black text-[#102a43] tracking-tight">{selectedVehicle.item.name}</h2>
                  <p className="text-xs font-medium text-gray-400 mt-1">Vehicle Reference ID: <span className="font-bold text-gray-600">{selectedVehicle.id}</span></p>
                </div>

                <div className="h-px bg-gray-100" />

                {/* Status Toggle Interface */}
                <div className="space-y-2">
                  <label className="text-[11px] font-black text-gray-400 uppercase tracking-wider block">Change Operational Status</label>
                  <div className="relative">
                    <select
                      value={selectedVehicle.status}
                      onChange={(e) => handleStatusChange(selectedVehicle.id, e.target.value as any)}
                      className="w-full pl-4 pr-10 py-3.5 rounded-2xl border border-gray-200 bg-gray-50 text-xs font-extrabold text-[#102a43] focus:outline-none focus:border-secondary/40 focus:bg-white focus:ring-4 focus:ring-secondary/5 transition-all appearance-none cursor-pointer"
                    >
                      <option value="available">🟢 Available (Ready to Dispatch)</option>
                      <option value="CONFIRMED">🔵 Rented Out (Active Booking)</option>
                      <option value="MAINTENANCE">🟠 Maintenance (Workshop Repair)</option>
                      <option value="service">🟣 Routine Service (Maintenance Checklist)</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Details Section based on current Status */}
                <div className="mt-6">
                  {selectedVehicle.status === "CONFIRMED" && (
                    <div className="space-y-4">
                      <h4 className="text-[11px] font-black text-gray-400 uppercase tracking-wider">Renter Logistics Info</h4>
                      
                      <div className="p-5 rounded-[1.5rem] bg-blue-500/[0.02] border border-blue-500/10 space-y-4">
                        {/* Client details card */}
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center font-black text-sm text-blue-600">
                            {selectedVehicle.initials}
                          </div>
                          <div>
                            <p className="text-xs font-black text-[#102a43]">{selectedVehicle.name}</p>
                            <p className="text-[10px] font-semibold text-gray-400">{selectedVehicle.membershipType} {selectedVehicle.memberSince ? `• Joined ${selectedVehicle.memberSince}` : ""}</p>
                          </div>
                        </div>

                        <div className="h-px bg-blue-500/10" />

                        {/* Booking cost and times */}
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-[9px] font-bold text-gray-400 uppercase">Rental Period Start</p>
                            <p className="text-xs font-black text-[#102a43] flex items-center gap-1.5 mt-0.5">
                              <Calendar size={12} className="text-blue-500" />
                              {selectedVehicle.formattedDate}
                            </p>
                          </div>

                          <div>
                            <p className="text-[9px] font-bold text-gray-400 uppercase">Earnings Logged</p>
                            <p className="text-xs font-black text-emerald-600 flex items-center mt-0.5">
                              <DollarSign size={13} className="mr-0.5" />
                              {selectedVehicle.amount} USD
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedVehicle.status === "available" && (
                    <div className="space-y-4">
                      <h4 className="text-[11px] font-black text-gray-400 uppercase tracking-wider">Rental Diagnostics</h4>
                      
                      <div className="p-5 rounded-[1.5rem] bg-emerald-500/[0.02] border border-emerald-500/10 space-y-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 size={20} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-xs font-black text-[#102a43]">Ready for immediate reservation</p>
                            <p className="text-[10px] text-gray-400 font-medium mt-0.5 leading-relaxed">
                              This vehicle has undergone detail cleaning, safety testing, fluid top-offs, and tire-pressure calibration. Standard rate is locked.
                            </p>
                          </div>
                        </div>
                        
                        <div className="h-px bg-emerald-500/10" />
                        
                        <div className="flex justify-between items-center text-xs font-bold text-gray-500">
                          <span>Recommended rate:</span>
                          <span className="text-[#102a43] font-black">${selectedVehicle.item.pricePerDay} / day</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedVehicle.status === "MAINTENANCE" && (
                    <div className="space-y-4">
                      <h4 className="text-[11px] font-black text-gray-400 uppercase tracking-wider">Maintenance Log Ticket</h4>
                      
                      <div className="p-5 rounded-[1.5rem] bg-amber-500/[0.02] border border-amber-500/10 space-y-4">
                        <div className="flex items-start gap-3">
                          <AlertTriangle size={20} className="text-amber-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-xs font-black text-[#102a43]">Diagnostic Hold Active</p>
                            <p className="text-[10px] text-gray-400 font-medium mt-0.5 leading-relaxed">
                              Currently flagged under routine safety diagnostics. Preventative check on suspension systems, brake pads, and electronic calibrations is underway.
                            </p>
                          </div>
                        </div>

                        <div className="h-px bg-amber-500/10" />

                        <div className="flex items-center justify-between text-xs font-bold text-gray-500">
                          <span>Technician Assigned:</span>
                          <span className="text-amber-600 font-black">Alex Rivera (Master Tech)</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedVehicle.status === "service" && (
                    <div className="space-y-4">
                      <h4 className="text-[11px] font-black text-gray-400 uppercase tracking-wider">Scheduled Service Checklist</h4>
                      
                      <div className="p-5 rounded-[1.5rem] bg-purple-500/[0.02] border border-purple-500/10 space-y-4">
                        <div className="flex items-start gap-3">
                          <Wrench size={20} className="text-purple-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-xs font-black text-[#102a43]">Standard Mileage Service</p>
                            <p className="text-[10px] text-gray-400 font-medium mt-0.5 leading-relaxed">
                              Routine engine tuning, filters replacements, oil lubrication, spark plug verification, and software update. Done every 5,000 miles.
                            </p>
                          </div>
                        </div>

                        <div className="h-px bg-purple-500/10" />

                        <div className="flex items-center justify-between text-xs font-bold text-gray-500">
                          <span>Est. Return to Fleet:</span>
                          <span className="text-purple-600 font-black">Today, 5:00 PM</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3.5 mt-8">
                <button 
                  onClick={() => setSelectedVehicleId(null)}
                  className="flex-1 py-3.5 rounded-2xl bg-gray-50 hover:bg-gray-100 border border-gray-100 text-xs font-extrabold text-[#102a43] transition-all cursor-pointer text-center active:scale-95"
                >
                  Close Manager
                </button>
                {selectedVehicle.status === "CONFIRMED" ? (
                  <a 
                    href={`mailto:client@example.com?subject=RentMyCar Booking Status: ${selectedVehicle.item.name}`}
                    className="flex-1 py-3.5 rounded-2xl bg-secondary text-white text-xs font-extrabold text-center hover:bg-secondary/95 hover:shadow-lg hover:shadow-secondary/20 transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-1.5"
                  >
                    <User size={14} />
                    Contact Client
                  </a>
                ) : (
                  <button 
                    onClick={() => {
                      // Trigger dynamic state change back to available
                      handleStatusChange(selectedVehicle.id, "available");
                      setSelectedVehicleId(null);
                    }}
                    className="flex-1 py-3.5 rounded-2xl bg-emerald-600 text-white text-xs font-extrabold text-center hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/20 transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-1.5"
                  >
                    <CheckCircle2 size={14} />
                    Mark Available
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
