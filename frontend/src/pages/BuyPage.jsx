import React from 'react';
import Headers from "../components/Layout/Header.jsx"
import Footer from "../components/Layout/Footer.jsx"
import Buy from "../components/Buy.jsx"
// Define a simple React component
const BuyPage = () => {
  return (
    <div>
    <Headers activeheading={1}/>
      <Buy/>
      <Footer/>
    </div>
  );
};
export default BuyPage;