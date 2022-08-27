import React from 'react'
import { useHistory } from "react-router-dom"
import "./index.scss"
import Logo from "../../../assets/img/LognIn_1.png"
import ImgSignIn from "../../../assets/img/LognIn_2.png"

export default function VerifyEmailAddress() {
  let history = useHistory();
  function handleClickHome() {
    history.push("/");
  }
  return (
    <div className='login'>
        <div className='flexLogin'>
            <div className='content' >
              <div className='flexContent'>
                <img onClick={handleClickHome} className='logoLogIn' src={Logo} alt="Logo" />
                <h1 className='titleLogIn'>Verify Email Address</h1>
                <p className='noteLogin'>We’ve sent a verification email to: <span>jayowner@manumanu.com</span></p>
                <button type="button" className="buttonLogin">Send Email Activation</button>
                <div className='textEndLogIn'>Click the link in your email to verify your account. If you can’t fint the email check your spam folder or  <span>Resend.</span></div>
              </div>
            </div>
            <div className='imgLogIn'><img src={ImgSignIn} alt="imgSignIn" /></div>
        </div>
    </div>
  )
}
