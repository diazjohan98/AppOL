import React from "react"
import { NavLink } from "react-router-dom"
import * as FaIcons from "react-icons/fa"
import "../../assets/css/Dashboard.css";


const Sidebar = () => {
    return(
        <div className="sidebar">
            <ul>
                <li>
                    <NavLink to="/home"   className="rounded py-2 w-100 m-20 d-inline-block px-3   " ><FaIcons.FaThLarge className="me-3" /> Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="/proyectos"   className="rounded py-2 w-100 m-20 d-inline-block px-3   " ><FaIcons.FaRegWindowRestore className="me-3" /> Proyectos</NavLink>
                </li>
                <li>
                    <NavLink to="/usuarios"   className="rounded py-2 w-100 m-20 d-inline-block px-3   " ><FaIcons.FaUserAlt className="me-3" /> Usuarios</NavLink>
                </li>
                
            </ul>
        </div>
    )
}
export default Sidebar