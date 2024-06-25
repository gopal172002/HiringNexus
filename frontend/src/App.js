import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {LoginPage,SignupPage,HomePage,FAQpage,ProductsPage,ContactPage,AboutPage,BuyPage, Gallery} from "./Routes.js"

import './App.css';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/sign-up" element={<SignupPage/>}/>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/faq" element={<FAQpage/>}/>
    <Route path="/openings" element={<ProductsPage />} />
    <Route path="/category" element={<ProductsPage />} />
    <Route path="/contactus" element={<ContactPage/>}/> 
     <Route path="/aboutus" element={<AboutPage/>}/>
     {/* <Route path="/buynow" element={<BuyPage/>}/>
     <Route path="/gallery" element={< Gallery/>}/> */}
    </Routes>
    </BrowserRouter>
  );
};

export default App;

