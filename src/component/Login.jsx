import React from 'react'
import '../assets/css/login.css'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='body'>
        <div className='form'>
            <form className='loginform'>
                <div className='h1'>
                    <h2>Login</h2>
                </div>
                <div className='labels'>
                    <span>Username </span>
                    <input type="text" id='inputs'/>
                </div>
                <div className='labels'>
                    <span>Password </span>
                    <input type="password" id='inputs'/>
                </div>
                <div className='button'>
                <Button variant="outlined">Login</Button>
                </div>
                <span>Don't have account? <Link to="/signup" className='anc'>SignUp</Link> </span> 
            </form>
        </div>
    </div>
  )
}

export default Login