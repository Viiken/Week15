
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Container from "react-bootstrap/esm/Container.js";

// cont and state setup
export default function Login() {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	function validateForm() {
	  return email.length > 0 && password.length > 0;
	}
 
	function handleSubmit(event) {  
	  event.preventDefault();  
	}
  
	return (
		//Login card
		<div className="pictureDiv">
		<Container className="loginCard">
		<Card> 
	  		<div className="Login">  
			<Card.Header>Login</Card.Header>
			<Card.Body>
				<Form onSubmit={handleSubmit}>  
				<Form.Group size="lg" controlId="email">  
					<Form.Label>Email</Form.Label>  
					<Form.Control  
					autoFocus  
					type="email"  
					value={email}  
					onChange={(e) => setEmail(e.target.value)}  
					/>
				</Form.Group>  
				<Form.Group size="lg" controlId="password">  
					<Form.Label>Password</Form.Label>  
					<Form.Control  
					id = 'paswordId'
					type="password"  
					value={password}  
					onChange={(e) => setPassword(e.target.value)}  
					/>
		
				</Form.Group>  
				<Button
					id='submitId'
					block size="lg" 
					type="submit" 
					disabled={!validateForm()}
					href="/loading"
					className="btn btn-primary"
					>Login</Button>  
				</Form> 
			</Card.Body> 
	  		</div>  
	  </Card>
	  </Container>
	  </div>
	);
  }


