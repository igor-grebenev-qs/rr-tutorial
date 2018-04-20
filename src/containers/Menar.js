import React, { Component } from 'react'
import { connect } from 'react-redux'
import buttonStyles from '../assets/styles/appButton.css'
import classNames from 'classnames'

require('../assets/styles/sample.less')

class Menar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      x: Math.floor(Math.random()*99 + 1),
      y: Math.floor(Math.random()*99 + 1),
      z: Math.floor(Math.random()*99 + 1),
      ready: false,
      progressInterval: undefined
    }
  }

  showRes(_this) {
    _this.setState({
      ready: true
    })
  }
  
  start (_this) {
    if (this.state.progressInterval) {
      clearInterval(this.state.progressInterval)
      _this.setState({
        progressInterval: undefined,
        ready: false
      })
    } else {
      window.setTimeout(() => { _this.showRes(_this) }, 4000)
      let interavalId = setInterval(function() {
        window.setTimeout(() => { _this.showRes(_this) }, 4000)

        _this.setState({
          x: Math.floor(Math.random()*99 + 1),
          y: Math.floor(Math.random()*99 + 1),
          z: Math.floor(Math.random()*99 + 1),
          ready: false
        })
      }, 8000)
      _this.setState({
        progressInterval: interavalId
      })
    }
  }
  
  render() {
    let {x, y, z} = this.state
    let res = x+y+z
    return (
    <div style={{textAlign: 'center'}}>
          <span className="testClass">Menar application</span>
      <br/>
      <span className="appInfo">Maxim Grebenev</span>
      <br/>
      <button 
        className="appButton"
        onClick={() => { this.start(this) } }>
        {this.state.progressInterval ? 'STOP' : 'Start Generation'}
      </button>

      <h1>Menar. Learning helper ...</h1>
      <h1>Numbers generator</h1>
      {this.state.progressInterval && (<font className={'bigText'}>{x} + {y} + {z}</font>)}
      <br/>
      {this.state.progressInterval && this.state.ready && (<font className={'resText'}>{res}</font>)}
      {!this.state.ready && (<div>
        <svg className="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340">
          <circle cx="170" cy="170" r="160" stroke="#E2007C"/>
          <circle cx="170" cy="170" r="135" stroke="#404041"/>
          <circle cx="170" cy="170" r="110" stroke="#E2007C"/>
          <circle cx="170" cy="170" r="85" stroke="#404041"/>
        </svg>
      </div>)}
    </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    user: state,
    data: state.data
  }
}

export default connect(mapStateToProps)(Menar)
