import { peticionEntregas } from "../../../services/apiEntregas";
import { useEffect, useState } from "react";
import "../../../assets/css/Entregas.css";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
}
    from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useMemo } from "react";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    
)


function Entregas() {

    const [entregas, setEntregas] = useState({})

   
    
    
    useEffect(() => {
        peticionEntregas(setEntregas)
    }, [])
    
    const estadoInicia =  [
        {
            label: 'Time 1',
            data: entregas[0]?.time,
            backgroundColor: (`rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`),
        },
        {
            label: 'Time 2',
            data: entregas[1]?.time,
            backgroundColor: `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`,
        },
    ];


    // console.log(servidor);



    const options = {
        // responsive: true,
        // scales: {
        //     xAxes: [{
        //       barPercentage: 1,
        //       categoryPercentage: 0.6
        //     }],
           
        //   }
    }

    // let labels = [10, 20, 30, 40, 50, 60, 70]

    const data = useMemo(function () {
        return {
            datasets: estadoInicia
           
        }
    }, []);

    // console.log(data.datasets[0].data);

    return (
        <div className="reporteEntregas" >
            <p>Resumen</p>    
    

            <Doughnut data={data} options={options}/>

        </div>
    )


}
export default Entregas