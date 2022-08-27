import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import "./index.scss"
import QR from "../../../../assets/img/ImgQR.png"
import ImgQR from "../../../../assets/img/QR.png"
import ImgLink from "../../../../assets/img/Link.png"
import ImgPrint from "../../../../assets/img/print.png"
import ImgSave from "../../../../assets/img/save.png"

export default function QRStep2() {
    const [link, setLink] = useState("https://manumanu.com/menuid1223.html")
    let history = useHistory();
    function handleClickHome() {
        history.push("/");
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
                        <div className='QR fontSteps colorF96F37'>
                            Generate QR Code
                        </div>
                    </div>
                    <p className='step'>Step 3 of 3</p>
                    <h1 className='titleStep'>Generated QR Code</h1>
                    
                    <div className='QRCode'>
                        <img className='QRCode' src={ImgQR} alt="ImgQR" />
                    </div>
                    <div className='url'>URL</div>
                    <div className='link'>
                        <p className='link'>{link}</p>
                        <img className='link' src={ImgLink} alt="ImgLink" />
                    </div>

                    <div className='groupButton'>
                        <button onClick={() => {window.print();}} className='Back buttons' id="Save1"  >Print <img src={ImgPrint} alt="ImgPrint" /></button>
                        <button onClick={() => {window.showSaveFilePicker(<img className='link' src={ImgLink} alt="ImgLink" />);}} className='Next buttons' id="Save2">Save Picture <img src={ImgSave} alt="ImgSave" /></button>
                    </div>
                </div>
            </div>
            <div className='ImgFull' onClick={handleClickHome}><img className='ImgFull' src={QR} alt="" /></div>
        </div>
    </div>
  )
}
