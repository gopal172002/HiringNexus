import React from 'react';
import Headers from "../components/Layout/Header.jsx"
import Hero from "../components/Route/Hero/Hero"
// import Categories from "../components/Route/Categories/Categories.jsx"
import Footer from "../components/Layout/Footer.jsx"
const HomePage = () => {
  return (
    <div>
      <Headers activeheading={1}/>
      <Hero/>
     
      <Footer/>
      {/* home */}
    </div>
  );
};
export default HomePage;