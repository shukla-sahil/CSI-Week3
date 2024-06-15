// src/pages/Tables.js
import React from 'react';
import TableComponent from '../components/TableComponent';

const Tables = () => {
  const sampleData = [
    { id: 1, name: 'John Doe', age: 28, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 34, email: 'jane@example.com' },
    { id: 3, name: 'Michael Johnson', age: 45, email: 'michael@example.com' },
    { id: 4, name: 'Emily Davis', age: 22, email: 'emily@example.com' },
  ];

  return (
    <div>
      <h1>Tables Page</h1>
      <TableComponent data={sampleData} />
    </div>
  );
};

export default Tables;
