import axios from "axios";

const peticionCommits = async(state) => {
    const peticion = await axios.get('http://localhost:3000/report_commits')
    state(peticion.data)
}

export {
    peticionCommits
}