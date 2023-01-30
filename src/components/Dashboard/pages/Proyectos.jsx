import React from "react";
import { Component } from "react";
import "../../../assets/css/Proyectos.css"
// import { getProject } from "../../../services/apiProject"
import * as FaIcons from "react-icons/fa"
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import axios from "axios";

const url = "http://localhost:3000/projects"

export default class Proyectos extends Component {
    state = {
        data: [],
        modalInsertar: false,
        form: {
            project_name: '',
            client: '',
            repo_url: '',
            developers: '',
            cl: '',
            cd: '',
            frontend_tecnology: '',
            backend_tecnology: '',
            databases: '',
            warning_count: '',
            errors_count: '',
            deploy_count: '',
            percentage_completion: '',
            report_nc: '',
            tipoModal: ''
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

    peticionPut=()=>{
        axios.put(url+this.state.form.id, this.state.form).then(response=>{
            this.modalInsertar();
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
                project_name: project.project_name,
                client: project.client,
                repo_url: project.repo_url,
                developers: project.developers,
                cl: project.cl,
                cd: project.cd,
                frontend_tecnology: project.frontend_tecnology,
                backend_tecnology: project.backend_tecnology,
                databases: project.databases,
                warning_count: project.warning_count,
                errors_count: project.errors_count,
                deploy_count: project.deploy_count,
                percentage_completion: project.percentage_completion,
                report_nc: project.repo_url,
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
        console.log(this.state.form);
    }
    componentDidMount() {
        this.peticionGet();
    }

    render() {
        const { form } = this.state;

        return (

            <div className="container-proyect">
                <div className="container-navbar">
                    <p className="textTittle">Lista De Proyectos Registrados</p>
                    <button className="btnProyect btn btn-prymary" onClick={()=>{this.setState({form: null, tipoModal: 'insertar'}); this.modalInsertar()}}> Nuevo Proyecto </button>
                </div>

                <div className="containerTabla">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Proyectos</th>
                                <th scope="col">Clientes</th>
                                <th scope="col">Repositorios</th>
                                <th scope="col">Desarrolladores</th>
                                <th scope="col">CL</th>
                                <th scope="col">CD</th>
                                <th scope="col">Frontend</th>
                                <th scope="col">Backend</th>
                                <th scope="col">DB</th>
                                <th scope="col">Alertas</th>
                                <th scope="col">Errores</th>
                                <th scope="col">Cant.Despliegues</th>
                                <th scope="col">Avance</th>
                                <th scope="col">Reporte N°</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>


                        <tbody>
                            {this.state.data.map(project => {
                                return (
                                    <tr>
                                        <td>{project.project_name}</td>
                                        <td>{project.client}</td>
                                        <td>{project.repo_url}</td>
                                        <td>{project.developers}</td>
                                        <td>{project.ci}</td>
                                        <td>{project.cd}</td>
                                        <td>{project.frontend_tecnology}</td>
                                        <td>{project.backend_tecnology}</td>
                                        <td>{project.databases}</td>
                                        <td>{project.warning_count}</td>
                                        <td>{project.errors_count}</td>
                                        <td>{project.deploy_count}</td>
                                        <td>{project.percentage_completion}%</td>
                                        <td>{project.report_nc}</td>
                                        <td className="state">{project.status}</td>
                                        <td className="btnEditEli">
                                            <button><FaIcons.FaRegEdit className="iconoEditar" onClick={()=>{this.seleccionarEmpresa(project); this.modalInsertar()}}/></button>
                                            {"   "}
                                            <button><FaIcons.FaTrashAlt className="iconoEliminar" /></button>
                                        </td>

                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>


                </div>

                <Modal isOpen={this.state.modalInsertar}>
                    <ModalHeader className="containerModal" style={{ display: 'block' }}>
                        <p className="titleModal">Creemos un Nuevo Proyecto</p>
                        <span className="closeModalX" style={{ float: 'right' }} onClick={() => this.modalInsertar()}>x</span>
                    </ModalHeader>
                    <ModalBody>
                        <div className="form-group">
                            <label className="inputLabel" htmlFor="id">Proyecto</label>
                            <input type="text" name="project_name" id="proyecto" onChange={this.handleChange} value={form ? form.project_name : ''} />
                            <br />
                            <label className="inputLabel" htmlFor="nombre">Cliente</label>
                            <input type="text" name="client" id="Cliente" onChange={this.handleChange} value={form ? form.client : ''} />
                            <br />
                            <label className="inputLabel" htmlFor="repositorio">Repositorio</label>
                            <input type="text" name="repo_url" id="repositorios" placeholder="Https:// " onChange={this.handleChange} value={form ? form.repo_url : ''} />
                            <br />
                            <label className="textCheck" htmlFor="integracion">Tiene Integracion Continua</label>
                            <input type="checkbox" name="ci" id="integracion" className="input-cuadro" onChange={this.handleChange} value={form ? form.ci : ''} />
                            <br />
                            <label className="textCheck" htmlFor="despliegue">Tiene Despliegue Continuo</label>
                            <input type="checkbox" name="cd" id="despliegue" className="input-cuadro" onChange={this.handleChange} value={form ? form.cd : ''} />
                            <br />
                            <label className="inputLabel" htmlFor="Desarrolladores">Desarrolladores</label>
                            <input type="text" name="developers" id="desarrolladores" placeholder="Quienes son los responsables" onChange={this.handleChange} value={form ? form.developers : ''} />
                            <br />
                            <label className="inputLabel" htmlFor="Frontend">Frontend</label>
                            <select type="text" name="frontend_tecnology" id="frontend" placeholder="Que tecnologia Frontend usa?" onChange={this.handleChange} value={form ? form.frontend_tecnology : ''} >
                                <option hidden selected > Que tecnologia frontend usa? </option>
                                <option> React </option>
                                <option> React Native </option>
                                <option> VueJS </option>
                                <option> Angular </option>
                            </select>
                            <br />
                            <p>
                                <label className="inputLabel" htmlFor="Backend">Backend</label>
                                <select type="text" name="backend_tecnology" id="backend" onChange={this.handleChange} value={form ? form.backend_tecnology : ''} >
                                    <option hidden selected > Que tecnologia Backend usa? </option>
                                    <option> .Net </option>
                                    <option> Java </option>
                                    <option> Python </option>
                                    <option> NodeJS </option>
                                </ select>
                                <br />
                            </p>
                            <label className="inputLabel" htmlFor="Base_de_datos">Base de Datos</label>
                            <select type="text" name="databases" id="bd" placeholder="Que Base de Datos se usa?" onChange={this.handleChange} value={form ? form.databases : ''} >
                                <option hidden selected > Que Base de Datos se usa? </option>
                                <option> SQLserver </option>
                                <option> MongoDB </option>
                                <option> PostgressQL </option>
                            </select>

                        </div>
                    </ModalBody>

                    <ModalFooter>
                        {this.state.tipoModal == 'Insetar' ?
                            <button className="saveBoton" onClick={() => this.peticionPost()}>
                                Save Change
                            </button> : <button className="saveBoton" onClick={() => this-this.peticionPut()} >
                                Actualizar
                            </button>
                        }
                        <button className="deletBoton" onClick={() => this.modalInsertar()}>Cancelar</button>
                    </ModalFooter>
                </Modal>
            </div >
        )
    }
}
