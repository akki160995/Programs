import React from 'react';
// Importing the Context Provider & Home Component
import MyContextProvider from '../../contexts/MyContext';
import Home from './Home';

function Admin() {
  return (
    <MyContextProvider>
        <Home/>
    </MyContextProvider>
  );
}

export default Admin;