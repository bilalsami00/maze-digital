// "use client";
// import Sidebar from "@/app/Sidebar/page";
// import Header from "@/app/Header/page";
// import Image from "next/image";

// export default function Leads() {
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

//       {/* New Lead Button */}
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
//         {/* Tabs */}
//         <div className="flex justify-between items-center w-full max-w-6xl mx-auto mb-6">
//           <div className="flex space-x-4 p-4 rounded-xl">
//             <button className="px-16 py-2 bg-yellow-400 text-black rounded-full font-medium">
//               Main Lead Board
//             </button>
//             <button className="px-16 py-2 bg-gray-200 text-gray-700 rounded-full border-[2px] border-white">
//               SMM Leads
//             </button>
//             <button className="px-16 py-2 bg-gray-200 text-gray-700 rounded-full border-[2px] border-white">
//               PPC Leads
//             </button>
//           </div>
//         </div>

//         {/* Table Container */}
//         <div className="overflow-auto rounded-xl p-6 w-full max-w-6xl mx-auto">
//           <table className="w-full table-auto border-collapse rounded-lg overflow-hidden text-left">
//             <thead>
//               <tr className="text-gray-700">
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
//                     <span className="w-full block px-4 py-2 bg-white text-black rounded-[1.85rem] whitespace-nowrap">
//                       {lead.name}
//                     </span>
//                   </td>

//                   {/* Date */}
//                   <td className="py-3 text-center relative">
//                     <div className="relative inline-block w-[125px] h-[100px]">
//                       <Image
//                         src="/images/bubbles/date-bub.png"
//                         alt="Date Background"
//                         width={125}
//                         height={100}
//                         className="absolute top-0"
//                       />
//                       <span className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium">
//                         {lead.date}
//                       </span>
//                     </div>
//                   </td>

//                   {/* Phone */}
//                   <td className="py-3 text-center relative">
//                     <div className="relative inline-block w-[166px] h-[100px]">
//                       <Image
//                         src="/images/bubbles/phone-bub.png"
//                         alt="Phone Background"
//                         width={166}
//                         height={100}
//                         className="absolute top-0"
//                       />
//                       <span className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium">
//                         {lead.phone}
//                       </span>
//                     </div>
//                   </td>

//                   {/* Email */}
//                   <td className="py-3 text-center relative">
//                     <div className="relative inline-block w-[212px] h-[100px]">
//                       <Image
//                         src="/images/bubbles/email-bub.png"
//                         alt="Email Background"
//                         width={212}
//                         height={100}
//                         className="absolute top-0"
//                       />
//                       <span className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium">
//                         {lead.email}
//                       </span>
//                     </div>
//                   </td>

//                   {/* Zip Code */}
//                   <td className="py-3 text-center relative">
//                     <div className="relative inline-block w-[87px] h-[100px]">
//                       <Image
//                         src="/images/bubbles/zip-bub.png"
//                         alt="Zip Code Background"
//                         width={87}
//                         height={100}
//                         className="absolute top-0"
//                       />
//                       <span className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium">
//                         {lead.zipCode}
//                       </span>
//                     </div>
//                   </td>

//                   {/* Description */}
//                   <td className="py-3 text-center relative">
//                     <div className="relative inline-block w-[212px] h-[100px]">
//                       <Image
//                         src="/images/bubbles/description-bub.png"
//                         alt="Description Background"
//                         width={212}
//                         height={100}
//                         className="absolute top-0"
//                       />
//                       <span className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium">
//                         {lead.description}
//                       </span>
//                     </div>
//                   </td>

//                   {/* Assign To */}
//                   <td className="py-3 text-center relative">
//                     <div className="relative inline-block w-[106px] h-[100px]">
//                       <Image
//                         src="/images/bubbles/assign-to-by-comment-bub.png"
//                         alt="Assign To Background"
//                         width={106}
//                         height={100}
//                         className="absolute top-0"
//                       />
//                       <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium">
//                         {lead.assignTo}
//                       </span>
//                     </div>
//                   </td>

//                   {/* Assign By */}
//                   <td className="py-3 text-center relative">
//                     <div className="relative inline-block w-[106px] h-[100px]">
//                       <Image
//                         src="/images/bubbles/assign-to-by-comment-bub.png"
//                         alt="Assign By Background"
//                         width={106}
//                         height={100}
//                         className="absolute top-0"
//                       />
//                       <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium">
//                         {lead.assignBy}
//                       </span>
//                     </div>
//                   </td>

//                   {/* Comments */}
//                   <td className="py-3 text-center relative">
//                     <div className="relative inline-block w-[106px] h-[100px]">
//                       <Image
//                         src="/images/bubbles/assign-to-by-comment-bub.png"
//                         alt="Comments Background"
//                         width={106}
//                         height={100}
//                         className="absolute top-0"
//                       />
//                       <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium">
//                         {lead.comments}
//                       </span>
//                     </div>
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

// "use client";
// import Sidebar from "@/app/Sidebar/page";
// import Header from "@/app/Header/page";
// import Image from "next/image";

// export default function Leads() {
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
//     <div className="relative flex w-full h-screen overflow-visible">
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

//       {/* New Lead Button */}
// {/* <div className="absolute right-10 top-[8rem] z-30">
//   <button className="pr-6 py-3 bg-white text-black rounded-full font-medium flex items-center gap-2 shadow-lg"> */}
//     {/* New Lead Plus Image */}
//     {/* <span className="">
//       <Image
//         src="/images/newLeadPlus.png"
//         alt="New Lead Plus Icon"
//         width={40}
//         height={40}
//       />
//     </span>
//     New Lead
//   </button>
// </div> */}

// {/* New Lead Button */}
// <div className="absolute right-10 top-[8rem] z-30">
//   <button className="pl-12 pr-6 py-4 bg-transparent text-black rounded-full font-medium flex items-center gap-2 shadow-lg relative overflow-visible ">
//     {/* PNG Outside the Button (Conjoined) */}
//     <Image
//       src="/images/newLeadPlus.png"
//       alt="New Lead Plus Icon"
//       width={60}
//       height={60}
//       className="absolute left-[-25px] top-[-2px] z-10"
//     />

//     <span className="ml-auto">New Lead</span> {/* Text pushed to the right */}
//   </button>
// </div>

//       {/* Main Content */}
//       <div
//         className="absolute bg-white bg-opacity-20 p-6 overflow-auto"
//         style={{
//           width: "1421px",
//           height: "765px",
//           top: "312px",
//           left: "267px",
//           borderRadius: "40px",
//         }}
//       >
//         {/* Tabs */}
//         <div className="flex justify-between items-center w-full max-w-6xl mx-auto mb-6">
//           <div className="flex space-x-4 p-4 rounded-xl">
//             <button className="px-16 py-2 bg-yellow-400 text-black rounded-full font-medium">
//               Main Lead Board
//             </button>
//             <button className="px-16 py-2 bg-gray-200 text-gray-700 rounded-full border-[2px] border-white">
//               SMM Leads
//             </button>
//             <button className="px-16 py-2 bg-gray-200 text-gray-700 rounded-full border-[2px] border-white">
//               PPC Leads
//             </button>
//           </div>
//         </div>

