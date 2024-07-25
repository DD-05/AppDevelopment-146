import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import SignUp from './Signup'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
    </Routes>
  )
}

export default Routing