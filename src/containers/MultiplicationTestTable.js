import React, { Component } from 'react'
import { connect } from 'react-redux'
import buttonStyles from '../assets/styles/appButton.css'
import classNames from 'classnames'

require('../assets/styles/sample.less')

class MultiplicationTestTable extends Component {
  constructor (props) {
    super(props)
    this.state = {
      x: Math.floor(Math.random()*9 + 1),
      y: Math.floor(Math.random()*9 + 1),
      ready: false,
      progressInterval: undefined
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        mounted:true
      })
    }, 1000)
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
      window.setTimeout(() => { _this.showRes(_this) }, 2000)
      let interavalId = setInterval(function() {
        window.setTimeout(() => { _this.showRes(_this) }, 2000)

        _this.setState({
          x: Math.floor(Math.random()*9 + 1),
          y: Math.floor(Math.random()*9 + 1),
          ready: false
        })
      }, 5000)
      _this.setState({
        progressInterval: interavalId
      })
    }
  }
  
  render() {
    let {x, y, mounted} = this.state
    if (!mounted) {
      return null
    }
    let res = x*y
    return (
    <div style={{textAlign: 'center'}}>
          <span className="testClass">Test application</span>
      <br/>
      <span className="appInfo">Maxim Grebenev</span>
      <br/>
      <button 
        className="appButton"
        onClick={() => { this.start(this) } }>
        {this.state.progressInterval ? 'STOP' : 'Start Generation'}
      </button>

      <h1>Multiplication table. Learning helper ...</h1>
      <h1>Numbers generator</h1>
      {this.state.progressInterval && (<font className={'bigText'}>{x} × {y}</font>)}
      <br/>
      {this.state.progressInterval && this.state.ready && (<font className={'resText'}>{res}</font>)}
      <div class="logoContainer">
        <svg class="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340">
          <circle cx="170" cy="170" r="160" stroke="#E2007C"/>
          <circle cx="170" cy="170" r="135" stroke="#404041"/>
          <circle cx="170" cy="170" r="110" stroke="#E2007C"/>
          <circle cx="170" cy="170" r="85" stroke="#404041"/>
        </svg>
      </div>
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

export default connect(mapStateToProps)(MultiplicationTestTable)
