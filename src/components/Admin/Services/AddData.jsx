import React, { Component } from 'react';
import axios from 'axios';
import Tables from './Table';

class newsfrm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            heading:'',
            description:''
        }
    }

    changeHandler= (e) =>{
        this.setState({[e.target.name]:e.target.value})
    }
    submitHandler= (e) =>{
        e.preventDefault()
        axios.post('http://localhost/www/Wecare/Services/insert_data.php',this.state)
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
        const{heading,description}= this.state
        return (
            <div className="container-fluid">
                <form onSubmit={this.submitHandler} className="form-group">
                    <div className="form-group mr-2">
                        <label htmlFor="heading">heading</label>
                        <input type="text" 
                        name="heading" 
                        value={heading}
                        placeholder="Enter heading Here"
                        onChange={this.changeHandler}
                        className="form-control"
                        required
                        />
                    </div>
                    <div className="form-group mr-2">
                        <label htmlFor="description">description</label>
                        <textarea 
                        name="description" 
                        value={description}
                        placeholder="Enter News Description"
                        onChange={this.changeHandler}
                        className="form-control"
                        required/>
                    </div>
                    
                    <div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
                <Tables/>
            </div>
        )
    }
}

export default newsfrm