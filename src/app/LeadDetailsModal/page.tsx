// //////////////////////////////////////////
// import React from "react";

// // Define Lead type
// export interface Lead {
//     count: string;
//     name: string;
//     date: string;
//     phone: string;
//     email: string;
//     zipCode?: string;
//     description?: string;
//     assignTo?: string;
//     assignBy?: string;
//     comments?: string;
//   }

// interface LeadDetailsModalProps {
//   lead: Lead | null;
//   onClose: () => void;
// }

// export default function LeadDetailsModal({ lead, onClose }: LeadDetailsModalProps) {
//   if (!lead) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50">
//       <div className="bg-white/80 w-[580px] h-[416px] rounded-[40px] border-2 border-white p-6 relative">
//         {/* Close Button */}
//         <button className="absolute top-4 right-4 text-gray-600 hover:text-black" onClick={onClose}>
//           ✖
//         </button>

//         {/* Lead Details */}
//         <h2 className="text-xl font-bold text-center mb-4">{lead.name}</h2>
//         <p className="text-gray-700"><strong>Date:</strong> {lead.date}</p>
//         <p className="text-gray-700"><strong>Phone:</strong> {lead.phone}</p>
//         <p className="text-gray-700"><strong>Email:</strong> {lead.email}</p>
//         {lead.zipCode && <p className="text-gray-700"><strong>Zip Code:</strong> {lead.zipCode}</p>}
//         {lead.description && <p className="text-gray-700"><strong>Description:</strong> {lead.description}</p>}
//         {lead.assignTo && <p className="text-gray-700"><strong>Assigned To:</strong> {lead.assignTo}</p>}
//         {lead.assignBy && <p className="text-gray-700"><strong>Assigned By:</strong> {lead.assignBy}</p>}
//         {lead.comments && <p className="text-gray-700"><strong>Comments:</strong> {lead.comments}</p>}
//       </div>
//     </div>
//   );
// }

// //////////////////////////////////////////// outside modal click closes it////////////////////////

// import React, { useEffect, useRef } from "react";
// export interface Lead {
//   count: string;
//   name: string;
//   date: string;
//   phone: string;
//   email: string;
//   zipCode?: string;
//   description?: string;
//   assignTo?: string;
//   assignBy?: string;
//   comments?: string;
// }

// interface LeadDetailsModalProps {
//   lead: Lead | null;
//   onClose: () => void;
// }

// export default function LeadDetailsModal({ lead, onClose }: LeadDetailsModalProps) {
//   const modalRef = useRef<HTMLDivElement>(null);

//   // ✅ Close modal when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
//         onClose(); // Close modal
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [onClose]);

//   if (!lead) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50">
//       {/* Wrap modal content in ref */}
//       <div ref={modalRef} className="bg-white/80 w-[580px] h-[416px] rounded-[40px] border-2 border-white p-6 relative">
//         {/* Close Button */}
//         <button className="absolute top-4 right-4 text-gray-600 hover:text-black" onClick={onClose}>
//           ✖
//         </button>

//         {/* Lead Details */}
//         <h2 className="text-xl font-bold text-center mb-4">{lead.name}</h2>
//         <p className="text-gray-700"><strong>Date:</strong> {lead.date}</p>
//         <p className="text-gray-700"><strong>Phone:</strong> {lead.phone}</p>
//         <p className="text-gray-700"><strong>Email:</strong> {lead.email}</p>
//         {lead.zipCode && <p className="text-gray-700"><strong>Zip Code:</strong> {lead.zipCode}</p>}
//         {lead.description && <p className="text-gray-700"><strong>Description:</strong> {lead.description}</p>}
//         {lead.assignTo && <p className="text-gray-700"><strong>Assigned To:</strong> {lead.assignTo}</p>}
//         {lead.assignBy && <p className="text-gray-700"><strong>Assigned By:</strong> {lead.assignBy}</p>}
//         {lead.comments && <p className="text-gray-700"><strong>Comments:</strong> {lead.comments}</p>}
//       </div>
//     </div>
//   );
// }

// /////////////////////// /////////////////10/3/25/////////////

// import React, { useEffect, useRef } from "react";
// import Image from "next/image";

// export interface Lead {
//   count: string;
//   name: string;
//   date: string;
//   phone: string;
//   email: string;
//   zipCode?: string;
//   description?: string;
//   assignTo?: string;
//   assignBy?: string;
//   comments?: string;
// }

// interface LeadDetailsModalProps {
//   lead: Lead | null;
//   onClose: () => void;
// }

// export default function LeadDetailsModal({ lead, onClose }: LeadDetailsModalProps) {
//   const modalRef = useRef<HTMLDivElement>(null);

//   // ✅ Close when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
//         onClose();
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [onClose]);

//   if (!lead) return null;

//   return (
//     <div className="absolute left-[688px] top-[487px]">
//       <div
//         ref={modalRef}
//         className="w-[580px] h-auto rounded-[40px] border-2 border-white p-6 shadow-lg backdrop-blur-md bg-white/60"
//       >
//         {/* Close Button */}
//         <button className="absolute top-4 right-4 text-gray-600 hover:text-black" onClick={onClose}>
//           ✖
//         </button>

//         {/* Header */}
//         <h2 className="font-[600] text-[26px] leading-[32px] font-['Afacad Flux'] text-gray-800">
//           Project Details
//         </h2>

