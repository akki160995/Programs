import axios from 'axios'
import React, { Component } from 'react'

class EditData extends Component {
    constructor(props) {
        super(props)
        this.onChangetitle=this.onChangetitle.bind(this);
        this.onChangebody=this.onChangebody.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    
        this.state = {
            title:'',
            body:''
        }
    }

    componentDidMount(){
        axios.get('http://localhost/www/Wecare/News/getbyid.php?id='+this.props.match.params.id)
            .then(response =>{
                this.setState({
                    title:response.data.title,
                    body:response.data.body
                });
            })
            .catch(function(error){
                console.log(error);
            })
    }

    onChangetitle(e) {
        this.setState({
            title: e.target.value
        });
    }
    onChangebody(e) {
        this.setState({
            body: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const obj ={
            title : this.state.title,
            body: this.state.body
        };

        axios.post(`http://localhost/www/Wecare/News/update-news.php?id=`+this.props.match.params.id, obj)
        .then(res=> alert("data updated successfully...."));
        console.log(obj);

    }


    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmit} className="form-group">
                    <div className="form-group mr-2">
                        <label htmlFor="title">Title</label>
                        <input type="text" 
                        name="title" 
                        value={this.state.title}
                        placeholder="Enter Title Here"
                        onChange={this.onChangetitle}
                        className="form-control"
                        />
                    </div>
                    <div className="form-group mr-2">
                        <label htmlFor="body">Body</label>
                        <textarea 
                        name="body" 
                        value={this.state.body}
                        placeholder="Enter News Description"
                        onChange={this.onChangebody}
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
