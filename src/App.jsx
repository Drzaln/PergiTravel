import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Home from './Screens/Home'

function App () {
  return (
    <div >
      <Route path={'/'} component={Home} exact />
    </div>
  )
}

export default App
