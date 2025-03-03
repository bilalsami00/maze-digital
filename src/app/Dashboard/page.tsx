// // "use client";
// // import { useState } from "react";
// // import Sidebar from "@/app/Sidebar/page";
// // import Header from "@/app/Header/page";
// // import Image from "next/image";

// // export default function Dashboard() {
// // //   const [sidebarOpen, setSidebarOpen] = useState(false);

// //   return (
// //     <div className="flex w-full h-screen ">
// //           <Image  src="/images/ground.png" alt="Background" layout="fill" objectFit="cover" />
// //       <Sidebar />
// //       <div className="flex-1 min-h-screen w-full ">
// //         <Header  />
// //         <main className="p-6 flex flex-col items-center justify-center">
// //           <h2 className="text-xl font-semibold   text-black">Welcome to Lead Dashboard</h2>
// //           <p className="text-gray-600">Manage your leads and tasks efficiently.</p>
// //         </main>
// //       </div>
// //     </div>
// //   );
// // }

// "use client";
// import { useState } from "react";
// import Sidebar from "@/app/Sidebar/page";
// import Header from "@/app/Header/page";
// import Image from "next/image";
// import { count } from "console";

// export default function Dashboard() {

//   return (
//     <div className="relative flex w-full h-screen">
//       {/* Background Image */}
//       <Image
//         src="/images/ground.png"
//         alt="Background"
//         layout="fill"
//         objectFit="cover"
//         className="absolute inset-0 -z-10"
//       />

//       <Sidebar />
//       <div className="flex-1 min-h-screen w-full relative">
//         <Header />
//         <main className="p-6 flex flex-col items-center justify-center relative z-10">
//         <div className="overflow-x-auto  shadow-md rounded-lg">
//       {/* <table className="min-w-full table-auto">
//         <thead className="bg-white">
//           <tr>
//             <th className="px-4 py-2 border-b text-left text-sm font-medium text-gray-600">Count</th>
//             <th className="px-4 py-2 border-b text-left text-sm font-medium text-gray-600">Name</th>
//             <th className="px-4 py-2 border-b text-left text-sm font-medium text-gray-600">Email</th>
//             <th className="px-4 py-2 border-b text-left text-sm font-medium text-gray-600">Phone</th>
//             <th className="px-4 py-2 border-b text-left text-sm font-medium text-gray-600">Status</th>
//             <th className="px-4 py-2 border-b text-left text-sm font-medium text-gray-600">Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {leads.map((lead, index) => (
//             <tr key={index} className="border-b">
//               <td className="px-4 py-2 text-sm text-gray-600">{lead.count}</td>
//               <td className="px-4 py-2 text-sm text-gray-600">{lead.name}</td>
//               <td className="px-4 py-2 text-sm text-gray-600">{lead.email}</td>
//               <td className="px-4 py-2 text-sm text-gray-600">{lead.phone}</td>
//               <td className="px-4 py-2 text-sm text-gray-600">{lead.status}</td>
//               <td className="px-4 py-2 text-sm text-gray-600">{lead.date}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table> */}
//        <div className="bg-white shadow-lg p-6 rounded-xl">
//       <div className="flex justify-between items-center mb-4">
//         <div className="flex space-x-4">
//           <button className="px-4 py-2 bg-yellow-400 text-black rounded-lg font-medium shadow-md">Main Lead Board</button>
//           <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg shadow-md">SMM Leads</button>
//           <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg shadow-md">PPC Leads</button>
//         </div>
//         <button className="px-4 py-2 bg-black text-white rounded-lg font-medium shadow-md">+ New Lead</button>
//       </div>
//       <table className="w-full border-collapse bg-gray-100 rounded-lg overflow-hidden shadow-md">
//         <thead>
//           <tr className="bg-gray-300 text-gray-800 text-left">
//             <th className="p-4">Count</th>
//             <th className="p-4">Name</th>
//             <th className="p-4">Date</th>
//             <th className="p-4">Phone</th>
//             <th className="p-4">Email</th>
//             <th className="p-4">Zip Code</th>
//             <th className="p-4">Description</th>
//             <th className="p-4">Assign to</th>
//             <th className="p-4">Assign by</th>
//             <th className="p-4">Comments</th>
//           </tr>
//         </thead>
//         <tbody>
//           {[1, 2].map((num) => (
//             <tr key={num} className="border-t border-gray-300 text-gray-700 text-center">
//               <td className="p-4 bg-white shadow-sm rounded-lg">0{num}</td>
//               <td className="p-4 bg-white shadow-sm rounded-lg">Mr. Russel</td>
//               <td className="p-4 bg-white shadow-sm rounded-lg">11-04-2025</td>
//               <td className="p-4 bg-white shadow-sm rounded-lg">+1 509-858-4523</td>
//               <td className="p-4 bg-white shadow-sm rounded-lg">russel.gibbs@gmail.com</td>
//               <td className="p-4 bg-white shadow-sm rounded-lg">33142</td>
//               <td className="p-4 bg-white shadow-sm rounded-lg">russel.gibbs@gmail.com</td>
//               <td className="p-4 bg-white shadow-sm rounded-lg">Hassan Osama</td>
//               <td className="p-4 bg-white shadow-sm rounded-lg">Huzaifa Aijaz</td>
//               <td className="p-4 bg-white shadow-sm rounded-lg">{num === 1 ? 115 : 109}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//     </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// "use client";
// import { useState } from "react";
// import Sidebar from "@/app/Sidebar/page";
// import Header from "@/app/Header/page";
// import Image from "next/image";

