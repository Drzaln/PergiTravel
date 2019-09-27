import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Home from './Screens/Home'
import List from "./Screens/List";
import Detail from "./Screens/Detail";

function App () {
  return (
    <div >
      <Route path={'/'} component={Home} exact />
      <Route path={'/ticket-list'} component={List} exact />
      <Route path={'/Detail'} component={Detail} exact />
    </div>
  )
}

export default App
