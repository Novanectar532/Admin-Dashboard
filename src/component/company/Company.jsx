import React, { useState } from "react";
import CompanyCard from "./CompanyCard";
import Pagination from "./Pagination";
import TabNavigation from "./TabNavigation";
import AddCompanyForm from "./AddCompanyForm";
import { Search, Filter } from "lucide-react";

function Company() {
  const [activeTab, setActiveTab] = useState("pending");
  const [searchTerm, setSearchTerm] = useState("");

  const pendingCompanies = [
    {
      company: "Stakenet Solutions",
      status: "Pending",
      contact: "Michael Chen",
      email: "hr@stakenet.com",
      jobsPosted: 0,
      logo: "S",
    },
    {
      company: "TechFlow Industries",
      status: "Pending",
      contact: "Sarah Wilson",
      email: "hr@techflow.com",
      jobsPosted: 0,
      logo: "T",
    },
    {
      company: "DataSync Corp",
      status: "Pending",
      contact: "James Rodriguez",
      email: "hr@datasync.com",
      jobsPosted: 0,
      logo: "D",
    },
    {
      company: "CloudVision Ltd",
      status: "Pending",
      contact: "Emily Davis",
      email: "hr@cloudvision.com",
      jobsPosted: 0,
      logo: "C",
    },
    {
      company: "InnovateTech",
      status: "Pending",
      contact: "David Kim",
      email: "hr@innovatetech.com",
      jobsPosted: 0,
      logo: "I",
    },
    {
      company: "NextGen Systems",
      status: "Pending",
      contact: "Lisa Thompson",
      email: "hr@nextgen.com",
      jobsPosted: 0,
      logo: "N",
    },
  ];

  const activeCompanies = [
    {
      company: "Komodo Technologies",
      status: "Active",
      contact: "Sarah Johnson",
      email: "hr@komodo.com",
      jobsPosted: 24,
      logo: "K",
    },
    {
      company: "Microsoft Corporation",
      status: "Active",
      contact: "John Smith",
      email: "hr@microsoft.com",
      jobsPosted: 156,
      logo: "M",
    },
    {
      company: "Google LLC",
      status: "Active",
      contact: "Maria Garcia",
      email: "hr@google.com",
      jobsPosted: 89,
      logo: "G",
    },
    {
      company: "Amazon Web Services",
      status: "Active",
      contact: "Robert Brown",
      email: "hr@aws.com",
      jobsPosted: 203,
      logo: "A",
    },
    {
      company: "Meta Platforms",
      status: "Active",
      contact: "Jennifer Lee",
      email: "hr@meta.com",
      jobsPosted: 67,
      logo: "M",
    },
    {
      company: "Apple Inc",
      status: "Active",
      contact: "Michael Chang",
      email: "hr@apple.com",
      jobsPosted: 134,
      logo: "A",
    },
  ];

  const allCompanies = [...activeCompanies, ...pendingCompanies];

  const renderContent = () => {
    switch (activeTab) {
      case "pending":
        return (
          <div className="space-y-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Pending Approvals
                </h1>
                <p className="text-gray-600 text-lg">
                  Review and approve company registrations
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search companies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2.5 w-80 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Filter className="w-4 h-4" />
                  <span>Filter</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {pendingCompanies.map((company, index) => (
                <CompanyCard key={index} {...company} type="pending" />
              ))}
            </div>

            <Pagination currentPage={1} totalPages={3} />
          </div>
        );

      case "all":
        return (
          <div className="space-y-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  All Companies
                </h1>
                <p className="text-gray-600 text-lg">
                  Manage all registered companies
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search companies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2.5 w-80 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="flex flex-wrap gap-3">
                  {/* Filter by Status */}
                  <select className="w-44 px-4 py-2.5 text-sm bg-white border border-gray-300 rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400">
                    <option>All Status</option>
                    <option>Active</option>
                    <option>Pending</option>
                  </select>

                  {/* Sort By */}
                  <select className="w-44 px-4 py-2.5 text-sm bg-white border border-gray-300 rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400">
                    <option>Sort by Name</option>
                    <option>Sort by Jobs</option>
                    <option>Sort by Date</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {allCompanies.map((company, index) => (
                <CompanyCard
                  key={index}
                  {...company}
                  type={
                    company.status.toLowerCase() === "active"
                      ? "active"
                      : "pending"
                  }
                />
              ))}
            </div>

            <Pagination currentPage={1} totalPages={4} />
          </div>
        );

      case "add":
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Add New Company
              </h1>
              <p className="text-gray-600 text-lg">
                Register a new company to the platform
              </p>
            </div>
            <AddCompanyForm />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <h1 className="text-xl font-bold text-gray-900">NextHire</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome back, Admin</span>
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default Company;
