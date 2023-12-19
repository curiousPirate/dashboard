// import { useState, useEffect } from 'react';

// function MainData() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://localhost:4000/content', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             viewer_id: 'IGH141585754362'
//           }),
//         });

//         if (response.ok) {
//           const responseData = await response.json(); // Parse the response body
//           setData(responseData.items || []); // Update the data state with received items
//         } else {
//           console.error('Failed to fetch data:', response.statusText);
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="flex-1 bg-white p-4 shadow-md rounded-lg h-screen">
//       <h2 className="text-xl font-bold mb-4 text-sky-700">Main Data</h2>
//       <table className="text-sky-700">
//         <thead>
//           <tr>
//             <th>Name</th>
//             {/* Add more table headers as needed */}
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, index) => (
//             <tr key={index}>
//               <td>{item.name}</td>
//               {/* Render other data fields */}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default MainData;


import React, { useState, useEffect } from 'react';

function MainData() {
  const [data, setData] = useState([]);

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
            sortOption: 'type',
            order: 'ASC',
          }),
        });

        if (response.ok) {
          const jsonData = await response.json();
          // Assuming the response has a field named 'items' containing the fetched data
          setData(jsonData.items || []);
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex-1 bg-white p-4 shadow-md rounded-lg h-screen">
      <h2 className="text-xl font-bold mb-4 text-sky-700">Main Data</h2>
      <table className="text-sky-700">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Content</th>
            <th>Thumbnail</th>
            <th>Source</th>
            <th>Folder</th>
            <th>Created At</th>
            <th>Updated At</th>
            <th>Created By</th>
            <th>Updated By</th>
            <th>Mimetype</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.content}</td>
              <td>{item.thumbnail}</td>
              <td>{item.source}</td>
              <td>{item.folder}</td>
              <td>{item.created_at}</td>
              <td>{item.updated_at}</td>
              <td>{item.created_by}</td>
              <td>{item.updated_by}</td>
              <td>{item.mimetype}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MainData;