// export default function Dashboard() {
//   return (
//     <div className="relative flex w-full h-full">
//       {/* Background Image */}
//       <Image
//         src="/images/ground.png"
//         alt="Background"
//         layout="fill"
//         objectFit="cover"
//         className="absolute inset-0 -z-10"
//       />

//       <Sidebar />
//       <div className="flex-1 min-h-screen w-full relative">
//         <Header />
//         <main className="p-6 flex flex-col items-center justify-center relative z-10 ">
//           <div className="p-6 rounded-2xl  w-3/4  h-3/8">
//             {/* Tabs & New Lead Button */}
//             <div className="flex justify-between items-center mb-4 " >
//               <div className="flex space-x-4">
//                 <button className="px-4 py-2 bg-yellow-400 text-black rounded-lg font-medium shadow-md">
//                   Main Lead Board
//                 </button>
//                 <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg shadow-md">
//                   SMM Leads
//                 </button>
//                 <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg shadow-md">
//                   PPC Leads
//                 </button>
//               </div>
//               <button className="px-4 py-2 bg-black text-white rounded-lg font-medium shadow-md">
//                 + New Lead
//               </button>
//             </div>

//             {/* Table Container for Scrollability */}
//             <div className="overflow-auto rounded-lg ">
//               <table className="w-full border-collapse  rounded-lg overflow-hidden">
//                 <thead>
//                   <tr className=" border-t border-gray-300 bor text-left ">
//                     <th className="p-4">Count</th>
//                     <th className="p-4">Name</th>
//                     <th className="p-4">Date</th>
//                     <th className="p-4">Phone</th>
//                     <th className="p-4">Email</th>
//                     <th className="p-4">Zip Code</th>
//                     <th className="p-4">Description</th>
//                     <th className="p-4">Assign to</th>
//                     <th className="p-4">Assign by</th>
//                     <th className="p-4">Comments</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {[1, 2].map((num) => (
//                     <tr
//                       key={num}
//                       className="border-t border-gray-300 text-gray-700 text-center"
//                     >
//                       <td className="p-4 bg-white">0{num}</td>
//                       <td className="p-4 bg-white">Mr. Russel</td>
//                       <td className="p-4 bg-white">11-04-2025</td>
//                       <td className="p-4 bg-white">+1 509-858-4523</td>
//                       <td className="p-4 bg-white">russel.gibbs@gmail.com</td>
//                       <td className="p-4 bg-white">33142</td>
//                       <td className="p-4 bg-white">russel.gibbs@gmail.com</td>
//                       <td className="p-4 bg-white">Hassan Osama</td>
//                       <td className="p-4 bg-white">Huzaifa Aijaz</td>
//                       <td className="p-4 bg-white">{num === 1 ? 115 : 109}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// "use client";
// import { useState } from "react";
// import Sidebar from "@/app/Sidebar/page";
// import Header from "@/app/Header/page";
// import Image from "next/image";

// export default function Dashboard() {
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

