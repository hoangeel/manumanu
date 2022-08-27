import React, {useState,useEffect} from 'react'
import "./index.scss"
import IconQR from "../../../assets/img/iconQR.png"
import HomeGroup from "../../../assets/img/iconQRADD.png"
import IconChagne from "../../../assets/img/bxs-edit-alt1.png"
import IconDelete from "../../../assets/img/bx-trash1.png"


export default function HomeQR() {
  const [render, setRender] = useState(<QRADD/>);

  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );
  useEffect(() => {
    async function makeRequest() {
      await delay(2000);
      setRender(<QRList/>)
    }

    makeRequest();
  });


  return (
    <div>
    {render}
    </div>
  )
}

function QRADD() {
  return(
    <div className='homeADD'>
      <div className='flexHomeADD'>
        <div className='homeGroup'><img className='homeGroup' src={HomeGroup} alt="HomeGroup" /></div>
        <p className='textHomeADD'>There is no things that can be displayed yet, try to add new one.</p>
        <button className='homeAdd'>Add New Menu +</button>
      </div>
    </div>
  )
}

function QRList() {
  const dataList = 
    [
      {
        type: "QR",
        url: "https://cooking.nytimes.com/",
        link: "https://id.qr-code-generator.com/",
      },
      {
        type: "QR",
        url: "https://cooking.nytimes.com/",
        link: "https://id.qr-code-generator.com/",
      },
      {
        type: "QR",
        url: "https://cooking.nytimes.com/",
        link: "https://id.qr-code-generator.com/",
      },
      {
        type: "QR",
        url: "https://cooking.nytimes.com/",
        link: "https://id.qr-code-generator.com/",
      },
      {
        type: "QR",
        url: "https://cooking.nytimes.com/",
        link: "https://id.qr-code-generator.com/",
      },
    ]
  return(
    <div className='homeList'>
        <div className='headerHomeContent'>
            <h1 className='menuList'>QR Redirect<span className='menuList'>Total Records: 10</span></h1>
            <button className='addHomeFull'>ADD + </button>
        </div>
        <table className="table">
            <tbody>
                <tr className='listContent'>
                    <td className='Type'>Type</td>
                    <td className='URL'>Redirect URL</td>
                    <td className='QR'>Link to QR</td>
                    <td className='Action'>Action</td>
                </tr>
                {dataList.map((index,key) => {
                    return(
                    <tr key={key}>
                        <td className='td'><span className='iconType'><img src={IconQR} alt="IconType" /></span>{index.type}</td>
                        <td className='URL'>{index.url}</td>
                        <td className='QR'>{index.link}</td>
                        <td className='td'>
                            <span className='chagneList'><img src={IconChagne} alt="IconChagne" /></span>
                            <span className='deleteList'><img src={IconDelete} alt="IconDelete" /></span>
                        </td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}
