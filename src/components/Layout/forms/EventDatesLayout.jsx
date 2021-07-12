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
        <form action="" onSubmit={handleSubmit}>
            <h1>For More Info</h1>
            <div>
                <label htmlFor="FirstName">First Name  </label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <label htmlFor="LastName">Last Name  </label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <label htmlFor="Phone">Phone  </label><br />
            </div>
            <div>
                    <input type="text" autoComplete="off" 
                    value={makeAppointment.FirstName}
                    onChange={handleInput}
                    name="FirstName" id="Firstname"/>&nbsp;&nbsp;&nbsp;
                    <input type="text" autoComplete="off" 
                    value={makeAppointment.LastName}
                    onChange={handleInput}
                    name="LastName" id="LastName"/>&nbsp;&nbsp;
                    <input type="text" autoComplete="off" 
                    value={makeAppointment.Phone}
                    onChange={handleInput}
                    name="Phone" id="Phone"/><br />
            </div>
            <div>
                <label htmlFor="Email">Email  </label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <label htmlFor="Team">Team  </label><br />
            </div>
            <div>
                <input type="text" autoComplete="off" 
                value={makeAppointment.Email}
                onChange={handleInput}
                name="Email" id="Email"/>&nbsp;&nbsp;&nbsp;
                <select type="text" autoComplete="off" 
                value={makeAppointment.Team}
                onChange={handleInput}
                name="Team" id="Team">
                    <option>Select</option>
                    <option value="Vaccines">Vaccines</option>
                    <option value="Seminar">Seminar</option>    
                </select><br />
            </div>
            <div>
                <label htmlFor="Message">Message  </label><br />
                <textarea type="text" 
                value={makeAppointment.Message}
                onChange={handleInput}
                name="Message" id="Message"/>
            </div>
            <button type="submit">Send</button>
        </form>
        </>
    )
}
export default EventDatesLayout