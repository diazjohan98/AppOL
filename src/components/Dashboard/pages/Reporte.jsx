import React, { useEffect, useState } from "react";
import "../../../assets/css/Reporte.css";
import { peticionCard } from "../../../services/apiCards";

const Reporte = () => {

    const [card, setCard] = useState({})
    // const params = useParams();
    useEffect(() => {
        peticionCard(setCard)
    }, [])



    return (
        <div className="layoutIzq">
            <div className="proRegis">
                <p className="title-repor-princ">Proyectos Registrados</p>
                <p className="numPrin">{card[0]?.project_regis}</p>
                <p className="title-repor-princ">Total de avance {card[0]?.time}</p>
            </div>
            <div className="proDesa">
                <p className="title-repor-princ">Proyectos en Desarrollo</p>
                <p className="numPrin">{card[0]?.project_desarr}</p>
                <p className="title-repor-princ">Ultimo proyecto registrado hace {card[0]?.total}%</p>
            </div>
            <div className="NcResol">
                <p className="title-repor-princ">NC's en resolver</p>
                <p className="numPrin">{card[0]?.project_sinRes}</p>
                <p className="title-repor-princ">Ultimo NC registrado hace {card[0]?.timeSinRe}</p>
            </div>
            <div className="CantidadErr">
                <p className="title-repor-princ">Cantidad de Errores</p>
                <p className="numPrin">{card[0]?.totalErrores}</p>
                <p className="title-repor-princ">Ultimo error hace {card[0]?.timeError} dias</p>
            </div>

        </div>

    )
}

export default Reporte