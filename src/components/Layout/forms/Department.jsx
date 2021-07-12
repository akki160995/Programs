import React, { useState } from 'react';
import axios from 'axios';

const Department = () => {

    const [makeAppointment, setMakeAppointment] = useState({
        FirstName: "",
        LastName:"",
        Phone:"",
        Email:"",
        department:"",
        Message:""
    });

    const [records, SetRecords] = useState ([]);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
       setMakeAppointment({...makeAppointment, [name] : value});
    }

    const handleSubmit = (e) => {
            e.preventDefault();

            const newRecord = {...makeAppointment}
            SetRecords([...records, newRecord]);
            axios.post('http://localhost/www/Wecare/DeptAppoint/insert_data.php',newRecord)
            .then(
                response =>{
                    console.log(response)
                }
            )
            .catch(error=>{
                console.log(error)
                }
            )
            setMakeAppointment({FirstName: "", LastName:"", Phone:"", Email:"", department:"", Message:"" });

    }
    return (
        <div className="container">
        <form action="" onSubmit={handleSubmit}>
            <h1>Contact Department</h1>
            
            <div className="row">
                <div className="form-group mr-2">
                    <label htmlFor="FirstName">First Name  </label>
                    <input type="text" autoComplete="off" 
                    value={makeAppointment.FirstName}
                    onChange={handleInput} className="form-control"
                    name="FirstName" id="Firstname"/>
                </div>
                <div className="form-group mr-2">
                    <label htmlFor="LastName">Last Name  </label>
                
                    <input type="text" autoComplete="off" 
                    value={makeAppointment.LastName}
                    onChange={handleInput} className="form-control"
                    name="LastName" id="LastName"/>
                </div>
                <div className="form-group mr-2">
                    <label htmlFor="Phone">Phone  </label>
                    <input type="text" autoComplete="off" 
                    value={makeAppointment.Phone}
                    onChange={handleInput} className="form-control"
                    name="Phone" id="Phone"/>
                </div>
            </div>
        
            <div className="row">
                <div className="form-group mr-2">
                <label htmlFor="Email">Email  </label>
                <input type="text" autoComplete="off" 
                value={makeAppointment.Email}
                onChange={handleInput} className="form-control"
                name="Email" id="Email"/>
                </div>

                <div className="form-group mr-2">
                <label htmlFor="date">Date  </label>
                <input type="date" autoComplete="off" 
                value={makeAppointment.date}
                onChange={handleInput} className="form-control"
                name="date" id="date"/>
                </div>
            

                <div className="form-group mr-2">
                <label htmlFor="department">Department  </label>
                <select type="text" autoComplete="off" 
                value={makeAppointment.Doctor}
                onChange={handleInput} className="form-control"
                name="department" id="department">
                    <option value="Anaesthetics">Anaesthetics</option>
                    <option value="Acute Medical Unit">Acute Medical Unit</option>    
                    <option value="Burn Center">Burn Center</option>    
                    <option value="Breast Screening">Breast Screening</option>    
                    <option value="Chaplaincy">Chaplaincy</option>    
                    <option value="Critical Care">Critical Care</option>    
                    <option value="Diagnostic Imaging">Diagnostic Imaging</option>    
                    <option value="Discarege Lounge">Discarege Lounge</option>    
                </select>
                </div>
            </div>

            <div className="row">
            <div className="form-group mr-2">
                <label htmlFor="Message">Message  </label><br />
                <textarea type="text" 
                value={makeAppointment.Message}
                onChange={handleInput} className="form-control"
                name="Message" id="Message"/>
            </div>
            </div>
            <button type="submit" className="btn btn-primary">Send</button>
        </form>
        </div>
    )
}
export default Department