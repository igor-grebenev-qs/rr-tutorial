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
      currentApp: MENAR_APP
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

  // Entry point for tests
  testMethod () {
    console.log('>>> test method entry')
    let o = {101:true, 102:false}
    console.log('>>> o keys', Object.keys(o))
    const result = Object.keys(o).reduce((res, key) => ([...res, {sprintId: key, collapsed: o[key]}] ), [])
    console.warn('>>> result', result)
  }

  render() {
    const {state} = this
    const wd = state.opened ? '15em' : '3em'
    const opn = '>>'
    this.testMethod()
    return (
      <div>
        <div id="mySidenav" className="sidenav" style={{width: wd}}>
          {state.opened && (<div className="closebtn" onClick={::this.closeNav}>&#x274C;</div>)}
          {!state.opened && (<div className="closebtn" onClick={::this.closeNav}>{opn}</div>)}
          {state.opened && (
            <div>
              <button className="svbutton" onClick={ () => {this.setApp(MULT_APP)}}>
                {state.currentApp === MULT_APP && (<div className="activebtn"/>)}
                Multiplication table plugin
              </button>
              <button className="svbutton" onClick={ () => {this.setApp(MENAR_APP)}}>
                {state.currentApp === MENAR_APP && (<div className="activebtn"/>)}
                Arithmetic plugin
              </button>
              <button className="svbutton">About (to do)</button>)
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