//         {/* Table Container */}
//         <div className="overflow-auto rounded-xl p-6 w-full max-w-6xl mx-auto">
//           <table className="w-full table-auto border-collapse rounded-lg overflow-hidden text-left">
//             <thead>
//               <tr className="text-gray-700">
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
//                     <span className="w-full block px-4 py-2 bg-white text-black rounded-[1.85rem] whitespace-nowrap">
//                       {lead.name}
//                     </span>
//                   </td>

//                   {/* Date */}
//                   <td className="py-3 text-center relative">
//                     <div className="relative inline-block w-[125px] h-[100px]">
//                       <Image
//                         src="/images/bubbles/date-bub.png"
//                         alt="Date Background"
//                         width={125}
//                         height={100}
//                         className="absolute top-0"
//                       />
//                       <span className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium">
//                         {lead.date}
//                       </span>
//                     </div>
//                   </td>

//                   {/* Phone */}
//                   <td className="py-3 text-center relative">
//                     <div className="relative inline-block w-[166px] h-[100px]">
//                       <Image
//                         src="/images/bubbles/phone-bub.png"
//                         alt="Phone Background"
//                         width={166}
//                         height={100}
//                         className="absolute top-0"
//                       />
//                       <span className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium">
//                         {lead.phone}
//                       </span>
//                     </div>
//                   </td>

//                   {/* Email */}
//                   <td className="py-3 text-center relative">
//                     <div className="relative inline-block w-[212px] h-[100px]">
//                       <Image
//                         src="/images/bubbles/email-bub.png"
//                         alt="Email Background"
//                         width={212}
//                         height={100}
//                         className="absolute top-0"
//                       />
//                       <span className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium">
//                         {lead.email}
//                       </span>
//                     </div>
//                   </td>

//                   {/* Zip Code */}
//                   <td className="py-3 text-center relative">
//                     <div className="relative inline-block w-[87px] h-[100px]">
//                       <Image
//                         src="/images/bubbles/zip-bub.png"
//                         alt="Zip Code Background"
//                         width={87}
//                         height={100}
//                         className="absolute top-0"
//                       />
//                       <span className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium">
//                         {lead.zipCode}
//                       </span>
//                     </div>
//                   </td>

//                   {/* Description */}
//                   <td className="py-3 text-center relative">
//                     <div className="relative inline-block w-[212px] h-[100px]">
//                       <Image
//                         src="/images/bubbles/description-bub.png"
//                         alt="Description Background"
//                         width={212}
//                         height={100}
//                         className="absolute top-0"
//                       />
//                       <span className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium">
//                         {lead.description}
//                       </span>
//                     </div>
//                   </td>

//                   {/* Assign To */}
//                   <td className="py-3 text-center relative">
//                     <div className="relative inline-block w-[106px] h-[100px]">
//                       {/* Background Bubble Image */}
//                       <Image
//                         src="/images/bubbles/assign-to-by-comment-bub.png"
//                         alt="Assign To Background"
//                         width={106}
//                         height={100}
//                         className="absolute top-0"
//                       />

//                       {/* Lead Assigned Text */}
//                       <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium">
//                         {lead.assignTo}
//                       </span>

//                       {/* Black Background Circle for Yellow Arrow */}
//                       <div className="absolute top-[5px] left-[75%] transform -translate-x-1/2 bg-black w-[30px] h-[30px] rounded-full flex items-center justify-center">
//                         <Image
//                           src="/images/yellowArrow.png"
//                           alt="Assign To Arrow"
//                           width={10}
//                           height={10}
//                           className="border-[1.5px] border-black"
//                         />
//                       </div>
//                     </div>
//                   </td>

//                   {/* Assign By */}
//                   <td className="py-3 text-center relative">
//                     <div className="relative inline-block w-[106px] h-[100px]">
//                       {/* Background Bubble Image */}
//                       <Image
//                         src="/images/bubbles/assign-to-by-comment-bub.png"
//                         alt="Assign By Background"
//                         width={106}
//                         height={100}
//                         className="absolute top-0"
//                       />

//                       {/* Assigned By Text */}
//                       <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium">
//                         {lead.assignBy}
//                       </span>

//                       {/* Black Background Circle for Purple Arrow */}
//                       <div className="absolute top-[5px] left-[75%] transform -translate-x-1/2 bg-black w-[30px] h-[30px] rounded-full flex items-center justify-center">
//                         <Image
//                           src="/images/purpleArrow.png"
//                           alt="Assign By Arrow"
//                           width={10}
//                           height={10}
//                           className="border-[1.5px] border-black"
//                         />
//                       </div>
//                     </div>
//                   </td>

//                   {/* Comments */}
//                   <td className="py-3 text-center relative">
//                     <div className="relative inline-block w-[106px] h-[100px]">
//                       {/* Background Bubble Image */}
//                       <Image
//                         src="/images/bubbles/assign-to-by-comment-bub.png"
//                         alt="Comment Background"
//                         width={106}
//                         height={100}
//                         className="absolute top-0"
//                       />

//                       {/* Comment Text */}
//                       <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium">
//                         {lead.comments}
//                       </span>

//                       {/* Black Background Circle for Green Arrow */}
//                       <div className="absolute top-[5px] left-[75%] transform -translate-x-1/2 bg-black w-[30px] h-[30px] rounded-full flex items-center justify-center">
//                         <Image
//                           src="/images/greenArrow.png"
//                           alt="Comment Arrow"
//                           width={10}
//                           height={10}
//                           className="border-[1.5px] border-black"
//                         />
//                       </div>
//                     </div>
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

// "use client";
// import Sidebar from "@/app/Sidebar/page";
// import Header from "@/app/Header/page";
// import Image from "next/image";

// export default function Leads() {
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
//     // CHANGED: Use min-h-screen instead of h-screen so the page can scroll when content exceeds viewport height
//     <div className="relative flex w-full min-h-screen overflow-visible flex-wrap">
//       {/* Background Image */}
//       <Image
//         src="/images/ground.png"
//         alt="Background"
//         fill
//         // objectFit="cover"
//         className="absolute inset-0 w-full h-full object-cover -z-10"
//       />

//       {/* Header */}
//       {/* CHANGED: Removed "fixed top-0 left-0 z-20" to let the header scroll with the page */}
//       <header className="w-full h-[70px] z-20 px-4 md:px-8">
//         <Header />
//       </header>

//       {/* Sidebar */}
//       {/* CHANGED: Removed "fixed" and adjusted positioning so the sidebar scrolls with the page */}
//       <aside className="w-[250px] min-h-screen relative mt-64">
//         <Sidebar />
//       </aside>

//       {/* New Lead Button (Unchanged) */}
//     {/* <div className="absolute right-10 top-[8rem] z-30">
//       <button className="pl-12 pr-6 py-4 bg-transparent text-black rounded-full font-medium flex items-center gap-2 shadow-lg relative overflow-visible">
//         <Image
//           src="/images/newLeadPlus.png"
//           alt="New Lead Plus Icon"
//           width={60}
//           height={60}
//           className="absolute left-[-25px] top-[-2px] z-10"
//         />
//         <span className="ml-auto">New Lead</span>
//       </button>
//     </div> */}

//     {/* Main Content - CHANGED */}
//       {/* New Lead Button (Unchanged) */}
//       {/* <div className="absolute right-10 top-[8rem] z-30">
//       <button className="pl-12 pr-6 py-4 bg-transparent text-black rounded-full font-medium flex items-center gap-2 shadow-lg relative overflow-visible">
//         <Image
//           src="/images/newLeadPlus.png"
//           alt="New Lead Plus Icon"
//           width={60}
//           height={60}
//           className="absolute left-[-25px] top-[-2px] z-10"
//         />
//         <span className="ml-auto">New Lead</span>
//       </button>
//     </div> */}

