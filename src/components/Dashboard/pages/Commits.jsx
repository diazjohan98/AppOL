import { peticionCommits } from "../../../services/apiCommits";
import { useEffect, useState } from "react";
import "../../../assets/css/Commits.css";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
}
    from "chart.js";
import { Bar } from "react-chartjs-2";
import { useMemo } from "react";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
)


function Servidor() {

    const [commits, setCommits] = useState({})

   
    
    
    useEffect(() => {
        peticionCommits(setCommits)
    }, [])
    
    const estadoInicia =  [
        {
            label: 'Feat',
            data: commits[0]?.time,
            backgroundColor: `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`,
        },
        {
            label: 'Fix',
            data: commits[1]?.time,
            backgroundColor: `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`,
        },
    ];


    // console.log(servidor);



    const options = {
        responsive: true,
        
    }

    let labels = ["Jan", "Feb", "Mar", "Apr", "May"]

    const data = useMemo(function () {
        return {
            datasets: estadoInicia,
            labels,
        }
    }, [labels]);

    // console.log(data.datasets[0].data);

    return (
        <div className="reporteServidor" >
            <p className="titlePrincipal"> Reporte De Commits</p>
            <p className="parrafo">Total de commits realizados por cada mes diferenciando entre los tag de Ajustes(fix) y Caracteristicas(feat)</p>

            <div className="titles">
                <p className="parra parra1">tiempo de uso</p>
                <p className="parra parra2">Proyectos desplegados</p>
            </div>
            

            <Bar data={data} options={options} />

        </div>
    )


}
export default Servidor