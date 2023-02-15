import React from "react";
import "../../assets/css/Dashboard.css";
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Sidebar from "./Sidebar";
import Home from "./pages/Home";
import Proyectos from "./pages/Proyectos";
import Usuarios from "./pages/Usuarios";
import NavbarNav from "./NavbarNav";

class Dashboard extends React.Component {
  render() {
    return (
     <BrowserRouter>
     
      <NavbarNav />
        <div className="contenido-dashboard">
          <Sidebar />
          <div className="content w-100">
      
         <Routes>
    
            <Route path="/home"  element={<Home />} />
            <Route path="/proyectos"  element={<Proyectos />} />
            <Route path="/usuarios"  element={<Usuarios />} />
            {/* <Route path="/roles"  element={<Roles />} /> */}
            {/* <Route path="/*" element={<Navigate to='/login' />} /> */}
         
            </Routes>
          </div>
        </div>
     </BrowserRouter>
    );
  }
}

export default Dashboard;