//     <div className="flex-1 min-h-screen relative mt-64 bg-white bg-opacity-20 p-6 overflow-auto rounded-[40px]  mx-8">

//         {/* Tabs */}
//         <div className="flex justify-between items-center w-full max-w-6xl mx-auto mb-6">
//           <div className="flex space-x-4 p-4 rounded-xl">
//             <button className="px-16 py-2 bg-yellow-400 text-black rounded-full font-medium">
//               Main Lead Board
//             </button>
//             <button className="px-16 py-2 bg-gray-200 text-gray-700 rounded-full border-[2px] border-white">
//               SMM Leads
//             </button>
//             <button className="px-16 py-2 bg-gray-200 text-gray-700 rounded-full border-[2px] border-white">
//               PPC Leads
//             </button>
//           </div>
//         </div>

//         {/* Table Container */}
//         <div className="overflow-auto rounded-xl p-6 w-full max-w-6xl mx-auto">
//           <table className="w-full table-auto border-collapse rounded-lg overflow-hidden text-left">
//             <thead>
//               <tr className="text-gray-700">
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
//                   <th key={heading} className="px-6 py-3 font-medium text-center">
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
//                     <span className="w-full block px-4 py-2 bg-white text-black rounded-[1.85rem] whitespace-nowrap">
//                       {lead.name}
//                     </span>
//                   </td>

//                   {/* Date */}
//                   <td className="py-3 text-center relative">
//                     <div className="relative inline-block w-[125px] h-[100px]">
//                       <Image
//                         src="/images/bubbles/date-bub.png"
//                         alt="Date Background"
//                         width={125}
//                         height={100}
//                         className="absolute top-0"
//                       />
//                       <span className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium">
//                         {lead.date}
//                       </span>
//                     </div>
//                   </td>

//                   {/* Phone */}
//                   <td className="py-3 text-center relative">
//                     <div className="relative inline-block w-[166px] h-[100px]">
//                       <Image
//                         src="/images/bubbles/phone-bub.png"
//                         alt="Phone Background"
//                         width={166}
//                         height={100}
//                         className="absolute top-0"
//                       />
//                       <span className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium">
//                         {lead.phone}
//                       </span>
//                     </div>
//                   </td>

//                   {/* Email */}
//                   <td className="py-3 text-center relative">
//                     <div className="relative inline-block w-[212px] h-[100px]">
//                       <Image
//                         src="/images/bubbles/email-bub.png"
//                         alt="Email Background"
//                         width={212}
//                         height={100}
//                         className="absolute top-0"
//                       />
//                       <span className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium">
//                         {lead.email}
//                       </span>
//                     </div>
//                   </td>

//                   {/* Zip Code */}
//                   <td className="py-3 text-center relative">
//                     <div className="relative inline-block w-[87px] h-[100px]">
//                       <Image
//                         src="/images/bubbles/zip-bub.png"
//                         alt="Zip Code Background"
//                         width={87}
//                         height={100}
//                         className="absolute top-0"
//                       />
//                       <span className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium">
//                         {lead.zipCode}
//                       </span>
//                     </div>
//                   </td>

//                   {/* Description */}
//                   <td className="py-3 text-center relative">
//                     <div className="relative inline-block w-[212px] h-[100px]">
//                       <Image
//                         src="/images/bubbles/description-bub.png"
//                         alt="Description Background"
//                         width={212}
//                         height={100}
//                         className="absolute top-0"
//                       />
//                       <span className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium">
//                         {lead.description}
//                       </span>
//                     </div>
//                   </td>

//                   {/* Assign To */}
//                   <td className="py-3 text-center relative">
//                     <div className="relative inline-block w-[106px] h-[100px]">
//                       {/* Background Bubble Image */}
//                       <Image
//                         src="/images/bubbles/assign-to-by-comment-bub.png"
//                         alt="Assign To Background"
//                         width={106}
//                         height={100}
//                         className="absolute top-0"
//                       />
//                       {/* Lead Assigned Text */}
//                       <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium">
//                         {lead.assignTo}
//                       </span>
//                       {/* Black Background Circle for Yellow Arrow */}
//                       <div className="absolute top-[5px] left-[75%] transform -translate-x-1/2 bg-black w-[30px] h-[30px] rounded-full flex items-center justify-center">
//                         <Image
//                           src="/images/yellowArrow.png"
//                           alt="Assign To Arrow"
//                           width={10}
//                           height={10}
//                           className="border-[1.5px] border-black"
//                         />
//                       </div>
//                     </div>
//                   </td>

//                   {/* Assign By */}
//                   <td className="py-3 text-center relative">
//                     <div className="relative inline-block w-[106px] h-[100px]">
//                       {/* Background Bubble Image */}
//                       <Image
//                         src="/images/bubbles/assign-to-by-comment-bub.png"
//                         alt="Assign By Background"
//                         width={106}
//                         height={100}
//                         className="absolute top-0"
//                       />
//                       {/* Assigned By Text */}
//                       <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium">
//                         {lead.assignBy}
//                       </span>
//                       {/* Black Background Circle for Purple Arrow */}
//                       <div className="absolute top-[5px] left-[75%] transform -translate-x-1/2 bg-black w-[30px] h-[30px] rounded-full flex items-center justify-center">
//                         <Image
//                           src="/images/purpleArrow.png"
//                           alt="Assign By Arrow"
//                           width={10}
//                           height={10}
//                           className="border-[1.5px] border-black"
//                         />
//                       </div>
//                     </div>
//                   </td>

//                   {/* Comments */}
//                   <td className="py-3 text-center relative">
//                     <div className="relative inline-block w-[106px] h-[100px]">
//                       {/* Background Bubble Image */}
//                       <Image
//                         src="/images/bubbles/assign-to-by-comment-bub.png"
//                         alt="Comment Background"
//                         width={106}
//                         height={100}
//                         className="absolute top-0"
//                       />
//                       {/* Comment Text */}
//                       <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium">
//                         {lead.comments}
//                       </span>
//                       {/* Black Background Circle for Green Arrow */}
//                       <div className="absolute top-[5px] left-[75%] transform -translate-x-1/2 bg-black w-[30px] h-[30px] rounded-full flex items-center justify-center">
//                         <Image
//                           src="/images/greenArrow.png"
//                           alt="Comment Arrow"
//                           width={10}
//                           height={10}
//                           className="border-[1.5px] border-black"
//                         />
//                       </div>
//                     </div>
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

// //////////////////////////////////////// approved ///////////////////////////////////////////////////////////////////////////////
// "use client";
// import { useState, useEffect } from "react";
// import Sidebar from "@/app/Sidebar/page";
// import Header from "@/app/Header/page";
// import Image from "next/image";

