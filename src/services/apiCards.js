import axios from "axios";

const peticionCard = async(state) => {
    const peticion = await axios.get('http://localhost:3000/dashboard_cards')
    state(peticion.data)
}

export {
    peticionCard
}