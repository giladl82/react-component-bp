# A react component boilerplate

This is a full, ready to use boilerplate, for creating a React component

## Need to know

1. The components code, should be placed under the 'src' folder
2. After running 'webpack', the compiled code will be placed in the 'build' folder
3. Compiled code, will be splitted to 2 file.
  - The component name .js file
  - vendors.[hash].js
4. In order to use css inside the component,
  - You should use "import style from './style.scss'"
  - Set the className property using the 'style' object created by the import
    This is very important, because, we use css modules and selectors names, will be changed
5. Every component should expose a method on the window object, to enable a render under a non react app.
  For example:
  
  window.renderComponet = (selector, props) => {
    ReactDOM.render(<Parent {...props} />, document.querySelector(selector))
  }

  This should be done in the main index.js
6. This same index.js should export all the components we like to make importable


### Need to do

1. Link to npm package, and check under a full react app

	

