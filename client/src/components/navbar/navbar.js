import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Image, Button } from 'react-bootstrap';
import './navbar.css';

import logo from '../../images/PFS_Logo-removebg.png';

const NavbarMenu = () => (
    <div className="nav-div d-flex justify-content-center">
        <Nav className="bg-dark positioned-nav p-2 d-flex justify-content-around">
            <Link to='/'><Button variant="outline-light">Home</Button></Link>
            <Link to="/about"><Button variant="outline-light">About</Button></Link>
        </Nav>
        <Link className="logo-image" to="/"><Image src={logo} width="150px" height="150px" alt="PFS Logo" /></Link>
    </div>
);

export default NavbarMenu;