//         {/* Details Section */}
//         <div className="mt-4 space-y-1 font-[500] text-[18px] leading-[32px] font-['Afacad Flux'] text-gray-700">
//           <p><strong>Name:</strong> {lead.name}</p>
//           <p><strong>Phone:</strong> {lead.phone}</p>
//           <p><strong>Email:</strong> {lead.email}</p>
//           <p><strong>Date:</strong> {lead.date}</p>
//           <p><strong>Assign To:</strong> {lead.assignTo}</p>
//         </div>

//         {/* Message Box (Inside the Card) */}
//         <div className="relative mt-6">
//           <textarea
//             className="w-full h-[164px] border border-gray-300 rounded-lg p-3 resize-none"
//             placeholder="Type a message..."
//           ></textarea>

//           {/* Yellow Arrow Instead of Send Button */}
//           <div className="absolute top-[5px] left-[95%] transform -translate-x-1/2 bg-black w-[30px] h-[30px] rounded-full flex items-center justify-center">
//             <Image
//               src="/images/yellowArrow.png"
//               alt="Assign To Arrow"
//               width={10}
//               height={10}
//               className="border-[1.5px] border-black"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// //////////////////////////////////////////////////////// 11/3/25 /////////////////////////////////////////////////
// ////////////////////////////////// modal responsiveness and overflow issue fixed //////////////////////////////////////////////////////

import React, { useEffect, useRef } from "react";
import Image from "next/image";

export interface Lead {
  count: string;
  name: string;
  date: string;
  phone: string;
  email: string;
  zipCode?: string;
  description?: string;
  assignTo?: string;
  assignBy?: string;
  comments?: string;
}

interface LeadDetailsModalProps {
  lead: Lead | null;
  onClose: () => void;
}

export default function LeadDetailsModal({
  lead,
  onClose,
}: LeadDetailsModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // ✅ Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  if (!lead) return null;

  return (
    // <div className="absolute left-[60%] top-[450px] transform -translate-x-1/2 w-[90%] max-w-[580px] min-h-[416px]">
    <div className="absolute left-[60%] top-[450px] transform -translate-x-[60%]  sm:-translate-x-1/2 w-[90%] max-w-[580px] min-h-[416px]">
      <div
        ref={modalRef}
        className="w-full h-full rounded-[40px] border-2 border-white p-6 shadow-lg backdrop-blur-md bg-white/20"
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
          onClick={onClose}
        >
          ✖
        </button>

        {/* Header - Aligned with Name & Email */}
        <h2 className="text-[#1F1F1F] font-[600] text-[26px] leading-[32px] font-['Afacad Flux'] w-[90%] max-w-[500px] mx-auto text-left">
          Project Details
        </h2>

        {/* Details Section - Properly Spaced & Aligned */}
        <div className="text-[#1F1F1F] mt-4 grid grid-cols-2 gap-x-16 gap-y-2 text-[18px] leading-[32px] font-[500] w-[90%] max-w-[500px] mx-auto">
          {/* Left Column */}
          <div className="flex flex-col min-w-0">
            <p className="m-[0.15rem] break-words">
              <strong>Name:</strong> {lead.name}
            </p>
            <p className="m-[0.15rem] break-words">
              <strong>Email:</strong> {lead.email}
            </p>
          </div>

          {/* Right Column - Properly Spaced */}
          <div className="flex flex-col min-w-0">
            <p className="m-[0.15rem] break-words">
              <strong>Phone:</strong> {lead.phone}
            </p>
            <p className="m-[0.15rem] break-words">
              <strong>Date:</strong> {lead.date}
            </p>
          </div>
        </div>

        {/* Assign To - Left-Aligned with Left Arrow */}
        <div className="mt-4 w-[90%] max-w-[500px] mx-auto flex items-center gap-1">
          {/* Assign To Text with Background */}
          <div className="bg-white rounded-[16px] px-3 py-1 sm:px-4 sm:py-2 border border-gray-300 inline-block">
            <p className="text-[#1F1F1F] text-[16px] sm:text-[18px] leading-[28px] sm:leading-[32px] font-[500]">
              <strong>Assign To:</strong> {lead.assignTo || "Not Assigned"}
            </p>
          </div>
          {/* Left Arrow Button */}
          <button className="w-[20px] h-[20px] flex items-center bg-yellow-400 rounded-full justify-center">
            <Image
              src="/images/left-arrow-8x.png"
              alt="Back Arrow"
              width={7}
              height={7}
            />
          </button>
          {/* right Arrow Button */}
          <button className="w-[20px] h-[20px] flex items-center bg-yellow-400 rounded-full justify-center">
            <Image
              src="/images/right-arrow-8x.png"
              alt="Back Arrow"
              width={7}
              height={7}
            />
          </button>
        </div>

        {/* Message Box (Inside the Card) */}
        <div
          className="relative w-[90%] max-w-[500px] mx-auto mt-4 rounded-[32px]"
          style={{ height: "164px" }}
        >
          <textarea
            className="w-full h-full border border-white-300 rounded-[32px] pt-3 pl-6 resize-none"
            placeholder="Description"
          ></textarea>

          {/* Yellow Arrow Instead of Send Button */}
          <div className="absolute top-[1.5rem] right-[0.25rem] transform -translate-y-1/2 bg-black w-[40px] h-[40px] rounded-full flex items-center justify-center">
            <Image
              src="/images/yellowArrow-4x.png"
              alt="Assign To Arrow"
              width={15}
              height={15}
              className="border-[1.5px] border-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
