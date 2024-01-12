import React, { useState } from "react";
import Slider from "../Components/Slider";
import PieChart from './Piechart';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Rightbar = () => {
  return (
    <>
      {/* For larger screens (hidden on small screens) */}
      <div className="hidden sm:flex flex-col h-full bg-gray-50 p-5 shadow-sm">
        <span className="text-lg text-black">Retirement Strategy</span>
        <div className="flex flex-col p-2 ml-10">
          <span className="text-lg text-black"> Employee Contribution</span>
          <Slider />
        </div>
        <div className="flex flex-col p-2 ml-10">
          <span className="text-lg text-black"> Retirement Age</span>
          <Slider />
        </div>
        <hr className="mt-5" />
        <div className="flex flex-row justify-around mt-5">
          <span>Employer Contribution</span>
          <span>8.45%</span>
        </div>
        <div className="flex flex-row justify-around mt-5">
          <span>Interest Rate</span>
          <span>5%</span>
        </div>
        <div className="flex justify-center mt-5">
          <button className='bg-blue-700 p-4 text-md text-center rounded-md w-40 font-bold text-white'>Update</button>
        </div>
        <span className="text-blue-500 text-lg mt-5 ml-[130px] mb-5">View Help Docs {">"}</span>
        <div className="shadow-sm bg-white flex flex-col mt-5 ml-10">
          <span className="h-[100px] w-[1px] left-[-10] bg-blue-500 absolute"></span>
          <div className="flex flex-col ml-10">
            <span>Are you considering a <br /><b>Housing Advance?</b></span>
            <span className="text-gray-400">Limited time reduced interest.</span>
            <span className="text-blue-700 font-bold">Learn More {">"}</span>
          </div>
        </div>
      </div>

      {/* For mobile screens (visible only on small screens) */}
      <div className="sm:hidden flex flex-col bg-gray-50 p-5 shadow-sm">
      <p className='text-lg font-bold '>How do I Compare to My Peers ?</p>
          <p className='text-sm text-gray-400'>These numbers represent current goal Achevement</p>
        
            <div className="flex flex-col">
              <div className="flex flex-row">
              <span>Age:</span>
               <span className='ml-5'>Under 30<ArrowDropDownIcon/>  </span>
               <hr />
              </div>
              <div className='flex flex-row'>
                    <span>Salary :</span>
                    <span className='ml-5'>K 20-k 30<ArrowDropDownIcon/></span>
                    <hr />
               </div>
               <div className='flex flex-row'>
                    <span>Gender :</span>
                    <span className='ml-5'>Male<ArrowDropDownIcon/></span>
                    <hr />
               </div>

             </div>


               <div className="flex flex-row"> 

<PieChart />
<PieChart/>
<PieChart/>
               </div>
<div className="flex flex-col">
<span className="text-lg text-black">Retirement Strategy</span>
<div className="flex flex-col p-2 ">
          <span className="text-lg text-black"> Employee Contribution</span>
          <Slider />
        </div>
        <div className="flex flex-col p-2">
          <span className="text-lg text-black"> Retirement Age</span>
          <Slider />
        </div>
        <hr className="mt-5" />
        <div className="flex flex-row justify-around mt-5">
          <span>Employer Contribution</span>
          <span>8.45%</span>
        </div>
        <div className="flex flex-row justify-around mt-5">
          <span>Interest Rate</span>
          <span>5%</span>
        </div>
        <div className="flex justify-center mt-5">
          <button className='bg-blue-700 p-4 text-md text-center rounded-md w-40 font-bold text-white'>Update</button>
        </div>
       
</div>
















            </div>
             

           
      
    
    </>
  );
};

export default Rightbar;