// export default function Leads() {
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
//       count: "03",
//       name: "Mr. John",
//       date: "11-04-2025",
//       phone: "+1 509-858-4523",
//       email: "john.doe@gmail.com",
//     },
//   ];
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 768) {
//         setIsSidebarOpen(false); // Collapse sidebar on smaller screens
//       } else {
//         setIsSidebarOpen(true); // Expand sidebar on large screens
//       }
//     };

//     handleResize(); // Set initial state
//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const toggleSidebar = () => {
//     setIsSidebarOpen((prev) => !prev);
//   };

//   return (
//     // CHANGED: Use min-h-screen instead of h-screen so the page can scroll when content exceeds viewport height
//     <div className="relative flex w-full min-h-screen overflow-visible flex-wrap">
//       {/* Background Image */}
//       <Image
//         src="/images/ground.png"
//         alt="Background"
//         fill
//         // objectFit="cover"
//         className="absolute inset-0 w-full h-full object-cover -z-10"
//       />

//       {/* Header */}
//       {/* CHANGED: Removed "fixed top-0 left-0 z-20" to let the header scroll with the page */}
//       <header className="w-full h-[70px] z-20 px-4 md:px-8">
//         <Header />
//       </header>

//       {/* Sidebar + Main Content Wrapper */}
//       <div className="flex flex-row w-full min-h-screen relative">
//         {/* Sidebar */}
//         <aside
//           className={` md:relative z-50 min-h-screen transition-all duration-300 overflow-hidden ${
//             isSidebarOpen
//               ? "translate-x-0 w-[250px] opacity-100"
//               : "w-0 opacity-0"
//           } md:w-[250px] md:translate-x-0 md:opacity-100 mt-64`}
//         >
//           {isSidebarOpen && <Sidebar />} {/* Render Sidebar only when open */}
//         </aside>

//         {/* Sidebar Toggle Button - Always Visible at Bottom */}
//         <button
//           onClick={toggleSidebar}
//           className="fixed bottom-6 left-6 md:bottom-8 md:left-8 z-50 bg-white p-4 rounded-full shadow-lg transition-all duration-300"
//         >
//           <Image
//             src="/images/collapse.png"
//             alt="Toggle Sidebar"
//             width={40}
//             height={40}
//             className="object-contain"
//           />
//         </button>

//         {/* New Lead Button (Unchanged) */}
//         <div className="absolute right-10 top-[11rem] z-30">
//           <button className="px-6 py-3 md:px-12 md:py-4 bg-transparent text-black rounded-full font-medium flex items-center gap-2 shadow-lg relative">
//             <Image
//               src="/images/newLeadPlus.png"
//               alt="New Lead Plus Icon"
//               width={50}
//               height={50}
//               className="absolute left-[-20px] top-0 md:left-[-8px] md:top-[5px] z-10"
//             />
//             {/* Hide text on small screens */}
//             <span className="whitespace-nowrap hidden md:inline">New Lead</span>
//           </button>
//         </div>

//         {/* Main Content - CHANGED */}
//         <div
//           className="flex-1 min-h-screen relative mt-64 overflow-auto rounded-[40px] mx-8"
//           style={{
//             backgroundImage: "url('/images/folder-bg.png')",
//             backgroundSize: "cover",
//             // backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//           }}
//         >
//           {/* Tabs */}
//           <div className="flex items-center pl-[2rem] w-full max-w-6xl mb-4">
//             <div className="flex space-x-4 rounded-xl">
//                 <button className="px-12 py-2 bg-yellow-400 text-black rounded-full font-medium">
//                   Main Lead Board
//                 </button>

//               <div className="flex space-x-4 rounded-xl pl-[4rem]">
//                 <button className="px-16 py-2 bg-gray-200 text-gray-700 rounded-full border-[2px] border-white">
//                   SMM Leads
//                 </button>
//                 <button className="px-16 py-2 bg-gray-200 text-gray-700 rounded-full border-[2px] border-white">
//                   PPC Leads
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Table Container */}
//           <div className="overflow-x-auto md:overflow-visible rounded-xl p-6 w-full max-w-6xl mr-auto">
//             <table className="w-full table-auto border-collapse rounded-lg overflow-hidden text-left">
//               <thead>
//                 <tr className="text-gray-700">
//                   {[
//                     "Count",
//                     "Name",
//                     "Date",
//                     "Phone",
//                     "Email",
//                     "Zip Code",
//                     "Description",
//                     "Assign to",
//                     "Assign by",
//                     "Comments",
//                   ].map((heading) => (
//                     <th
//                       key={heading}
//                       className={` py-3 font-medium text-center ${
//                         heading === "Count"
//                           ? "pl-4"
//                           : heading === "Name"
//                           ? "pr-16"
//                           : "px-6"
//                       }`}
//                     >
//                       {heading}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>

//               <tbody>
//                 {leads.map((lead, index) => (
//                   <tr key={index} className="text-gray-700">
//                     {/* Merged "Count" & "Name" inside the PNG but under separate headings */}
//                     <td className="py-3 text-center border-b" colSpan={2}>
//                       <div className="relative inline-flex items-center justify-center w-[239px] h-[100px]">
//                         {/* PNG Background */}
//                         <Image
//                           src="/images/bubbles/count-name-bub.png"
//                           alt="Count and Name Background"
//                           width={239}
//                           height={100}
//                           className="absolute top-0 left-0"
//                         />

//                         {/* Count - Left Side Inside Image */}
//                         <span className="absolute left-[17%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium">
//                           {lead.count}
//                         </span>
//                         <span className="absolute left-[52%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium">
//                           {lead.name}
//                         </span>
//                       </div>
//                     </td>

//                     {/* Date */}
//                     <td className="py-3 text-center relative">
//                       <div className="relative inline-block w-[125px] h-[100px]">
//                         <Image
//                           src="/images/bubbles/date-bub.png"
//                           alt="Date Background"
//                           width={125}
//                           height={100}
//                           className="absolute top-0"
//                         />
//                         <span className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium">
//                           {lead.date}
//                         </span>
//                       </div>
//                     </td>

//                     {/* Phone */}
//                     <td className="py-3 text-center relative">
//                       <div className="relative inline-block w-[166px] h-[100px]">
//                         <Image
//                           src="/images/bubbles/phone-bub.png"
//                           alt="Phone Background"
//                           width={166}
//                           height={100}
//                           className="absolute top-0"
//                         />
//                         <span className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium">
//                           {lead.phone}
//                         </span>
//                       </div>
//                     </td>

//                     {/* Email */}
//                     <td className="py-3 text-center relative">
//                       <div className="relative inline-block w-[212px] h-[100px]">
//                         <Image
//                           src="/images/bubbles/email-bub.png"
//                           alt="Email Background"
//                           width={212}
//                           height={100}
//                           className="absolute top-0"
//                         />
//                         <span className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium">
//                           {lead.email}
//                         </span>
//                       </div>
//                     </td>

//                     {/* Zip Code */}
//                     <td className="py-3 text-center relative">
//                       <div className="relative inline-block w-[87px] h-[100px]">
//                         <Image
//                           src="/images/bubbles/zip-bub.png"
//                           alt="Zip Code Background"
//                           width={87}
//                           height={100}
//                           className="absolute top-0"
//                         />
//                         <span className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium">
//                           {lead.zipCode}
//                         </span>
//                       </div>
//                     </td>

//                     {/* Description */}
//                     <td className="py-3 text-center relative">
//                       <div className="relative inline-block w-[212px] h-[100px]">
//                         <Image
//                           src="/images/bubbles/description-bub.png"
//                           alt="Description Background"
//                           width={212}
//                           height={100}
//                           className="absolute top-0"
//                         />
//                         <span className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium">
//                           {lead.description}
//                         </span>
//                       </div>
//                     </td>