//       {/* Header - Full Width */}
//       <header className="w-full h-[70px] fixed top-0 left-0 z-20 ">
//         <Header />
//       </header>

//       {/* Sidebar - Lowered from the top */}
//       <aside className="w-[250px] h-[calc(100vh-70px)] fixed top-[70px] left-0 z-20 ">
//         <Sidebar />
//       </aside>

//       {/* Main Content Area */}
//       <div className="flex-1 flex flex-col h-full ml-[290px] mt-[150px] p-6 overflow-auto pt-20 bg-white bg-opacity-40">
//         {/* Tabs & New Lead Button */}
//         <div className="flex justify-between items-center w-full max-w-6xl mx-auto mb-6">
//           <div className="flex space-x-4">
//             <button className="px-6 py-3 bg-yellow-400 text-black rounded-full font-medium">Main Lead Board</button>
//             <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-full">SMM Leads</button>
//             <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-full">PPC Leads</button>
//           </div>
//           <button className="px-6 py-3 bg-black text-white rounded-full font-medium flex items-center gap-2">
//             <span className="text-lg">+</span> New Lead
//           </button>
//         </div>

//         {/* Table Container */}
//         <div className="overflow-auto rounded-xl p-6 w-full max-w-6xl mx-auto">
//           <table className="w-full border-collapse rounded-lg overflow-hidden text-left">
//             <thead>
//               <tr className="border-b border-gray-300 text-gray-700">
//                 {[
//                   "Count", "Name", "Date", "Phone", "Email", "Zip Code", "Description", "Assign to", "Assign by", "Comments"
//                 ].map((heading) => (
//                   <th key={heading} className="p-4 font-medium text-center">{heading}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {[1, 2].map((num) => (
//                 <tr key={num} className="border-t border-gray-300 text-gray-700 text-center">
//                   {[
//                     `0${num}`, "Mr. Russel", "11-04-2025", "+1 509-858-4523", "russel.gibbs@gmail.com", "33142",
//                     "russel.gibbs@gmail.com", "Hassan Osama", "Huzaifa Aijaz", num === 1 ? 115 : 109
//                   ].map((value, index) => (
//                     <td key={index} className="p-4 text-center">{value}</td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client;"
// // import { useState } from "react";
// import Sidebar from "@/app/Sidebar/page";
// import Header from "@/app/Header/page";
// import Image from "next/image";
// import User from "../Users/page";

// export default function Dashboard() {
//   return (
//     <div className="relative flex w-full h-screen overflow-hidden ">
//       {/* Background Image */}
//       <Image
//         src="/images/ground.png"
//         alt="Background"
//         layout="fill"
//         objectFit="cover"
//         className="absolute inset-0 -z-10"
//       />

//       {/* Header - Full Width */}
//       <header className="w-full h-[70px] fixed top-0 left-0 z-20">
//         <Header />
//       </header>

//       {/* Sidebar - Lowered from the top */}
//       <aside className="w-[250px] h-[calc(100vh-70px)] fixed top-[70px] left-0 z-20">
//         <Sidebar />
//       </aside>

//       {/* Main Content Area */}
//       <div className="flex-1 flex flex-col h-full ml-[290px] mt-[150px] p-6 m-6   overflow-auto bg-white bg-opacity-20">
//         {/* Tabs & New Lead Button */}
//         <div className="flex justify-between items-center w-full max-w-6xl mx-auto mb-6">
//           <div className="flex space-x-4   p-4 rounded-xl">
//             <button className="px-6 py-3 bg-yellow-400 text-black rounded-full font-medium">Main Lead Board</button>
//             <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-full">SMM Leads</button>
//             <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-full">PPC Leads</button>
//           </div>
//           <button className="px-6 py-3 bg-white text-black rounded-full font-medium flex items-center gap-2">
//           <span className="text-lg bg-black p-2 text-yellow-500 rounded-full w-8 h-8 flex items-center justify-center">+</span> New Lead
//           </button>
//         </div>

