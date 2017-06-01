import React, { Component } from 'react'
import { Counter } from '../src/index'

const defaultProps = {}

class DemoContainer extends Component {

  style() {
    return {
      textAlign: 'center',
    }
  }

  render () {
    return (
      <div style={this.style()}>
        {React.createElement(Counter, defaultProps)}
      </div>
    )
  }
}

export default DemoContainer
