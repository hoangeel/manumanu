import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import "./index.scss"
import Logo from "../../../assets/img/LognIn_1.png"
import IconSignIn from "../../../assets/img/LognIn_3.png"
import ImgSignIn from "../../../assets/img/Rectangle16.png"

export default function Register() {
    const [type,setType] = useState("password")
    const typeClick = () => {
        setType( type === "password" ? "text" : "password")
    }
    let history = useHistory();
    function handleClickHome() {
        history.push("/");
    }
    function handleClickSignIn() {
        history.push("/login/SignIn");
    }
    function handleClickVerifyEmailAddress() {
        history.push("/login/VerifyEmailAddress");
    }
  return (
    <div className='login'>
        <div className='flexLogin'>
            <div className='content' >
                <div className='flexContent'>
                    <img onClick={handleClickHome} className='logoLogIn' src={Logo} alt="Logo" />
                    <h1 className='titleLogIn'>Register</h1>
                    <p className='noteLogin'>Welcome, new member</p>
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
                    <div className="form-group-login">
                        <label for="exampleFormControlInput1" className="form-label-login">Confirm Password</label>
                        <div className='group-input-login'>
                            <input type={type} className="form-control-login" name="true" id="true" placeholder="Enter password" />
                            <button className='iconSignIn' onClick={typeClick}><img src={IconSignIn} alt="iconSignIn" /></button>
                        </div>
                    </div>
                    <div className="form-check">
                        <input name="true" className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                        <label className="tickAgree" htmlFor="flexCheckDefault">
                            I agree to ManuManu Terms of Use and Privacy Policy
                        </label>
                    </div>               

                    <button onClick={handleClickVerifyEmailAddress} type="button" className="buttonLogin">Create Account</button>
                    <div className='textEndLogIn'>Already have an account? <span onClick={handleClickSignIn}>Login</span></div>
                </div>
            </div>
            <div className='imgLogIn'><img src={ImgSignIn} alt="imgSignIn" /></div>
        </div>
    </div>
  )
}
