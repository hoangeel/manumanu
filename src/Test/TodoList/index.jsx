import { useState } from "react"
import "./index.scss"
export default function AddDeleteTableRows(){

  const [rowsData, setRowsData] = useState([]);

  const addTableRows = ()=>{

      const rowsInput={
          fullName:'',
          emailAddress:'',
          salary:''  
      } 
      setRowsData([...rowsData, rowsInput])
    
  }
 const deleteTableRows = (index)=>{
      const rows = [...rowsData];
      rows.splice(index, 1);
      setRowsData(rows);
 }

 const handleChange = (index, evnt)=>{
  
  const { name, value } = evnt.target;
  const rowsInput = [...rowsData];
  rowsInput[index][name] = value;
  setRowsData(rowsInput);



}
  return(
      <div className="container">
          <div className="row">
              <div className="col-sm-8">

              <table className="table">
                  <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Email Address</th>
                        <th>Salary</th>
                        <th><button className="btn btn-outline-success" onClick={addTableRows} >+</button></th>
                    </tr>

                  </thead>
                 <tbody>

                 <TableRows rowsData={rowsData} deleteTableRows={deleteTableRows} handleChange={handleChange} />

                 </tbody> 
              </table>

              </div>
              <div className="col-sm-4">

              </div>
          </div>
      </div>
  )

}
function TableRows({rowsData, deleteTableRows, handleChange}) {
  const [className, setClassName] = useState("displayTr");
  const classNameTr = () => {
    setClassName(className === "displayTr" ? "":"displayTr")
  }

  return(
      
      rowsData.map((data, index)=>{
          const {fullName, emailAddress, salary}= data;
          return(
            <div key={index}>
              {fullName}
              <br/>
              {emailAddress}
              <br/>
              {salary}
              <br/>
              <button onClick={classNameTr}>edit</button>
              <button className="btn btn-outline-danger" onClick={()=>(deleteTableRows(index))}>x</button>
              <tr className={className}>
                <td>
                  <input type="text" value={fullName} onChange={(evnt)=>(handleChange(index, evnt))} name="fullName" className="form-control"/>
                </td>
                <td><input type="text" value={emailAddress}  onChange={(evnt)=>(handleChange(index, evnt))} name="emailAddress" className="form-control"/> </td>
                <td><input type="text" value={salary}  onChange={(evnt)=>(handleChange(index, evnt))} name="salary" className="form-control" /> </td>
                <button onClick={classNameTr}>edit</button>
              </tr>
            </div>
          )
      })
 
  )
  
}
