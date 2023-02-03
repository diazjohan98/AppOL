import { peticionEntregas } from "../../../services/apiEntregas";
import { useEffect, useState } from "react";
import "../../../assets/css/Servidor.css";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    DoughnutController,
    Title,
    Tooltip,
    Legend,
    Filler
}
    from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useMemo } from "react";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    DoughnutController,
    Title,
    Tooltip,
    Legend,
    Filler
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
            backgroundColor: `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`,
        },
        {
            label: 'Time 2',
            data: entregas[1]?.time,
            backgroundColor: `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`,
        },
    ];


    // console.log(servidor);



    // const options = {
    //     responsive: true,
    //     scales: {
    //         xAxes: [{
    //           barPercentage: 1,
    //           categoryPercentage: 0.6
    //         }],
           
    //       }
    // }

    let labels = [10, 20, 30, 40, 50, 60, 70]

    const data = useMemo(function () {
        return {
            datasets: estadoInicia,
            hoverOffset: 4,
        }
    }, [labels]);

    // console.log(data.datasets[0].data);

    return (
        <div className="reporteServidor" >
            <p className="titlePrincipal"> Detalles Del Servidor</p>
            <p className="parrafo">The total number of sessions withn thi date range. It is period time a user is activety
            engaged with your website, page or app.etc</p>

            <div className="titles">
                <p className="parra parra1">tiempo de uso</p>
                <p className="parra parra2">Proyectos desplegados</p>
            </div>
            <div className="titles2">
                <p className="parra parra3">71.5%</p>
                <p className="parra parra4">10</p>
            </div>

            <Doughnut data={data} />

        </div>
    )


}
export default Entregas