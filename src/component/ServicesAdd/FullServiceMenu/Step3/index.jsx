import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import "./index.scss"
import ImgFull from "../../../../assets/img/imgStep1.png"
import ImgQR from "../../../../assets/img/QR.png"
import ImgLink from "../../../../assets/img/Link.png"
import ImgPrint from "../../../../assets/img/print.png"
import ImgSave from "../../../../assets/img/save.png"
import {qrcode} from "../Step2/index"
import QRCode from 'qrcode.react';
import Logo from "../../../../assets/img/LognIn_1.png"

export default function FullServiceMenuStep3() {
    const [link, setLink] = useState("https://manumanu.com/menuid1223.html")
    let history = useHistory();
    function handleClickHome() {
        history.push("/");
    }
    const [qrCodeText, setQRCodeText] = useState(qrcode);
    const downloadQRCode = () => {
        const qrCodeURL = document.getElementById('qrCodeEl')
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream");
        console.log(qrCodeURL)
        let aEl = document.createElement("a");
        aEl.href = qrCodeURL;
        aEl.download = "QR_Code.png";
        document.body.appendChild(aEl);
        aEl.click();
        document.body.removeChild(aEl);
      }

  return (
    <div className='FullServiceMenuStep1'>
        <div className='flexStep1'>
            <div className='flexcontentFull'>
                <div className='contentFull'>
                    <div className='groupStep'>
                        <div className='RestaurantDetail fontStep colorF96F37'>
                            Restaurant Detail
                        </div>
                        <div className='DishMenu fontStep colorF96F37'>
                            Dish Menu
                        </div>
                        <div className='GenerateQR fontStep colorF96F37'>
                            Generate QR 
                        </div>
                    </div>
                    <p className='step'>Step 3 of 3</p>
                    <h1 className='titleStep'>Generated QR Code</h1>
                    
                    <div className='QRCode'>
                        <QRCode
                            value={qrCodeText}
                            size={320}
                            logoImage={Logo}
                        />
                    </div>
                    <div className='url'>URL</div>
                    <div className='link'>
                        <p className='link'>{link}</p>
                        <img className='link' src={ImgLink} alt="ImgLink" />
                    </div>

                    <div className='groupButton'>
                        <button className='Back buttons' id="Save1" onClick={() => {window.print();}}>Print <img src={ImgPrint} alt="ImgPrint" /></button>
                        <button className='Next buttons' id="Save2" onClick={downloadQRCode} >Save Picture <img src={ImgSave} alt="ImgSave" /></button>
                    </div>
                </div>
            </div>
            <div className='ImgFull' onClick={handleClickHome}><img className='ImgFull' src={ImgFull} alt="" /></div>
        </div>
    </div>
  )
}
