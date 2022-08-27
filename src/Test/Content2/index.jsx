import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import {a} from "../HomeTest/index"

export default function Content2() {
    let history = useHistory();
    const [user, setUser] = useState(a);
    const kickHome = () =>{
        history.push("/");
    }
  return (
    <div> 
        <button onClick={kickHome}>Home of connent2</button>
        {a}
        {user}
    </div>
  )
}
