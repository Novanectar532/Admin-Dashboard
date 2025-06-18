import React, { useState } from "react";
import { Upload, X, Building2 } from "lucide-react";

const AddCompanyForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    website: "",
    location: "",
    hrName: "",
    hrEmail: "",
    hrPhone: "",
    address: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl border border-gray-200 shadow-sm">
      <div className="p-8 border-b border-gray-200">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <Building2 className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Basic Information
            </h2>
            <p className="text-gray-600 mt-1">
              The following information should be provided to help you be
              contacted by anyone at your company anytime.
            </p>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Logo Upload */}
          <div className="space-y-6">
            <div>
              <label className="form-label">Company Logo</label>
              <p className="text-sm text-gray-500 mb-4">
                This image will be shown publicly as your company logo.
              </p>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 hover:bg-blue-50/50 transition-all duration-200 cursor-pointer group">
                <div className="w-20 h-20 bg-green-100 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <Upload className="w-10 h-10 text-green-600" />
                </div>
                <p className="text-gray-700 font-medium mb-2">
                  Click to replace image or drag and drop
                </p>
                <p className="text-sm text-gray-500">
                  SVG, PNG, JPG (max 800x400px)
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Company Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Company Details
              </h3>
              <p className="text-gray-600 mb-8">
                Please provide information about what defines your company as a
                whole.
              </p>

              <div className="space-y-6">
                <div>
                  <label className="form-label">Company Name *</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter company name"
                    required
                  />
                </div>

                <div>
                  <label className="form-label">Website URL</label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="https://example.com"
                  />
                </div>

                <div>
                  <label className="form-label">Location *</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter location"
                    required
                  />
                </div>

                <div>
                  <label className="form-label">HR Name *</label>
                  <input
                    type="text"
                    name="hrName"
                    value={formData.hrName}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter HR name"
                    required
                  />
                </div>

                <div>
                  <label className="form-label">HR Email *</label>
                  <input
                    type="email"
                    name="hrEmail"
                    value={formData.hrEmail}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="hr@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="form-label">HR Phone Number</label>
                  <input
                    type="tel"
                    name="hrPhone"
                    value={formData.hrPhone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter phone number"
                  />
                </div>

                <div>
                  <label className="form-label">Company Address</label>
                  <textarea
                    rows={4}
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="form-input resize-none"
                    placeholder="Enter company address"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Actions */}
      <div className="flex justify-end space-x-4 p-8 border-t border-gray-200 bg-gray-50/50">
        <button type="button" className="btn-secondary">
          Cancel
        </button>
        <button type="submit" className="btn-primary">
          Add Company
        </button>
      </div>
    </form>
  );
};

export default AddCompanyForm;
