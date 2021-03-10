// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import { Link, Route, BrowserRouter as Router,Switch } from 'react-router-dom';
import Coverpic from './coverpic';
import Bootstrap from './Bootstrap'
import Footer from './footer';
import Home from './Home';
import About from './About';
import Subscribe from './Subscribe';
import Listing from './Listing';
import Staff from './staff'
import Contact from './Contact';
import Ncontact from './Ncontact'
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { Button } from 'react-bootstrap'


function App() {

let myvar={
  dat1:"Data1",
  dat2:22.2
};
const [ovar,upovar]=useState("ABC")

function getfromchild(Cdata){
 upovar(Cdata);
}

  return (
    <div className="App">
       <Coverpic />
      <Router>
        <Navbar className="My-Nav" expand="lg">
          <Navbar.Brand className="My-Nav" href="#home">React App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto My-Nav">
              <Nav.Link href="#home"><Link className="Link" to="/">Home</Link></Nav.Link>
              <Nav.Link href="#About"><Link className="Link" to="/About">About Us</Link></Nav.Link>
              <Nav.Link href="#Subscribe"><Link className="Link" to="/Subscribe">Subscribe</Link></Nav.Link>
              <Nav.Link href="#Staff"><Link className="Link" to="/Listing">Our Staff</Link></Nav.Link>
              <Nav.Link href="#Contact"><Link className="Link" to="/Contact">Contact Us</Link></Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-primary">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/About">
          <About data={ovar} />
          </Route>
          <Route path="/Subscribe">
          <Subscribe />
          </Route>
          <Route path="/Listing/:ivar">
            {/* <Staff /> */}
          <Listing getchild={getfromchild} />
          </Route>
          <Route path="/Contact/:svar/:dvar">
          <Contact />
          </Route>
          <Route path="/Contact">
          <Ncontact />
          </Route>
          <Route path="/Listing">
          <Staff />
          </Route>
        </Switch>
        {/* <Home /> */}
        {/* <About /> */}
        {/* <Subscribe /> */}
        {/* <Listing /> */}
        {/* <Contact /> */}
     </Router>
      <Footer />
    </div>
  );
}
export default App;
