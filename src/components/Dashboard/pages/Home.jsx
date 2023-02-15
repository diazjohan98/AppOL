import React, { useEffect, useState } from "react";
import { climaCali } from "../../../services/apiClima";
import "../../../assets/css/Clima.css";
import Reporte from "./Reporte";
import Servidor from "./Servidor";
import Commits from "./Commits";
import Entregas from "./Entregas";
import Nombre from "./NombreNoti";


const Home = (showData) => {

    let urlClima = "";
    let iconUrl = "";


    const [clima, setClima] = useState(true)
    // const params = useParams();
    useEffect(() => {
        climaCali(setClima)
    }, [])

    if (showData) {
        urlClima = "http://openweathermap.org/img/w/";
        iconUrl = urlClima + clima[0]?.weather[0].icon + ".png"
    }

    let grados = (clima[0]?.main.temp - 273.15).toFixed();
    return (
        
        <>
            <div className="containerTitle">
                <Nombre />
            </div>
            <div className="containerDash">
                {clima != true ? (
                    <div className="contenedorClima">
                        <div className="card-desc"><img src={iconUrl} alt="iconoClima"></img></div>
                        <div className="climaTemp">{grados}°C </div>
                        <div className="climaCity">{clima[0]?.name} <br /> <p className="climaCity2">Valle</p> </div>
                        {/* <img src="https://images.pexels.com/photos/11815576/pexels-photo-11815576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="imgClima" alt="" /> */}

                    </div>

                ) : ('No hay clima')}

                <Reporte />

            </div>
            <div className="containerDashPeticiones">
                <Servidor />
                <Commits />

            </div>
            <Entregas />
{/* 
                    <Notificacion /> */}

            </>
    )
}

export default Home