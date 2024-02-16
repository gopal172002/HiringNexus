import React from 'react';
import Login from "../components/Login/Login.jsx"
import Headers from "../components/Layout/Header.jsx"
import Footer from "../components/Layout/Footer.jsx"
// Define a simple React component
const LoginPage = () => {
  return (
    <div>
    <Headers activeheading={1}/>
      <Login/>
      <Footer/>
    </div>
  );
};
export default LoginPage;