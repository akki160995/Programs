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
            Address:'',
            City:'',
            Provinance:'',
            Note:''
        }
    }

    componentDidMount(){
        axios.get('http://localhost/www/Wecare/DeptAppoint/getbyid.php?id='+this.props.match.params.id)
            .then(response =>{
                this.setState({

                    firstName:response.data.firstname,
                    lastName:response.data.lastname,
                    Email:response.data.email,
                    Phone:response.data.phone,
                    date:response.data.date,
                    department:response.data.department,
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

        axios.post(`http://localhost/www/Wecare/DeptAppoint/update-data.php?id=`+this.props.match.params.id, obj)
        .then(res=> console.log(res.data));
        console.log(obj);

    }


    render() {
        const{firstName,lastName,Email,Phone,date,department,message}=this.state
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
                        <label htmlFor="Phone">Phone</label>
                        <input type="text" 
                        name="Phone" 
                        value={Phone}
                        placeholder="Enter Phone Here"
                        onChange={this.changeHandler}
                        className="form-control"
                        />
                    </div>
                    </div>
                    
                    <div className="row">
                    <div className="form-group mr-2">
                        <label htmlFor="date">date</label>
                        <input type="date" 
                        name="date" 
                        value={date}
                        placeholder="Enter date Here"
                        onChange={this.changeHandler}
                        className="form-control"
                        />
                    </div>
                    <div className="form-group mr-2">
                        <label htmlFor="department">department</label>
                        <select type="text" 
                        name="department" 
                        value={department}
                        placeholder="Enter department Here"
                        onChange={this.changeHandler}
                        className="form-control"
                        >
                            <option >Select</option>
                            <option value="Anaesthetics">Anaesthetics</option>
                    <option value="Acute Medical Unit">Acute Medical Unit</option>    
                    <option value="Burn Center">Burn Center</option>    
                    <option value="Breast Screening">Breast Screening</option>    
                    <option value="Chaplaincy">Chaplaincy</option>    
                    <option value="Critical Care">Critical Care</option>    
                    <option value="Diagnostic Imaging">Diagnostic Imaging</option>    
                    <option value="Discarege Lounge">Discarege Lounge</option>
                        </select>
                    </div>    
                    </div>

                    <div className="row">
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
