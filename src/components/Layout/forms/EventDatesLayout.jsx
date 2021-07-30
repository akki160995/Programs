import React, { useState} from 'react';
import axios from 'axios';

const EventDatesLayout = () => {

    const [makeAppointment, setMakeAppointment] = useState({
        FirstName: "",
        LastName:"",
        Phone:"",
        Email:"",
        Team:"",
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
            console.log(records);
            SetRecords([...records, newRecord]);
            console.log(newRecord);
            axios.post('http://localhost/www/Wecare/EventInfo/insert_data.php',newRecord)
            .then(
                response =>{
                    console.log(response)
                }
            )
            .catch(error=>{
                console.log(error)
                }
            )

            setMakeAppointment({FirstName: "", LastName:"", Phone:"", Email:"", Team:"", Message:"" });

    }
    return (
        <>
        <form action="" onSubmit={handleSubmit} className="form-group">
            <h4 className="Header-s">For More Info</h4>
            
            <div className="row">
                <div  className="form-group col-lg-4">
                    <label htmlFor="FirstName">First Name  </label>
                    <input type="text" autoComplete="off" 
                    value={makeAppointment.FirstName}
                    onChange={handleInput}
                    className="form-control"
                    name="FirstName" id="Firstname"/>
                </div>
                <div  className="form-group col-lg-4">
                    
                    <label htmlFor="LastName">Last Name  </label>
                    <input type="text" autoComplete="off" 
                    value={makeAppointment.LastName}
                    onChange={handleInput}
                    className="form-control"
                    name="LastName" id="LastName"/>
                </div>
                <div  className="form-group col-lg-4">
                    <label htmlFor="Phone">Phone  </label>
                    <input type="text" autoComplete="off" 
                    value={makeAppointment.Phone}
                    onChange={handleInput}
                    className="form-control"
                    name="Phone" id="Phone"/>
                </div>
        
                <div  className="form-group col-lg-6">
                    <label htmlFor="Email">Email  </label>
                    <input type="text" autoComplete="off" 
                    value={makeAppointment.Email}
                    onChange={handleInput}
                    className="form-control"
                    name="Email" id="Email"/>
                </div>
                <div  className="form-group col-lg-6">
                    <label htmlFor="Team">Team  </label>
                    <select type="text" autoComplete="off" 
                    value={makeAppointment.Team}
                    onChange={handleInput}
                    className="form-control"
                    name="Team" id="Team">
                        <option>Select</option>
                        <option value="Vaccines">Vaccines</option>
                        <option value="Seminar">Seminar</option>    
                    </select>
                </div>
                <div  className="form-group col">
                    <label htmlFor="Message">Message  </label>
                    <textarea type="text" 
                    value={makeAppointment.Message}
                    onChange={handleInput}
                    className="form-control"
                    name="Message" id="Message"/>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Send</button>
        </form>
        </>
    )
}
export default EventDatesLayout