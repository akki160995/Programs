import React, {useContext, useState} from 'react';
import Logo from '../Project/Images/logo.png';
import {MyContext} from '../../contexts/MyContext';

function Login(){

    const {toggleNav,loginUser,isLoggedIn} = useContext(MyContext);

    const initialState = {
        userInfo:{
            email:'',
            password:'',
        },
        errorMsg:'',
        successMsg:'',
    }

    const [state,setState] = useState(initialState);

    // On change input value (email & password)
    const onChangeValue = (e) => {
        setState({
            ...state,
            userInfo:{
                ...state.userInfo,
                [e.target.name]:e.target.value
            }
        });
    }

    // On Submit Login From
    const submitForm = async (event) => {
        event.preventDefault();
        const data = await loginUser(state.userInfo);
        if(data.success && data.token){
            setState({
                ...initialState,
            });
            localStorage.setItem('loginToken', data.token);
            await isLoggedIn();
        }
        else{
            setState({
                ...state,
                successMsg:'',
                errorMsg:data.message
            });
        }
    }

    // Show Message on Error or Success
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
        <div className="card col-md-6 offset-md-3 mt-5 shadow ">
            <h1 className="text-center mt-4">Login</h1>
            <form  onSubmit={submitForm} noValidate className = "card-body" >
                <div >
                    <div className="form-group col">
                        <label>Email</label>
                        <input 
                            name="email" 
                            type="email" required 
                            placeholder="Enter your email" 
                            value={state.userInfo.email} 
                            onChange={onChangeValue}
                            className="form-control" 
                        />
                    </div>
                </div>
                <div>
                    <div className="form-group col">
                        <label>PassWord</label>
                        <input 
                            name="password" 
                            type="password" 
                            required placeholder="Enter your password" 
                            value={state.userInfo.password} 
                            onChange={onChangeValue}
                            className="form-control" 
                        />
                    </div>
                </div>
                {errorMsg}
                {successMsg}
                <div className="form-group offset-md-4 col">
                    <button type="submit" className="btn btn-primary mr-2 ">Login</button>
                    <button onClick={toggleNav} className="btn">Register</button>
                </div>
            </form>
        </div>
        </div>
    );
}

export default Login;