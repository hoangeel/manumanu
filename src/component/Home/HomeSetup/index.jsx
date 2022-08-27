import React from 'react'
import "./index.scss"
import { useHistory } from "react-router-dom";


export default function HomeSetup() {
    let history = useHistory();
    function handleClickSelectServices() {
        history.push("/SelectServices");
    }
  return (
    <div className='setup'>
        <div className='flexSetup'>
            <div className='Account'>
                <h2 className='Account'>Account Information</h2>
                <div className='groupCard'>
                    <div className='groupText'>
                        <p className='headerText'>Email</p>
                        <p className='contentText'>jayowner@manumanu.com</p>
                    </div>
                    <button className='buttonChange'>Change</button>
                </div>
                <div className='groupCard'>
                    <div className='groupText'>
                        <p className='headerText'>Password</p>
                        <p className='contentText'>Last Update: 12/03/2022</p>
                    </div>
                    <button className='buttonChange'>Change</button>
                </div>
                <div className='groupCard'>
                    <div className='groupText'>
                        <p className='headerText'>Credit Card</p>
                        <p className='contentText'>Visa - Card ending in 1234</p>
                    </div>
                    <button className='buttonChange'>Change</button>
                </div>
            </div>

            <div className='Account'>
                <h2 className='Account'>Account Removal</h2>
                <p className='Disabling'>Disabling your account means you will stop the service</p>
                <div className='groupButton'>
                    <button className='DisableAccount'>Disable Account</button>
                    <button className='DeactivateService' onClick={handleClickSelectServices}>Deactivate Service</button>
                </div>
            </div>
        </div>
    </div>
  )
}
