import axios from "axios";

const userLogin = async(state, user, password) => {
    const peticion = await axios.get(`http://localhost:3000/login?user=${user}&password=${password}`)
    state(peticion.login)
    
}

export {
    userLogin
}