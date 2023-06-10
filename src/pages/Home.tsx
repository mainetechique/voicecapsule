import React from 'react';

const Home = () => (
  <div className="h-screen overflow-hidden relative flex flex-col">
    <video autoPlay loop muted className="absolute z-10 w-full h-full object-cover">
      <source src="https://firebasestorage.googleapis.com/v0/b/path-71217.appspot.com/o/background_video.mov?alt=media&token=a1ea8816-d40c-431e-9068-24ab322aeac5" type="video/mp4" />
    </video>
    <div className="relative z-20 h-screen flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white bg-opacity-50 p-10 rounded shadow-lg w-1/3 space-y-6 text-left ml-20">
        <h1 className="text-4xl font-bold text-blue-900">Path - The Self-Discovery Journal</h1>
        <p className="text-lg text-blue-900">
          Embark on a journey of self-discovery and self-improvement with Path - The Self Discovery Journal, and unlock a better understanding of yourself and your potential.
          <br />
          Your Path to self-discovery starts here. Now available on the App Store and Play Store!
        </p>
        <a href="mailto:contact@yourcompany.com">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-8 py-2 px-4 rounded">Contact us</button>
        </a>
      </div>
    </div>
    <footer className="absolute bottom-0 z-20 w-full h-20 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="text-white text-center space-y-2">
        <p>© {new Date().getFullYear()} Path - The Self-Discovery Journal. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="/terms" className="text-blue-400 hover:text-blue-600">Terms & Conditions</a>
          <a href="/privacy" className="text-blue-400 hover:text-blue-600">Privacy Policy</a>
        </div>
      </div>
    </footer>
  </div>
);

export default Home;
