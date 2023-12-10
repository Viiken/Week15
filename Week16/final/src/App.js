import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

import Login from './Components/Login.js'
import Music from './Components/Music.js'
import Loading from './Components/Loading.js'
import Home from './Components/Home.js'
import Downloads from './Components/Downloads.js'
import Subscribe from './Components/Subscribe.js'
import './App.css';

import backgroundImage from './Components/bg3.jfif'

// Background picture preferances
const styles = {
  container: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh'
  }
}

//Navbar and Router/Switch setup
export default function App() {
  return (
    <div style={styles.container}>
    <Navbar id='NavBar' bg="dark">
      <Router>
        <div className="navButtons" bg="dark">
         <ButtonGroup className="buttonGroup">
            <Button className="btn btn-danger" href="/home" id="homeBtn">Home</Button>
            <Button className="btn btn-danger" href="/music" id="musicBtn">Music</Button>
            <DropdownButton id="dropdown-basic-button" variant="danger" title="Profile">
              <Dropdown.Item href="/">Log In</Dropdown.Item>
              <Dropdown.Item href="/downloads">Downloads</Dropdown.Item>
            </DropdownButton>
            </ButtonGroup>
          

        </div>
          <Switch>
          <Route path="/subscription">
              <Subscribe/>
            </Route>
          <Route path="/downloads">
              <Downloads/>
            </Route>
          <Route path="/loading">
              <Loading/>
            </Route>
          <Route path="/home">
              <Home/>
            </Route>
            <Route path="/music">
              <Music/>
            </Route>
            <Route path="/">
              <Login/>
            </Route>
          </Switch>

      </Router>
    </Navbar>
    </div>
  );
}
