import React, {useState} from 'react'
import { useHistory } from "react-router-dom";

var a = "aaaa";
function HomeTest() {
  const [user, setUser] = useState(a);
    let history = useHistory();
    const kickConnent1 = () =>{
      history.push("/Content1");
      a="Content1";
      setUser(a)
    }
    const kickConnent2 = () =>{
      history.push("/Content2");
      a="Content1"
      setUser(a)
    }  
  return (
    <div>
        <button onClick={kickConnent1}>connent1</button>
        <button onClick={kickConnent2}>connent2</button>
        {a}
        {user}
    </div>
  )
}

export default HomeTest
export {a} 


