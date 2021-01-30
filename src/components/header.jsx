import React, { Component } from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

export default class Header extends Component {
    render(){
        return(
            <Navbar fixed="top" id="header" expand="lg">
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#link" style={{color: "white"}}><b>CART</b></Nav.Link>
                        <Nav.Link href="#link" style={{color: "white"}}><b>LOGIN</b></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}