import React from 'react'
import ReactDOM from 'react-dom'

import Parent from './Parent'

window.renderComponet = (selector, props) => {
  ReactDOM.render(<Parent {...props} />, document.querySelector(selector))
}

export { Parent }
