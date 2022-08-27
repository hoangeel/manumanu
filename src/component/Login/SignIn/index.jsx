import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import "./index.scss"
import Logo from "../../../assets/img/LognIn_1.png"
import IconSignIn from "../../../assets/img/LognIn_3.png"
import ImgSignIn from "../../../assets/img/LognIn_2.png"

export default function SignIn() {
    const [type,setType] = useState("password")
    const typeClick = () => {
        setType( type === "password" ? "text" : "password")
    }
    let history = useHistory();
    function handleClickHome() {
        history.push("/");
    }
    function handleClickForgot() {
        history.push("/login/ForgotYourPassword");
    }
    function handleClickRegister() {
        history.push("/login/Register");
    }
    function handleClickSelectServices() {
        console.log()
        history.push("/login/SignIn");
    }
  return (
    <div className='login'>
        <div className='flexLogin'>
            <div className='content' >
                <div className='flexContent '>
                    <img onClick={handleClickHome} className='logoLogIn' src={Logo} alt="Logo" />
                    <h1 className='titleLogIn'>Sign In</h1>
                    <p className='noteLogin'>Hi dear, please enter your details to login</p>
                    <div className="form-group-login">
                        <label for="exampleFormControlInput1" className="form-label-login">Email</label>
                        <div className='group-input-login'>
                            <input type="email" className="form-control-login" name="true" id="true" aria-describedby="emailHelpId" placeholder="Enter email address" />
                        </div>
                    </div>
                    <div className="form-group-login">
                        <label for="exampleFormControlInput1" className="form-label-login">Password</label>
                        <div className='group-input-login'>
                            <input type={type} className="form-control-login" name="true" id="true" placeholder="Enter password" />
                            <button className='iconSignIn' onClick={typeClick}><img src={IconSignIn} alt="iconSignIn" /></button>
                        </div>
                    </div>
                    <div className='ForgotPassword' onClick={handleClickForgot}>Forgot Password</div>
                    <button type="button" className="buttonLogin" onClick={handleClickSelectServices}>Login</button>
                    <div className='textEndLogIn'>Don’t have account? <span onClick={handleClickRegister}>Register for Free</span></div>
                </div>
            </div>
            <div className='imgLogIn'>
                <img src={ImgSignIn} alt="imgSignIn" />
            </div>
        </div>
    </div>
  )
}
