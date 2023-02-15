import { peticionServidor } from "../../../services/apiServidores";
import { useEffect, useState } from "react";
import "../../../assets/css/Servidor.css";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
}
    from "chart.js";
import { Line } from "react-chartjs-2";
import { useMemo } from "react";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
)


function Servidor() {

    const [servidor, setServidor] = useState({})

   
    
    
    useEffect(() => {
        peticionServidor(setServidor)
    }, [])
    
    const estadoInicial =  [
        {
            label: 'Tiempo de uso',
            data: servidor[0]?.time,
            tension: 0.2,
            borderColor: `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`,
        },
        {
            label: 'Proyectos',
            data: servidor[1]?.time,
            tension: 0.2,
            borderColor: `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`,
        },
    ];


    // console.log(servidor);



    const options = {
        responsive: true,
        scales: {
            y: {
                min: 0,
            },
        },
        plugins: {
            legend: {
                display: true
            }
        }
    }

    let labels = [10, 20, 30, 40, 50, 60, 70]

    const data = useMemo(function () {
        return {
            datasets: estadoInicial,
            labels,
        }
    }, [estadoInicial]);

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

            <Line data={data} options={options} />

        </div>
    )


}
export default Servidor