import React from 'react'
import {Route, Routes} from 'react-router-dom'
import SignUp from './SignUp'
import Homepage from './Homepage'
import Loginform from './Loginform'
import Aboutus from './Aboutus'
import Reviews from './Reviews'
import Contacts from './Contacts'
import AirServices from './AirServices'
import SeaServices from './SeaServices'
import GroundServices from './GroundServices'
import GetQ from './GetQ'
import Profile from './Profile'
import Payment from './Payment'
import ForgotPassword from './Forgotpassword'
import PrivateRoute from './PrivateRoute'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Loginform/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Homepage' element={<PrivateRoute><Homepage/></PrivateRoute>}/>
        <Route path='/Aboutus' element={<PrivateRoute><Aboutus/></PrivateRoute>}/>
        <Route path='/Review' element={<PrivateRoute><Reviews/></PrivateRoute>}/>
        <Route path='/Contacts' element={<PrivateRoute><Contacts/></PrivateRoute>}/>
        <Route path='/AirServices' element={<PrivateRoute><AirServices/></PrivateRoute>}/>
        <Route path='/SeaServices' element={<PrivateRoute><SeaServices/></PrivateRoute>}/>
        <Route path='/GroundServices' element={<PrivateRoute><GroundServices/></PrivateRoute>}/>
        <Route path='/GetQ' element={<PrivateRoute><GetQ/></PrivateRoute>}/>
        <Route path='/Payment' element={<PrivateRoute><Payment/></PrivateRoute>}/>
        <Route path='/profile' element={<PrivateRoute><Profile/></PrivateRoute>}/>
        <Route path='/forgotpassword' element={<ForgotPassword/>}/>
    </Routes>
  )
}

export default Routing