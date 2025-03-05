// 'use client';

// import React from 'react';

// const User = () => {
//   const users = [
//     {
//       count: '01',
//       name: 'Mr. Russel',
//       date: '11-04-2025',
//       phone: '+1 509-858-4523',
//       email: 'russel.gibbs@gmail.com',
//     },
//     {
//       count: '02',
//       name: 'Mr. john',
//       date: '11-04-2025',
//       phone: '+1 509-858-4523',
//       email: 'russel.gibbs@gmail.com',
//     },
//   ];

//   return (
//     <div className="overflow-auto rounded-xl p-6 w-full max-w-6xl mx-auto border border-gray-300">
//       {/* Header Section */}
//       <div className="flex justify-between items-center mb-4">
//         <button className="px-6 py-3 bg-yellow-400 text-black rounded-full font-medium">All Users</button>
//         <button className="px-6 py-3 bg-white text-black rounded-full font-medium flex items-center gap-2 shadow-md">
//           <span className="text-lg bg-black p-2 text-yellow-500 rounded-full w-8 h-8 flex items-center justify-center">+</span>
//           Create User
//         </button>
//       </div>

//       {/* Table Section */}
//       <table className="w-full border-collapse text-left">
//         <thead>
//           <tr className="border-b border-gray-300 text-gray-700 bg-gray-200">
//             {['Count', 'Name', 'Date', 'Phone', 'Email'].map((heading, index) => (
//               <th key={index} className="p-4 font-medium text-center first:rounded-l-xl last:rounded-r-xl">{heading}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user, index) => (
//             <tr key={index} className="border-t border-gray-300 text-gray-700 text-center">
//               <td className="p-4 bg-white rounded-full font-bold shadow-md">{user.count}</td>
//               <td className="p-4 text-center bg-white rounded-r-xl">{user.name}</td>
//               <td className="p-4 text-center">{user.date}</td>
//               <td className="p-4 text-center">{user.phone}</td>
//               <td className="p-4 text-center bg-gray-100 rounded-xl">{user.email}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default User;

// "use client";

// import React from "react";
// import Header from "@/app/Header/page";
// import Sidebar from "../Sidebar/page";
// import { Search, Bell, Settings, User as UserIcon } from "lucide-react"; // Icons
// import Image from "next/image";

// const User = () => {
//   const users = [
//     {
//       count: "01",
//       name: "Mr. Russel",
//       date: "11-04-2025",
//       phone: "+1 509-858-4523",
//       email: "russel.gibbs@gmail.com",
//     },
//     {
//       count: "02",
//       name: "Mr. John",
//       date: "11-04-2025",
//       phone: "+1 509-858-4523",
//       email: "russel.gibbs@gmail.com",
//     },
//   ];

//   return (

//     <div className="relative flex w-full h-screen overflow-hidden">
//       {/* Background Image */}
//       <Image
//         src="/images/ground.png"
//         alt="Background"
//         layout="fill"
//         objectFit="cover"
//         className="absolute inset-0 -z-10"
//       />

//         {/* Header */}
//         <header className="w-full h-[70px] fixed top-0 left-0 z-20">
//           <Header />
//         </header>

//     <div className="flex bg-gray-100 min-h-screen">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         {/* Top Bar (Search, Bell, Settings, Profile) */}
//         <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md mb-6">
//           {/* Search Bar */}
//           <div className="flex items-center space-x-2 border border-gray-300 rounded-full px-4 py-2 w-96">
//             <Search size={18} className="text-gray-500" />
//             <input
//               type="text"
//               placeholder="Search..."
//               className="outline-none w-full bg-transparent"
//             />
//           </div>

//           {/* Icons */}
//           <div className="flex items-center space-x-4">
//             <Bell size={20} className="text-gray-600 cursor-pointer" />
//             <Settings size={20} className="text-gray-600 cursor-pointer" />
//             <UserIcon size={20} className="text-gray-600 cursor-pointer" />
//           </div>
//         </div>

//         {/* Heading */}
//         <h1 className="text-2xl font-bold mb-4">Users</h1>

