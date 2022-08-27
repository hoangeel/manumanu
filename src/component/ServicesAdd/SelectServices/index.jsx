import React from 'react'
import { useHistory } from "react-router-dom";
import "./index.scss"
import LogoManuManu from "../../../assets/img/manumanu.png"
import ImgFull from "../../../assets/img/FullServiceMenu.png"
import ImgQR from "../../../assets/img/SimpleQRRedirectService.png"
import "../../../component/Login/SignIn"

export default function SelectServices() {
    let history = useHistory();
    function handleClickLoginFull() {
        history.push("/FullServiceMenu/Step1");
    }
    function handleClickLoginQR() { 
        history.push("/QR/Step1");
    }
  return (
    <div className='SelectServices'>
        <img className='LogoManuManu' src={LogoManuManu} alt="LogoManuManu" />
        <h1 className='titleSelectServices'>Select Services</h1>
        <div className='flexSelectServices'>
            <div className='groudContent'>
                <div className='FullServiceMenu' onClick={handleClickLoginFull}>
                    <div className='ImgFull'><img  src={ImgFull} alt="FullServiceMenu" /></div>
                    <div className='textGroudContent'>Full Service Menu</div>
                </div>
                <div className='FullServiceMenu QR' onClick={handleClickLoginQR}>
                    <div className='ImgFull'><img className='ImgQR' src={ImgQR} alt="QR" /></div>
                    <div className='textGroudContent'>Simple QR Redirect Service</div>
                </div>
            </div>
        </div>
    </div>
  )
}
