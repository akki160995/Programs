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
        axios.get('http://localhost/www/Wecare/News/getbyid.php?id='+this.props.match.params.id).then( res => {
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
                            <label>Title: </label>
                            <div> { this.state.Data.title }</div>
                        </div>
                        </div>
                        <div className="row">
                        <div className = "col">
                            <label>Update Date: </label>
                            <div> { this.state.Data.date }</div>
                        </div>
                        </div>
                        <div className = "row">
                        <div className = "col">
                            <label>Description: </label>
                            <div> { this.state.Data.body }</div>
                        </div>
                        </div>
                        <div className="text-center mt-2">
                                <Link
                                    class="btn btn-outline-primary mr-2 align-center"
                                    to={`/admin/News/edit/${this.state.Data.id}`}>
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