//         {/* Table Container */}
//         <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-6xl mx-auto border border-gray-200">
//           {/* Header Section */}
//           <div className="flex justify-between items-center mb-6">
//             <button className="px-6 py-3 bg-yellow-400 text-black rounded-full font-semibold shadow-md">
//               All Users
//             </button>
//             <button className="px-6 py-3 bg-white text-black rounded-full font-semibold flex items-center gap-2 border border-gray-300 hover:bg-gray-100 transition">
//               <span className="text-lg bg-black p-2 text-yellow-400 rounded-full w-8 h-8 flex items-center justify-center">
//                 +
//               </span>
//               Create User
//             </button>
//           </div>

//           {/* Table Section */}
//           <div className="overflow-x-auto">
//             <table className="w-full border-collapse text-left">
//               <thead>
//                 <tr className="border-b border-gray-300 text-gray-700 bg-gray-200">
//                   {["Count", "Name", "Date", "Phone", "Email"].map(
//                     (heading, index) => (
//                       <th
//                         key={index}
//                         className="p-4 font-semibold text-center first:rounded-l-lg last:rounded-r-lg"
//                       >
//                         {heading}
//                       </th>
//                     )
//                   )}
//                 </tr>
//               </thead>
//               <tbody>
//                 {users.map((user, index) => (
//                   <tr
//                     key={index}
//                     className="border-t border-gray-300 text-gray-700 text-center"
//                   >
//                     <td className="p-4 bg-white font-bold shadow-md rounded-lg">
//                       {user.count}
//                     </td>
//                     <td className="p-4 text-center bg-white">{user.name}</td>
//                     <td className="p-4 text-center">{user.date}</td>
//                     <td className="p-4 text-center">{user.phone}</td>
//                     <td className="p-4 text-center bg-gray-100 rounded-lg">
//                       {user.email}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   );
// };

// export default User;

// "use client";

// import React from "react";
// import Image from "next/image";
// import Sidebar from "../Sidebar/page";
// import Header from "../Header/page";

// const User = () => {
//   const users = [
//     {
//       count: "01",
//       name: "Mr. Russel",
//       date: "11-04-2025",
//       phone: "+1 509-858-4523",
//       email: "russel.gibbs@gmail.com",
//     },
//     {
//       count: "02",
//       name: "Mr. John",
//       date: "11-04-2025",
//       phone: "+1 509-858-4523",
//       email: "russel.gibbs@gmail.com",
//     },
//   ];

//   return (
//     <div className="relative flex w-full h-screen overflow-hidden">
//       {/* Background Image */}
//       <Image
//         src="/images/ground.png"
//         alt="Background"
//         layout="fill"
//         objectFit="cover"
//         className="absolute inset-0 -z-10"
//       />

//       {/* Header */}
//       <header className="w-full h-[70px] fixed top-0 left-0 z-20">
//         <Header />
//       </header>

//       {/* Main Page Content */}
//       <div className="flex w-full pt-[70px]">
//         {/* Sidebar */}
//         <Sidebar />

//         {/* Content Section */}
//         <div className="flex-1 p-6">
//           {/* Heading */}
//           <h1 className="text-2xl font-bold mb-4">Users</h1>

//           {/* Table Container */}
//           <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-6xl mx-auto border border-gray-200">
//             {/* Header Section */}
//             <div className="flex justify-between items-center mb-6">
//               <button className="px-6 py-3 bg-yellow-400 text-black rounded-full font-semibold shadow-md">
//                 All Users
//               </button>
//               <button className="px-6 py-3 bg-white text-black rounded-full font-semibold flex items-center gap-2 border border-gray-300 hover:bg-gray-100 transition">
//                 <span className="text-lg bg-black p-2 text-yellow-400 rounded-full w-8 h-8 flex items-center justify-center">
//                   +
//                 </span>
//                 Create User
//               </button>
//             </div>

//             {/* Table Section */}
//             <div className="overflow-x-auto">
//               <table className="w-full border-collapse text-left">
//                 <thead>
//                   <tr className="border-b border-gray-300 text-gray-700 bg-gray-200">
//                     {["Count", "Name", "Date", "Phone", "Email"].map(
//                       (heading, index) => (
//                         <th
//                           key={index}
//                           className="p-4 font-semibold text-center first:rounded-l-lg last:rounded-r-lg"
//                         >
//                           {heading}
//                         </th>
//                       )
//                     )}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {users.map((user, index) => (
//                     <tr
//                       key={index}
//                       className="border-t border-gray-300 text-gray-700 text-center"
//                     >
//                       <td className="p-4 bg-white font-bold shadow-md rounded-lg">
//                         {user.count}
//                       </td>
//                       <td className="p-4 text-center bg-white">{user.name}</td>
//                       <td className="p-4 text-center">{user.date}</td>
//                       <td className="p-4 text-center">{user.phone}</td>
//                       <td className="p-4 text-center bg-gray-100 rounded-lg">
//                         {user.email}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default User;

