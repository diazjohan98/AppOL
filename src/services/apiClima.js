import axios from "axios";

const climaCali = async(state) => {
    const peticion = await axios.get('https://openweathermap.org/data/2.5/find?q=Cali&appid=439d4b804bc8187953eb36d2a8c26a02')
    state(peticion.data.list)
}

export {
    climaCali
}