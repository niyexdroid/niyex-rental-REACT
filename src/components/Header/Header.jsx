import React, { Component } from "react";
import logo from './logo.png';
import {NavLink} from "react-router-dom";
import './bootstrap.css';
import './Header.css';
import './mdb.min.css';
import './Header.css';
class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark warning-color fixed-top font-weight-bold mb-5">
                <NavLink className="navbar-brand" to="/">
                    <img className="img-fluid" height="30" width="50" src={logo} alt="logo" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="basicExampleNav">
                    <ul className="navbar-nav nav-pills nav mr-auto">
                        {/* <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li> */}
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Gallery">Gallery</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Rent">Rent</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Contact">Contact Us</NavLink> 
                        </li>
                        <li className="nav-item">
                            <NavLink className=" nav-link " to="/About">About</NavLink>
                        </li>
                    </ul>
                    <form className="form-inline">
                        <div className="md-form my-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                        </div>
                        <button className="btn btn-outline-white btn-md my-2 my-sm-0 ml-3" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        );
    }     
} 

export default Header;