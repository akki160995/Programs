import React, { useState } from 'react';
import axios from 'axios';
const EventLayout = () => {

    const [makeAppointment, setMakeAppointment] = useState({
        FirstName: "",
        LastName:"",
        Age:"",
        Email:"",
        Address:"",
        Allergic:""
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
            console.log(records);
            SetRecords([...records, newRecord]);
            console.log(records);

            axios.post('http://localhost/www/Wecare/EventRegistration/insert_data.php',newRecord)
            .then(
                response =>{
                    console.log(response)
                }
            )
            .catch(error=>{
                console.log(error)
                }
            )
            
            setMakeAppointment({FirstName: "", LastName:"", Age:"", Email:"", Address:"", Allergic:"" });

    }
    return (
        <>
        <form action="" onSubmit={handleSubmit}>
            <h1>Registration</h1>
            <div className="container">
                
            
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
                    name="LastName" id="LastName"/>&nbsp;&nbsp;
                </div>

                <div className="form-group mr-2">
                    <label htmlFor="Age">Age  </label>
                    <input type="text" autoComplete="off" 
                    value={makeAppointment.Age}
                    onChange={handleInput} className="form-control"
                    name="Age" id="Age"/><br />
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
                    <label htmlFor="Address">Address  </label>
                    <input type="text" autoComplete="off" 
                    value={makeAppointment.Address}
                    onChange={handleInput} className="form-control"
                    name="Address" id="Address" />
                </div>
            </div>
            
            <div className="row">
                <div className="form-group mr-2">
                    <label htmlFor="Allergic">Allergic  </label>
                    <textarea 
                    value={makeAppointment.Allergic}
                    onChange={handleInput} className="form-control"
                    name="Allergic" id="Allergic"/>
                </div>
            </div>
                <button type="submit" className="btn btn-primary">Send</button>
            </div>
        </form>
        </>
    )
}
export default EventLayout