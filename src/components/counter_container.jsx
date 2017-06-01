import React, { Component } from 'react'
import Counter from './counter'

class CounterContainer extends Component {

  // LIFECYCLE

  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  // ACCESSORS
  
  count() { return this.state.count }

  // ACTIONS

  increment() { this.addToCount(1) }
  decrement() { this.addToCount(-1) }

  doubleAsync() {
    setTimeout(() => {
      this.addToCount( this.count() )
    }, 500)
  }

  // UPDATERS

  addToCount(number) {
    const { count } = this.state
    this.setState({ count: count + number })
  }


  // RENDERERS

  counterProps() {
    return {
      increment: this.increment.bind(this),
      decrement: this.decrement.bind(this),
      doubleAsync: this.doubleAsync.bind(this),
      count: this.state.count,
    }
  }

  render() {
    return React.createElement(Counter, this.counterProps())
  }
}

export default CounterContainer
