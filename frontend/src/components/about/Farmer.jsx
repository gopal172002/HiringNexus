// import React from 'react';
// import farmerImage from '../../images/farmer.jpg';
// import YouTube from 'react-youtube';

// function About() {
//   // Replace 'YOUR_YOUTUBE_VIDEO_ID' with the actual video ID from your YouTube link
//   const youtubeVideoId = 'EooxomHODUk';  // Extracted video ID from the YouTube URL

//   // YouTube options
//   const opts = {
//     width: '80%',
//     height:'200%',
//     playerVars: {
//       autoplay: 0, // Autoplay disabled
//     },
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-4">
//       <div className="mb-4 flex items-center justify-center">
//         <img src={farmerImage} alt="Farmer" className="w-24 h-24 rounded-full object-cover" />
//       </div>
//       <div className="my-8 sm:w-full lg:w-1/2 mx-auto">
//         <h3 className="text-xl font-bold mb-2">Farm Video</h3>
//         <div className="aspect-w-16 aspect-h-9">
//           <YouTube videoId={youtubeVideoId} opts={opts} />
//         </div>
//       </div>
//       <h2 className="text-2xl font-bold mb-4">About the Farmer</h2>
//       <p className="text-lg mb-4">
//         Tathagat is an Engineer and a Post Graduate from IIT Bombay (Centre for Technology Alternatives for Rural Areas).
//         His long-term passion brought him to farms, and now, he is practicing chemical-free farming at his village in Madhya Pradesh.
//         Everything is grown and processed at his farm only.
//       </p>
//       <p className="text-lg">
//         He believes in the concept of "Organic Farmer" and not "Organic Farming"; because if the farmer turns organic, farming will automatically follow :)
//       </p>

//       {/* Additional farm information */}
//       <div className="my-8">
//         <h3 className="text-xl font-bold mb-2">Farm Location</h3>
//         <p>Village Chhapri, Teh. Kalapipal, Dist. Shajapur [MP]</p>
//       </div>

//       <div className="my-8">
//         <h3 className="text-xl font-bold mb-2">Live Updates</h3>
//         <p>For live updates from our farm, please follow our Facebook page: "Tathagat : A Farmer"</p>
//       </div>

//       <div className="my-8">
//         <h3 className="text-xl font-bold mb-2">Manufactured and Packed by</h3>
//         <p>Tathagat : A Farmer</p>
//         <p>388, EE, Scheme no. 94, Indore-452001</p>
//       </div>

//       <div className="my-8">
//         <h3 className="text-xl font-bold mb-2">Customer Care</h3>
//         <p>Customer Care No.: +91-9826981282</p>
//         <p>Email: tathagatafarmer@gmail.com</p>
//       </div>

//       <div className="my-8">
//         <h3 className="text-xl font-bold mb-2">Storage Instructions</h3>
//         <p>Being a natural farm product, there is bound to be variation in shape, size, colour, and scent with the crop every year.</p>
//         <p>Store in a cool and dry place inside an air-tight container.</p>
//       </div>

//       {/* YouTube Video */}
//     </div>
//   );
// }

// export default About;
import React from 'react';
// import teamImage from '../../images/team.jpg';
// import YouTube from 'react-youtube';

function About() {
  // Replace 'YOUR_YOUTUBE_VIDEO_ID' with the actual video ID from your YouTube link
  // const youtubeVideoId = 'YOUR_YOUTUBE_VIDEO_ID';  // Extracted video ID from the YouTube URL

  // YouTube options
  // const opts = {
  //   width: '80%',
  //   height: '400px',
  //   playerVars: {
  //     autoplay: 0, // Autoplay disabled
  //   },
  // };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="mb-4 flex items-center justify-center">
        {/* <img src={teamImage} alt="Team" className="w-24 h-24 rounded-full object-cover" /> */}
      </div>
      <div className="my-8 sm:w-full lg:w-1/2 mx-auto">
        <h3 className="text-xl font-bold mb-2">Welcome to Job Finder</h3>
        {/* <div className="aspect-w-16 aspect-h-9">
          <YouTube videoId={youtubeVideoId} opts={opts} />
        </div> */}
      </div>
      <h2 className="text-2xl font-bold mb-4">About Us</h2>
      <p className="text-lg mb-4">
        At Job Finder, we believe in the transformative power of meaningful employment. Founded with a mission to connect job seekers with their dream opportunities, we are dedicated to bridging the gap between talent and the organizations that need it.
      </p>
      <p className="text-lg mb-4">
        Our journey began with a simple idea: to create a platform that makes job searching easier and more efficient for everyone. We understand the challenges that both job seekers and employers face in today’s competitive market. That's why we set out to develop a user-friendly, innovative solution that caters to the needs of both parties.
      </p>
      <p className="text-lg mb-4">
        Job Finder is more than just a job board; it’s a comprehensive career portal designed to help you navigate the complex job market. We offer:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li className="text-lg">Extensive Job Listings: Our platform features a wide range of job opportunities across various industries and levels, ensuring that there is something for everyone.</li>
        <li className="text-lg">Personalized Job Matches: Utilizing advanced algorithms, we match candidates with jobs that suit their skills, experiences, and career aspirations.</li>
        <li className="text-lg">Career Resources: We provide tools and resources to help job seekers enhance their resumes, prepare for interviews, and develop their careers.</li>
        <li className="text-lg">Employer Solutions: For employers, we offer powerful recruitment tools to find, attract, and hire the best talent quickly and efficiently.</li>
      </ul>
      <p className="text-lg mb-4">
        Our values are integrity, innovation, empowerment, and community. We operate with honesty and transparency in all our interactions, continuously improve our platform, empower job seekers and employers, and foster a sense of community among our users.
      </p>
      <p className="text-lg mb-4">
        Join us today and take the next step towards your professional goals. Whether you’re a job seeker looking for your next career move or an employer searching for the perfect candidate, Job Finder is here to help.
      </p>

      <div className="my-8">
        <h3 className="text-xl font-bold mb-2">Contact Us</h3>
        <p>If you have any questions or need assistance, feel free to reach out to our support team at support@jobfinder.com. We’re here to help!</p>
      </div>

      <div className="my-8">
        <h3 className="text-xl font-bold mb-2">Connect with Us</h3>
        <p>Stay updated on the latest job openings, career tips, and industry news by following us on our social media channels:</p>
        <ul className="list-disc list-inside">
          <li><a href="https://www.facebook.com" className="text-blue-500">Facebook</a></li>
          <li><a href="https://www.twitter.com" className="text-blue-500">Twitter</a></li>
          <li><a href="https://www.linkedin.com" className="text-blue-500">LinkedIn</a></li>
          <li><a href="https://www.instagram.com" className="text-blue-500">Instagram</a></li>
        </ul>
      </div>
    </div>
  );
}

export default About;
