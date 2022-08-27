import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import {a} from "../HomeTest/index"
import "./index.css"

export default function Content1() {
  let history = useHistory();
  const [name, setName] = useState();
  const kickHome = () =>{
      history.push("/");
  }
  const kickDelete = () =>{
    setName("")
    console.log("delete" + name)
  }
  const kickChagne = (e) =>{
    setName(e.target.value)
    console.log("chagne " + name)
  }
  return (
    <div> 
      <div className="custom-file">
  <input type="file" className="custom-file-input" id="customFileLang" lang="es" />
  <label className="custom-file-label" htmlFor="customFileLang">Seleccionar Archivo</label>
</div>
        <button onClick={kickHome}>Home of connent1</button>
        {a}
        <input type="file" onChange={kickChagne} />
        <div style={{width:"50px",height:"50px", color:"red"}}></div>
        {name}
        <button onClick={kickDelete}>delete</button>

    </div>
  )
}



