import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import CounterContainer from '../src/components/counter_container'
import Counter from '../src/components/counter'

describe('Counter', () => {
  it ('Renders the counter component', () => {
    const container = mount( <CounterContainer /> )
    const count = container.find('h2')
    expect( count.text() ).to.equal('Count: 0')
  })
})
