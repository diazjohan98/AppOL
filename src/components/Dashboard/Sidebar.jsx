import React from "react"
import { NavLink } from "react-router-dom"
import * as FaIcons from "react-icons/fa"
import "../../assets/css/Dashboard.css";


const Sidebar = () => {
    return(
        <div className="sidebar">
            <ul>
                <li>
                    <NavLink to="/home" exact className="rounded py-2 w-100 m-20 d-inline-block px-3   " activeClassName="active"><FaIcons.FaThLarge className="me-3" /> Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="/proyectos" exact className="rounded py-2 w-100 m-20 d-inline-block px-3   " activeClassName="active"><FaIcons.FaRegWindowRestore className="me-3" /> Proyectos</NavLink>
                </li>
                <li>
                    <NavLink to="/usuarios" exact className="rounded py-2 w-100 m-20 d-inline-block px-3   " activeClassName="active"><FaIcons.FaUserAlt className="me-3" /> Usuarios</NavLink>
                </li>
                <li>
                    <NavLink to="/roles" exact className="rounded py-2 w-100 m-20 d-inline-block px-3   " activeClassName="active"><FaIcons.FaSyncAlt className="me-3"  /> Roles</NavLink>
                </li>
            </ul>
        </div>
    )
}
export default Sidebar