import React from 'react';
// import Login from "../components/Aboutus/Aboutus.jsx"
import Headers from "../components/Layout/Header.jsx"
import Footer from "../components/Layout/Footer.jsx"
import Farmer from '../components/about/Farmer.jsx'
// Define a simple React component
const AboutPage = () => {
  return (
    <div>
    <Headers activeheading={1}/>
       <Farmer/>
      <Footer/>
    </div>
  );
};
export default AboutPage;