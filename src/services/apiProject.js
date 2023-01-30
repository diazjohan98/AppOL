import axios from "axios"

const getProject = async(state) => {
    const peticion = await axios.get('http://localhost:3000/projects')
    state(peticion.data.projects)
}

export {
    getProject
}