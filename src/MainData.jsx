import React, { useState, useEffect } from 'react';

function MainData() {
  const [data, setData] = useState([]);

// ...

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/view-content-and-folders-sorted', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          viewer_id: 'IGH141585754362',
          folder_id: 'your_folder_id',
          sortOption: 'type',
          order: 'ASC',
        }),
      });

      // ...
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, []);


  return (
    <div className="flex-1 bg-white p-4 shadow-md rounded-lg h-screen">
      <h2 className="text-xl font-bold mb-4 text-sky-700">Main Data</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              {/* Render other data fields */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MainData;
