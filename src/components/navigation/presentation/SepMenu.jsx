import React from 'react';
import { NavLink } from "react-router-dom";

const SepMenu = (props) => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand " to="/"><img src="../images/synechronLogo.png" width="80px"/></NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink className="nav-link active" to="/home">Home <span className="sr-only">(current)</span></NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName={"active"} to="/employees">Employees</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName={"active"} to="/events">Events</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName={"active"} to="/jph/posts">Jph Post</NavLink>

          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName={"active"} to="/jph/users">Jph Users</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName={"active"} to="/newEvents">Register Event</NavLink>
          </li>

           <li className="nav-item">
            <NavLink className="nav-link" activeClassName={"active"} to="/newEmployee">Add Employee</NavLink>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default SepMenu;