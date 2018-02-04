import React from 'react'

import Child from '../Child'

import style from './style.scss'

const Parent = props => {
  return (
    <div className={style['parent-component']}>
      Parent component
      <Child />
    </div>
  )
}

export default Parent
