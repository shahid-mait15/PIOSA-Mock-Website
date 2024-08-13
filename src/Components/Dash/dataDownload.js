import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyOrders = () => {
  const navigate = useNavigate();
  const responseData = JSON.parse(localStorage.getItem('responseData'));

  const downloadCSV = () => {
    if (!responseData) return;

    const headers = Object.keys(responseData);
    const rows = [headers, Object.values(responseData)];

    const csvContent = rows.map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'response.csv');
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">My Orders</h1>
      {responseData ? (
        <div>
          <button
            onClick={downloadCSV}
            className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
          >
            Download Response
          </button>
        </div>
      ) : (
        <p>No response data available.</p>
      )}
    </div>
  );
};

export default MyOrders;
