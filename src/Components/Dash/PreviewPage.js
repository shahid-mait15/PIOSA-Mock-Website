// src/PreviewPage.js
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PreviewPage = () => {
  const location = useLocation();
  const formData = location.state?.formData || {};
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Form Preview</h2>
      <ul className="space-y-2">
        {Object.entries(formData).map(([key, value]) => (
          <li key={key} className="text-sm">
            <strong>{key.replace(/_/g, " ")}:</strong> {value || "N/A"}
          </li>
        ))}
      </ul>
      <div className="flex justify-end mt-6">
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Back
        </button>
        <button
          onClick={() => navigate("/submit", { state: { formData } })}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded ml-2"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PreviewPage;
