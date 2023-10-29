import React, {Component} from 'react'

export default class Form extends Component {
  render() {
    return (
        <form className="form">
            <label for="user">Username:</label><br></br>
            <input type="text" id="user" name="user"></input><br></br>
            <label for="pass">Password:</label><br></br>
            <input type="text" id="pass" name="pass"></input>
        </form> 
    )
  }
}


