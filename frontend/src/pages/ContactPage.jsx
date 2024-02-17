import React from 'react';
// import Login from "../components/Login/Login.jsx"
import Headers from "../components/Layout/Header.jsx"
import Footer from "../components/Layout/Footer.jsx"
import Contact from '../components/contact/Contact.jsx';
// Define a simple React component
const ContactPage = () => {
  return (
    <div>
    <Headers activeheading={1}/>
     <Contact/>
      <Footer/>
    </div>
  );
};
export default ContactPage;