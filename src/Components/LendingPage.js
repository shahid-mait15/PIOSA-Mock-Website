import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles.css'; // Import the custom styles

const Navigation = () => {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleClick = (item) => {
    setSelected(item);
  };

  const handleRegisterClick = () => {
    navigate('/SignUp'); // Navigate to /SignUp page
  };

  return (
    <div className="bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-2.5 flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold">
            <img
              src={require("../assets/logo 2.png")}
              alt="Logo"
              className="h-9 w-40 transition-transform duration-500 transform hover:scale-110"
            />
          </div>
          {/* Services */}
          <div className="mr-10 flex gap-x-5">
          <Link to="/"
              
              className={`mx-2 font-semibold mt-2 ${selected === 'Home' ? 'underline-thick' : 'hover-underline-thick'}`}
              onClick={() => handleClick('Home')}
            >
              Home
            </Link>
            <a
              href="#"
              className={`mx-2 font-semibold mt-2 ${selected === 'service1' ? 'underline-thick' : 'hover-underline-thick'}`}
              onClick={() => handleClick('service1')}
            >
              Products
            </a>
            <a
              href="#"
              className={` mx-2 mt-2 font-semibold ${selected === 'service2' ? 'underline-thick' : 'hover-underline-thick'}`}
              onClick={() => handleClick('service2')}
            >
              Services
            </a>
            <a
              href="#"
              className={` mx-2 mt-2 font-semibold ${selected === 'Insights' ? 'underline-thick' : 'hover-underline-thick'}`}
              onClick={() => handleClick('Insights')}
            >
              Insights
            </a>
            <Link
              to="/ContactUs"
              className={` mx-2 mt-2 font-semibold ${selected === 'Contact Us' ? 'underline-thick' : 'hover-underline-thick'}`}
              onClick={() => handleClick('Contact Us')}
            >
              Contact Us
            </Link>
            <a
              href="#"
              className={` mt-2 mx-2 font-semibold ${selected === 'About Us' ? 'underline-thick' : 'hover-underline-thick'}`}
              onClick={() => handleClick('About Us')}
            >
              About Us
            </a>

            <button
              className="bg-purple-800 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded"
             
            ><Link to="/SignUp"> Register</Link>
             
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
