import React, { useEffect, useState } from "react";
import { climaCali } from "../../../services/apiClima";
import "../../../assets/css/Clima.css";

const Home = (showData) => {

    let urlClima = "";
    let iconUrl = "";

    const [clima, setClima] = useState(true)
    // const params = useParams();
    useEffect(() => {
        climaCali(setClima)
    }, [])

    if(showData){
        urlClima = "http://openweathermap.org/img/w/";
        iconUrl = urlClima + clima[0]?.weather[0].icon + ".png"
    }
    
    let grados = (clima[0]?.main.temp - 273.15).toFixed();
    return (
        <>
            {clima != true ? (
                <div className="contenedorClima">
                    <p className="card-desc"><img src={iconUrl} alt="iconoClima"></img></p>
                    <p className="climaTemp">{grados}°C</p>
                    <p className="climaCity">{clima[0]?.name}</p>
                    <p className="climaCity2">Valle</p>
                    <img src="https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="imgClima" alt="" />

                </div>

            ) : ('No hay clima')}
        </>
    )
}

export default Home