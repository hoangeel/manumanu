import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Home from '../Home/HomeFull';
import ForgotYourPassword from '../Login/ForgotYourPassword';
import Register from '../Login/Register';
import SignIn from '../Login/SignIn';
import VerifyEmailAddress from '../Login/VerifyEmailAddress';
import FullServiceMenuStep1 from '../ServicesAdd/FullServiceMenu/Step1';
import FullServiceMenuStep2 from '../ServicesAdd/FullServiceMenu/Step2';
import FullServiceMenuStep3 from '../ServicesAdd/FullServiceMenu/Step3';
import QRStep1 from '../ServicesAdd/QR/Step1';
import QRStep2 from '../ServicesAdd/QR/Step2';
import SelectServices from '../ServicesAdd/SelectServices';

export default function ReactRouters() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact children={<Home />} />
          <Route path="/SelectServices" children={<SelectServices/>} />
          <Route path="/login/SignIn" children={<SignIn/>} />
          <Route path="/login/ForgotYourPassword" children={<ForgotYourPassword/>} />
          <Route path="/login/Register" children={<Register/>} />
          <Route path="/login/VerifyEmailAddress" children={<VerifyEmailAddress/>} />
          <Route path="/FullServiceMenu/Step1" children={<FullServiceMenuStep1/>} />
          <Route path="/FullServiceMenu/Step2" children={<FullServiceMenuStep2/>} />
          <Route path="/FullServiceMenu/Step3" children={<FullServiceMenuStep3/>} />
          <Route path="/QR/Step1" children={<QRStep1/>} />
          <Route path="/QR/Step2" children={<QRStep2/>} />
        </Switch>
    </Router>
  )
}
