import React from 'react'
import { Chart as ChartJS ,ArcElement, Tooltip, Legend} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

const Piechart = () => {

 const data={
    labeles:['one'],
    datasets:[
        {
            data:[45],
            backgroundColor:['aqua']
        }
    ]
 }
const doughnutelevel={

}

 const options = {
    plugins: {
      datalabels: {
        color: 'white', // Set the color of the data labels
        anchor: 'end',
        align: 'start',
        offset: -10,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 25,
       
      },
    },
  
  };

  const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw (chart, args, pluginOptions) {
    const { ctx, data } = chart;
    ctx.save();
    ctx.font = ' 10px sans-serif';
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(data. datasets [0].data[0], chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta (0).data[0].y);
    }
    }


  return (
    <div style={{
        padding:'5px',
        width:'20%'
    
    }}>


<Doughnut data={data} options ={options}
plugins={[textCenter]}


></Doughnut>


    </div>
  )
}

export default Piechart