import React from 'react'
import { useHistory } from "react-router-dom";
import "./index.scss"
import ImgSignIn from "../../../assets/img/LognIn_2.png"
import IconBack from "../../../assets/img/Frame35.png"

export default function ForgotYourPassword() {
    let history = useHistory();
    function handleClickHome() {
        history.push("/login/SignIn");
    }
    function handleClickRegister() {
        history.push("/login/Register");
    }
  return (
    <div className='login'>
        <div className='flexLogin'>
            <div className='content' >
                <div className='flexContent'>
                    <img onClick={handleClickHome} className='logoLogIn' src={IconBack} alt="Logo" />
                    <h1 className='titleLogIn'>Forgot Your Password</h1>
                    <p className='noteLogin'>Enter your email address and we’ll send you the instructions for resetting the password.</p>
                    <div className="form-group-login">
                        <label for="exampleFormControlInput1" className="form-label-login">Email</label>
                        <div className='group-input-login'>
                            <input type="email" className="form-control-login" name="true" id="true" aria-describedby="emailHelpId" placeholder="Enter email address" />
                        </div>
                    </div>
                    <button type="button" className="buttonLogin">Reset password</button>
                    <div className='textEndLogIn'>Don’t have account? <span onClick={handleClickRegister}>Register for Free</span></div>
                </div>    
            </div>
            <div className='imgLogIn'><img src={ImgSignIn} alt="imgSignIn" /></div>
        </div>
    </div>
  )
}
