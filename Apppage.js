import React from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import { NAVBar } from './NAVBar'
import { SignUp } from './SignUp'
import { Login } from './Login'
import { Home } from './Home'
import Style from './Gmax.module.css'
import images  from './images/page5.png'
import { Downloads } from './Downloads'
import Details from "./Details";




export const Apppage = () => {
     const date = new Date().getFullYear()
  return (
    <div>
        <img src={images} alt="images"  style={{width:'100%'}}/>
        <BrowserRouter>
        <NAVBar/>
      
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/signup' element={<SignUp/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/downloads' element={<Downloads/>}/>
                <Route path='/details/:id' element={<Details />} />
            </Routes>
        </BrowserRouter>
        
        <footer className={Style.top}>
         <div className={Style.mid}>
          ©Copyright {date} <br />
          <a href="https://gmaxmart.com/">GmaxMart.com.</a>
         </div>
        </footer>
      
    </div>
  )
}
