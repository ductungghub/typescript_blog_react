import React from 'react'
import { Route, BrowserRouter, Routes, } from 'react-router-dom'

import {NotFound, Header, Footer} from './components/public/'
import myPath from './utils/path'
import { Home, Login, Register } from './pages'


const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
          <Header/>
        <Routes>
          <Route path={myPath.HOME} element={<Home />} />
          <Route path={myPath.LOGIN} element={<Login />}/>
          <Route path={myPath.REGISTER} element={<Register />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
