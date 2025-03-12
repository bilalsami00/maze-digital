"use client";
import React from "react";

interface CommentsModalProps {
  comments: string | null;
  onClose: () => void;
}

const CommentsModal: React.FC<CommentsModalProps> = ({ comments, onClose }) => {
  if (!comments) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-semibold mb-4">Comments</h2>
        <p className="text-gray-700">{comments}</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CommentsModal;
