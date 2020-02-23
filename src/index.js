import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {render} from 'react-dom'
import {HomePage} from './components/home'
import {About} from './components/about'
import './index.scss'

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={HomePage} />
      <Route path="/about" exact component={About} />
    </Router>
  )
}

const DOMelement = document.querySelector('#app')

render(<App />, DOMelement)

export {App}