//                     {/* Assign To */}
//                     <td className="py-3 text-center relative">
//                       <div className="relative inline-block w-[106px] h-[100px]">
//                         {/* Background Bubble Image */}
//                         <Image
//                           src="/images/bubbles/assign-to-by-comment-bub.png"
//                           alt="Assign To Background"
//                           width={106}
//                           height={100}
//                           className="absolute top-0"
//                         />
//                         {/* Lead Assigned Text */}
//                         <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium">
//                           {lead.assignTo}
//                         </span>
//                         {/* Black Background Circle for Yellow Arrow */}
//                         <div className="absolute top-[5px] left-[75%] transform -translate-x-1/2 bg-black w-[30px] h-[30px] rounded-full flex items-center justify-center">
//                           <Image
//                             src="/images/yellowArrow.png"
//                             alt="Assign To Arrow"
//                             width={10}
//                             height={10}
//                             className="border-[1.5px] border-black"
//                           />
//                         </div>
//                       </div>
//                     </td>

//                     {/* Assign By */}
//                     <td className="py-3 text-center relative">
//                       <div className="relative inline-block w-[106px] h-[100px]">
//                         {/* Background Bubble Image */}
//                         <Image
//                           src="/images/bubbles/assign-to-by-comment-bub.png"
//                           alt="Assign By Background"
//                           width={106}
//                           height={100}
//                           className="absolute top-0"
//                         />
//                         {/* Assigned By Text */}
//                         <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium">
//                           {lead.assignBy}
//                         </span>
//                         {/* Black Background Circle for Purple Arrow */}
//                         <div className="absolute top-[5px] left-[75%] transform -translate-x-1/2 bg-black w-[30px] h-[30px] rounded-full flex items-center justify-center">
//                           <Image
//                             src="/images/purpleArrow.png"
//                             alt="Assign By Arrow"
//                             width={10}
//                             height={10}
//                             className="border-[1.5px] border-black"
//                           />
//                         </div>
//                       </div>
//                     </td>

//                     {/* Comments */}
//                     <td className="py-3 text-center relative">
//                       <div className="relative inline-block w-[106px] h-[100px]">
//                         {/* Background Bubble Image */}
//                         <Image
//                           src="/images/bubbles/assign-to-by-comment-bub.png"
//                           alt="Comment Background"
//                           width={106}
//                           height={100}
//                           className="absolute top-0"
//                         />
//                         {/* Comment Text */}
//                         <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium">
//                           {lead.comments}
//                         </span>
//                         {/* Black Background Circle for Green Arrow */}
//                         <div className="absolute top-[5px] left-[75%] transform -translate-x-1/2 bg-black w-[30px] h-[30px] rounded-full flex items-center justify-center">
//                           <Image
//                             src="/images/greenArrow.png"
//                             alt="Comment Arrow"
//                             width={10}
//                             height={10}
//                             className="border-[1.5px] border-black"
//                           />
//                         </div>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// //////////////////// 10-11/3/25 modal working in progress below/////////////////////////////

// "use client";
// import { useState, useEffect } from "react";
// import Sidebar from "@/app/Sidebar/page";
// import Header from "@/app/Header/page";
// import Image from "next/image";

// import LeadDetailsModal, { Lead } from "../LeadDetailsModal/page"; // ✅ Import Modal Component

// import CommentsModal from "../CommentsModal/page";

// export default function Leads() {
//   const leads = [
//     {
//       count: "0111111111111111111111111111111111111",
//       name: "Mr. Russssssssssssssssssssssssssel",
//       date: "11-04-2025",
//       phone: "+1 55555555555555555509-858-4523",
//       email: "russsssssssssssssssssssssssel.gibbs@gmail.com",
//       zipCode: "333333333333333333333333333333333333333142",
//       description: "Someeeeeeeeeeeeeeeeeeeeeee description here...",
//       assignTo: "Hasssssssssssssssssssssssssssssssssssan Osama",
//       assignBy: "Huzaifaaaaaaaaaaaaaaaaaaaaaaa Aijaz",
//       comments: "1111111111111111111111115",
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
//       count: "03",
//       name: "Mr. John",
//       date: "11-04-2025",
//       phone: "+1 509-858-4523",
//       email: "john.doe@gmail.com",
//     },
//   ];
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   // Update state with Lead type
//   const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

//   // ✅ Function to open modal
//   const openModal = (lead: Lead) => {
//     setSelectedLead(lead);
//   };

//   // ✅ Function to close modal
//   const closeModal = () => {
//     setSelectedLead(null);
//   };

//   const [selectedLeadForComments, setSelectedLeadForComments] =
//     useState<Lead | null>(null);

//   const openCommentsModal = (lead: Lead) => {
//     setSelectedLeadForComments(lead);
//   };

//   const closeCommentsModal = () => {
//     setSelectedLeadForComments(null);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 768) {
//         setIsSidebarOpen(false); // Collapse sidebar on smaller screens
//       } else {
//         setIsSidebarOpen(true); // Expand sidebar on large screens
//       }
//     };

//     handleResize(); // Set initial state
//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const toggleSidebar = () => {
//     setIsSidebarOpen((prev) => !prev);
//   };

//   return (
//     // CHANGED: Use min-h-screen instead of h-screen so the page can scroll when content exceeds viewport height
//     <div className="relative flex w-full min-h-screen overflow-visible flex-wrap">
//       {/* Background Image */}
//       <Image
//         src="/images/all-background.png"
//         alt="Background"
//         fill
//         // objectFit="cover"
//         className="absolute inset-0 w-full h-full object-cover -z-10"
//       />

//       {/* Header */}
//       {/* CHANGED: Removed "fixed top-0 left-0 z-20" to let the header scroll with the page */}
//       <header className="w-full h-[70px] z-20 px-4 md:px-8">
//         <Header />
//       </header>

//       {/* Sidebar + Main Content Wrapper */}
//       <div className="flex flex-row w-full min-h-screen relative">
//         {/* Sidebar */}
//         <aside
//           className={` md:relative z-50 min-h-screen transition-all duration-300 overflow-hidden ${
//             isSidebarOpen
//               ? "translate-x-0 w-[250px] opacity-100"
//               : "w-0 opacity-0"
//           } md:w-[250px] md:translate-x-0 md:opacity-100 mt-64`}
//         >
//           {isSidebarOpen && <Sidebar />} {/* Render Sidebar only when open */}
//         </aside>

//         {/* Sidebar Toggle Button - Always Visible at Bottom */}
//         <button
//           onClick={toggleSidebar}
//           className="fixed bottom-6 left-6 md:bottom-8 md:left-8 z-50 bg-white p-4 rounded-full shadow-lg transition-all duration-300"
//         >
//           <Image
//             src="/images/collapse.png"
//             alt="Toggle Sidebar"
//             width={40}
//             height={40}
//             className="object-contain"
//           />
//         </button>

//         {/* New Lead Button (Unchanged) */}
//         <div className="absolute right-10 top-[11rem] z-30">
//           <button className="px-6 py-3 md:px-12 md:py-4 bg-transparent text-black rounded-full font-medium flex items-center gap-2 shadow-lg relative">
//             <Image
//               src="/images/newLeadPlus.png"
//               alt="New Lead Plus Icon"
//               width={50}
//               height={50}
//               className="absolute left-[-20px] top-0 md:left-[-8px] md:top-[5px] z-10"
//             />
//             {/* Hide text on small screens */}
//             <span className="whitespace-nowrap hidden md:inline">New Lead</span>
//           </button>
//         </div>

