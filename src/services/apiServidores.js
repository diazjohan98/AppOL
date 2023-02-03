import axios from "axios";

const peticionServidor = async(state) => {
    const peticion = await axios.get('http://localhost:3000/cpu_report')
    state(peticion.data)
}

export {
    peticionServidor
}