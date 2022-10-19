import React from 'react';
import './App.css';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import { BrowserRouter, Route }  from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Navbar */}
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Bike seller</Navbar.Brand>
          <Nav className="ml-auto">
  
            <LinkContainer to="/contact">
              <Button className="nav-btn" variant="outline-primary">Contact Us</Button>
            </LinkContainer>
            <LinkContainer to="/">
              <Button className="nav-btn" variant="outline-primary">LogOut</Button>
            </LinkContainer>
          </Nav>
        </Navbar>

        {/* Body */}
        <Route path="/home" exact component={Home} />
        <Route path="/" exact component={Login} />
        <Route path="/contact" exact component={Signup} />
      </BrowserRouter>
    </div>
  );
}

export default App;
