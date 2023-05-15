import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Style from './Gmax.module.css'
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import {BiArrowToBottom} from "react-icons/bi";


export const NAVBar = (props) => {
    const [date,setDate] = useState(new Date())
    const onchange =(e)=>{
       setDate(e.target.value)
    }
   
  return (
    <>

    <header className={Style.head}>
    <nav className={Style.nav}>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/signup'>Sign UP</NavLink>
        <NavLink to='/login'>Login</NavLink>

    </nav>
        <nav className={Style.divIcon}>
        <div className={Style.icom}>
        <NavLink to='https://www.google.com/'>
        <FcGoogle />
        </NavLink>

        <NavLink to='https://www.facebook.com/'>
        <FaFacebook />
        </NavLink>

        <NavLink to='https://web.whatsapp.com/'>
        <BsWhatsapp />
        </NavLink>
        <NavLink to='/downloads'><BiArrowToBottom/></NavLink>
       
        
        <input className="form-control me-2" type="date"  value={date} onChange={onchange}/>
        
        </div>
        </nav>
</header>
 


    </>
  )
}
