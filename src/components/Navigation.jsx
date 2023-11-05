import React from 'react'
import {Navbar, Container, Form, Button, Nav} from "react-bootstrap";
import { Link } from 'react-router-dom';
import logo from "../resources/Netflix_logo.png";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
            <Navbar.Brand href="#">
                <img style={{width:120}} src={logo} alt="logo"/>
               
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
                >
                <Link to ="/" className='nav-item'>Home</Link>
                {/* <Link to="/movies" className='nav-item'>Movies</Link> */}
                </Nav>
                {/* <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
                <Button variant="outline-danger">Search</Button>
                </Form> */}
            </Navbar.Collapse>
        </Container>
  </Navbar>
  )
}

export default Navigation;