//         {/* Main Content - CHANGED */}
//         <div
//           className="flex-1 min-h-screen relative mt-64 overflow-auto rounded-[40px] mx-8"
//           style={{
//             backgroundImage: "url('/images/folder-bg.png')",
//             backgroundSize: "cover",
//             // backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//           }}
//         >
//           {/* Tabs */}
//           <div className="flex items-center pl-[2rem] w-full max-w-6xl mb-4">
//             <div className="flex space-x-4 rounded-xl">
//               <button className="px-12 py-2 bg-yellow-400 text-black rounded-full font-medium">
//                 Main Lead Board
//               </button>

//               <div className="flex space-x-4 rounded-xl pl-[4rem]">
//                 <button className="px-16 py-2 bg-gray-200 text-gray-700 rounded-full border-[2px] border-white">
//                   SMM Leads
//                 </button>
//                 <button className="px-16 py-2 bg-gray-200 text-gray-700 rounded-full border-[2px] border-white">
//                   PPC Leads
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Table Container */}
//           <div className="overflow-x-auto md:overflow-visible rounded-xl p-6 w-full max-w-6xl mr-auto">
//             <table className="w-full table-auto border-collapse rounded-lg overflow-hidden text-left">
//               <thead>
//                 <tr className="text-gray-700">
//                   {[
//                     "Count",
//                     "Name",
//                     "Date",
//                     "Phone",
//                     "Email",
//                     "Zip Code",
//                     "Description",
//                     "Assign to",
//                     "Assign by",
//                     "Comments",
//                   ].map((heading) => (
//                     <th
//                       key={heading}
//                       className={` py-3 font-medium text-center ${
//                         heading === "Count"
//                           ? "pl-4"
//                           : heading === "Name"
//                           ? "pr-16"
//                           : "px-6"
//                       }`}
//                     >
//                       {heading}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>

//               <tbody>
//                 {leads.map((lead, index) => (
//                   <tr key={index} className="text-gray-700">
//                     {/* Merged "Count" & "Name" inside the PNG but under separate headings */}
//                     <td className="py-3 text-center border-b" colSpan={2}>
//                       <div className="relative inline-flex items-center justify-center w-[239px] h-[100px]">
//                         {/* PNG Background */}
//                         <Image
//                           src="/images/bubbles/count-name-bub.png"
//                           alt="Count and Name Background"
//                           width={239}
//                           height={100}
//                           className="absolute top-0 left-0"
//                         />

//                         {/* Count - Left Side Inside Image */}
//                         <span className="absolute left-[17%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium">
//                           {lead.count}
//                         </span>
//                         <span className="absolute left-[52%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium">
//                           {lead.name}
//                         </span>
//                       </div>
//                     </td>

//                     {/* Date */}
//                     <td className="py-3 text-center relative">
//                       <div className="relative inline-block w-[125px] h-[100px]">
//                         <Image
//                           src="/images/bubbles/date-bub.png"
//                           alt="Date Background"
//                           width={125}
//                           height={100}
//                           className="absolute top-0"
//                         />
//                         <span className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium">
//                           {lead.date}
//                         </span>
//                       </div>
//                     </td>

//                     {/* Phone */}
//                     <td className="py-3 text-center relative">
//                       <div className="relative inline-block w-[166px] h-[100px]">
//                         <Image
//                           src="/images/bubbles/phone-bub.png"
//                           alt="Phone Background"
//                           width={166}
//                           height={100}
//                           className="absolute top-0"
//                         />
//                         <span className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium">
//                           {lead.phone}
//                         </span>
//                       </div>
//                     </td>

//                     {/* Email */}
//                     <td className="py-3 text-center relative">
//                       <div className="relative inline-block w-[212px] h-[100px]">
//                         <Image
//                           src="/images/bubbles/email-bub.png"
//                           alt="Email Background"
//                           width={212}
//                           height={100}
//                           className="absolute top-0"
//                         />
//                         <span className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium">
//                           {lead.email}
//                         </span>
//                       </div>
//                     </td>

//                     {/* Zip Code */}
//                     <td className="py-3 text-center relative">
//                       <div className="relative inline-block w-[87px] h-[100px]">
//                         <Image
//                           src="/images/bubbles/zip-bub.png"
//                           alt="Zip Code Background"
//                           width={87}
//                           height={100}
//                           className="absolute top-0"
//                         />
//                         <span className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium">
//                           {lead.zipCode}
//                         </span>
//                       </div>
//                     </td>

//                     {/* Description */}
//                     <td className="py-3 text-center relative">
//                       <div className="relative inline-block w-[212px] h-[100px]">
//                         <Image
//                           src="/images/bubbles/description-bub.png"
//                           alt="Description Background"
//                           width={212}
//                           height={100}
//                           className="absolute top-0"
//                         />
//                         <span className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium">
//                           {lead.description}
//                         </span>
//                       </div>
//                     </td>

//                     {/* Assign To */}
//                     <td className="py-3 text-center relative">
//                       <div
//                         className="relative inline-block w-[106px] h-[100px] cursor-pointer"
//                         onClick={() => openModal(lead)} // ✅ Fix: openModal should now work
//                       >
//                         {/* Background Bubble Image */}
//                         <Image
//                           src="/images/bubbles/assign-to-by-comment-bub.png"
//                           alt="Assign To Background"
//                           width={106}
//                           height={100}
//                           className="absolute top-0"
//                         />
//                         {/* Lead Assigned Text */}
//                         <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium">
//                           {lead.assignTo}
//                         </span>
                        // {/* Black Background Circle for Yellow Arrow */}
                        // <div className="absolute top-[5px] left-[75%] transform -translate-x-1/2 bg-black w-[30px] h-[30px] rounded-full flex items-center justify-center">
                        //   <Image
                        //     src="/images/yellowArrow-4x.png"
                        //     alt="Assign To Arrow"
                        //     width={10}
                        //     height={10}
                        //     className="border-[1.5px] border-black"
                        //   />
                        // </div>
//                       </div>
//                     </td>

//                     {/* Assign By */}
//                     <td className="py-3 text-center relative">
//                       <div className="relative inline-block w-[106px] h-[100px]">
//                         {/* Background Bubble Image */}
//                         <Image
//                           src="/images/bubbles/assign-to-by-comment-bub.png"
//                           alt="Assign By Background"
//                           width={106}
//                           height={100}
//                           className="absolute top-0"
//                         />
//                         {/* Assigned By Text */}
//                         <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium">
//                           {lead.assignBy}
//                         </span>
                        // {/* Black Background Circle for Purple Arrow */}
                        // <div className="absolute top-[5px] left-[75%] transform -translate-x-1/2 bg-black w-[30px] h-[30px] rounded-full flex items-center justify-center">
                        //   <Image
                        //     src="/images/purpleArrow-4x.png"
                        //     alt="Assign By Arrow"
                        //     width={10}
                        //     height={10}
                        //     className="border-[1.5px] border-black"
                        //   />
                        // </div>
//                       </div>
//                     </td>