//         {/* Table Container */}
//         <div className="overflow-auto rounded-xl p-6 w-full max-w-6xl mx-auto border border-gray-300 ">
//           <table className="w-full border-collapse rounded-lg overflow-hidden text-left">
//             <thead>
//               <tr className="border-b border-gray-300 text-gray-700">
//                 {["Count", "Name", "Date", "Phone", "Email", "Zip Code", "Description", "Assign to", "Assign by", "Comments"].map((heading) => (
//                   <th key={heading} className="p-4 font-medium text-center">{heading}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {[1, 2].map((num) => (
//                 <tr key={num} className="border-t border-gray-300 text-gray-700 text-center">
//                   {[`0${num}`, "Mr. Russel", "11-04-2025", "+1 509-858-4523", "russel.gibbs@gmail.com", "33142", "russel.gibbs@gmail.com", "Hassan Osama", "Huzaifa Aijaz", num === 1 ? 115 : 109].map((value, index) => (
//                     <td key={index} className="p-4 text-center bg-white rounded-full shadow-md">{value}</td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//         </div>
//       </div>
//     </div>
//   );
// }
// import Image from "next/image";



// "use client;"
// // import { useState } from "react";
// import Sidebar from "@/app/Sidebar/page";
// import Header from "@/app/Header/page";
// import Image from "next/image";
// import User from "../Users/page";

// // bilal's styling complete
// export default function Dashboard() {
//   const leads = [
//     {
//       count: "01",
//       name: "Mr. Russel",
//       date: "11-04-2025",
//       phone: "+1 509-858-4523",
//       email: "russel.gibbs@gmail.com",
//       zipCode: "33142",
//       description: "Some description here...",
//       assignTo: "Hassan Osama",
//       assignBy: "Huzaifa Aijaz",
//       comments: "115",
//     },
//     {
//       count: "02",
//       name: "Ms. Jane",
//       date: "12-04-2025",
//       phone: "+1 509-123-4567",
//       email: "jane.doe@gmail.com",
//       zipCode: "12345",
//       description: "Another description...",
//       assignTo: "John Doe",
//       assignBy: "Alice Smith",
//       comments: "109",
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

//       {/* Sidebar */}
//       <aside className="w-[250px] h-[calc(100vh-70px)] fixed left-0 z-20 !top-[14rem]">
//         <Sidebar />
//       </aside>

//       {/* New Lead Button (Moved outside and aligned to the right) */}
//       <div className="absolute right-10 top-[8rem] z-30">
//         <button className="px-6 py-3 bg-white text-black rounded-full font-medium flex items-center gap-2 shadow-lg">
//           <span className="text-lg bg-black p-2 text-yellow-500 rounded-full w-8 h-8 flex items-center justify-center">
//             +
//           </span>{" "}
//           New Lead
//         </button>
//       </div>

//       {/* Main Content */}
//       <div
//         className="flex-1 flex flex-col h-full ml-[290px] mt-[200px] p-6 m-6 overflow-auto bg-white bg-opacity-20 h-[62vh]"
//         style={{ borderRadius: "40px" }}
//       >
//         {/* Tabs & Button */}
//         <div className="flex justify-between items-center w-full max-w-6xl mx-auto mb-6">
//           <div className="flex space-x-4 p-4 rounded-xl">
//             <button className="px-6 py-3 bg-yellow-400 text-black rounded-full font-medium">
//               Main Lead Board
//             </button>
//             <button className="px-12 py-2 bg-gray-200 text-gray-700 rounded-full border-[2px] border-white ">
//               SMM Leads
//             </button>
//             <button className="px-12 py-2 bg-gray-200 text-gray-700 rounded-full border-[2px] border-white">
//               PPC Leads
//             </button>
//           </div>
//         </div>

//         {/* Table Container */}
//         <div className="overflow-auto rounded-xl p-6 w-full max-w-6xl mx-auto ">
//           <table className="w-full table-auto border-collapse rounded-lg overflow-hidden text-left">
//             <thead>
//               <tr className=" text-gray-700">
//                 {[
//                   "Count",
//                   "Name",
//                   "Date",
//                   "Phone",
//                   "Email",
//                   "Zip Code",
//                   "Description",
//                   "Assign to",
//                   "Assign by",
//                   "Comments",
//                 ].map((heading) => (
//                   <th
//                     key={heading}
//                     // className="px-6 py-3 font-medium text-center border-b border-gray-300"
//                     className="px-6 py-3 font-medium text-center"
//                   >
//                     {heading}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {leads.map((lead, index) => (
//                 <tr key={index} className="text-gray-700">
//                   {/* Count */}
//                   <td className="py-3 text-center border-b">
//                     <span className="px-4 py-2 bg-gray-400 text-white rounded-2xl">
//                       {lead.count}
//                     </span>
//                   </td>

