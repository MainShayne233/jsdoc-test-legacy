import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import DemoContainer from './demo_container'

/*
 * This is purely for running the demo application.
 * It does not affect the actual component(s)
*/

const root = document.getElementById('root')

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    root
  )
}

render(DemoContainer)

if (module.hot) module.hot.accept('./demo_container', () => render(DemoContainer))
