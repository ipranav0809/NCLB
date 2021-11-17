import React from "react";
import { Navbar, Container, NavLink } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../Navbar.css';

const NavBar = () => {
    return (
    <>
        <Container>
        <Navbar collapseOnSelect expand="xl" bg="dark" fixed="top">
                <Navbar.Brand href="/home">No Child Left Behind</Navbar.Brand>
                <Navbar.Toggle/> aria-controls="responsive-navbar-nav"
                <Navbar.Collapse> id="response-navbar-nav"
                    <NavLink>Home</NavLink>
                    <NavLink>Agenda</NavLink>
                    <NavLink>Check List</NavLink>
                    <NavLink>Reading/Writing Techniques</NavLink>
                    <NavLink>Memory Games</NavLink>
                </Navbar.Collapse>
              </Navbar>

        </Container>
        
         
    </>   
    )
};

export default NavBar;