import axios from "axios";

const peticionNombre = async(state) => {
    const peticion = await axios.get('http://localhost:3000/login')
    state(peticion.data)
}

export {
    peticionNombre
}