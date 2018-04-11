import React, { Component } from 'react'
import { connect } from 'react-redux'
import MultiplicationTestTable from './MultiplicationTestTable'
require('../assets/styles/sidebar.less')
export default class AppContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      opened: true
    }
  }

  render() {
    return (
    <div>
      <div id="mySidenav" className="sidenav">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
      <div>
        <MultiplicationTestTable />
      </div>
    </div>)
  }
}
