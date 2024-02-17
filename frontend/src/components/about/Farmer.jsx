// AboutPage.js

import React from 'react';
//import farmerImage from './farmer.jpg'; // Assuming 'farmer.jpg' is in the same directory as this component

function About() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="mb-4">
        <img  alt="Farmer" className="w-full h-auto" />
      </div>
      <h2 className="text-2xl font-bold mb-4">About the Farmer</h2>
      <p className="text-lg mb-4">
        Tathagat is an Engineer and a Post Graduate from IIT Bombay (Centre for Technology Alternatives for Rural Areas).
        His long-term passion brought him to farms and now, he is practicing chemical-free farming at his village in Madhya Pradesh.
        Everything is grown and processed at his farm only.
      </p>
      <p className="text-lg">
        He believes in the concept of "Organic Farmer" and not "Organic Farming"; because if the farmer turns organic, farming will automatically follow :)
      </p>
      
      {/* Additional farm information */}
      <div className="my-8">
        <h3 className="text-xl font-bold mb-2">Farm Location</h3>
        <p>Village Chhapri, Teh. Kalapipal, Dist. Shajapur [MP]</p>
      </div>
      
      <div className="my-8">
        <h3 className="text-xl font-bold mb-2">Live Updates</h3>
        <p>For live updates from our farm, please follow our Facebook page: "Tathagat : A Farmer"</p>
      </div>

      <div className="my-8">
        <h3 className="text-xl font-bold mb-2">Manufactured and Packed by</h3>
        <p>Tathagat : A Farmer</p>
        <p>388, EE, Scheme no. 94, Indore-452001</p>
      </div>

      <div className="my-8">
        <h3 className="text-xl font-bold mb-2">Customer Care</h3>
        <p>Customer Care No.: +91-9826981282</p>
        <p>Email: tathagatafarmer@gmail.com</p>
      </div>

      <div className="my-8">
        <h3 className="text-xl font-bold mb-2">Storage Instructions</h3>
        <p>Being a natural farm product, there is bound to be variation in shape, size, colour and scent with the crop every year.</p>
        <p>Store in a cool and dry place inside an air-tight container.</p>
      </div>
    </div>
  );
}

export default About;



