import React, { Component } from 'react'

class Counter extends Component {

  render() {
    const { increment, decrement, count, doubleAsync } = this.props
    return (
      <div 
        style={{ margin: '0 auto' }} 
      >
        <h2>
          Count: {count}
        </h2>
        <button 
          className='btn btn-default' 
          onClick={increment}
        >
          Increment
        </button>
        {' '}
        <button 
          className='btn btn-default' 
          onClick={decrement}
        >
          Decrement
        </button>
        {' '}
        <button 
          className='btn btn-default' 
          onClick={doubleAsync}
        >
          Double (Async)
        </button>
      </div>
    )
  }
}

export default Counter
