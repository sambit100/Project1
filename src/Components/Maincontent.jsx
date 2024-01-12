import React from 'react'
import Barchart from './Barchart';
import PieChart from './Piechart';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Maincontent = () => {
  const data = [12, 19, 3, 5, 2, 3];
  const labels = ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6'];
  return (
    
    <>
    <div className='hidden sm:grid grid-cols-1 bg-white-100 shadow-sm h-full  w-full'>
        <div className='flex flex-col'>
            <span className='text-blue-700 text-sm font-bold'>Retirement Income </span>
             <span className='text-lg '> Starting Year 2024</span>
             <div className='flex flex-row gap-x-5'>
                
                <div className='flex flex-col gap-y-2 mt-4'>

                <span className='font-bold text-2xl '>$300,000</span>
                <span className='text-gray-400'>My Goal</span>
                <hr class="border-t-2 border-blue-500"/>

                </div>

               <div  className='flex flex-col gap-y-2 mt-4'>
                <span  className='font-bold text-2xl'>59%</span>
                <span className='text-gray-400'>Goal Achieved</span>
                <hr class="border-t-2 border-blue-500"/>
               </div>

                    <div  className='flex flex-col gap-y-2 mt-4'>
                   <span  className='font-bold text-2xl'>$300</span>
                   <span className='text-gray-400'>Est. Monthly Income</span>
                   <hr class="border-t-2 border-blue-500"/>
                    </div>


             </div>

        </div>
        <div> 
            <span className='font-bold text-xl ' >Contribution overtime</span>
      <Barchart data={data} labels={labels}/>
            
            
             </div>
        <div> 
          <p className='text-lg font-bold '>How do I Compare to My Peers ?</p>
          <p className='text-sm text-gray-400'>These numbers represent current goal Achevement</p>
           <div className='flex flex-row '>
             <div className='flex flex-col'>
               <div className='flex flex-row '>
                    <span>Age:</span>
                    <span className='ml-5'>Under 30<ArrowDropDownIcon/></span>
               </div>
               <div className='flex flex-row'>
                    <span>Salary :</span>
                    <span className='ml-5'>K 20-k 30<ArrowDropDownIcon/></span>
               </div>
               <div className='flex flex-row'>
                    <span>Gender :</span>
                    <span className='ml-5'>Male<ArrowDropDownIcon/></span>
               </div>

             </div>


  
<PieChart />
<PieChart/>
<PieChart/>


             <div>

             </div>
           </div>

        

        </div>
    </div>

{/* for mobile screen */}

<div className="flex sm:hidden justify-between items-center p-2  bg-gray-100">
   <div className='flex flex-col'>
    <span className='text-blue-700 text-sm font-bold'>Retirement Income </span>
    <span className='font-bold text-2xl '>$300,000</span>
                <span className='text-gray-400'>My Goal</span>
                <hr class="border-t-2 border-blue-500"/>
    <div className='flex flex-row gap-x-8'>
    <div  className='flex flex-col gap-2 mt-4'>
                <span  className='font-bold text-2xl'>59%</span>
                <span className='text-gray-400'>Goal Achieved</span>
                <hr class="border-t-2 border-blue-500"/>
               </div>

                    <div  className='flex flex-col gap-2 mt-4'>
                   <span  className='font-bold text-2xl'>$300</span>
                   <span className='text-gray-400'>Est. Monthly Income</span>
                   <hr class="border-t-2 border-blue-500"/>
                    </div>


    </div>

    <div>
    <span className='font-bold text-xl gap-y-4'>Contribution overtime</span>
      <div className='flex flex-row  w-full '>
      <Barchart data={data} labels={labels}/>



      </div>
    </div>

   </div>
</div>















    
          
    </>
  )
}

export default Maincontent