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

  closeNav() {
    console.log('closeNav')
    this.setState({opened: !this.state.opened})
  }

  setApp (app) {
    console.warn('SET APPLICATION', app)
    this.setState({currentApp: app})
  }

  render() {
    const {state} = this
    const wd = state.opened ? '15em' : '3em'
    const opn = '>>'
    return (
      <div>
        <div id="mySidenav" className="sidenav" style={{width: wd}}>
          {state.opened && (<div className="closebtn" onClick={::this.closeNav}>&#x274C;</div>)}
          {!state.opened && (<div className="closebtn" onClick={::this.closeNav}>{opn}</div>)}
          {state.opened && (
            <div>
              <button className="svbutton" onClick={ () => {this.setApp(MULT_APP)}}>Multiplication table plugin</button>
              <button className="svbutton" onClick={ () => {this.setApp(MENAR_APP)}}>Arithmetic plugin</button>
              <button className="svbutton">Contact</button>)
            </div>
            )
          }
        </div>
        <div>
          {state.currentApp === MULT_APP && <MultiplicationTestTable />}
          {state.currentApp === MENAR_APP && <Menar/>}
        </div>
      </div>)
  }
}
