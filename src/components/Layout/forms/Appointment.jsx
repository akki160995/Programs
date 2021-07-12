import React, { useState } from 'react';
import axios from 'axios';

const Appointment = () => {

    const [makeAppointment, setMakeAppointment] = useState({
        FirstName: "",
        LastName:"",
        Phone:"",
        Email:"",
        Date:"",
        Doctor:"",
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
            axios.post('http://localhost/www/Wecare/Appointment/insert_data.php',newRecord)
            .then(
                response =>{
                    console.log(response)
                }
            )
            .catch(error=>{
                console.log(error)
                }
            )
            setMakeAppointment({FirstName: "", LastName:"", Phone:"", Email:"", Date:"", Doctor:"", Message:"" });

    }
    return (
        <div className="container">
        <form action="" onSubmit={handleSubmit} className="form-group">
            <h1>Make Appoinment</h1>
            <div className="row">

                <div className="form-group col-lg-4">
                    <label htmlFor="FirstName">First Name</label>
                    <input type="text" autoComplete="off" 
                    value={makeAppointment.FirstName}
                    onChange={handleInput}  className="form-control"
                    name="FirstName" id="Firstname"/>
                </div>
            
                <div className="form-group col-lg-4">
                    <label htmlFor="LastName">Last Name</label>
                    <input type="text" autoComplete="off" 
                    value={makeAppointment.LastName}
                    onChange={handleInput} className="form-control"
                    name="LastName" id="LastName"/>
                </div>
                
                <div className="form-group col-lg-4">
                    <label htmlFor="Phone">Phone No</label>
                    <input type="text" autoComplete="off" 
                    value={makeAppointment.Phone}
                    onChange={handleInput} className="form-control"
                    name="Phone" id="Phone" required/>
                </div>
            
            </div>

            <div className="row">

                <div  className="form-group col-lg-4">
                    <label htmlFor="Email">Email</label>
                    <input type="text" autoComplete="off" 
                    value={makeAppointment.Email}
                    onChange={handleInput} className="form-control"
                    name="Email" id="Email"/>
                </div>
                <div  className="form-group col-lg-4">
                    <label htmlFor="Date">Date</label>
                    <input type="date" autoComplete="off" 
                    value={makeAppointment.Date} 
                    onChange={handleInput} className="form-control"
                    name="Date" id="Date"/>
                </div>
                <div  className="form-group col-lg-4">
                    <label htmlFor="Doctor">Doctor</label>
                    <select type="text" autoComplete="off" 
                    value={makeAppointment.Doctor}
                    onChange={handleInput} className="form-control"
                    name="Doctor" id="Doctor">
                        <option >Select</option>
                        <option value="dr. Aaron Neville">dr. Aaron Neville</option>
                        <option value="dr. Adriana Caselotti">dr. Adriana Caselotti</option>    
                        <option value="dr. Alela Diane">dr. Alela Diane</option>    
                        <option value="dr. Alicia Bridges">dr. Alicia Bridges</option>    
                        <option value="dr. Cole Ashley">dr. Cole Ashley</option>    
                        <option value="dr. Cook Darvin">dr. Cook Darvin</option>    
                        <option value="dr. Dakota Johnson">dr. Dakota Johnson</option>    
                        <option value="dr. Daisy Ridle">dr. Daisy Ridley</option>    
                    </select>
                </div>
            </div>
            
            <div className="row">
                <div  className="form-group col-md-12">
                <label htmlFor="Message">Message</label>
                <textarea type="text" 
                value={makeAppointment.Message}
                onChange={handleInput} className="form-control"
                name="Message" id="Message"/>
            </div>
            </div>
            <button type="submit"  className="btn btn-primary">Send</button>
        </form>
        </div>
    )
}
export default Appointment