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


"use client";
import Sidebar from "@/app/Sidebar/page";
import Header from "@/app/Header/page";
import Image from "next/image";

export default function Leads() {
  const leads = [
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
  ];

  return (
    // CHANGED: Use min-h-screen instead of h-screen so the page can scroll when content exceeds viewport height
    <div className="relative flex w-full min-h-screen overflow-visible flex-wrap">
      {/* Background Image */}
      <Image
        src="/images/ground.png"
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

      {/* Sidebar */}
      {/* CHANGED: Removed "fixed" and adjusted positioning so the sidebar scrolls with the page */}
      <aside className="w-[250px] min-h-screen relative mt-64">
        <Sidebar />
      </aside>


      {/* New Lead Button (Unchanged) */}
    {/* <div className="absolute right-10 top-[8rem] z-30">
      <button className="pl-12 pr-6 py-4 bg-transparent text-black rounded-full font-medium flex items-center gap-2 shadow-lg relative overflow-visible">
        <Image
          src="/images/newLeadPlus.png"
          alt="New Lead Plus Icon"
          width={60}
          height={60}
          className="absolute left-[-25px] top-[-2px] z-10"
        />
        <span className="ml-auto">New Lead</span>
      </button>
    </div> */}


    {/* Main Content - CHANGED */}
      {/* New Lead Button (Unchanged) */}
      {/* <div className="absolute right-10 top-[8rem] z-30">
      <button className="pl-12 pr-6 py-4 bg-transparent text-black rounded-full font-medium flex items-center gap-2 shadow-lg relative overflow-visible">
        <Image
          src="/images/newLeadPlus.png"
          alt="New Lead Plus Icon"
          width={60}
          height={60}
          className="absolute left-[-25px] top-[-2px] z-10"
        />
        <span className="ml-auto">New Lead</span>
      </button>
    </div> */}

    <div className="flex-1 min-h-screen relative mt-64 bg-white bg-opacity-20 p-6 overflow-auto rounded-[40px]  mx-8">

        {/* Tabs */}
        <div className="flex justify-between items-center w-full max-w-6xl mx-auto mb-6">
          <div className="flex space-x-4 p-4 rounded-xl">
            <button className="px-16 py-2 bg-yellow-400 text-black rounded-full font-medium">
              Main Lead Board
            </button>
            <button className="px-16 py-2 bg-gray-200 text-gray-700 rounded-full border-[2px] border-white">
              SMM Leads
            </button>
            <button className="px-16 py-2 bg-gray-200 text-gray-700 rounded-full border-[2px] border-white">
              PPC Leads
            </button>
          </div>
        </div>

        {/* Table Container */}
        <div className="overflow-auto rounded-xl p-6 w-full max-w-6xl mx-auto">
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
                  <th key={heading} className="px-6 py-3 font-medium text-center">
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {leads.map((lead, index) => (
                <tr key={index} className="text-gray-700">
                  {/* Count */}
                  <td className="py-3 text-center border-b">
                    <span className="px-4 py-2 bg-gray-400 text-white rounded-2xl">
                      {lead.count}
                    </span>
                  </td>

                  {/* Name */}
                  <td className="py-3 text-center border-b">
                    <span className="w-full block px-4 py-2 bg-white text-black rounded-[1.85rem] whitespace-nowrap">
                      {lead.name}
                    </span>
                  </td>

                  {/* Date */}
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
                        {lead.date}
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
                        {lead.phone}
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
                        {lead.email}
                      </span>
                    </div>
                  </td>

                  {/* Zip Code */}
                  <td className="py-3 text-center relative">
                    <div className="relative inline-block w-[87px] h-[100px]">
                      <Image
                        src="/images/bubbles/zip-bub.png"
                        alt="Zip Code Background"
                        width={87}
                        height={100}
                        className="absolute top-0"
                      />
                      <span className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium">
                        {lead.zipCode}
                      </span>
                    </div>
                  </td>

                  {/* Description */}
                  <td className="py-3 text-center relative">
                    <div className="relative inline-block w-[212px] h-[100px]">
                      <Image
                        src="/images/bubbles/description-bub.png"
                        alt="Description Background"
                        width={212}
                        height={100}
                        className="absolute top-0"
                      />
                      <span className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium">
                        {lead.description}
                      </span>
                    </div>
                  </td>

                  {/* Assign To */}
                  <td className="py-3 text-center relative">
                    <div className="relative inline-block w-[106px] h-[100px]">
                      {/* Background Bubble Image */}
                      <Image
                        src="/images/bubbles/assign-to-by-comment-bub.png"
                        alt="Assign To Background"
                        width={106}
                        height={100}
                        className="absolute top-0"
                      />
                      {/* Lead Assigned Text */}
                      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium">
                        {lead.assignTo}
                      </span>
                      {/* Black Background Circle for Yellow Arrow */}
                      <div className="absolute top-[5px] left-[75%] transform -translate-x-1/2 bg-black w-[30px] h-[30px] rounded-full flex items-center justify-center">
                        <Image
                          src="/images/yellowArrow.png"
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
                      {/* Background Bubble Image */}
                      <Image
                        src="/images/bubbles/assign-to-by-comment-bub.png"
                        alt="Assign By Background"
                        width={106}
                        height={100}
                        className="absolute top-0"
                      />
                      {/* Assigned By Text */}
                      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium">
                        {lead.assignBy}
                      </span>
                      {/* Black Background Circle for Purple Arrow */}
                      <div className="absolute top-[5px] left-[75%] transform -translate-x-1/2 bg-black w-[30px] h-[30px] rounded-full flex items-center justify-center">
                        <Image
                          src="/images/purpleArrow.png"
                          alt="Assign By Arrow"
                          width={10}
                          height={10}
                          className="border-[1.5px] border-black"
                        />
                      </div>
                    </div>
                  </td>

                  {/* Comments */}
                  <td className="py-3 text-center relative">
                    <div className="relative inline-block w-[106px] h-[100px]">
                      {/* Background Bubble Image */}
                      <Image
                        src="/images/bubbles/assign-to-by-comment-bub.png"
                        alt="Comment Background"
                        width={106}
                        height={100}
                        className="absolute top-0"
                      />
                      {/* Comment Text */}
                      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-medium">
                        {lead.comments}
                      </span>
                      {/* Black Background Circle for Green Arrow */}
                      <div className="absolute top-[5px] left-[75%] transform -translate-x-1/2 bg-black w-[30px] h-[30px] rounded-full flex items-center justify-center">
                        <Image
                          src="/images/greenArrow.png"
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
    </div>
  );
}
