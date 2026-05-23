'use client'
import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import {Gem, Info,Gauge,Car,Fuel,Zap,Camera,Upload} from 'lucide-react';

export default function AdminAddCar() {
  interface timeline{
    id:number,
    title:string
  }
  const timeline : timeline[] = [{
    "id":1,
    "title":"Specs"
  },{
    "id":2,
    "title":"Media"
  },{
    "id":3,
    "title":"Review"
  }]
  const fleetCategoryData = [{
    "title":"Luxury",
    "icon":<Gem/>,
  },{
    "title":"Sport",
    "icon":<Gauge/>,
  },{
    "title":"SUV",
    "icon":<Car/>,
  }]
  const [fleetCategory, setFleetCategory] = useState<string>('Luxury')
  const [fuelCategory, setFuelCategory] = useState<string>('Gasoline')
  return (
    <>
    <section>
      <h1 className="text-3xl font-bold text-primary">Add New Car</h1>
      <div className=' grid md:grid-cols-2 gap-4'>
      <p className="mt-4 text-gray-600">Expand Your Fleet with high-performance automotive assets.</p>
      <div className=' bg-gray-200 rounded-full inline-flex justify-between items-center w-full max-w-md mx-auto'>
        {
          timeline.map((items)=>
          <div key={items.id} className=' p-2 flex items-center gap-3'>
            <span className={cn(' px-3 py-1 rounded-full bg-gray-100')}>{items.id}</span>
            <span>{items.title}</span>
          </div>
          )
        }
      </div>
      </div>
    </section>
    <section className=' grid grid-cols-1 lg:grid-cols-3 mt-10 gap-4'>
      <div className=' lg:col-span-2 '>
        <div className=' grid grid-cols-1 md:grid-cols-2 gap-7 bg-white rounded-2xl p-8'>
          <h1 className=' flex gap-2 items-center col-span-2'><Info className=' text-secondary'/> <span className=' text-xl md:text-base font-semibold text-primary'>Vehicle Core Details</span></h1>
          <div className=' flex flex-col col-span-2 md:col-span-1'>
            <label htmlFor="name" className=' uppercase text-xs mb-2 font-semibold'>Car Model Name</label>
            <input type="text" placeholder='e.g. BMW M5' className=' p-3 bg-gray-100 rounded-xl' id="name"/>
          </div>
          <div className=' flex flex-col col-span-2 md:col-span-1'>
            <label htmlFor="rate" className=' uppercase text-xs mb-2 font-semibold'>Daily Rental Rate</label>
            <input type="number" placeholder='500' min={0} className=' p-3 bg-gray-100 rounded-xl' id="rate"/>
          </div>
          <div className=' col-span-2'>
            <h3 className=' uppercase text-sm font-semibold mb-3'>Fleet Category</h3>
            <div className=' grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8'>
              {
                fleetCategoryData.map((items,index)=><button key={index} className={cn(' rounded-2xl p-6 border-2 border-gray-300 hover:border-secondary hover:text-secondary cursor-pointer flex flex-col items-center gap-3 font-semibold', fleetCategory == items.title && 'border-secondary text-secondary')} onClick={()=>setFleetCategory(items.title)}>
                  {items.icon}
                  {items.title}</button>)
              }
              
            </div>
          </div>
        </div>
        <div className=' grid grid-cols-2 bg-white p-8 rounded-2xl mt-10 gap-7'>
          <h1 className=' flex gap-2 items-center col-span-2'><Gauge className=' text-secondary'/> <span className=' text-xl md:text-base font-semibold text-primary'>Performance & Technical Specs</span></h1>
          <div className=' flex flex-col col-span-2 md:col-span-1'>
            <label htmlFor="" className=' uppercase text-xs mb-2 font-semibold'>Transmission System</label>
            <select name="" id="" className=' p-3 bg-gray-100 rounded-xl'>
              <option value="">Automatic</option>
              <option value="">Manual</option>
            </select>
          </div>
          <div className=' flex flex-col col-span-2 md:col-span-1'>
            <label htmlFor="year" className=' uppercase text-xs mb-2 font-semibold'>Year of Manufacturing</label>
            <input type="text" placeholder='e.g. 2000' id='year' className=' p-3 bg-gray-100 rounded-xl'/>
          </div>
          <h3 className=' font-semibold text-primary text-sm col-span-2'>Fuel & PowerTrain</h3>
          <button className={cn(' border-2 border-gray-300 p-4 rounded-xl font-semibold cursor-pointer flex items-center justify-center gap-2', fuelCategory=="Gasoline" && 'border-secondary text-secondary')} onClick={()=>setFuelCategory("Gasoline")}><Fuel/>Gasoline</button>
          <button className={cn(' border-2 border-gray-300 p-4 rounded-xl font-semibold cursor-pointer flex items-center justify-center gap-2', fuelCategory=="Electric" && 'border-secondary text-secondary')} onClick={()=>setFuelCategory("Electric")}><Zap/>Electric</button>
        </div>
        <div className=' bg-white rounded-2xl p-8 mt-10 grid grid-cols-4 gap-3'>
          <h1 className=' flex gap-2 items-center col-span-2 md:col-span-3'><Camera className=' text-secondary'/> <span className=' text-sm lg:text-xl md:text-base font-semibold text-primary '>High-Quality Showcase</span></h1>
          <h3 className=' rounded-full bg-gray-100 p-2 font-semibold text-xs text-center text-gray-500 col-span-2 md:col-span-1'>Minimum 5 Images</h3>
          <label htmlFor="image" className=' px-8 py-4 flex flex-col bg-gray-100 rounded-2xl justify-center items-center cursor-pointer gap-3 font-semibold border-2 border-dashed border-gray-300 col-span-4 md:col-span-2 mt-5'>
            <button className=' bg-white p-4 rounded-full text-secondary'>
            <Upload/>
            </button>
            <h3 className=' text-xs text-primary'>Main Hero Image</h3>
          </label>
          <input type="file" id='image' className=' hidden' />
        </div>
      </div>
      <div className=' lg:sticky lg:top-10 lg:flex flex-col gap-7 lg:self-start '>
        <div className='hidden lg:block  rounded-2xl px-8 py-10 bg-linear-to-br from-[#102a43] via-[#1a3a5a] to-[#244a71]'>
          <button className=' px-3 py-1 rounded-full text-sm text-white bg-white/20'>Live Preview</button>
          <h1 className=' text-3xl font-bold text-white mt-5'>Fleet Entry Pending....</h1>
          <p className=' text-gray-400 mt-3'>Enter specification to preview your car live</p>
          <img src="https://www.topgear.com/sites/default/files/2024/12/1-BMW-M5-review-2025-UK.jpg?w=1784&h=1004" alt="" className=' rounded-2xl mt-6'/>
        </div>
        <div className=' bg-gray-200/40 p-8 rounded-2xl flex gap-4 flex-col'>
          <button className=' text-white bg-secondary font-semibold text-lg py-3 rounded-full w-full cursor-pointer'>Save & Continue</button>
          <button className=' text-gray-500 bg-white font-semibold text-lg py-3 rounded-full w-full cursor-pointer'>Save as Draft</button>
          <p className=' text-xs text-gray-500'>By adding this car, you agree to the fleet management terms and insurance compliance guidelines.</p>
        </div>
      </div>
    </section>
    </>
  );
}
