import React, { useState } from 'react';

// import pic1 from '/public/images/pic3.jpg';
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ListIcon from "@mui/icons-material/List";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import LogoutIcon from "@mui/icons-material/Logout";
import DiamondIcon from '@mui/icons-material/Diamond';
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from '@mui/icons-material/Home';
const Sidebar = () => {
    const [open,Setopen]=useState(true);
  return (
    <>
   <div className={` ${!open ?"w-48":"w-14"} hidden sm:flex flex-col  h-100% duration-300 shadow-xl border-2 bg-white-100 relative`}>
    <button className={`absolute cursor-pointer rouned -right-4 top-9 w-7 border-2 rounded-full duration-300 border-black ${!open && "rotate-180"}`} 
     onClick={()=>{Setopen(!open)}}
    ><NavigateNextIcon/> </button>
     
 <div>
    <ul className='pt-6 flex flex-col gap-y-4 mb-10 p-2'>
        <li className={`hover:bg-sky-100 p-2 rounded-md`}><DiamondIcon/></li>
        <li className={`hover:bg-sky-100 p-2 rounded-md`}><SearchIcon/><span className={`${open && "hidden"}`}>Search</span> </li>
       
    </ul>

    <ul className='pt-6 flex flex-col gap-y-4 mb-40 m-2 '>
        <li className={`hover:bg-sky-100 p-2 rounded-md `}><HomeIcon/> <span className={` ${open && "hidden duration-300"}`}> Home</span> </li>
        <li className={`hover:bg-sky-100 p-2 rounded-md`}><NewspaperIcon/><span className={`${open && "hidden"}`}> Details</span> </li>
        <li className={`hover:bg-sky-100 p-2 rounded-md`}><ListIcon/><span className={`${open && "hidden"}`}>Item List</span> </li>
        <li className={`hover:bg-sky-100 p-2 rounded-md`}><PersonIcon/><span className={`${open && "hidden"}`}>Account</span> </li>
    </ul>
    <ul className='pt-6 flex flex-col gap-y-4 p-2 '>
        <li className={`hover:bg-sky-100 p-2 rounded-md`}><NotificationsActiveIcon/><span className={`${open && "hidden"}`}>Notification</span> </li>
        <li className={`hover:bg-sky-100 p-2 rounded-md`}><LogoutIcon/><span className={`${open && "hidden"}`}>Logout</span> </li>
    </ul>
 </div>

{/* for smaller screen */}
   </div>
   <div className='flex sm:hidden justify-between items-center p-2   bg-white fixed bottom-0 left-0 right-0' >
                 <div className='hover:bg-blue-500 p-2 rounded-md '><HomeIcon/></div>
                 <div className='hover:bg-blue-500 p-2 rounded-md '><ListIcon/></div>
                 <div className='hover:bg-blue-500 p-2 rounded-md '><NewspaperIcon/></div>
                 <div className='hover:bg-blue-500 p-2 rounded-md '><PersonIcon/></div>
                 
   </div>
  
    </>
    
  )
}

export default Sidebar