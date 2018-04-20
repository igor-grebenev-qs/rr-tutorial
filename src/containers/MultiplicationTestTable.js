import React, { Component } from 'react'
import { connect } from 'react-redux'
import buttonStyles from '../assets/styles/appButton.css'
import classNames from 'classnames'
import NumericInput from 'react-numeric-input';

require('../assets/styles/sample.less')

class MultiplicationTestTable extends Component {
  constructor (props) {
    super(props)
    this.state = {
      x: Math.floor(Math.random()*9 + 1),
      y: Math.floor(Math.random()*9 + 1),
      ready: false,
      progressInterval: undefined,
      resTimeout: 2000
    }
  }

  showRes(_this) {
    _this.setState({
      ready: true
    })
  }
  
  start (_this) {
    console.log('start timeout:', _this.state.resTimeout)
    if (this.state.progressInterval) {
      clearInterval(this.state.progressInterval)
      _this.setState({
        progressInterval: undefined,
        ready: false
      })
    } else {
      window.setTimeout(() => { _this.showRes(_this) }, _this.state.resTimeout)
      let interavalId = setInterval(function() {
        window.setTimeout(() => { _this.showRes(_this) }, _this.state.resTimeout)

        _this.setState({
          x: Math.floor(Math.random()*9 + 1),
          y: Math.floor(Math.random()*9 + 1),
          ready: false
        })
      }, _this.state.resTimeout + 3000)
      _this.setState({
        progressInterval: interavalId
      })
    }
  }

  timeoutFormat(num) {
    return num + ' ms';
  }

  onTimeoutChange (e) {
    this.setState({resTimeout: +e})
    if (this.state.progressInterval) { this.start(this) } // stop
  }
  
  render() {
    const {x, y} = this.state
    let res = x*y
    return (
    <div style={{textAlign: 'center'}}>
      <span className="testClass">Result timeout</span>
      <br/>
      <NumericInput
        min={1000}
        max={10000}
        value={this.state.resTimeout}
        step={500}
        format={this.timeoutFormat}
        onChange={::this.onTimeoutChange}/>
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

export default connect(mapStateToProps)(MultiplicationTestTable)
