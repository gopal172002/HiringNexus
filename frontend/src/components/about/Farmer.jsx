import React from 'react';

function About() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className="mb-8 flex items-center justify-center">
        </div>
        <div className="mb-8">
          <h3 className="text-3xl font-bold mb-4 text-center">Welcome to HiringNexus</h3>
          <p className="text-lg leading-relaxed">
            At Hiring Nexus, we believe in the transformative power of meaningful employment. Founded with a mission to connect job seekers with their dream opportunities, we are dedicated to bridging the gap between talent and the organizations that need it.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Our journey began with a simple idea: to create a platform that makes job searching easier and more efficient for everyone. We understand the challenges that both job seekers and employers face in today’s competitive market. That's why we set out to develop a user-friendly, innovative solution that caters to the needs of both parties.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Hiring Nexus is more than just a job board; it’s a comprehensive career portal designed to help you navigate the complex job market. We offer:
          </p>
          <ul className="list-disc list-inside mt-4">
            <li className="text-lg">Extensive Job Listings: Our platform features a wide range of job opportunities across various industries and levels, ensuring that there is something for everyone.</li>
            <li className="text-lg">Personalized Job Matches: Utilizing advanced algorithms, we match candidates with jobs that suit their skills, experiences, and career aspirations.</li>
            <li className="text-lg">Career Resources: We provide tools and resources to help job seekers enhance their resumes, prepare for interviews, and develop their careers.</li>
            <li className="text-lg">Employer Solutions: For employers, we offer powerful recruitment tools to find, attract, and hire the best talent quickly and efficiently.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-3xl font-bold mb-4">Contact Us</h3>
          <p className="text-lg leading-relaxed">
            If you have any questions or need assistance, feel free to reach out to our support team at <a href="mailto:support@hiringnexus.com" className="text-blue-500">support@hiringnexus.com</a>. We’re here to help!
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-3xl font-bold mb-4">Connect with Us</h3>
          <p className="text-lg leading-relaxed">
            Stay updated on the latest job openings, career tips, and industry news by following us on our social media channels:
          </p>
          <ul className="list-disc list-inside mt-4">
            <li><a href="https://www.facebook.com" className="text-blue-500" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.twitter.com" className="text-blue-500" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.linkedin.com" className="text-blue-500" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://www.instagram.com" className="text-blue-500" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
