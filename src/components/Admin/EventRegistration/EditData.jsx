import axios from 'axios'
import React, { Component } from 'react'

class EditData extends Component {
    constructor(props) {
        super(props)
        this.onSubmit=this.onSubmit.bind(this);
    
        this.state = {
            firstName:'',
            lastName:'',
            Email:'',
            Age:'',
            Address:'',
            Allergies:''
        }
    }
    

    componentDidMount(){
        axios.get('http://localhost/www/Wecare/EventRegistration/getbyid.php?id='+this.props.match.params.id)
            .then(response =>{
                this.setState({

                    firstName:response.data.firstname,
                    lastName:response.data.lastname,
                    Email:response.data.email,
                    Age:response.data.age,
                    Address:response.data.address,
                    Allergies:response.data.allergies
                });
            })
            .catch(function(error){
                console.log(error);
            })
    }

    changeHandler= (e) =>{
        this.setState({[e.target.name]:e.target.value})
    }


    onSubmit(e){
        e.preventDefault();

        const obj =this.state

        axios.post(`http://localhost/www/Wecare/EventRegistration/update-data.php?id=`+this.props.match.params.id, obj)
        .then(res=> console.log(res.data));
        console.log(obj);

    }


    render() {
        const{firstName,lastName,Email,Age,Address,Allergies}=this.state
        return (
            <div className="container">
                <form onSubmit={this.onSubmit} className="form-group">
                    <div className="row">
                    <div className="form-group mr-2">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" 
                        name="firstName" 
                        value={firstName}
                        placeholder="Enter First Name Here"
                        onChange={this.changeHandler}
                        className="form-control"
                        />
                    </div>
                    <div className="form-group mr-2">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" 
                        name="lastName" 
                        value={lastName}
                        placeholder="Enter Last Name Here"
                        onChange={this.changeHandler}
                        className="form-control"
                        />
                    </div>
                    </div>

                    <div className="row">
                    <div className="form-group mr-2">
                        <label htmlFor="Email">Email</label>
                        <input type="email" 
                        name="Email" 
                        value={Email}
                        placeholder="Enter Email Here"
                        onChange={this.changeHandler}
                        className="form-control"
                        />
                    </div>
                    <div className="form-group mr-2">
                        <label htmlFor="Age">Age</label>
                        <input type="text" 
                        name="Age" 
                        value={Age}
                        placeholder="Enter Age Here"
                        onChange={this.changeHandler}
                        className="form-control"
                        />
                    </div>
                    <div className="form-group mr-2">
                        <label htmlFor="Address">Address</label>
                        <input type="text" 
                        name="Address" 
                        value={Address}
                        placeholder="Enter Address Here"
                        onChange={this.changeHandler}
                        className="form-control"
                        />
                    </div>

                    </div>

                    <div className="row">
                    <div className="form-group mr-2">
                        <label htmlFor="Allergies">Allergies</label>
                        <textarea 
                        name="Allergies" 
                        value={Allergies} id="Allergies"
                        placeholder="Enter Allergies Here"
                        onChange={this.changeHandler}
                        className="form-control"
                        />
                    </div>               
                    </div>

                    <div>
                        <button type="submit" className="btn btn-primary">Update</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default EditData
