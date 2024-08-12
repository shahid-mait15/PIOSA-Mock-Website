import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import Header from "./Dash/Header";
import Sidebar from "./Dash/sidebar";
import op1 from "../assets/altas.svg";
import op3 from "../assets/3rd.svg";

function Dashboard2() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [showContent, setShowContent] = useState(null);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const handleKnowMoreClick = (section) => {
    setShowContent(section);
  };

  const buttonClass = (section) =>
    `text-blue-500 hover:underline font-semibold flex items-center px-4 py-2 transition-all duration-300 ${
      showContent === section
        ? "bg-blue-100 rounded-full" // Add rounded-full and other styles when selected
        : "rounded-lg" // Default rounded-lg for unselected
    }`;

  const renderContent = () => {
    switch (showContent) {
      case "yourself":
        return (
          <div className="w-full bg-gradient-to-r from-pink-100 via-pink-50 to-blue-100 border rounded-lg shadow-lg p-6 mt-8">
            <h2 className="text-2xl font-bold text-green-800 py-3 border-b border-green-300 mb-4">
              Instruction Manual​
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-blue-900 flex items-center">
                  <svg
                    className="w-6 h-6 mr-2 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Step 1
                </h3>
                <p className="pl-8 text-gray-700">
                  Download the CloudFormation template (CFT) from our website.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-900 flex items-center">
                  <svg
                    className="w-6 h-6 mr-2 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Step 2
                </h3>
                <p className="pl-8 text-gray-700">
                  Upload the downloaded CloudFormation template to your S3
                  bucket in your AWS account where you want to use the PIOSA
                  product. Ensure you have downloaded the required
                  CloudFormation template file to your local machine.
                </p>
                <ul className="pl-12 list-disc text-gray-700">
                  <li>Log in to AWS Management Console.</li>
                  <li>Navigate to S3 Service.</li>
                  <li>Select or Create an S3 Bucket.</li>
                  <li>Upload the CloudFormation Template.</li>
                  <li>Verify the upload is complete.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-900 flex items-center">
                  <svg
                    className="w-6 h-6 mr-2 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Step 3
                </h3>
                <p className="pl-8 text-gray-700">
                  Retrieve the CloudFormation template from your S3 bucket and
                  deploy it to construct the CFT-based architecture. Note that
                  customers need to create their own subnets.
                </p>
              </div>
            </div>
          </div>
        );
      case "assisted":
        return (
          <div className="w-full bg-gradient-to-r from-pink-100 via-pink-50 to-blue-100 border rounded-lg shadow-lg p-6 mt-8 ">
            <h2 className="text-2xl font-bold text-green-800 py-3 border-b border-green-300 mb-4">
              Instruction Manual​
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-blue-900 flex items-center">
                  <svg
                    className="w-6 h-6 mr-2 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Step 1
                </h3>
                <p className="pl-8 text-gray-700">
                  Download the CloudFormation template (CFT) from our website.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-900 flex items-center">
                  <svg
                    className="w-6 h-6 mr-2 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Step 2
                </h3>
                <p className="pl-8 text-gray-700">
                  Upload the downloaded CloudFormation template to your S3
                  bucket in your AWS account where you want to use the PIOSA
                  product. Ensure you have downloaded the required
                  CloudFormation template file to your local machine.
                </p>
                <ul className="pl-12 list-disc text-gray-700">
                  <li>Log in to AWS Management Console.</li>
                  <li>Navigate to S3 Service.</li>
                  <li>Select or Create an S3 Bucket.</li>
                  <li>Upload the CloudFormation Template.</li>
                  <li>Verify the upload is complete.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-900 flex items-center">
                  <svg
                    className="w-6 h-6 mr-2 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Step 3
                </h3>
                <p className="pl-8 text-gray-700">
                  Retrieve the CloudFormation template from your S3 bucket and
                  deploy it to construct the CFT-based architecture. Note that
                  customers need to create their own subnets.
                </p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />

      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          openSidebarToggle ? "ml-64" : "ml-0"
        }`}
      >
        {/* Header */}
        <Header OpenSidebar={OpenSidebar} />

        <div className="relative">
          {/* Full-width pink background */}
          <div className="bg-customPink py-8 px-4">
            <h1 className="text-4xl font-bold text-center text-green-950">
              Deployment Option
            </h1>
          </div>

          <div className="container mx-auto mt-1 px-4">
            <div className="flex flex-col items-center mt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-24 justify-center items-center">
                {/* Yourself Section */}
                <div className="bg-white rounded-3xl shadow-md p-6 border flex flex-col w-80">
                  <img
                    src={op1}
                    className="w-full h-40 object-cover rounded-t-3xl mb-4"
                  />
                  <h2 className="text-2xl font-bold mb-4 text-center">
                    Do It, Yourself
                  </h2>
                  <p className="text-gray-600 text-center">
                    Create and deploy your own CloudFormation template to AWS.
                  </p>
                  <div className="mt-4 flex flex-col justify-center items-center space-y-2">
                    <Link to="/OptionInnerPage" className="text-blue-500 hover:underline font-semibold flex items-center px-4 py-2 transition-all duration-300 rounded-full">
                      Proceed
                    </Link>
                    </div>
                  <div className="flex justify-center mt-auto">
                    <button
                      onClick={() => handleKnowMoreClick("yourself")}
                      className={buttonClass("yourself")}
                    >
                      Know More
                    </button>
                  </div>
                </div>

                {/* Assisted Deployment Section */}
                <div className="bg-white rounded-3xl shadow-md p-6 border flex flex-col w-80">
                  <img
                    src={op3}
                    className="w-full h-40 object-cover rounded-t-3xl mb-4"
                  />
                  <h2 className="text-2xl font-bold mb-4 text-center">
                    Assisted Deployment
                  </h2>
                  <p className="text-gray-600 text-center">
                    Receive guidance and support for deploying your template.
                  </p>
                  <div className="mt-4 flex flex-col justify-center items-center space-y-2">
                    <Link to="/OptionInnerPage" className="text-blue-500 hover:underline font-semibold flex items-center px-4 py-2 transition-all duration-300 rounded-full">
                      Proceed
                    </Link>
                    </div>
                  <div className="flex justify-center mt-auto">
                    <button
                      onClick={() => handleKnowMoreClick("assisted")}
                      className={buttonClass("assisted")}
                    >
                      Know More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Rendered content based on selection */}
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard2;
