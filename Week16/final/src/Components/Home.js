import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/esm/Button';

export default function Home() {
  return (
    //Text and buttons on 'home' screen
    <div className="pictureDiv">
      <h1 id="script">Welcome to Epic Music</h1>
      <Button id="welcomeButton" href="/login">Log In</Button>
      <Button id="welcomeButton" href="subscription">Sign Up</Button>
    </div>
    
  )
}