import React from 'react'

const Maincontent = () => {
  return (
    <>
    <div className=' grid grid-col-1 bg-gray-50 shadow-xl h-full  '>
        <div className='flex flex-col'>
            <span className='text-blue-700 text-sm font-bold'>Retirement Income </span>
             <span className='text-lg '> Starting Year 2024</span>
             <div className='flex flex-row gap-x-5'>
                
                <div className='flex flex-col gap-y-2'>

                <span className='font-bold text-2xl'>$300,000</span>
                <span className='text-gray-400'>My Goal</span>
                <hr class="border-t-2 border-blue-500"/>

                </div>

               <div  className='flex flex-col gap-y-2'>
                <span  className='font-bold text-2xl'>59%</span>
                <span className='text-gray-400'>Goal Achieved</span>
                <hr class="border-t-2 border-blue-500"/>
               </div>

                    <div  className='flex flex-col gap-y-2'>
                   <span  className='font-bold text-2xl'>$300</span>
                   <span className='text-gray-400'>Est. Monthly Income</span>
                   <hr class="border-t-2 border-blue-500"/>
                    </div>


             </div>

        </div>









        <div> for the chart </div>
        <div> for the peers</div>
    </div>
    
    
    </>
  )
}

export default Maincontent