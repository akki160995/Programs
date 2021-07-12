import React, { Component } from 'react';
import axios from 'axios';

export class AppointFrm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            FirstName:'',
            lastName:'',
            perEmail:'',
            Phone:'',
            Date:'',
            Message:''
        }
    }
    FirstNameChange = event =>{
        this.setState({
            FirstName:event.target.value
        })
    }
    lastNameChange = event =>{
        this.setState({
            lastName:event.target.value
        })
    }
    perEmailChange = event =>{
        this.setState({
            perEmail:event.target.value
        })
    }
    PhoneChange = event =>{
        this.setState({
            Phone:event.target.value
        })
    }
    DateChange = event =>{
        this.setState({
            Date:event.target.value
        })
    }
    MessageChange = event =>{
        this.setState({
            Message:event.target.value
        })
    }
    handlesubmit = event=>{
        event.preventDefault();

        const obj ={
            FirstName:this.state.FirstName,
            lastName: this.state.lastName,
            perEmail: this.state.perEmail,
            Phone : this.state.Phone,
            Date: this.state.Date,
            Message: this.state.Message
        };
        console.log(obj);
        axios.post('http://localhost/projects/Wecare/appointment/insert_appoint.php',obj)
        .then(res => console.log(res.data));


        this.setState({
            FirstName:'',
            lastName:'',
            perEmail:'',
            Phone:'',
            Date:'',
            Message:''
        })

    }



    render() {
        return (
            <form onSubmit={this.handlesubmit} className="form-group">
                <div>
                <label htmlFor="FirstName">First Name</label>
                <input 
                    type="text" 
                    name="FirstName" 
                    value={this.state.FirstName}
                    onChange={this.FirstNameChange} 
                    className="form-control"
                />
                </div>
                <div>
                <label htmlFor="lastName">Last Name</label>
                <input 
                    type="text" 
                    name="lastName" 
                    value={this.state.lastName}
                    onChange={this.lastNameChange} 
                />
                </div>
                <div>
                <label htmlFor="perEmail">Email</label>
                <input 
                    type="Email" 
                    name="perEmail" 
                    value={this.state.perEmail}
                    onChange={this.perEmailChange} 
                />
                </div>
                <div>
                <label htmlFor="Phone">Phone</label>
                <input 
                    type="number"
                    name="Phone" 
                    value={this.state.Phone}
                    onChange={this.PhoneChange} 
                />
                </div>
                <div>
                <label htmlFor="Date">Date</label>
                <input 
                    type="date" 
                    name="Date" 
                    value={this.state.Date}
                    onChange={this.DateChange} 
                /></div>
                <div>
                <label htmlFor="Message" >Message</label>
                <textarea
                    name="Message" 
                    value={this.state.Message}
                    onChange={this.MessageChange} 
                /></div>
                <div>
                <button type="submit" className="btn btn-success">Submit</button>

                </div>
            </form>
        )
    }
}

export default AppointFrm