"use client";

import Sidebar from "@/app/Sidebar/page";
import Header from "@/app/Header/page";
import Image from "next/image";

export default function Users() {
  const users = [
    {
      count: "01",
      name: "Mr. Russel",
      date: "11-04-2025",
      phone: "+1 509-858-4523",
      email: "russel.gibbs@gmail.com",
    },
    {
      count: "02",
      name: "Mr. John",
      date: "11-04-2025",
      phone: "+1 509-858-4523",
      email: "john.doe@gmail.com",
    },
  ];

  return (
    <div className="relative flex w-full h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/ground.png"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 -z-10"
      />

      {/* Header */}
      <header className="w-full h-[70px] fixed top-0 left-0 z-20">
        <Header />
      </header>

      {/* Sidebar */}
      <aside className="w-[250px] h-[calc(100vh-70px)] fixed left-0 z-20 !top-[14rem]">
        <Sidebar />
      </aside>

      {/* New User Button */}
      <div className="absolute right-10 top-[8rem] z-30">
        <button className="px-6 py-3 bg-white text-black rounded-full font-medium flex items-center gap-2 shadow-lg">
          <span className="text-lg bg-black p-2 text-yellow-500 rounded-full w-8 h-8 flex items-center justify-center">
            +
          </span>{" "}
          New User
        </button>
      </div>

      {/* Main Content */}
      <div
        className="flex-1 flex flex-col h-full ml-[290px] mt-[200px] p-6 m-6 overflow-auto bg-white bg-opacity-20 h-[62vh]"
        style={{ borderRadius: "40px" }}
      >
        {/* Tabs & Button */}
        <div className="flex justify-between items-center w-full max-w-6xl mx-auto mb-6">
          <div className="flex space-x-4 p-4 rounded-xl">
            <button className="px-16 py-2 bg-yellow-400 text-black rounded-full font-medium">
              All Users
            </button>
          </div>
        </div>

        {/* Table Container */}
        <div className="overflow-auto rounded-xl p-6 max-w-6xl">
          <table className="table-auto border-collapse rounded-[40px] overflow-hidden text-left">
            <thead>
              <tr className="text-gray-700">
                {["Count", "Name", "Date", "Phone", "Email"].map((heading) => (
                  <th
                    key={heading}
                    className="px-6 py-3 font-medium text-center"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="text-gray-700">
                  <td className="py-3 text-center border-b">
                    <span className="px-4 py-2 bg-gray-400 text-white rounded-2xl">
                      {user.count}
                    </span>
                  </td>
                  <td className="py-3 text-center border-b">
                    <span className="block px-12 py-6 bg-white text-black rounded-[1.85rem] whitespace-nowrap">
                      {user.name}
                    </span>
                  </td>
                  <td className="py-3 text-center relative">
                    <div className="relative inline-block w-[125px] h-[100px]">
                      <Image
                        src="/images/bubbles/date-bub.png"
                        alt="Date Background"
                        width={125}
                        height={100}
                        className="absolute top-0"
                      />
                      <span className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium">
                        {user.date}
                      </span>
                    </div>
                  </td>
                  {/* Phone */}
                  <td className="py-3 text-center relative">
                    <div className="relative inline-block w-[166px] h-[100px]">
                      <Image
                        src="/images/bubbles/phone-bub.png"
                        alt="Phone Background"
                        width={166}
                        height={100}
                        className="absolute top-0"
                      />
                      <span className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium">
                        {user.phone}
                      </span>
                    </div>
                  </td>

                  {/* Email */}
                  <td className="py-3 text-center relative">
                    <div className="relative inline-block w-[212px] h-[100px]">
                      <Image
                        src="/images/bubbles/email-bub.png"
                        alt="Email Background"
                        width={212}
                        height={100}
                        className="absolute top-0"
                      />
                      <span className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium">
                        {user.email}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
