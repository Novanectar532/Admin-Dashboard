import React from "react";
import { ChevronDown } from "lucide-react";

const StatusFilter = () => {
  return (
    <div className="flex justify-end mb-6">
      <div className="relative">
        <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
          <span>Status: Pending</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default StatusFilter;
