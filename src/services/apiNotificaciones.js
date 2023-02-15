import axios from "axios";

const peticionNotificacion = async(state) => {
    const peticion = await axios.get('http://localhost:3000/notification')
    state(peticion.data)
}

export {
    peticionNotificacion
}