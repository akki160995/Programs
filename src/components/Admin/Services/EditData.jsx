import axios from 'axios'
import React, { Component } from 'react'

class EditData extends Component {
    constructor(props) {
        super(props)
        this.onChangeHeading=this.onChangeHeading.bind(this);
        this.onChangeDescription=this.onChangeDescription.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    
        this.state = {
            Heading:'',
            Description:''
        }
    }

    componentDidMount(){
        axios.get('http://localhost/www/Wecare/Services/getbyid.php?id='+this.props.match.params.id)
            .then(response =>{
                this.setState({
                    Heading:response.data.Heading,
                    Description:response.data.Description
                });
            })
            .catch(function(error){
                console.log(error);
            })
    }

    onChangeHeading(e) {
        this.setState({
            Heading: e.target.value
        });
    }
    onChangeDescription(e) {
        this.setState({
            Description: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const obj ={
            Heading : this.state.Heading,
            Description: this.state.Description
        };

        axios.post(`http://localhost/www/Wecare/Services/update-data.php?id=`+this.props.match.params.id, obj)
        .then(res=> alert("data updated successfully...."));
        console.log(obj);

    }


    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmit} className="form-group">
                    <div className="form-group mr-2">
                        <label htmlFor="Heading">Heading</label>
                        <input type="text" 
                        name="Heading" 
                        value={this.state.Heading}
                        placeholder="Enter Heading Here"
                        onChange={this.onChangeHeading}
                        className="form-control shadow"
                        />
                    </div>
                    <div className="form-group mr-2">
                        <label htmlFor="Description">Description</label>
                        <textarea 
                        name="Description" 
                        value={this.state.Description}
                        placeholder="Enter News Description"
                        onChange={this.onChangeDescription}
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
