import React, { useState } from 'react';
const Appoinment = () => {

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
        console.log(name, value);

        setMakeAppointment({...makeAppointment, [name] : value});

    }

    const handleSubmit = (e) => {
            e.preventDefault();

            const newRecord = {...makeAppointment, id: new Date().getTime().toString()}
            console.log(records);
            SetRecords([...records, newRecord]);
            console.log(records);

            setMakeAppointment({FirstName: "", LastName:"", Phone:"", Email:"", Date:"", Doctor:"", Message:"" });

    }
    return (
        <>
        <form action="" onSubmit={handleSubmit}>
            <h1>Make Appoinment</h1>
            <div>
                <label htmlFor="FirstName">First Name  </label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <label htmlFor="LastName">Last Name  </label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <label htmlFor="Phone">Phone  </label><br />
            </div>
            <div>
                    <input type="text" autoComplete="off" 
                    value={makeAppointment.FirstName}
                    onChange={handleInput}
                    name="FirstName" 
                    id="Firstname"/>&nbsp;&nbsp;&nbsp;
                    
                    <input type="text" autoComplete="off" 
                    value={makeAppointment.LastName}
                    onChange={handleInput}
                    name="LastName" 
                    id="LastName"/>&nbsp;&nbsp;
                    
                    <input type="text" autoComplete="off" 
                    value={makeAppointment.Phone}
                    onChange={handleInput}
                    name="Phone" 
                    id="Phone"/><br />
            </div>
            <div>
                <label htmlFor="Email">Email  </label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <label htmlFor="Date">Date  </label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <label htmlFor="Doctor">Doctor  </label><br />
            </div>
            <div>
                <input type="text" autoComplete="off" 
                value={makeAppointment.Email}
                onChange={handleInput}
                name="Email" 
                id="Email"/>&nbsp;&nbsp;&nbsp;
                
                <input type="date" autoComplete="off" 
                value={makeAppointment.Date} 
                onChange={handleInput}
                name="Date" id="Date"/>&nbsp;&nbsp;&nbsp;
                
                <select type="text" autoComplete="off" 
                value={makeAppointment.Doctor}
                onChange={handleInput}
                name="Doctor" id="Doctor">
                    <option value="dr. Aaron Neville">dr. Aaron Neville</option>
                    <option value="dr. Adriana Caselotti">dr. Adriana Caselotti</option>    
                    <option value="dr. Alela Diane">dr. Alela Diane</option>    
                    <option value="dr. Alicia Bridges">dr. Alicia Bridges</option>    
                    <option value="dr. Cole Ashley">dr. Cole Ashley</option>    
                    <option value="dr. Cook Darvin">dr. Cook Darvin</option>    
                    <option value="dr. Dakota Johnson">dr. Dakota Johnson</option>    
                    <option value="dr. Daisy Ridle">dr. Daisy Ridley</option>    
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
export default Appoinment