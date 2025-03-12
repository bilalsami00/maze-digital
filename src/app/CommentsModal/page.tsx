import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Lead } from "../LeadDetailsModal/page";

interface CommentsModalProps {
  lead: Lead | null;
  onClose: () => void;
}

export default function CommentsModal({ lead, onClose }: CommentsModalProps) {
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
    // <div
    //   className="absolute left-1/2 top-[20%] transform -translate-x-1/2 w-[90%] max-w-[440px] min-h-[496px]
    //   rounded-[40px] border-2 border-white bg-[#FFFFFF52] shadow-lg p-6 backdrop-blur-md"
    // >
    <div
      className="absolute left-[60%] top-[39%] transform -translate-x-[60%] 
    sm:-translate-x-1/2 w-[90%] max-w-[440px] min-h-[496px]
    rounded-[40px] border-2 border-white bg-[#FFFFFF52] shadow-lg p-6 backdrop-blur-md "
    >
      <div ref={modalRef} className="w-full h-full relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
          onClick={onClose}
        >
          ✖
        </button>

        {/* Header */}
        <h2 className="text-[#1F1F1F] font-[600] text-[26px] leading-[32px] font-['Afacad Flux'] w-[90%] max-w-[500px] mx-auto text-left">
          Comments
        </h2>

        {/* Comments Section */}
        <div className="text-[#1F1F1F] mt-6 w-[90%] max-w-[500px] mx-auto text-left">
          <p className="text-[18px] leading-[32px] font-[500] break-words overflow-hidden">
            {lead.comments || "No comments available."}
          </p>

          {/* Message Box */}
          <div
            className="relative mt-6 w-full max-w-[270px] h-[90px] bg-white 
            rounded-[50px] border border-gray-300 top-[12rem]"
          >
            <textarea
              className="w-full h-full rounded-[50px] pt-3 pl-6 resize-none text-[16px] text-black"
              placeholder="Write a comment..."
            ></textarea>

            {/* Green Arrow Send Button */}
            <div className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black w-[40px] h-[40px] rounded-full flex items-center justify-center">
              <Image
                src="/images/greenArrow-4x.png"
                alt="Send Comment"
                width={15}
                height={15}
                className="border-[1.5px] border-black"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
