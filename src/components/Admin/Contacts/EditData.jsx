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
            Phone:'',
            message:''
        }
    }

    componentDidMount(){
        axios.get('http://localhost/www/Wecare/Contacts/getbyid.php?id='+this.props.match.params.id)
            .then(response =>{
                this.setState({

                    firstName:response.data.firstname,
                    lastName:response.data.lastname,
                    Email:response.data.email,
                    Phone:response.data.phone,
                    message:response.data.message
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

        axios.post(`http://localhost/www/Wecare/Contacts/update-data.php?id=`+this.props.match.params.id, obj)
        .then(res=> console.log(res.data));
        console.log(obj);

    }


    render() {
        const{firstName,lastName,Email,Phone,message}=this.state
        return (
            <div className="container">
                <form onSubmit={this.onSubmit} className="form-group">
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
                        <label htmlFor="Phone">Phone</label>
                        <input type="text" 
                        name="Phone" 
                        value={Phone}
                        placeholder="Enter Phone Here"
                        onChange={this.changeHandler}
                        className="form-control"
                        />
                    </div>
                    <div className="form-group mr-2">
                        <label htmlFor="message">Message</label>
                        <textarea 
                        name="message" 
                        value={message}
                        placeholder="Enter Message Description"
                        onChange={this.changeHandler}
                        className="form-control"
                        required/>
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
