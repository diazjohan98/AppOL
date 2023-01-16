import "../assets/css/Login.css";
import logo from "../assets/img/LogoOl.jfif";
import React from "react";
import { ApiUrl } from "../services/apirest";
import axios from "axios";

class Login extends React.Component {

state={
  form:{
    "user":"",
    "password": ""
  },
  error:false,
  errorMsg:""
}


manejadorSubmit =e=>{
  e.preventDefault();
}

manejadorChange = async e=>{
  await this.setState({
    form:{
      ...this.state.form,
      [e.target.name]: e.target.value
    }
  })
  // console.log(this.state.form);
}

manejadorBoton=()=>{
  let url = ApiUrl;
  const {user, password} = this.state.form
  axios.get(url) 
  .then(response => {
   const usuarios = response.data;
   usuarios.forEach(esUsuario => {
    if (esUsuario?.user === user && esUsuario?.password === password) {
      alert("Bienvenido al Gestor de proyectos de OLsoftware");
    }
    else{
      alert("Estas introducciendo algo mal PANITA!!!!");
    }
   });
    
  })
  .catch(error=>{
    console.log(error);
  })
}

  render() {
    return (
      <React.Fragment>
        <div className="wrapper fadeInDown">
          <div id="formContent">

            <div className="fadeIn first">
              <img src={logo} className="imagen-logo" alt="User Icon" />
              <p className="font-primary">Bienvenido al gestor de proyectos!</p>
              <p className="font-secundary">Necesitamos tu usuario y contraseña</p>
            </div>


            <form onSubmit={this.manejadorSubmit}>
              <input type="text" id="login" className="fadeIn second" name="user" placeholder="Nombre de usuario Ej: nombre.apellido" onChange={this.manejadorChange} />
                <input type="password" id="password" className="fadeIn third" name="password" placeholder="Aqui va tu contraseña" onChange={this.manejadorChange} />
                  <input type="submit" className="fadeIn fourth" value="Ingresar" onClick={this.manejadorBoton}/>
                  </form>

                  <div id="formFooter">
                    <input type="checkbox" className="input-cuadro"/> <p className="font-tercer">Permanecer en Contacto</p> 
                    <a className="underlineHover" href="#">Recuperar tu contraseña</a>
                  </div>

                </div>
              </div>
            </React.Fragment>



            );
        }

}

            export default Login;
