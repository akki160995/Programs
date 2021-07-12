import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class ViewData extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            Data: {}
        }
    }

    componentDidMount(){
        axios.get('http://localhost/www/Wecare/EventRegistration/getbyid.php?id='+this.props.match.params.id).then( res => {
            this.setState({Data: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3 shadow">
                    <h3 className="text-center mt-4"> Details</h3>
                    <div className = "card-body">

                    <div className = "row">
                        <div className="col">
                            <label>id: </label>
                            <div> { this.state.Data.id }</div>
                        </div>
                        </div>
                        <div className = "row">
                        <div className = "col">
                            <label>First Name: </label>
                            <div> { this.state.Data.firstname }</div>
                        </div>
                        
                        <div className = "col">
                            <label>Last Name: </label>
                            <div> { this.state.Data.lastname }</div>
                        </div>
                        </div>
                        <div className = "row">
                        
                        <div className = "col">
                            <label>Email: </label>
                            <div> { this.state.Data.email }</div>
                        </div>

                        <div className="col">
                            <label>Age</label>
                            <div>{this.state.Data.age}</div>
                        </div>
                        </div>
                        
                        <div className = "row">
                        <div className="col">
                            <label>Address</label>
                            <div>{this.state.Data.address}</div>
                        </div>    
                        <div className = "col">
                            <label>Allergies: </label>
                            <div> { this.state.Data.allergies }</div>
                        </div>
                        </div>
                        <div className="text-center mt-2">
                                <Link
                                    class="btn btn-outline-primary mr-2 align-center"
                                    to={`/admin/EventRegistration/edit/${this.state.Data.id}`}>
                                    View & Edit
                                </Link>
                            </div>
                    </div>

                </div>
            </div>
        )
    }

}

export default ViewData
