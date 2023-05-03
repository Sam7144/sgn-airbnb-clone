"use client"
import React, { useState } from 'react'
import Image from "next/image";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

import {Bars3Icon, GlobeAltIcon, MagnifyingGlassIcon, UsersIcon,UserCircleIcon} from "@heroicons/react/24/solid"
import { useRouter } from 'next/navigation';
function Header() {
  const[searchInput,setSearchInput]=useState("")
  const [startDate,setStartDate]=useState(new Date());
  const [endDate,setEndDate]=useState(new Date());
  const[noOfGuests,setNoOfGuests]=useState(1)
  const handleSelect=(ranges)=>{
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }
  const router=useRouter()
  const resetFunction=()=>{
    setSearchInput("")
  }
  const selectionRange={
    startDate:startDate,
    endDate:endDate,
    key:'selection'
  }
  const searchFunction=()=>{
    const data=searchInput;
    setSearchInput("")
    router.push({
      pathname:'search',
      query:{
        location:data,
        startDate:startDate.toISOString(),
        endDate:startDate.toISOString(),
        noOfGuests,
      }
    })
  }
  return (
  
    <div className='wrapper fixed right-0 left-0  top-0 z-50 grid grid-cols-3 bg-white shadow-md items-center py-5 px-5 md:px-10'>
        <div className='flex items-center h-10 relative my-auto cursor-pointer'>
            <Image src='/images/logo.png' onClick={()=>router.push('/')} width='100' height='100' alt=''/>
        </div>
        <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
          <input type='text' value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} className='p-4 bg-transparent outline-none flex-grow text-sm' placeholder='Start Your Search'/>
          <MagnifyingGlassIcon className='hidden lg:inline-flex md:mx-2 h-8 rounded-full p-[3px] bg-red-400 text-white hover:cursor-pointer '/>
        </div>
        <div className='flex items-center justify-end space-x-4'>
          <p className='hidden lg:inline-flex cursor-pointer'>become a host</p>
          <GlobeAltIcon className='hidden sm:inline-flex h-6 cursor-pointer'/>
          <div className='flex items-center p-2 space-x-2 rounded-full cursor-pointer'>
            <UserCircleIcon className='hidden sm:inline-flex h-6 '/>
            <Bars3Icon className='h-6'/>
        </div>
        </div>
    
    {
      searchInput&&(
        <div className='flex flex-col col-span-3 mx-auto'>
          <DateRangePicker ranges={[selectionRange]}
          minDate={new Date()}
          rangeColors={["#FD5B61"]}
          onChange={handleSelect}
          />
          <div className='flex items-center border-b mb-4'>
            <h2 className='text-2xl flex-grow font-semibold'>Number Of Guests</h2>
            <UsersIcon className='h-5'/>
            <input type="number" min={1} value={noOfGuests} onChange={(e)=>setNoOfGuests(e.target.value)} className='pl-2 outline-none text-red-400 w-12 text-lg'/>
          </div>  
          <div className='flex'>
            <button className='flex-grow text-gray-500' onClick={resetFunction}>cancel</button>
            <button className='flex-grow text-red-400' onClick={searchFunction}>search</button>
            </div>
        </div>
      )
    }
    </div>
  )
}

export default Header