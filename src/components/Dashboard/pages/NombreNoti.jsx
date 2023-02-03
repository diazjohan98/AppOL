import { useEffect, useState } from "react"
import { peticionNombre } from "../../../services/apiNombrew"
import "../../../assets/css/Clima.css";


const Nombre = () => {


    const [nombre, setNombre] = useState(true)
    // const params = useParams();
    useEffect(() => {
        peticionNombre(setNombre)
    }, [])
    
    console.log(nombre)

    return(
        <div>
            <p className="title">Bienvenido {nombre[0]?.name}</p>
        </div>
    )
}

export default Nombre