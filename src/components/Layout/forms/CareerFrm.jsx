import React, { Component } from 'react';
import axios from 'axios';

export class CareerFrm extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            firstName:'',
            lastName:'',
            email:'',
            Phone:'',
            Address:'',
            City:'',
            Provinance:'',
            Note:''
        }
    }
    
    changeHandler= (e) =>{
        this.setState({[e.target.name]:e.target.value})
    }

    
    submitHandler =(e) =>{
        e.preventDefault()
        console.log(this.state)

        axios.post('http://localhost/www/Wecare/Career/insert_data.php',this.state)
        .then(
            response =>{
                console.log(response)
            }
        )
        .catch(error=>{
            console.log(error)
            }
        )
        
    }


    render() {
        const{firstName,lastName,email,Phone,Address,City,Provinance,Note}=this.state
        return (
            
            
            <div className="container">
                <div className="left-inlineHeading mt-3">Frequently Asked Questions</div>
            <div className="mt-3 mb-3">Apply Now</div> 
            <form onSubmit={this.submitHandler} className="form-group">
                <div className="row">
                    <div className="form-group col-md-6">
                        <label htmlFor="firstName">First Name</label>
                        <input 
                        type="text" 
                        name="firstName" 
                        value={firstName}
                        className="form-control"
                        placeholder="Enter First Name"
                        onChange={this.changeHandler} 
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="lastName">Last Name</label>
                        <input 
                        type="text" 
                       name="lastName" 
                       value={lastName}
                        className="form-control"
                        placeholder="Enter Last Name"
                       onChange={this.changeHandler} 
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="form-group col-md-6">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="Email" required
                        name="email" 
                        value={email}
                        className="form-control"
                        placeholder="Enter Email"
                        onChange={this.changeHandler} 
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="Phone">Phone</label>
                        <input 
                            type="number" required
                            name="Phone" 
                            value={Phone}
                            className="form-control"
                            placeholder="Enter Phone Number"
                            onChange={this.changeHandler} 
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="form-group col-md-4">
                        <label htmlFor="Address">Address</label>
                        <input 
                        type="text" 
                        name="Address" 
                        value={Address}
                        className="form-control"
                        placeholder="Enter Address"
                        onChange={this.changeHandler} 
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="City">City</label>
                        <input 
                            type="text" 
                            name="City" 
                            value={City}
                            className="form-control"
                            placeholder="Enter City"
                            onChange={this.changeHandler} 
                        />
                    </div>
                

                <div className="form-group col-md-4">
                <label htmlFor="Provinance">Provinance</label>
                <input 
                    type="text" 
                    name="Provinance" 
                    value={Provinance}
                    className="form-control"
                    placeholder="Enter Provinance"
                    onChange={this.changeHandler} 
                /></div>
                </div>
                
                Upload Requirements *Max 30Mb

                <div className="form-group col-md-6">
                    <input type='file'></input>
                </div>


                
                Agreement<br/>
                <input type="checkbox"/> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor


                <div className="form-group col-sm-12">
                <label htmlFor="Note" >Note for Us</label>
                <textarea
                    name="Note" 
                    value={Note}
                    onChange={this.changeHandler} 
                    className="form-control"
                    placeholder="Enter Note"
                /></div>
                <div className="form-group col-md-3">
                <button type="submit" className="btn btn-success">Submit</button>

                </div>
            </form>
            </div>
        )
    }
}

export default CareerFrm
