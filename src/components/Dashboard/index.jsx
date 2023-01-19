import React from "react";
import { Router } from "react-router-dom";
import "../../assets/css/Dashboard.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Home from "./pages/Home";
import Clients from "./pages/Clients";
import Sale from "./pages/Sale";




class Dashboard extends React.Component {
  render() {
    return (
     <div>
      <Navbar />
        <div className="flex">
          <Sidebar />
          <div className="content">

          </div>
        </div>
     </div>
    );
  }
}

export default Dashboard;