//                     {/* Comments */}
//                     <td className="py-3 text-center relative cursor-pointer">
//                       <div
//                         className="relative inline-block w-[106px] h-[100px] cursor-pointer"
//                         onClick={() => openCommentsModal(lead)} // ✅ Open Comments Modal on click
//                       >
//                         {/* Background Bubble Image */}
//                         <Image
//                           src="/images/bubbles/assign-to-by-comment-bub.png"
//                           alt="Comment Background"
//                           width={106}
//                           height={100}
//                           className="absolute top-0"
//                         />

//                         {/* Comment Text */}
//                         <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium overflow-hidden max-w-[80px] text-ellipsis whitespace-nowrap">
//                           {lead.comments && lead.comments.length > 6
//                             ? `${lead.comments.slice(0, 6)}...`
//                             : lead.comments || "No Comments"}
//                         </span>

                        // {/* Black Background Circle for Green Arrow */}
                        // <div className="absolute top-[5px] left-[75%] transform -translate-x-1/2 bg-black w-[30px] h-[30px] rounded-full flex items-center justify-center">
                        //   <Image
                        //     src="/images/greenArrow-4x.png"
                        //     alt="Comment Arrow"
                        //     width={10}
                        //     height={10}
                        //     className="border-[1.5px] border-black"
                        //   />
                        // </div>
                      // </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//         {/* Lead Details Modal */}
//         <LeadDetailsModal lead={selectedLead} onClose={closeModal} />

//         {/* Comments Modal */}
//         {selectedLeadForComments && (
//           <CommentsModal
//             lead={selectedLeadForComments}
//             onClose={closeCommentsModal}
//           />
//         )}
//       </div>
//     </div>
//   );
// }


// //////////////////////////////////////////12/3/25 text too long in div responsive/////////////////////////////////

"use client";
import { useState, useEffect } from "react";
import Sidebar from "@/app/Sidebar/page";
import Header from "@/app/Header/page";
import Image from "next/image";

import LeadDetailsModal, { Lead } from "../LeadDetailsModal/page"; // ✅ Import Modal Component

import CommentsModal from "../CommentsModal/page";

