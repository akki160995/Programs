import React, { useState } from "react";

const Event = () =>{
        
    const [userRegistration,setuserRegistration] = useState({
        Headline: "",
        Description: "",
        Time: "",
        Place: ""
       
        
    });
    const [records,setRecords] = useState([]);
          const handleInput = (e) =>{
              const name = e.target.name;
              const value = e.target.value;
              console.log(name,value);
            setuserRegistration({ ...userRegistration, [name]: value});

          }

          const handleSubmit = (e) =>{
            e.preventDefault();
            const newRecord = {...userRegistration,id:new Date().getTime().toString()}
            console.log(records);
            setRecords([...records, newRecord]);
          console.log(records);
          setuserRegistration({ Headline:"",Description:"",Time:"",Place:""});
          }
          return ( 
            <>
            <form action="" onSubmit={handleSubmit}>  
              <h1>Event</h1>  
              <label>Headline: </label>   
                  <input type="text" placeholder="Enter Headline Here" 
                  value ={userRegistration.Headline} 
                  onChange={handleInput}
                  name="Headline" id="Headline"/>  
             <br/><br/>

             <label>Description:</label>
                <input type="text"
                    value ={userRegistration.Description} 
                    onChange={handleInput}
                    name="Description" id="Description"/>  
                <br/><br/>

                <label>Time:</label>
                <input type="time"
                    value={userRegistration.Time}
                    onChange={handleInput}
                    name="Time" id="Time"/>
                <br/><br/>

             <label>Place:</label>
                <input type="text" 
                    value={userRegistration.Place}
                    onChange={handleInput}
                    name="Place" id="Place"/>
                <br/><br/>

            <input type="submit"  value="Submit" />  
            </form>
            <div>
            {
                records.map((curElem) => {
                  return ( 
                    <div className="showDataStyle">
                    <p>{curElem.Headline}</p>
                    <p>{curElem.Description}</p>
                    <p>{curElem.Time}</p>
                    <p>{curElem.Place}</p>
                    </div>
                  )
                })
            }
          </div>
          </>
            
        );
      }  
export default Event;