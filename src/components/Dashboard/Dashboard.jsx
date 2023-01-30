import React from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom'
import "../../assets/css/Dashboard.css";
import Sidebar from "./Sidebar";
import Home from "./pages/Home";
import Proyectos from "./pages/Proyectos";
import Usuarios from "./pages/Usuarios";
import Roles from "./pages/Roles";
import NavbarNav from "./NavbarNav";

class Dashboard extends React.Component {
  render() {
    return (
     <Router>
      <NavbarNav />
        <div className="contenido-dashboard">
          <Sidebar />
          <div className="content w-100">
            <Route path="/home" exact={true} component={Home} />
            <Route path="/proyectos" exact={true} component={Proyectos} />
            <Route path="/usuarios" exact={true} component={Usuarios} />
            <Route path="/roles" exact={true} component={Roles} />
          </div>
        </div>
     </Router>
    );
  }
}

export default Dashboard;
