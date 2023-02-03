import axios from "axios";

const peticionEntregas = async(state) => {
    const peticion = await axios.get('http://localhost:3000/release_resume')
    state(peticion.data)
}

export {
    peticionEntregas
}