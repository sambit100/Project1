import React from 'react'
import pic1 from '../Images/logo3.png';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsActive from '@mui/icons-material/NotificationsActive';
const Sidebar2 = () => {
  return (
    <> 
    <div className='hidden sm:grid grid-col-1 p-5 bg-white shadow-sm h-100% w-90'>
   <div className='flex flex-row'>
     <img src={pic1} className='w-16 h-16 rounded-full  border-1 border-b-green-400  '></img>
     <div className='p-4'>

     <p className='font-bold text-2xl font-serif'>Hii sambit,</p>
      <span className='text-sm text-gray-400 '>Welcome Back</span>
     </div>
   </div>



{/* for the Account balance */}
    <div className='mt-4 '>
        <span className='font-bold text-xl'>Today</span>

        <div className='flex flex-col'>
         <span className='font-bold text-2xl'>$19,892</span>
         <span className='text-gray-400'>Account Balance</span>
        </div>

        <div className='flex flex-col'>
         <span className='font-bold text-2xl'>$4,000</span>
         <span className='text-gray-400'>Year-to-Date-Contributions</span>
        </div>

        <div className='flex flex-col'>
         <span className='font-bold text-2xl' >$1892</span>
         <span className='text-gray-400'>Total Intrest</span>
        </div>
         <button className='bg-blue-700 text-white text-md rounded-md w-40 p-4 font-bold'>I Want to<ArrowDropDownIcon/></button>
    </div>

    <div className='flex flex-col'>
        <span className='font-bold text-md font-mon'>Recent Transactions</span>
        <span className='text-gray-400 mt-5'>2020-08-07</span>
        <span>Withdrawal Transfer to Bank-xxx111</span>
        <hr />
        <span className='text-gray-400 mt-5'>2020-06-06</span>
        <span>Withdrawal Transfer to Bank-xxx111</span>
        <hr />
        <span className='text-gray-400 mt-5'>2020-03-07</span>
        <span>Withdrawal Transfer to Bank-xxx111</span>
        <hr />
    </div>
    
    </div>





    <div className="flex sm:hidden justify-between items-center p-4 w-full bg-gray-100">
       
       <div className='flex flex-col'>
        <div> 
        <div className='flex flex-row'>
     <img src={pic1} className='w-16 h-16 rounded-full  border-1 border-b-green-400  '></img>
     <div className='p-4'>

     <p className='font-bold text-2xl font-serif text-black'>Hii sambit,</p>
      <span className='text-sm text-gray-400 '>Welcome Back</span>
     </div>
   </div>




        </div>



        <div>
        <div className='mt-4 '>
        <span className='font-bold text-xl text-black'>Today</span>

        <div className='flex flex-col'>
         <span className='font-bold text-2xl text-black'>$19,892</span>
         <span className='text-gray-400 '>Account Balance</span>
        </div>

        <div className='flex flex-col'>
         <span className='font-bold text-2xl text-black'>$4,000</span>
         <span className='text-gray-400'>Year-to-Date-Contributions</span>
        </div>

        <div className='flex flex-col'>
         <span className='font-bold text-2xl text-black' >$1892</span>
         <span className='text-gray-400'>Total Intrest</span>
        </div>
         <button className='bg-blue-700 text-white text-md rounded-md w-40 p-4 font-bold'>I Want to<ArrowDropDownIcon/></button>
    </div>









        </div>
        <div>

        <div className='flex flex-col'>
        <span className='font-bold text-md '>Recent Transactions</span>
        <span className='text-gray-400 mt-5'>2020-08-07</span>
        <span className='text-black'>Withdrawal Transfer to Bank-xxx111</span>
        <hr />
        <span className='text-gray-400 mt-5'>2020-06-06</span>
        <span className='text-black'>Withdrawal Transfer to Bank-xxx111</span>
        <hr />
        <span className='text-gray-400 mt-5'>2020-03-07</span>
        <span className='text-black'>Withdrawal Transfer to Bank-xxx111</span>
        <hr />
    </div>
        </div>
       </div>
                     
             
          </div>
  
      




    </>
  )
}

export default Sidebar2;