export default function Leads() {
  const leads = [
    {
      count: "0111111111111111111111111111111111111",
      name: "Mr. Russssssssssssssssssssssssssel",
      date: "11-04-2025",
      phone: "+1 55555555555555555509-858-4523",
      email: "russsssssssssssssssssssssssel.gibbs@gmail.com",
      zipCode: "333333333333333333333333333333333333333142",
      description: "Someeeeeeeeeeeeeeeeeeeeeee description here...",
      assignTo: "Hasssss1ssss2ssssss3ssssss4ssssss5sssss6sssan Osama",
      assignBy: "Huzaifaaaaaaaaaaaaaaaaaaaaaaa Aijaz",
      comments: "111111111111111111111112222222222222222233333333333333333333333315",
    },
    {
      count: "02",
      name: "Ms. Jane",
      date: "12-04-2025",
      phone: "+1 509-123-4567",
      email: "jane.doe@gmail.com",
      zipCode: "12345",
      description: "Another description...",
      assignTo: "John Doe",
      assignBy: "Alice Smith",
      comments: "109",
    },
    {
      count: "01",
      name: "Mr. Russel",
      date: "11-04-2025",
      phone: "+1 509-858-4523",
      email: "russel.gibbs@gmail.com",
      zipCode: "33142",
      description: "Some description here...",
      assignTo: "Hassan Osama",
      assignBy: "Huzaifa Aijaz",
      comments: "115",
    },
    {
      count: "03",
      name: "Mr. John",
      date: "11-04-2025",
      phone: "+1 509-858-4523",
      email: "john.doe@gmail.com",
    },
  ];
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Update state with Lead type
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  // ✅ Function to open modal
  const openModal = (lead: Lead) => {
    setSelectedLead(lead);
  };

  // ✅ Function to close modal
  const closeModal = () => {
    setSelectedLead(null);
  };

  const [selectedLeadForComments, setSelectedLeadForComments] =
    useState<Lead | null>(null);

  const openCommentsModal = (lead: Lead) => {
    setSelectedLeadForComments(lead);
  };

  const closeCommentsModal = () => {
    setSelectedLeadForComments(null);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false); // Collapse sidebar on smaller screens
      } else {
        setIsSidebarOpen(true); // Expand sidebar on large screens
      }
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    // CHANGED: Use min-h-screen instead of h-screen so the page can scroll when content exceeds viewport height
    <div className="relative flex w-full min-h-screen overflow-visible flex-wrap">
      {/* Background Image */}
      <Image
        src="/images/all-background.png"
        alt="Background"
        fill
        // objectFit="cover"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Header */}
      {/* CHANGED: Removed "fixed top-0 left-0 z-20" to let the header scroll with the page */}
      <header className="w-full h-[70px] z-20 px-4 md:px-8">
        <Header />
      </header>

      {/* Sidebar + Main Content Wrapper */}
      <div className="flex flex-row w-full min-h-screen relative">
        {/* Sidebar */}
        <aside
          className={` md:relative z-50 min-h-screen transition-all duration-300 overflow-hidden ${
            isSidebarOpen
              ? "translate-x-0 w-[250px] opacity-100"
              : "w-0 opacity-0"
          } md:w-[250px] md:translate-x-0 md:opacity-100 mt-64`}
        >
          {isSidebarOpen && <Sidebar />} {/* Render Sidebar only when open */}
        </aside>

        {/* Sidebar Toggle Button - Always Visible at Bottom */}
        <button
          onClick={toggleSidebar}
          className="fixed bottom-6 left-6 md:bottom-8 md:left-8 z-50 bg-white p-4 rounded-full shadow-lg transition-all duration-300"
        >
          <Image
            src="/images/collapse.png"
            alt="Toggle Sidebar"
            width={40}
            height={40}
            className="object-contain"
          />
        </button>

        {/* New Lead Button (Unchanged) */}
        <div className="absolute right-10 top-[11rem] z-30">
          <button className="px-6 py-3 md:px-12 md:py-4 bg-transparent text-black rounded-full font-medium flex items-center gap-2 shadow-lg relative">
            <Image
              src="/images/newLeadPlus.png"
              alt="New Lead Plus Icon"
              width={50}
              height={50}
              className="absolute left-[-20px] top-0 md:left-[-8px] md:top-[5px] z-10"
            />
            {/* Hide text on small screens */}
            <span className="whitespace-nowrap hidden md:inline">New Lead</span>
          </button>
        </div>

        {/* Main Content - CHANGED */}
        <div
          className="flex-1 min-h-screen relative mt-64 overflow-auto rounded-[40px] mx-8"
          style={{
            backgroundImage: "url('/images/folder-bg.png')",
            backgroundSize: "cover",
            // backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Tabs */}
          <div className="flex items-center pl-[2rem] w-full max-w-6xl mb-4">
            <div className="flex space-x-4 rounded-xl">
              <button className="px-12 py-2 bg-yellow-400 text-black rounded-full font-medium">
                Main Lead Board
              </button>

              <div className="flex space-x-4 rounded-xl pl-[4rem]">
                <button className="px-16 py-2 bg-gray-200 text-gray-700 rounded-full border-[2px] border-white">
                  SMM Leads
                </button>
                <button className="px-16 py-2 bg-gray-200 text-gray-700 rounded-full border-[2px] border-white">
                  PPC Leads
                </button>
              </div>
            </div>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto md:overflow-visible rounded-xl p-6 w-full max-w-6xl mr-auto">
            <table className="w-full table-auto border-collapse rounded-lg overflow-hidden text-left">
              <thead>
                <tr className="text-gray-700">
                  {[
                    "Count",
                    "Name",
                    "Date",
                    "Phone",
                    "Email",
                    "Zip Code",
                    "Description",
                    "Assign to",
                    "Assign by",
                    "Comments",
                  ].map((heading) => (
                    <th
                      key={heading}
                      className={` py-3 font-medium text-center ${
                        heading === "Count"
                          ? "pl-4"
                          : heading === "Name"
                          ? "pr-16"
                          : "px-6"
                      }`}
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
  {leads.map((lead, index) => (
    <tr key={index} className="text-gray-700">
      {/* Merged "Count" & "Name" */}
      <td className="py-3 text-center border-b" colSpan={2}>
        <div className="relative inline-flex items-center justify-center w-[239px] h-[100px]">
          <Image
            src="/images/bubbles/count-name-bub.png"
            alt="Count and Name Background"
            width={239}
            height={100}
            className="absolute top-0 left-0"
          />
          {/* <span className="absolute left-[17%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium">
            {lead.count}
          </span> */}
          {/* Count - Left Side Inside Image */}
<span className="absolute left-[17%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium overflow-hidden max-w-[40px] text-ellipsis whitespace-nowrap text-center">
  {lead.count}
</span>

          <span className="absolute left-[52%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium overflow-hidden max-w-[100px] text-ellipsis whitespace-nowrap">
            {lead.name.length > 8 ? `${lead.name.slice(0, 8)}...` : lead.name}
          </span>
        </div>
      </td>

      {/* Date */}
      <td className="py-3 text-center relative">
        <div className="relative inline-block w-[125px] h-[100px]">
          <Image src="/images/bubbles/date-bub.png" alt="Date Background" width={125} height={100} className="absolute top-0" />
          <span className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium overflow-hidden max-w-[100px] text-ellipsis whitespace-nowrap">
            {lead.date}
          </span>
        </div>
      </td>

      {/* Phone */}
      <td className="py-3 text-center relative">
        <div className="relative inline-block w-[166px] h-[100px]">
          <Image src="/images/bubbles/phone-bub.png" alt="Phone Background" width={166} height={100} className="absolute top-0" />
          <span className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium overflow-hidden max-w-[130px] text-ellipsis whitespace-nowrap">
            {lead.phone}
          </span>
        </div>
      </td>

      {/* Email */}
      <td className="py-3 text-center relative">
        <div className="relative inline-block w-[212px] h-[100px]">
          <Image src="/images/bubbles/email-bub.png" alt="Email Background" width={212} height={100} className="absolute top-0" />
          <span className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium overflow-hidden max-w-[180px] text-ellipsis whitespace-nowrap">
            {lead.email.length > 12 ? `${lead.email.slice(0, 12)}...` : lead.email}
          </span>
        </div>
      </td>

      {/* Zip Code */}
      <td className="py-3 text-center relative">
        <div className="relative inline-block w-[87px] h-[100px]">
          <Image src="/images/bubbles/zip-bub.png" alt="Zip Code Background" width={87} height={100} className="absolute top-0" />
          <span className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium overflow-hidden max-w-[70px] text-ellipsis whitespace-nowrap">
            {lead.zipCode}
          </span>
        </div>
      </td>

      {/* Description */}
      <td className="py-3 text-center relative">
        <div className="relative inline-block w-[212px] h-[100px]">
          <Image src="/images/bubbles/description-bub.png" alt="Description Background" width={212} height={100} className="absolute top-0" />
          <span className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium overflow-hidden max-w-[180px] text-ellipsis whitespace-nowrap">
            {lead.description && lead.description.length > 15 ? `${lead.description.slice(0, 15)}...` : lead.description}
          </span>
        </div>
      </td>

      {/* Assign To */}
      <td className="py-3 text-center relative">
        <div className="relative inline-block w-[106px] h-[100px] cursor-pointer" onClick={() => openModal(lead)}>
          <Image src="/images/bubbles/assign-to-by-comment-bub.png" alt="Assign To Background" width={106} height={100} className="absolute top-0" />
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium overflow-hidden max-w-[80px] text-ellipsis whitespace-nowrap">
            {lead.assignTo && lead.assignTo.length > 6 ? `${lead.assignTo.slice(0, 6)}...` : lead.assignTo}
          </span>
          {/* Black Background Circle for Yellow Arrow */}
          <div className="absolute top-[5px] left-[75%] transform -translate-x-1/2 bg-black w-[30px] h-[30px] rounded-full flex items-center justify-center">
                          <Image
                            src="/images/yellowArrow-4x.png"
                            alt="Assign To Arrow"
                            width={10}
                            height={10}
                            className="border-[1.5px] border-black"
                          />
                        </div>
        </div>
      </td>

      {/* Assign By */}
      <td className="py-3 text-center relative">
        <div className="relative inline-block w-[106px] h-[100px]">
          <Image src="/images/bubbles/assign-to-by-comment-bub.png" alt="Assign By Background" width={106} height={100} className="absolute top-0" />
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium overflow-hidden max-w-[80px] text-ellipsis whitespace-nowrap">
            {lead.assignBy && lead.assignBy.length > 6 ? `${lead.assignBy.slice(0, 6)}...` : lead.assignBy}
          </span>
          {/* Black Background Circle for Purple Arrow */}
          <div className="absolute top-[5px] left-[75%] transform -translate-x-1/2 bg-black w-[30px] h-[30px] rounded-full flex items-center justify-center">
                          <Image
                            src="/images/purpleArrow-4x.png"
                            alt="Assign By Arrow"
                            width={10}
                            height={10}
                            className="border-[1.5px] border-black"
                          />
                        </div>
        </div>
      </td>

      {/* Comments */}
      <td className="py-3 text-center relative cursor-pointer">
        <div className="relative inline-block w-[106px] h-[100px] cursor-pointer" onClick={() => openCommentsModal(lead)}>
          <Image src="/images/bubbles/assign-to-by-comment-bub.png" alt="Comment Background" width={106} height={100} className="absolute top-0" />
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium overflow-hidden max-w-[80px] text-ellipsis whitespace-nowrap">
            {lead.comments && lead.comments.length > 6 ? `${lead.comments.slice(0, 6)}...` : lead.comments || "No Comments"}
          </span>
          {/* Black Background Circle for Green Arrow */}
          <div className="absolute top-[5px] left-[75%] transform -translate-x-1/2 bg-black w-[30px] h-[30px] rounded-full flex items-center justify-center">
                          <Image
                            src="/images/greenArrow-4x.png"
                            alt="Comment Arrow"
                            width={10}
                            height={10}
                            className="border-[1.5px] border-black"
                          />
                        </div>
        </div>
      </td>
    </tr>
  ))}
</tbody>

            </table>
          </div>
        </div>
        {/* Lead Details Modal */}
        <LeadDetailsModal lead={selectedLead} onClose={closeModal} />

        {/* Comments Modal */}
        {selectedLeadForComments && (
          <CommentsModal
            lead={selectedLeadForComments}
            onClose={closeCommentsModal}
          />
        )}
      </div>
    </div>
  );
}


