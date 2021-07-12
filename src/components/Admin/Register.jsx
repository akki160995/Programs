import React, {useContext,useState} from 'react'
import {MyContext} from '../../contexts/MyContext'
import Logo from '../Resources/logo-flamingo-color.png';

function Register(){
    const {toggleNav,registerUser} = useContext(MyContext);
    const initialState = {
        userInfo:{
            name:'',
            email:'',
            password:'',
        },
        errorMsg:'',
        successMsg:'',
    }
    const [state,setState] = useState(initialState);

    // On Submit the Registration Form
    const submitForm = async (event) => {
        event.preventDefault();
        const data = await registerUser(state.userInfo);
        if(data.success){
            setState({
                ...initialState,
                successMsg:data.message,
            });
        }
        else{
            setState({
                ...state,
                successMsg:'',
                errorMsg:data.message
            });
        }
    }

    // On change the Input Value (name, email, password)
    const onChangeValue = (e) => {
        setState({
            ...state,
            userInfo:{
                ...state.userInfo,
                [e.target.name]:e.target.value
            }
        });
    }
    
    // Show Message on Success or Error
    let successMsg = '';
    let errorMsg = '';
    if(state.errorMsg){
        errorMsg = <div className="error-msg">{state.errorMsg}</div>;
    }
    if(state.successMsg){
        successMsg = <div className="success-msg">{state.successMsg}</div>;
    }

    return(
        <div>
            <nav class="navbar">
                <a class="navbar-brand" href="/">
                <img src={Logo} width="100%" height="auto" class="d-inline-block align-top" alt=""/>
                </a>
            </nav>

        <div className="card col-md-6 offset-md-3 mt-5 shadow">
            <h1 className="text-center mt-4">Sign Up</h1>
            <form onSubmit={submitForm} noValidate className="card-body">
                <div className="form-group col">
                    <label>Full Name</label>
                    <input name="name" 
                    required type="text" 
                    value={state.userInfo.name} 
                    onChange={onChangeValue} className="form-control" 
                    placeholder="Enter your name"/>
                </div>
                <div className="form-group col">
                    <label>Email</label>
                    <input name="email" 
                    required type="email" 
                    value={state.userInfo.email} 
                    onChange={onChangeValue} className="form-control" 
                    placeholder="Enter your email"/>
                </div>
                <div className="form-group col">
                    <label>Password</label>
                    <input name="password" 
                    required type="password" 
                    value={state.userInfo.password} 
                    onChange={onChangeValue} className="form-control" 
                    placeholder="Enter your password"/>
                </div>
                {errorMsg}
                {successMsg}
                <div className="form-group offset-md-4 col">
                    <button type="submit" className="btn btn-primary mr-2">Sign Up</button>

                    <button  onClick={toggleNav} className="btn ">Login</button>
                </div>
            </form>
            <div className="_navBtn">
                
            </div>
        </div>
        </div>
    );
}

export default Register