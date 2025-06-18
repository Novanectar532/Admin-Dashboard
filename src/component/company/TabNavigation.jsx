// src/component/company/TabNavigation.jsx
import React from "react";
import { Building2, Plus, Clock } from "lucide-react";

const TabNavigation = ({ activeTab = "pending", onTabChange }) => {
  const tabs = [
    {
      id: "all",
      label: "All Companies",
      icon: Building2,
    },
    {
      id: "add",
      label: "Add Company",
      icon: Plus,
    },
    {
      id: "pending",
      label: "Pending Approvals",
      icon: Clock,
    },
  ];

  return (
    <div className="flex space-x-2 mb-6 border-b border-gray-200">
      {tabs.map(({ id, label, icon: Icon }) => {
        const isActive = activeTab === id;

        return (
          <button
            key={id}
            onClick={() => onTabChange(id)}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
              isActive
                ? "border-blue-600 text-blue-600 bg-blue-50 rounded-t-md"
                : "border-transparent text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-t-md"
            }`}>
            <Icon className="w-4 h-4" />
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default TabNavigation;
