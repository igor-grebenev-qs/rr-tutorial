import React, { Component } from 'react'
import { connect } from 'react-redux'
import {MULT_APP, MENAR_APP} from '../constants/appConsts'
import Menar from './Menar'
import MultiplicationTestTable from './MultiplicationTestTable'
require('../assets/styles/sidebar.less')
export default class AppContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      opened: true,
      currentApp: MULT_APP
    }
  }

  setApp (app) {
    console.warn('SET APPLICATION', app)
    this.setState({currentApp: app})
  }

  render() {
    const {state} = this
    return (
    <div>
      <div id="mySidenav" className="sidenav">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <a href="#">About</a>
        <a href="#" onClick={ () => {this.setApp(MULT_APP)}}>Multiplication table</a>
        <a href="#" onClick={ () => {this.setApp(MENAR_APP)}}>Arithmetic ...</a>
        <a href="#">Contact</a>
      </div>
      <div>
        {state.currentApp === MULT_APP && <MultiplicationTestTable />}
        {state.currentApp === MENAR_APP && <Menar/>}
      </div>
    </div>)
  }
}
