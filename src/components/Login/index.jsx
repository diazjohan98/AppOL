import "../../assets/css/Login.css";
import logo from "../../assets/img/LogoOl.jfif";
import React from "react";
import axios from "axios";
// import { userLogin } from "../../services/apiLogin";
import { useHistory  } from 'react-router-dom';

class Login extends React.Component{

  state = {
    form: {
      user: "",
      password: "",
    },
    error: false,
    errorMsg: "",
  };

  
  manejadorSubmit = (e) => {
    e.preventDefault();
  };

  manejadorChange = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    // console.log(this.state.form);
  };

  manejadorBoton = () => {
    
    const { user, password } = this.state.form;
    let url = `http://localhost:3000/login?user=${user}&password=${password}`;
    axios
      .get(url)
      .then((response) => {
        const usuarios = response.data;
        if (usuarios.length >= 1) {
          console.log("Esa era mi muchacho");
        } else {
          this.setState({
            error: true,
            errorMsg: "Error al ingresar los valores",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <React.Fragment>
        <div className="wrapper fadeInDown">
          <div id="formContent">
            <div className="fadeIn first">
              <img src={logo} className="imagen-logo" alt="User Icon" />
              <p className="font-primary">Bienvenido al gestor de proyectos!</p>
              <p className="font-secundary">
                Necesitamos tu usuario y contraseña
              </p>
            </div>

            <form onSubmit={this.manejadorSubmit}>
              <input
                type="text"
                id="login"
                className="fadeIn second"
                name="user"
                placeholder="Nombre de usuario Ej: nombre.apellido"
                onChange={this.manejadorChange}
              />
              <input
                type="password"
                id="password"
                className="fadeIn third"
                name="password"
                placeholder="Aqui va tu contraseña"
                onChange={this.manejadorChange}
              />
              <input
                type="submit"
                className="fadeIn fourth"
                value="Ingresar"
                onClick={this.manejadorBoton}
              />
            </form>

            {this.state.error === true && (
              <div className="alert alert-danger" role="alert">
                {this.state.errorMsg}
              </div>
            )}

            <div id="formFooter">
              <input type="checkbox" className="input-cuadro" />{" "}
              <p className="font-tercer">Permanecer en Contacto</p>
              <a className="underlineHover" href="#">
                Recuperar tu contraseña
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
            }
}

export default Login;
