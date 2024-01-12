import React, { useState } from "react";
import Slider from "../Components/Slider";
const Rightbar = () => {

  return (
    <>
     <div className="flex flex-col h-full bg-white p-5 shadow-sm"> 
          <span className="text-lg text-black">Retirement Startegy</span>
          <div className="flex flex-col p-2 ml-10">
            <span className="text-lg text-black"> Employee Contribution</span>
              <Slider/>
            </div>
            <div className="flex flex-col p-2 ml-10">
            <span className="text-lg text-black"> Retirement Age
            
              <Slider /> 
             </span>

            </div>
            <hr className="mt-5"/>
          <div className="flex flex-row justify-around mt-5">
             <spna>Employer Contribution</spna>
             <spna>8.45%</spna>
          </div>

          <div className="flex flex-row justify-around mt-5">
             <spna>Interest Rate</spna>
             <spna>5%</spna>
          </div>

          <button className='bg-blue-700 text-white text-md rounded-md w-40 p-4 font-bold ml-[140px] mt-10'>Update</button>
           <span className="text-blue-500 text-lg mt-5 ml-[130px] mb-5 ">View Help Docs {">"}</span>
        <div className="shadow-sm bg-white flex flex-col mt-5 ml-10">
          <span className="h-[100px] w-[1px]  left-[-10]  bg-blue-500 absolute"></span>
          <div className="flex flex-col  ml-10">

          <span>Are you considering a  <br /><b>Housing Advance ?</b> </span>
           <span className="text-gray-400">Limited time reduced interest.</span>
           <span className="text-blue-700 font-bold">Learn More {">"} </span>
          </div>

        </div>
     </div>
    </>
  );
};

export default Rightbar;
