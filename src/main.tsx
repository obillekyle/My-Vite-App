import React from 'react'
import ReactDOM from 'react-dom'
import '../styles/index.scss'
import App from './App'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Users } from './screens/users'
import { Items } from './screens/items'
import { HomePage } from './screens/home'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/"      element={<HomePage />}/>
          <Route path="items"  element={<Items    />}/>
          <Route path="users"  element={<Users    />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
