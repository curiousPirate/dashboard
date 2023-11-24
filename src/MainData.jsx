import React from 'react';

function MainData({ content }) {
  return (
    <div className="flex-1 bg-blue-400 p-4">
      <h2 className="text-xl font-bold mb-4">Main Data</h2>
      <table>
        <thead>
          <tr>
            <th>{content} Table Header</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>test1</td>
            {/* Add more table data as needed */}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MainData;
