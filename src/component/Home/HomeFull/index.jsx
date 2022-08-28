import React, {useState, useEffect} from 'react'
import "./index.scss"
import LogoHome from "../../../assets/img/LognIn_1.png"
import HomeFull from "../../../assets/img/homeFull.png"
import IconQR from "../../../assets/img/homeQR.png"
import HomeAccount from "../../../assets/img/homeSetup.png"
import HomeGroup from "../../../assets/img/iconFullADD.png"
import IconType from "../../../assets/img/iconList.png"
import IconChagne from "../../../assets/img/bxs-edit-alt1.png"
import IconDelete from "../../../assets/img/bx-trash1.png"
import IconSeach from "../../../assets/img/iconsearch.png"
import HomeQR from "../HomeQR"
import HomeSetup from '../HomeSetup';


export default function Home() {
  const [render, setRender] = useState(<HomeADD/>);
  const [counter, setCounter] = useState(0);

  const [full, setFull] = useState("buttonHome homeFull colorF96F37");
  const [qr, setQr] = useState("buttonHome homeQR");
  const [setup, setSetup] = useState('buttonHome homeAccount');
  const [iconFull, setIconFull] = useState(HomeFull);
  const [iconQR, setIconQR] = useState(IconQR);
  const [iconSetup, setIconSetup] = useState(HomeAccount);

  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );
  useEffect(() => {
    async function makeRequest() {
      await delay(3000);
      setRender(<HomeList/>)
    }

    makeRequest();
  });

  function fullClick() {
    setCounter(0)
    setFull("buttonHome homeFull colorF96F37")
    setQr("buttonHome homeQR")
    setSetup('buttonHome homeAccount')
    setIconFull(HomeFull)
    setIconQR(IconQR)
    setIconSetup(HomeAccount)
  }
  function qrClick() {
    setCounter(1)
    setFull("buttonHome homeFull ")
    setQr("buttonHome homeQR colorF96F37")
    setSetup('buttonHome homeAccount')
    setIconFull(HomeAccount)
    setIconQR(HomeFull)
    setIconSetup(HomeAccount)
  }
  function setupClick() {
    setCounter(2)
    setFull("buttonHome homeFull")
    setQr("buttonHome homeQR")
    setSetup('buttonHome homeAccount colorF96F37')
    setIconFull(IconQR)
    setIconQR(IconQR)
    setIconSetup(HomeFull)
  }

  return (
    <>
      <div className='home'>
          <div className='flexHome'>
              <div className='headerSeach'>
                  <div className='logoHome'><img src={LogoHome} alt="LogoHome" /></div>
                  <div className="seachHome input-group rounded">
                      <input type="search" className="seachHome form-control rounded" placeholder="Search here" aria-label="Search here" aria-describedby="search-addon" />
                      <span className="seachHome input-group-text border-0" id="search-addon">
                          <img src={IconSeach} alt="" />
                      </span>
                  </div>
              </div>
              <div className='headerContent'>
                  <h1 className='Welcome'>Welcome Back, Jay 👋</h1>
                  <div className='groupButtonHome'>
                    <div className={full} onClick={fullClick}>
                        <span className='iconHome'><img src={iconFull} alt="HomeFull" /></span>
                        Full Menu Service
                    </div>
                    <div className={qr} onClick={qrClick}>
                        <span className='iconHome'><img src={iconQR} alt="HomeQR" /></span>
                        QR Redirect
                    </div>
                    <div className={setup} onClick={setupClick}>
                        <span className='iconHome'><img src={iconSetup} alt="HomeAccount" /></span>
                        Account Setup
                    </div>
                  </div>
              </div>
          </div>
      </div>
      <div className='home backgroundHome'>
        <div className='contentHome'>
          {counter === 0 ? render : counter === 1 ? <HomeQR/>: <HomeSetup/>}
        </div>
      </div>
    </>
  )
}

function HomeADD() {
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

function HomeList() {
  const dataList = 
    [
      {
        type: "menu",
        url: "https://cooking.nytimes.com/",
        link: "https://id.qr-code-generator.com/",
      },
      {
        type: "menu",
        url: "https://cooking.nytimes.com/",
        link: "https://id.qr-code-generator.com/",
      },
      {
        type: "menu",
        url: "https://cooking.nytimes.com/",
        link: "https://id.qr-code-generator.com/",
      },
      {
        type: "menu",
        url: "https://cooking.nytimes.com/",
        link: "https://id.qr-code-generator.com/",
      },
      {
        type: "menu",
        url: "https://cooking.nytimes.com/",
        link: "https://id.qr-code-generator.com/",
      },
    ]
  return(
    <div className='homeList'>
        <div className='headerHomeContent'>
            <h1 className='menuList'>Menu List<span className='menuList'>Total Records: 10</span></h1>
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
                        <td className='td'><span className='iconType'><img src={IconType} alt="IconType" /></span>{index.type}</td>
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






