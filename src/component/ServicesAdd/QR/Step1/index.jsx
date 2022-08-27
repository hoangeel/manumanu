import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import "./index.scss"
import QR from "../../../../assets/img/ImgQR.png"

export default function QRStep1() {
    const [link, setLink] = useState("Enter link")
    let history = useHistory();
    function handleClickHome() {
        history.push("/");
    }
    function handleClickStep2() {
        history.push("/QR/Step2");
    }


  return (
    <div className='FullServiceMenuStep1'>
        <div className='flexStep1'>
            <div className='flexcontentFull'>
                <div className='contentFull'>

                    <div className='groupStep'>
                        <div className='detail fontSteps colorF96F37'>
                            Restaurant Detail
                        </div>
                        <div className='QR fontSteps'>
                            Generate QR Code
                        </div>
                    </div>
                    <p className='step'>Step 1 of 2</p>
                    <h1 className='titleStep'> Add QR Links</h1>
                    
                    <div className="RestaurantName">
                        <label htmlFor="exampleFormControlInput1" className="form-label QR">QR Redirect Link <span>*</span></label>
                        <input 
                            type="link" 
                            className="form-control" 
                            id="exampleFormControlInput1" 
                            placeholder="Enter link"
                            value={link} 
                            onChange={(event)=>{setLink(event.target.value)}}
                        />
                    </div>
                    

                    <div className='groupButton'>
                        <button className='Back buttons' onClick={handleClickHome} >Back</button>
                        <button className='Next buttons' onClick={handleClickStep2} >Generate QR</button>
                    </div>
                </div>
            </div>    
            <div className='ImgFull'><img className='ImgFull' src={QR} alt="" /></div>
        </div>
    </div>
  )
}
