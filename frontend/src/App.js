import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {LoginPage,SignupPage,HomePage} from "./Routes.js"

import './App.css';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/sign-up" element={<SignupPage/>}/>
    <Route path="/" element={<HomePage/>}/>
    {/* <Route path="/contact" element={<Contact/>}/> */}
    </Routes>
    </BrowserRouter>
  );
};

export default App;

