import React from "react";
import {
  Eye,
  X,
  Check,
  Mail,
  MapPin,
  Briefcase,
  MoreVertical,
  Building2,
} from "lucide-react";

const CompanyCard = ({
  company = "Stakenet Solutions",
  status = "Pending",
  contact = "Michael Chen",
  email = "hr@stakenet.com",
  jobsPosted = 0,
  logo = "S",
  type = "pending",
}) => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "bg-orange-100 text-orange-700 border-orange-200";
      case "active":
        return "bg-green-100 text-green-700 border-green-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getLogoColors = () => {
    const colors = [
      "from-blue-500 to-blue-600",
      "from-green-500 to-green-600",
      "from-purple-500 to-purple-600",
      "from-red-500 to-red-600",
      "from-yellow-500 to-yellow-600",
      "from-indigo-500 to-indigo-600",
    ];
    const index = company.charCodeAt(0) % colors.length;
    return colors[index];
  };

  return (
    <div className="company-card group">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div
            className={`w-16 h-16 bg-gradient-to-br ${getLogoColors()} rounded-xl flex items-center justify-center shadow-lg`}>
            <span className="text-white font-bold text-xl">{logo}</span>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-blue-600 transition-colors">
              {company}
            </h3>
            <span className={`status-badge ${getStatusColor(status)}`}>
              <div
                className={`w-2 h-2 rounded-full mr-2 ${
                  status.toLowerCase() === "pending"
                    ? "bg-orange-500"
                    : status.toLowerCase() === "active"
                    ? "bg-green-500"
                    : "bg-gray-500"
                }`}
              />
              {status}
            </span>
          </div>
        </div>

        <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>

      {/* Details */}
      <div className="space-y-4 mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Building2 className="w-5 h-5 text-gray-600" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-semibold text-gray-900 truncate">{contact}</p>
            <p className="text-sm text-gray-500">HR Contact</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Mail className="w-5 h-5 text-gray-600" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-semibold text-gray-900 truncate">{email}</p>
            <p className="text-sm text-gray-500">Email Address</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Briefcase className="w-5 h-5 text-gray-600" />
          </div>
          <div>
            <p className="font-semibold text-gray-900">{jobsPosted} Jobs</p>
            <p className="text-sm text-gray-500">Posted</p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors group/btn">
          <Eye className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
          <span className="text-sm font-medium">View Details</span>
        </button>

        {type === "pending" && (
          <div className="flex space-x-2">
            <button className="flex items-center space-x-1 bg-red-50 hover:bg-red-100 text-red-600 px-3 py-2 rounded-lg text-sm font-medium transition-colors">
              <X className="w-4 h-4" />
              <span>Reject</span>
            </button>
            <button className="flex items-center space-x-1 bg-green-50 hover:bg-green-100 text-green-600 px-3 py-2 rounded-lg text-sm font-medium transition-colors">
              <Check className="w-4 h-4" />
              <span>Approve</span>
            </button>
          </div>
        )}

        {type === "active" && (
          <button className="flex items-center space-x-1 bg-blue-50 hover:bg-blue-100 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            <Eye className="w-4 h-4" />
            <span>Manage</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default CompanyCard;
