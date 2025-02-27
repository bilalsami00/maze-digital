'use client';

import React from 'react';

const User = () => {
  const users = [
    {
      count: '01',
      name: 'Mr. Russel',
      date: '11-04-2025',
      phone: '+1 509-858-4523',
      email: 'russel.gibbs@gmail.com',
    },
    {
      count: '02',
      name: 'Mr. Russel',
      date: '11-04-2025',
      phone: '+1 509-858-4523',
      email: 'russel.gibbs@gmail.com',
    },
  ];

  return (
    <div className="overflow-auto rounded-xl p-6 w-full max-w-6xl mx-auto border border-gray-300">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <button className="px-6 py-3 bg-yellow-400 text-black rounded-full font-medium">All Users</button>
        <button className="px-6 py-3 bg-white text-black rounded-full font-medium flex items-center gap-2 shadow-md">
          <span className="text-lg bg-black p-2 text-yellow-500 rounded-full w-8 h-8 flex items-center justify-center">+</span>
          Create User
        </button>
      </div>
      
      {/* Table Section */}
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b border-gray-300 text-gray-700 bg-gray-200">
            {['Count', 'Name', 'Date', 'Phone', 'Email'].map((heading, index) => (
              <th key={index} className="p-4 font-medium text-center first:rounded-l-xl last:rounded-r-xl">{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="border-t border-gray-300 text-gray-700 text-center">
              <td className="p-4 bg-white rounded-full font-bold shadow-md">{user.count}</td>
              <td className="p-4 text-center bg-white rounded-r-xl">{user.name}</td>
              <td className="p-4 text-center">{user.date}</td>
              <td className="p-4 text-center">{user.phone}</td>
              <td className="p-4 text-center bg-gray-100 rounded-xl">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
