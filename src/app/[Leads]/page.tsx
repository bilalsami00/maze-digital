"use client;"
// import { useState } from "react";
import Sidebar from "@/app/Sidebar/page";
import Header from "@/app/Header/page";
import Image from "next/image";
import User from "../Users/page";

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

      {/* New Lead Button (Moved outside and aligned to the right) */}
      <div className="absolute right-10 top-[8rem] z-30">
        <button className="px-6 py-3 bg-white text-black rounded-full font-medium flex items-center gap-2 shadow-lg">
          <span className="text-lg bg-black p-2 text-yellow-500 rounded-full w-8 h-8 flex items-center justify-center">
            +
          </span>{" "}
          New Lead
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
              Main Lead Board
            </button>
            <button className="px-16 py-2 bg-gray-200 text-gray-700 rounded-full border-[2px] border-white ">
              SMM Leads
            </button>
            <button className="px-16 py-2 bg-gray-200 text-gray-700 rounded-full border-[2px] border-white">
              PPC Leads
            </button>
          </div>
        </div>

        {/* Table Container */}
        <div className="overflow-auto rounded-xl p-6 w-full max-w-6xl mx-auto ">
          <table className="w-full table-auto border-collapse rounded-lg overflow-hidden text-left">
            <thead>
              <tr className=" text-gray-700">
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
                    // className="px-6 py-3 font-medium text-center border-b border-gray-300"
                    className="px-6 py-3 font-medium text-center"
                  >
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
                    <span className="w-full block px-4 py-2 bg-white text-black rounded-[1.85rem] whitespace-nowrap px-12 py-6">
                      {lead.name}
                    </span>
                  </td>

                  {/* Date */}
                  <td className="py-3 text-center">
                    <span className="w-full block px-4 py-2 bg-white text-black rounded-[1.85rem] whitespace-nowrap px-12 py-6">
                      {lead.date}
                    </span>
                  </td>

                  {/* Phone */}
                  <td className="py-3 text-center">
                    <span className="w-full block px-4 py-2 bg-white text-black rounded-[1.85rem] whitespace-nowrap px-12 py-6">
                      {lead.phone}
                    </span>
                  </td>

                  {/* Email */}
                  <td className="py-3 text-center">
                    <span className="w-full block px-4 py-2 bg-white text-black rounded-[1.85rem] whitespace-nowrap px-12 py-6">
                      {lead.email}
                    </span>
                  </td>

                  {/* Zip Code */}
                  <td className="py-3 text-center">
                    <span className="w-full block px-4 py-2 bg-white text-black rounded-[1.85rem] whitespace-nowrap px-12 py-6">
                      {lead.zipCode}
                    </span>
                  </td>

                  {/* Description */}
                  <td className="py-3 text-center">
                    <span className="w-full block px-4 py-2 bg-white text-black rounded-[1.85rem] whitespace-nowrap px-12 py-6">
                      {lead.description}
                    </span>
                  </td>

                  {/* Assign To */}
                  <td className="py-3 text-center relative">
                    {/* Absolute positioned SVG inside bubble */}
                    {/* Absolute positioned SVG inside bubble */}
                    <div className="absolute top-[1.1rem] right-[0.85rem] w-[1.5rem] h-[1.5rem] flex items-center justify-center bg-black rounded-full">
                      <svg
                        className="w-4 h-4" // Tailwind class for smaller size
                        style={{ width: "14px", height: "14px" }} // Explicit inline styles for extra control
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                      </svg>
                    </div>

                    {/* Assign To Text inside bubble */}
                    <span className="w-full block px-8 py-6 bg-white text-black rounded-[1.85rem] whitespace-nowrap">
                      {lead.assignTo}
                    </span>
                  </td>

                  {/* Assign By */}
                  <td className="py-3 text-center relative">
                    {/* Absolute positioned SVG inside bubble */}
                    {/* Absolute positioned SVG inside bubble */}
                    <div className="absolute top-[1.1rem] right-[0.85rem] w-[1.5rem] h-[1.5rem] flex items-center justify-center bg-black rounded-full">
                      <svg
                        className="w-4 h-4" // Tailwind class for smaller size
                        style={{ width: "14px", height: "14px" }} // Explicit inline styles for extra control
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                      </svg>
                    </div>

                    {/* Assign By Text inside bubble */}
                    <span className="w-full block px-8 py-6 bg-white text-black rounded-[1.85rem] whitespace-nowrap">
                      {lead.assignBy}
                    </span>
                  </td>

                  {/* Comments */}
                  <td className="py-3 text-center relative">
                    {/* Absolute positioned SVG inside bubble */}
                    {/* Absolute positioned SVG inside bubble */}
                    <div className="absolute top-[1.1rem] right-[0.85rem] w-[1.5rem] h-[1.5rem] flex items-center justify-center bg-black rounded-full">
                      <svg
                        className="w-4 h-4" // Tailwind class for smaller size
                        style={{ width: "14px", height: "14px" }} // Explicit inline styles for extra control
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                      </svg>
                    </div>

                    {/* Comment Text inside bubble */}
                    <span className="w-full block px-8 py-6 bg-white text-black rounded-[1.85rem] whitespace-nowrap">
                      {lead.comments}
                    </span>
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
