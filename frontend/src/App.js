import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {LoginPage,SignupPage,HomePage,FAQpage,ProductsPage,ContactPage,AboutPage,BuyPage} from "./Routes.js"

import './App.css';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/sign-up" element={<SignupPage/>}/>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/faq" element={<FAQpage/>}/>
    <Route path="/products" element={<ProductsPage />} />
    <Route path="/contactus" element={<ContactPage/>}/> 
     <Route path="/aboutus" element={<AboutPage/>}/>
     <Route path="/buynow" element={<BuyPage/>}/>
    </Routes>
    </BrowserRouter>
  );
};

export default App;

