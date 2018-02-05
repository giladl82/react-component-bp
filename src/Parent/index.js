import React, { Component } from 'react'

import Child from '../Child'

import style from './style.scss'

class Parent extends Component {
  handleClick = () => {
    console.log('Click')
  }

  render () {
    return (
      <div onClick={this.handleClick} className={style['parent-component']} >
        Parent component
        <Child />
      </div>
    )
  }
}

export default Parent
