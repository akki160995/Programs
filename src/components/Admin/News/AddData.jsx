import React, { Component } from 'react';
import axios from 'axios';

class AddData extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            title:'',
            body:''
        }
    }

    changeHandler= (e) =>{
        this.setState({[e.target.name]:e.target.value})
    }
    submitHandler= (e) =>{
        e.preventDefault()
        axios.post('http://localhost/www/Wecare/News/insert_news.php',this.state)
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
        const{title,body}= this.state
        return (
            <div className="container">
                <form onSubmit={this.submitHandler} className="form-group">
                    <div className="form-group mr-2">
                        <label htmlFor="title">Title</label>
                        <input type="text" 
                        name="title" 
                        value={title}
                        placeholder="Enter Title Here"
                        onChange={this.changeHandler}
                        className="form-control"
                        required
                        />
                    </div>
                    <div className="form-group mr-2">
                        <label htmlFor="body">Body</label>
                        <textarea 
                        name="body" 
                        value={body}
                        placeholder="Enter News Description"
                        onChange={this.changeHandler}
                        className="form-control"
                        required/>
                    </div>
                    
                    <div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddData