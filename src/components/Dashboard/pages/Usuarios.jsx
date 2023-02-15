import React from "react";
import { Component } from "react";
import "../../../assets/css/Proyectos.css"
// import { getProject } from "../../../services/apiProject"
import * as FaIcons from "react-icons/fa"
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import axios from "axios";


const url = "http://localhost:3000/users"
// const urlPut = `http://localhost:3000/projects/${id}`

export default class Usuarios extends Component {
    state = {
        data: [],
        modalInsertar: false,
        form: {
            id: '',
            name: '',
            last_name: '',
            url_photo: '',
            rol: '',
            list: '',
            area: '',
        }
    }

    peticionGet = () => {
        axios.get(url).then(response => {
            this.setState({ data: response.data });
        }).catch(error => {
            console.log(error.message);
        })
    }

    peticionPost = async () => {
        await axios.post(url, this.state.form).then(response => {
            this.modalInsertar();
            this.peticionGet();
        }).catch(error => {
            console.log(error.message);
        })
    }

    peticionPut = () => {
        axios.put(`http://localhost:3000/users/${this.state.form.id}`, this.state.form).then(response => {
            this.modalInsertar();
            this.peticionGet();
        })
    }
    peticionDelete = () => {
        axios.delete(`http://localhost:3000/users/${this.state.form.id}`).then(response => {
            this.setState({ modalEliminar: false })
            this.peticionGet();
        })
    }

    modalInsertar = () => {
        this.setState({ modalInsertar: !this.state.modalInsertar });
    }

    seleccionarEmpresa = (project) => {
        this.setState({
            tipoModal: 'actualizar',
            form: {
                id: project.id,
                name: project.name,
                last_name: project.last_name,
                url_photo: project.url_photo,
                rol: project.rol,
                list: project.list,
                area: project.area,
            }
        })

    }

    handleChange = async e => {
        e.persist();
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        // console.log(this.state.form);
    }
    componentDidMount() {
        this.peticionGet();
    }

    render() {
        const { form } = this.state;

        return (

            <div className="container-proyect">
                <div className="container-navbar">
                    <p className="textTittle">Usuarios</p>
                    <button className="btnProyect btn btn-prymary" onClick={() => { this.setState({ form: null, tipoModal: 'insertar' }); this.modalInsertar() }}> Agregar Usuario </button>
                </div>

                <div className="containerTabla">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Photo</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellido</th>
                                <th scope="col">Rol</th>
                                <th scope="col">Tecnologias</th>
                                <th scope="col">Area</th>
                                <th scope="col">Proyectos</th>
                            </tr>
                        </thead>


                        <tbody>
                            {this.state.data.map(project => {
                                return (
                                    <tr>
                                        <td>{project.id}</td>
                                        <td><img className="fotoUsuario" src={project.url_photo} alt="foto del usuario"/></td>
                                        <td>{project.name}</td>
                                        <td>{project.last_name}</td>
                                        <td>{project.rol}</td>
                                        <td>{project.list}</td>
                                        <td>{project.area}</td>
                                        <td>Balance</td>
                                        <td className="btnEditEli">
                                            <button><FaIcons.FaRegEdit className="iconoEditar" onClick={() => { this.seleccionarEmpresa(project); this.modalInsertar() }} /></button>
                                            {"   "}
                                            <button><FaIcons.FaTrashAlt className="iconoEliminar"  onClick={() => { this.seleccionarEmpresa(project); this.setState({ modalEliminar: true }) }} /></button>
                                        </td>

                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>


                </div>

                <Modal isOpen={this.state.modalInsertar}>
                    <ModalHeader className="containerModal" style={{ display: 'block' }}>
                        <p className="titleModal">Creemos un Nuevo Usuario</p>
                        <span className="closeModalX" style={{ float: 'right' }} onClick={() => this.modalInsertar()}>x</span>
                    </ModalHeader>
                    <ModalBody>
                        <div className="form-group">
                            <label htmlFor="id">ID</label>
                            <input className="form-control" type="text" name="id" id="id" readOnly onChange={this.handleChange} value={form ? form.id : this.state.data.length + 1} />
                            <label className="inputLabel" htmlFor="id">Nombre</label>
                            <input type="text" name="name" id="nombre" onChange={this.handleChange} value={form ? form.project_name : ''} />
                            <br />
                            <label className="inputLabel" htmlFor="nombre">Apellido</label>
                            <input type="text" name="last_name" id="lastName" onChange={this.handleChange} value={form ? form.client : ''} />
                            <br />
                            <label className="inputLabel" htmlFor="repositorio">Rol</label>
                            <br />
                            <input type="text" name="rol" id="rol" placeholder="Que Rol va a tener este usuario?" onChange={this.handleChange} value={form ? form.repo_url : ''} />
                            <br />
                            <label className="inputLabel" htmlFor="Frontend">Tecnologias</label>
                            <select type="text" name="list" id="tecnologias" onChange={this.handleChange} value={form ? form.frontend_tecnology : ''} >
                                <option hidden selected > Que habilidad tiene? </option>
                                <option> React </option>
                                <option> React Native </option>
                                <option> VueJS </option>
                                <option> Angular </option>
                                <option> .Net </option>
                                <option> Java </option>
                                <option> Python </option>
                                <option> NodeJS </option>
                                <option> SQLServer</option>
                            </select>
                            <br />
                            <label className="inputLabel" htmlFor="repositorio">Area</label>
                            <br />
                            <input type="text" name="area" id="area" placeholder="A que area Responde?" onChange={this.handleChange} value={form ? form.repo_url : ''} />

                        </div>
                    </ModalBody>

                    <ModalFooter>
                        {this.state.tipoModal === 'insertar' ?
                            <button className="saveBoton btn btn-success" onClick={() => this.peticionPost()}>
                                Insertar
                            </button> : <button className="btn btn-primary" onClick={() => this.peticionPut()}>
                                Actualizar
                            </button>
                        }
                        <button className="deletBoton" onClick={() => this.modalInsertar()}>Cancelar</button>
                    </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.modalEliminar}>
                    <ModalBody>
                        Estás seguro que deseas eliminar {form && form.project_name}
                    </ModalBody>
                    <ModalFooter>
                        <button className="saveBoton" onClick={() => this.peticionDelete()}>Sí</button>
                        <button className="deletBoton" onClick={() => this.setState({ modalEliminar: false })}>No</button>
                    </ModalFooter>
                </Modal>
            </div >
        )
    }
}