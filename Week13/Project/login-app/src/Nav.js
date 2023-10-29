import React, {Component} from 'react'

export default class Nav extends Component {
  render() {
    return (
      <nav className="navBar">
        <table>
          <th><a href="url">Home</a></th>
          <th><a href="url">About</a></th>
          <th><a href="url">Contact</a></th>
        </table>
      </nav>
    )
  }
}