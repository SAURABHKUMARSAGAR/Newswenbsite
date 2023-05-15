import React, { useState } from 'react'
import Style from './Gmax.module.css'

export const SignUp = () => {
    const obj = {
        firstname:'',
        lastname:'',
        email:'',
        password:'',
        confirm:''
    }
    const [signup, setSignup] = useState(obj)

    const handler =(e)=>{
        setSignup({...signup,[e.target.id]:[e.target.value]})
    }
    const Allhandler=async(e)=>{
        e.preventDefault();
        console.log(signup);
     const response = await fetch('http://localhost:8000/login',{
    method:'POST',
    body:JSON.stringify(signup),
    headers:{
            'Content-type':'application/json',
        },
  })
  const data = await response.json();
  console.log(data);

    }
  return (
    <div className={Style.loginmain}>
        <form className={Style.middle} onSubmit={(e)=>Allhandler(e)}>
       <h2>Sign UP</h2>
            <label htmlFor="firstname"></label>
            <input type="text" id='firstname' placeholder='firsname' onChange={handler}/><br />

            <label htmlFor="lastname"></label><br />
            <input type="text" id='lastname' placeholder='lastname' onChange={handler}/><br />

            <label htmlFor="mobile"></label><br />
            <input type="text" id='mobile' placeholder='mobile number' onChange={handler}/><br />

            <label htmlFor="email"></label><br />
            <input type="text" id='email' placeholder='email' onChange={handler}/><br />

            <label htmlFor="password"></label><br />
            <input type="text" id='password' placeholder='password' onChange={handler}/><br />

            <label htmlFor="confirm"></label><br />
            <input type="text" id='confirm' placeholder='confirm password' onChange={handler}/><br />

            <button>submit</button>
        </form>
    <img className={Style.backImg} src="https://images.pexels.com/photos/843266/pexels-photo-843266.jpeg?auto=compress&cs=tinysrgb&w=600" alt="imag1" />
    </div>
  )
}
