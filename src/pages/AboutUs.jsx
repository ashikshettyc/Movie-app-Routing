import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 p-4">
        <h1 className="text-white text-3xl">About Us</h1>
      </header>
      <main className="p-4">
        <h2 className="text-2xl mb-4">About Movie App</h2>
        <p className="text-gray-700">
          Movie App is a platform to explore, review, and rate your favorite movies.
        </p>
      </main>
    </div>
  );
};

export default About;
