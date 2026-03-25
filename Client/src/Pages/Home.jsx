import React, { useEffect, useState } from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { GoShieldCheck } from "react-icons/go";
import { MdElectricCar } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { IoPerson } from "react-icons/io5";

const Home = () => {
    const date = new Date()
    const todaydate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2,'0')}-${String(date.getDay()).padStart(2,'0')}`;
    const [today, setToday] = useState(todaydate)
    const assets = [
        {
            id:1,
            'name':'Porsche 911 Carrera',
            'sub_name':'Ultimate Sport Experience',
            'engine_type':'Auto',
            'power_hp':'379 HP',
            'seats':'4 Seats',
            'image':'/public/Images/homeimage1.jpg'
        },{
            id:1,
            'name':'Porsche 911 Carrera',
            'sub_name':'Ultimate Sport Experience',
            'engine_type':'Auto',
            'power_hp':'379 HP',
            'seats':'4 Seats',
            'image':'/public/Images/homeimage1.jpg'
        },{
            id:1,
            'name':'Porsche 911 Carrera',
            'sub_name':'Ultimate Sport Experience',
            'engine_type':'Auto',
            'power_hp':'379 HP',
            'seats':'4 Seats',
            'image':'/public/Images/homeimage1.jpg'
        },{
            id:1,
            'name':'Porsche 911 Carrera',
            'sub_name':'Ultimate Sport Experience',
            'engine_type':'Auto',
            'power_hp':'379 HP',
            'seats':'4 Seats',
            'image':'/public/Images/homeimage1.jpg'
        },{
            id:1,
            'name':'Porsche 911 Carrera',
            'sub_name':'Ultimate Sport Experience',
            'engine_type':'Auto',
            'power_hp':'379 HP',
            'seats':'4 Seats',
            'image':'/public/Images/homeimage1.jpg'
        },]
  return (
    <div>
        {/* Hero Section */}
        <section className=' md:pl-22 pl-10 flex justify-between pt-30 md:pt-50 gap-10'>
            <div className=' flex flex-col gap-5 max-w-full'>
                <h1 className=' text-3xl md:text-7xl font-bold'>Explore the World, <span className=' text-secondary'>One Mile</span> at a Time</h1>
                <h3 className=' text-gray-500 text-base'>Experience the pinhole of automative luxury with our curated fleet. From coastlines to cityscapes, drive with the confidence of a concierge-backend journey</h3>
                <div className=' bg-white rounded-full px-2 py-2 flex justify-between max-sm:max-w-full'>
                    <div className=' flex items-center rounded-full'>
                    <label htmlFor="" for='location' className=' absolute'><IoLocationOutline size={20}/></label>
                    <input type="text" className=' md:py-2 md:px-6 px-5 border-none active:border-none rounded-full max-sm:w-20' placeholder=' Enter to' id='location' />
                    </div>
                    <div className=' my-auto'>
                    <input type="date" className=' py-2 px-2 rounded-full max-sm:w-10' value={today} onChange={(e)=>setToday(e.target.value)}/>
                    </div>
                    <div className=' my-auto'>
                    <select name="" id="" className=' py-2 px-8 mr-auto rounded-full max-sm:w-20 text-sm'>
                        <option value="sedan">Sedan</option>
                        <option value="suv" selected>Suv</option>
                    </select>
                    </div>
                    <div className=''>
                    <button className=' bg-secondary text-white px-4 py-4 rounded-full cursor-pointer'>Search</button>
                    </div>
                </div>
            </div>
                <img src="/public/Images/homeimage1.jpg" alt="" className=' w-1/2 rounded-2xl rotate-6 md:block hidden' />
        </section>
        {/* Features Section */}
        <section className=' md:px-22 px-10 py-10 mt-20 md:mt-45  '>
            <div>
                <h1 className=' text-3xl font-semibold text-primary'>Redefining Mobility</h1>
                <div className=' mt-5 max-w-full flex items-center justify-between'>
                    <span className=' text-sm text-gray-500 '>Our Community to quality extends beyond the vehicle. It's about the seamless motion of yout life</span>
                    <span className=' text-secondary text-base flex items-center gap-2'>Explore Our Philosophy <FaArrowRight size={20}/></span>
                </div>
            </div>
            <div className='mt-7 flex max-sm:flex-col gap-5 flex-wrap'>
                <div className=' max-w-3xl bg-white rounded-2xl flex overflow-hidden justify-between gap-4 hover:shadow-lg transition-shadow duration-300 ease-in-out'>
                    <div className=' px-10 py-7 '>
                        <div className=' mb-3'>
                            <GoShieldCheck color='white' size={60} className=' bg-primary rounded-xl p-2'/>
                        </div>
                        <h1 className=' text-xl md:text-2xl font-semibold text-primary mb-5'>Concierge Level Quality</h1>
                        <h3 className=' text-base text-gray-500'>Every vehicle undergoes a 200-point inspection before it reaches your driveway.</h3>
                    </div>
                    <div>
                        <img src="/public/Images/Engine.jpg" alt="" className=' opacity-60' />
                    </div>
                </div>
                <div className=' bg-secondary p-8 rounded-2xl flex flex-col hover:shadow-lg transition-shadow duration-300 ease-in-out max-w-md'>
                    <div className=' mb-auto'>
                        <MdElectricCar color='white' size={40}/>
                    </div>
                    <h1 className=' text-2xl text-white font-semibold mb-5'>Eco-Luxury Performance</h1>
                    <h3 className=' text-[#ffffffc9] text-sm'>Experience the future with our premium electric fleet, combining power and sustainability.</h3>
                </div>
                <div className=' bg-gray-200 px-4 py-5 rounded-2xl '>
                    <h1 className=' text-2xl text-primary font-semibold mb-5'>Instant Booking</h1>
                    <h3 className=' text-sm'>No paperwork, no waiting. Unlock your car via our app in seconds.</h3>
                    <div>

                    </div>
                </div>
                <div className=' max-w-3xl bg-primary rounded-2xl px-4 py-3 flex gap-5'>
                    <div className=' my-auto'>
                        <h1 className=' text-2xl text-white font-semibold mb-5'>24/7 Roadside Concierge</h1>
                        <h3 className=' text-sm text-gray-400 mb-5'>Never walk alone. Our elite support team is one tap away, anywhere in the world.</h3>
                        <div className=' text-white text-sm'>
                            <button className=' px-3 py-1 rounded-full bg-gray-700 cursor-pointer'>Global Support</button>
                            <button className=' px-3 py-1 rounded-full bg-gray-700 cursor-pointer ml-3'>Rapid Response</button>
                        </div>
                    </div>
                    <div>
                        <img src="/public/Images/Repair.webp" alt="" className=' max-w-sm'/>
                    </div>
                </div>
            </div>
        </section>

        {/* Fleet Section */}
        <section className=' p-10 md:p-22 '>
            <h3 className=' text-center text-secondary mb-5'>The Fleet</h3>
            <h1 className=' text-3xl text-primary font-semibold text-center'>Featured Motion Curations</h1>
            <div className=' md:flex max-sm:flex-col mt-10 md:justify-center md:gap-7 gap-10 items-center'>
                {assets.slice(0,3).map((asset)=>(
                    <div key={asset.id} className=' bg-white  rounded-2xl overflow-hidden group hover:shadow-lg transition-shadow duration-300 ease-in-out '>
                        <img src={asset.image} alt="" className=' w-80 group-hover:scale-110 transition-all duration-300 ease-in-out'/>
                        <div className=' p-4 py-6'>
                        <h1 className=' text-xl text-primary font-semibold mb-2'>{asset.name}</h1>
                        <h3 className=' text-gray-500 text-sm mb-4'>{asset.sub_name}</h3>
                        <div className=' text-gray-500 text-sm flex gap-4'>
                            <span className=' flex items-center gap-1'><IoMdSettings className=' text-secondary'/>{asset.engine_type}</span>
                            <span className=' flex items-center gap-1'><AiTwotoneThunderbolt className=' text-secondary'/>{asset.power_hp}</span>
                            <span className=' flex items-center gap-1'><IoPerson className=' text-secondary'/>{asset.seats}</span>
                        </div>
                        <div className=' flex flex-col mt-5'>
                            <button className=' group-hover:bg-secondary bg-gray-400 py-2 rounded-full max-w-full text-white cursor-pointer'>Book Now</button>
                        </div>
                        </div>
                    </div>
                ))}

            </div>
        </section>
        <section>

        </section>
    </div>
  )
}

export default Home