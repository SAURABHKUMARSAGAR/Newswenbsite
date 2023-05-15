import React, { useState } from 'react'
import Style from './Gmax.module.css'

export const Login = () => {
    const obj2 ={
      username:'',
      password:'',

    }
    const [login,setLogin] = useState(obj2)
    const AllHandler=(e)=>{
       setLogin({...login, [e.target.id]:[e.target.value]})
    }

    const handlers=async(e)=>{
        e.preventDefault()
         console.log(login);
  const response = await fetch('http://localhost:8000/login',{
    method:'GET',
  })
  const data = await response.json();
  console.log(data);
         
    }
  return (
    <div className={Style.loginmain}>
     <form className={Style.middle} onSubmit={(e)=>handlers(e)}>
     <h2>Login</h2>
        <label htmlFor="username" ></label><br />
        <input type="text" id='username'placeholder='Enter a username' onChange={AllHandler}/><br /><br />

        <label htmlFor="password" ></label><br />
        <input type="text" id='password' placeholder='Enter a password' onChange={AllHandler}/><br /><br />

        <button>Login</button>
     </form>
    <img className={Style.backImg} src="https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=600" alt="imag1" />
    </div>
  )
}
