import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Home from './Screens/Home'
import List from "./Screens/List";

function App () {
  return (
    <div >
      <Route path={'/'} component={Home} exact />
      <Route path={'/ticket-list'} component={List} exact />
    </div>
  )
}

export default App
