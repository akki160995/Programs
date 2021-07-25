import React, {useContext} from 'react'
import {MyContext} from '../../contexts/MyContext';
import Navbar from './Admin_navbar';
import Logo from '../Project/Images/logo.png';

// Importing the Login & Register Componet
import Login from './Login';
import Register from './Register';

function Home(){

    const {rootState,logoutUser} = useContext(MyContext);
    const {isAuth,theUser,showLogin} = rootState;

    // If user Logged in
    if(isAuth)
    {
        return(
            <>
            <div>
                <nav class="navbar bg-info">
                    <a class="navbar-brand" href="/">
                        <img src={Logo} width="100%" height="auto" class="d-inline-block align-top float-center" alt=""/>
                    </a>
                    <h1 className="">
                        <span role="img" aria-label="User Image">👦</span>
                        {theUser.name}
                    </h1>
                    <div className="">
                        <span className="mr-3">
                            {theUser.email}
                        </span>
                        <button onClick={logoutUser} className=" btn btn-danger">Logout</button>
                    </div>

            </nav>
            <Navbar/>
            </div>
            </>
        )
    }
    // Showing Login Or Register Page According to the condition
    else if(showLogin){
        return <Login/>;
    }
    else{
        return <Register/>;
    }
    
}

export default Home;