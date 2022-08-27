import React, {useState} from 'react'
import { useHistory } from "react-router-dom";


export default function LoginTest(user) {
    let history = useHistory();
    
    const kickLogIn = () =>{
      console.log(user)
      history.push("/");
    }
  return (
    <div>
        <button onClick={kickLogIn}>LogIn</button>
        <br/>
        <button >aaaa </button>
    </div>
  )
}
