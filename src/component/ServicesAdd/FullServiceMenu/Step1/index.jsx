import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import Calendar from 'react-calendar'
import Select from 'react-select'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'
import "./index.scss"
import IconCalendar from "../../../../assets/img/iconCalendar.png"
import IconCalendarButton from "../../../../assets/img/Button.png"
import ImgFull from "../../../../assets/img/imgStep1.png"

export default function FullServiceMenuStep1() {
    const [dateState, setDateState] = useState(new Date())
    const [DDYYY, setDDYYY] = useState(moment(dateState).format('MMMM Do YYYY'))

    let history = useHistory();
    function handleClickHome() {
        history.push("/");
    }
    function handleClickStep2() {
        history.push("/FullServiceMenu/Step2");
    }


    const changeDate = (e) => {
        setDateState(e)
    }
    const Countries = [
        { label: "Healthy", value: 355 },
        { label: "Diet", value: 54 },
        { label: "Austria", value: 43 },
        { label: "Cocos Islands", value: 61 },
        { label: "Kuwait", value: 965 },
        { label: "Sweden", value: 46 },
        { label: "Venezuela", value: 58 }
      ];
  return (
    <div className='FullServiceMenuStep1'>
        <div className='flexStep1'>
            <div className='flexcontentFull'>
                <div className='contentFull'>
                    <div className='groupStep'>
                        <div className='RestaurantDetail fontStep colorF96F37'>
                            Restaurant Detail
                        </div>
                        <div className='DishMenu fontStep'>
                            Dish Menu
                        </div>
                        <div className='GenerateQR fontStep'>
                            Generate QR 
                        </div>
                    </div>
                    <p className='step'>Step 1 of 3</p>
                    <h1 className='titleStep'>Add Restaurant Detail</h1>

                    <div className="input-group mb-3 ">
                        <input type="file" className="form-control fileImg" id="inputGroupFile02" />
                    </div>

                    <div className="RestaurantName">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Restaurant Name <span>*</span></label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your restaurant name" />
                    </div>

                    <div className="Calendar">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Restaurant Hours <span>*</span></label>
                            <span id="addon-wrapping">
                                <div className="dropdown">
                                    <div data-bs-toggle="dropdown" className='day'>{moment(dateState).format('MMMM Do YYYY')}</div>
                                    <div id="dropdownMenuButton1" aria-expanded="false" data-bs-toggle="dropdown"><img  src={moment(dateState).format('MMMM Do YYYY') === DDYYY ? IconCalendar : IconCalendarButton} alt="" /></div>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <Calendar 
                                        value={dateState}
                                        onChange={changeDate}
                                        />
                                    </ul>
                                </div> 
                            </span>
                    </div>
                    <div className="formRestaurantTag">
                        <label htmlFor="formGroupExampleInput2" className="form-label">Restaurant Tag <span>*</span></label>
                        <div className="dropdown-container">
                            <Select  options={Countries}
                            width='200px'
                            placeholder="Select tags"
                            isSearchable={true}
                            id="cssSelect"
                            isMulti />
                        </div>
                    </div>

                    <div className="RestaurantCurrency">
                        <label htmlFor="formGroupExampleInput2" className="form-label">Restaurant Currency <span>*</span></label>
                        <select className="form-select" aria-label="Default select example">
                            <option selected>USD</option>
                            <option value={1}>1 USD</option>
                            <option value={2}>2 USD</option>
                            <option value={3}>3 USD</option>
                        </select>
                    </div>

                    <div className='groupButton'>
                        <button className='Back buttons' onClick={handleClickHome}>Back</button>
                        <button className='Next buttons' onClick={handleClickStep2}>Next</button>
                    </div>
                </div>
            </div>
            <div className='ImgFull'><img className='ImgFull' src={ImgFull} alt="" /></div>
        </div>
    </div>
  )
}
