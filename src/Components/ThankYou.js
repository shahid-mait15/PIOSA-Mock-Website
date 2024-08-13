import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Tvideo from '../assets/ThankYou.mp4';

const ThankYou = () => {
  const [showThankYou, setShowThankYou] = useState(false);
  const location = useLocation();
  const previewData = location.state?.previewData || {};

  const handleVideoEnd = () => {
    setShowThankYou(true);
  };

  useEffect(() => {
    const videoElement = document.getElementById('thankYouVideo');
    videoElement.addEventListener('ended', handleVideoEnd);

    return () => {
      videoElement.removeEventListener('ended', handleVideoEnd);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-slate-500 p-4 overflow-hidden">
      <video
        id="thankYouVideo"
        src={Tvideo}
        muted
        autoPlay
        className="absolute inset-0 w-full h-full object-cover z-0"
      ></video>
      {showThankYou && (
        <div className="relative bg-slate-100 p-8 rounded-lg shadow-lg text-center w-full max-w-4xl z-10">
          <h1 className="text-4xl font-bold mb-6">Thanks for Submitting details!</h1>
          <h1 className="text-4xl font-bold mb-6">One of our experts will contact you shortly</h1>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Your Submitted Details:</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(previewData).map(([key, value]) => (
                <div key={key} className="bg-gray-200 p-4 rounded shadow-md">
                  <h3 className="font-semibold mb-2">{key.replace(/_/g, " ")}</h3>
                  <p>{value || "N/A"}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <Link to="/my-orders" className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Download Your Response
            </Link>
            <Link to="/" className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Home
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThankYou;
