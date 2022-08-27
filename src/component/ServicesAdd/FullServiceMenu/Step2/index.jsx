import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import 'react-calendar/dist/Calendar.css';
import "./index.scss"
import Select from 'react-select'
import ImgFull from "../../../../assets/img/imgStep1.png"
import IconDelete from "../../../../assets/img/bx-trash1.png"
import IconEdit from "../../../../assets/img/bxs-edit-alt1.png"
import IconBack from "../../../../assets/img/Frame35.png"
var qrcode;
export default function FullServiceMenuStep2() {
    const [dateDish, setDateDish] = useState(
        [
            {
                name: "Beacon Eggs",
                content: "Ingredients detail lorem ipsum dolor sit amet...",
                price: "$5.00",
            },
            {
                name: "Mapple soy tofu",
                content: "Ingredients detail lorem ipsum dolor sit amet...",
                price: "$5.00",
            },
            {
                name: "Baby Eggplans",
                content: "Ingredients detail lorem ipsum dolor sit amet...",
                price: "$5.00",
            },
        ]
    )
    const [name, setName] = useState()
    const [price, setPrice] = useState()
    const [text, setText] = useState()

    const Countries = [
        { label: "Healthy", value: 355 },
        { label: "Diet", value: 54 },
        { label: "Austria", value: 43 },
        { label: "Cocos Islands", value: 61 },
        { label: "Kuwait", value: 965 },
        { label: "Sweden", value: 46 },
        { label: "Venezuela", value: 58 }
      ];

    let history = useHistory();
    function handleClickStep1() {
        history.push("/FullServiceMenu/Step1");
    }
    function handleClickStep3() {
        history.push("/FullServiceMenu/Step3");
        qrcode = dateDish.map((data, index)=>{
            const {name, content, price}= data;
            return(
                <div>
                    <div className='allDish' key={index}>
                        <div className='groupHeader'>
                            <div className='dishName'>
                                {name} 
                            </div>
                            <h6 className='dishContent'>{content}</h6>
                            <p className='dishPrice'>{price}</p>
                        </div>
                    </div>
                </div>
            )
        });
    }
    const addTableRows = ()=>{
  
        const rowsInput={
            name:name,
            content:price,
            price:text,  
        } 
        setDateDish([...dateDish, rowsInput])
      
    }
    const deleteTableRows = (index)=>{
        const rows = [...dateDish];
        rows.splice(index, 1);
        setDateDish(rows);
    }
    const handleChange = (index, evnt)=>{
        const { name, value } = evnt.target;
        const rowsInput = [...dateDish];
        rowsInput[index][name] = value;
        setDateDish(rowsInput);
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
                        <div className='GenerateQR fontStep'>
                            Generate QR 
                        </div>
                    </div>
                    <p className='step'>Step 2 of 3</p>
                    <h1 className='titleStep'>Add Dish Menu</h1>

                    <button type="button" className="btn btn-primary NewDish" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        + New Dish
                    </button>
                    <div className="modal fade backgroundModal" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className='modal-dialog FullServiceMenuStep1'>
                            <div className='flexStep1'>
                                <div className='flexcontentFull'>
                                    <div className='modal-content contentFull'>
                                        <div className='iconBack' data-bs-dismiss="modal"><img src={IconBack} alt="" /></div>
                                        <h1 className='titleStep'>Add Dish Menu</h1>

                                        <div className="input-group mb-3 ">
                                            <input type="file" className="form-control fileImg" id="inputGroupFile02" />
                                        </div>

                                        <div className="RestaurantName">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Dish Name <span>*</span></label>
                                            <input 
                                                type="email" 
                                                className="form-control" 
                                                id="exampleFormControlInput1" 
                                                placeholder="Food name"
                                                value={name} 
                                                onChange={(event)=>{setName(event.target.value)}}
                                            />
                                        </div>
                                        <div className="RestaurantName">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Dish Price <span>*</span></label>
                                            <input 
                                                type="email" 
                                                className="form-control" 
                                                id="exampleFormControlInput1" 
                                                placeholder="Enter Price"
                                                value={price} 
                                                onChange={(event)=>{setPrice(event.target.value)}}
                                            />
                                        </div>
                                        <div className="RestaurantName">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Description <span>*</span></label>
                                            <input 
                                                type="email" 
                                                className="form-control" 
                                                id="exampleFormControlInput1" 
                                                placeholder="About this food" 
                                                value={text} 
                                                onChange={(event)=>{setText(event.target.value)}}
                                            />
                                        </div>

                                        
                                        <div className="formRestaurantTag">
                                            <label htmlFor="formGroupExampleInput2" className="form-label">Dish Tag <span>*</span></label>
                                            <div className="dropdown-container">
                                                <Select  options={Countries}
                                                width='200px'
                                                placeholder="Select tags"
                                                isSearchable={true}
                                                id="cssSelect"
                                                isMulti />
                                            </div>
                                        </div>
                                        <button className='done' data-bs-dismiss="modal" onClick={addTableRows}>Done</button>
                                    </div>
                                </div>    
                                <div className='modal-content ImgFull'><img className='ImgFull' src={ImgFull} alt="" /></div>
                            </div>
                        </div>
                    </div>

                    <DataDish dateDish={dateDish} deleteTableRows={deleteTableRows} handleChange={handleChange} />

                    <div className='groupButton'>
                        <button className='Back buttons' onClick={handleClickStep1}>Back</button>
                        <button className='Next buttons' onClick={handleClickStep3}>Generate QR</button>
                    </div>
                </div>
            </div>
            <div className='ImgFull'><img className='ImgFull' src={ImgFull} alt="" /></div>
        </div>
    </div>
  )
}
function DataDish({dateDish, deleteTableRows, handleChange}) {
    return(
        
        dateDish.map((data, index)=>{
            const {name, content, price}= data;
            return(
                <div>
                    <div className='allDish' key={index}>
                        <div className='groupHeader'>
                            <div className='dishName'>
                                {name} 
                            </div>
                            <h6 className='dishContent'>{content}</h6>
                            <p className='dishPrice'>{price}</p>
                        </div>
                        <div className='groupDeleteEdit'>
                            <div className='edit' data-bs-toggle="collapse" href=".collapseExample" role="button" aria-expanded="false" ><img src={IconEdit} alt="" /></div>
                            <div className='delete' onClick={()=>(deleteTableRows(index))}><img src={IconDelete} alt="" /></div>
                        </div>
                    </div>
                        <div className="collapse collapseExample" >
                            <div className='allDish' key={index}>
                                <div className='groupHeader'>
                                    <div className='dishName'>
                                        <input 
                                            type="text" 
                                            value={name} 
                                            onChange={(evnt)=>(handleChange(index, evnt))} 
                                            name="name" 
                                            className="dishName"
                                        />
                                    </div>
                                    <h6 className='dishContent'>
                                        <input 
                                            type="text" 
                                            value={content} 
                                            onChange={(evnt)=>(handleChange(index, evnt))} 
                                            name="content" 
                                        />
                                    </h6>
                                    <p className='dishPrice'>
                                        <input 
                                            type="text" 
                                            value={price} 
                                            onChange={(evnt)=>(handleChange(index, evnt))} 
                                            name="price" 
                                            className="form-control"
                                        />
                                    </p>
                                </div>
                            </div>
                        </div>
                        </div>

            )
        })
   
    )
}

export {qrcode}
