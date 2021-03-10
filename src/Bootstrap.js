import React from 'react';
import './App.css';
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const Bootstrap = () => {
    return (<>
        <Navbar className="My-Nav" expand="lg">
            <Navbar.Brand className="My-Nav" href="#home">React App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto My-Nav">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#About">About Us</Nav.Link>
                    <Nav.Link href="#Subscribe">Subscribe</Nav.Link>
                    <Nav.Link href="#Staff">Our Staff</Nav.Link>
                    <Nav.Link href="#Contact">Contact Us</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
        </>)
}
export default Bootstrap;