//                   {/* Name */}
//                   <td className="py-3 text-center border-b">
//                     <span className="w-full block px-4 py-2 bg-white text-black rounded-[1.85rem] whitespace-nowrap px-12 py-6">
//                       {lead.name}
//                     </span>
//                   </td>

//                   {/* Date */}
//                   <td className="py-3 text-center">
//                     <span className="w-full block px-4 py-2 bg-white text-black rounded-[1.85rem] whitespace-nowrap px-12 py-6">
//                       {lead.date}
//                     </span>
//                   </td>

//                   {/* Phone */}
//                   <td className="py-3 text-center">
//                     <span className="w-full block px-4 py-2 bg-white text-black rounded-[1.85rem] whitespace-nowrap px-12 py-6">
//                       {lead.phone}
//                     </span>
//                   </td>

//                   {/* Email */}
//                   <td className="py-3 text-center">
//                     <span className="w-full block px-4 py-2 bg-white text-black rounded-[1.85rem] whitespace-nowrap px-12 py-6">
//                       {lead.email}
//                     </span>
//                   </td>

//                   {/* Zip Code */}
//                   <td className="py-3 text-center">
//                     <span className="w-full block px-4 py-2 bg-white text-black rounded-[1.85rem] whitespace-nowrap px-12 py-6">
//                       {lead.zipCode}
//                     </span>
//                   </td>

//                   {/* Description */}
//                   <td className="py-3 text-center">
//                     <span className="w-full block px-4 py-2 bg-white text-black rounded-[1.85rem] whitespace-nowrap px-12 py-6">
//                       {lead.description}
//                     </span>
//                   </td>

//                   {/* Assign To */}
//                   <td className="py-3 text-center relative">
//                     {/* Absolute positioned SVG inside bubble */}
//                     {/* Absolute positioned SVG inside bubble */}
//                     <div className="absolute top-[1.1rem] right-[0.85rem] w-[1.5rem] h-[1.5rem] flex items-center justify-center bg-black rounded-full">
//                       <svg
//                         className="w-4 h-4" // Tailwind class for smaller size
//                         style={{ width: "14px", height: "14px" }} // Explicit inline styles for extra control
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="white"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
//                       </svg>
//                     </div>

//                     {/* Assign To Text inside bubble */}
//                     <span className="w-full block px-8 py-6 bg-white text-black rounded-[1.85rem] whitespace-nowrap">
//                       {lead.assignTo}
//                     </span>
//                   </td>

//                   {/* Assign By */}
//                   <td className="py-3 text-center relative">
//                     {/* Absolute positioned SVG inside bubble */}
//                     {/* Absolute positioned SVG inside bubble */}
//                     <div className="absolute top-[1.1rem] right-[0.85rem] w-[1.5rem] h-[1.5rem] flex items-center justify-center bg-black rounded-full">
//                       <svg
//                         className="w-4 h-4" // Tailwind class for smaller size
//                         style={{ width: "14px", height: "14px" }} // Explicit inline styles for extra control
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="white"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
//                       </svg>
//                     </div>

//                     {/* Assign By Text inside bubble */}
//                     <span className="w-full block px-8 py-6 bg-white text-black rounded-[1.85rem] whitespace-nowrap">
//                       {lead.assignBy}
//                     </span>
//                   </td>

//                   {/* Comments */}
//                   <td className="py-3 text-center relative">
//                     {/* Absolute positioned SVG inside bubble */}
//                     {/* Absolute positioned SVG inside bubble */}
//                     <div className="absolute top-[1.1rem] right-[0.85rem] w-[1.5rem] h-[1.5rem] flex items-center justify-center bg-black rounded-full">
//                       <svg
//                         className="w-4 h-4" // Tailwind class for smaller size
//                         style={{ width: "14px", height: "14px" }} // Explicit inline styles for extra control
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="white"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
//                       </svg>
//                     </div>

//                     {/* Comment Text inside bubble */}
//                     <span className="w-full block px-8 py-6 bg-white text-black rounded-[1.85rem] whitespace-nowrap">
//                       {lead.comments}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }
