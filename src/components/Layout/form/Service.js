import React, { useState } from "react";


const Service = () =>{
        
    const [userRegistration,setuserRegistration] = useState({
        Heading: "",
        Description: ""
        
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
          setuserRegistration({ Heading:"",Description:""});
          }

          return ( 
            <>
            <form action="" onSubmit={handleSubmit}>  
              <h1>Services</h1>  
              <label>Heading: </label>   
                  <input type="text" placeholder="Enter Heading Here" 
                  value ={userRegistration.Heading} 
                  onChange={handleInput}
                  name="Heading" id="Heading"/>  
             <br/><br/>
              <label>Description:</label>
                  <input type="text" placeholder="Enter Description Here"  
                  value ={userRegistration.Description} 
                  onChange={handleInput}
                  name="Description" id="Description"/>  
                <br/><br/>

                <input type="submit"  value="Submit" />  

          </form>
          <div>
            {
                records.map((curElem) => {
                  return ( 
                    <div className="showDataStyle">
                    <p>{curElem.Heading}</p>
                    <p>{curElem.Description}</p>
                    
                    </div>
                  )
                })
            }
          </div>
          </>
            
        );
      }  
      export default Service;
