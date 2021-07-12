import React, {useContext} from 'react'
import {MyContext} from '../../contexts/MyContext';
import Navbar from './Admin_navbar';
import Logo from '../Resources/logo-flamingo-color.png'

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
            <nav class="navbar">
                <a class="navbar-brand" href="/">
                <img src={Logo} width="100%" height="auto" class="d-inline-block align-top" alt=""/>
                </a>
            </nav>
            
            
            <div className="navbar ">
                <div className="_email ">
                    <span>
                        {theUser.email}
                    </span>
                </div>
                <h1><span role="img" aria-label="User Image">👦</span>{theUser.name}</h1>
                
                <button onClick={logoutUser} className=" btn ">Logout</button>
                  
            </div>
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