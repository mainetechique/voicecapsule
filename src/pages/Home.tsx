import React from 'react';

const Home = () => (
  <div className="h-screen overflow-hidden relative flex flex-col">
    <video autoPlay loop muted className="absolute z-10 w-full h-full object-cover">
      <source src="/api/placeholder/1920/1080" type="video/mp4" />
    </video>
    <div className="relative z-20 h-screen flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white bg-opacity-50 p-10 rounded shadow-lg w-1/3 space-y-6 text-left ml-20">
        <h1 className="text-4xl font-bold text-purple-900">VoiceCapsule - Your Voice, Your Story</h1>
        <p className="text-lg text-purple-900">
          Capture the essence of your thoughts and emotions with VoiceCapsule. Our innovative app turns your voice into a powerful tool for self-reflection and personal growth.
          <br />
          Start your journey of self-discovery today. Available now on the App Store!
        </p>
        <div className="space-y-4">
          <a href="https://apps.apple.com/us/app/voicecapsule" target="_blank" rel="noopener noreferrer">
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded w-full">
              Download Now
            </button>
          </a>
          <a href="mailto:support@voicecapsule.com" className="block">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
              Contact Us for Support
            </button>
          </a>
        </div>
      </div>
    </div>
    <footer className="absolute bottom-0 z-20 w-full h-20 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="text-white text-center space-y-2">
        <p>© {new Date().getFullYear()} VoiceCapsule. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="/terms" className="text-purple-400 hover:text-purple-600">Terms & Conditions</a>
          <a href="/privacy" className="text-purple-400 hover:text-purple-600">Privacy Policy</a>
          <a href="mailto:support@voicecapsule.com" className="text-purple-400 hover:text-purple-600">Contact Us</a>
        </div>
      </div>
    </footer>
  </div>
);

export default Home;