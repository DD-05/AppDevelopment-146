import React from 'react'
import '../assets/css/signup.css'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='body1'>
        <div className='form1'>
            <form className='signupform'>
                <div className='h2'>
                    <h2>SignUp</h2>
                </div>
                <div className='labels1'>
                    <label className='user'>Username </label>
                    <input type="text" id='inputs'/>
                </div>
                <div className='labels1'>
                    <label className='email'>Email </label>
                    <input type="email" id='inputs'/>
                </div>
                <div className='labels1'>
                    <label className='pass'>Password </label>
                    <input type="password" id='inputs'/>
                </div>
                <div className='labels1'>
                    <label className='cpass'>Confirm Password </label>
                    <input type="password" id='inputs'/>
                </div>
                <div className='button1'>
                <Button variant="outlined">SignUp</Button>
                </div>
                <span>Already have account? <Link to="/" id='an'>Login</Link></span>
            </form>
        </div>
    </div>
  )
}

export default SignUp