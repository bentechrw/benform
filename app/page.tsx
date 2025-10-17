'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { z } from "zod";
import { applicationSchema } from './validationSchema';
import toast, { Toaster } from 'react-hot-toast';
import { getProvinces, getDistrictsByProvince, getSectorsByDistrict, getCellsBySector, getVillagesByCell } from 'rwanda-geo-structure';

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    status: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    nationality: '',
    idNumber: '',
    
    province: '',
    district: '',
    sector: '',
    cell: '',
    village: '',
    
    highSchool: '',
    graduationYear: '',
    combination: '',
    aggregateScore: '',
    
    preferredUniversity: '',
    
    fatherName: '',
    motherName: '',
    guardianPhone: '',
    relationship: '',
    
    hasDisability: '',
    disabilityDetails: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const getBorderColor = (fieldName: string) => {
    return errors[fieldName] ? '#ef4444' : '#d1d5db';
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const parsedData = {
      ...formData,
      nID: Number(formData.idNumber),
      graduationYear: Number(formData.graduationYear),
      guardianPhone: Number(formData.guardianPhone),
    };
    
    const result = applicationSchema.safeParse(parsedData);


    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach(err => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      setLoading(false);
      console.log("Validation errors:", fieldErrors);
      return;
    } else{
      setErrors({});
      console.log("Valid data:", result.data);
    }
    
    // try {
    //   const formDataToSend = new FormData();
      
    //   Object.keys(formData).forEach(key => {
    //     formDataToSend.append(key, formData[key as keyof typeof formData]);
    //   });

    //   const response = await fetch('/api/apply', {
    //     method: 'POST',
    //     body: formDataToSend
    //   });

    //   const data = await response.json();

    //   if (response.ok) {
    //     toast.success('Application submitted successfully!');

    //     setFormData({
    //       firstName: '', lastName: '', status: '', email: '', phone: '', dateOfBirth: '',
    //       gender: '', nationality: '', idNumber: '', province: '', district: '',
    //       sector: '', cell: '', village: '', highSchool: '', graduationYear: '',
    //       combination: '', aggregateScore: '', preferredUniversity: '',
    //       fatherName: '', motherName: '', guardianPhone: '', relationship: '',
    //       hasDisability: '', disabilityDetails: ''
    //     });
    //   } else {
    //     setMessage({ type: 'error', text: data.error || 'Failed to submit application' });
    //   }
    // } catch (error) {
    //   toast.error('An error occurred while submitting the application.');
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div className="min-h-screen bg-sky-900 py-12 px-4 sm:px-6 lg:px-8">
      <Toaster position='top-right'/>
      <div className="max-w-4xl mx-auto">

        <div className="flex flex-col bg-white rounded-t-2xl shadow-xl p-8 border-b-4 border-indigo-600">
        
          <Image src="/logo.png" priority alt="Bentech Logo" width={180} height={100} className='w-[10rem] mx-auto mb-0'/>
          
          <div className="text-center">
            <p className="text-xl text-indigo-600 font-semibold">University Application Form</p>
            <p className="text-gray-600 mt-2">Complete your application to study in university with Bentech</p>
          </div>

        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-b-2xl shadow-xl p-8">
          <div className="mb-8">
            <h2 className="text-center text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-indigo-200">
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder='e.g., John'
                  value={formData.firstName}
                  onChange={handleChange}
                  style={{ borderColor: getBorderColor("firstName") }}
                  className="w-full px-4 py-2 text-black border border-gray-100 rounded-lg focus:ring-2 focus:ring- focus:border-transparent"
                />
                {errors.firstName && <p style={{ color: "red" }}>{errors.firstName}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder='e.g., Kwizera'
                  value={formData.lastName}
                  onChange={handleChange}
                  style={{ borderColor: getBorderColor("lastName") }}
                  className="w-full px-4 py-2 border border-gray-100 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black"
                />
                {errors.lastName && <p style={{ color: "red" }}>{errors.lastName}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder='e.g., abc@gmail.com'
                  value={formData.email}
                  onChange={handleChange}
                  style={{ borderColor: getBorderColor("email") }}
                  className="w-full px-4 py-2 border border-gray-100 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black"
                />
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{ borderColor: getBorderColor("phone") }}
                  placeholder="+250..."
                  className="w-full px-4 py-2 border border-gray-100 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black"

                />
                {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  max={new Date().toISOString().split('T')[0]}
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  style={{ borderColor: getBorderColor("dateOfBirth") }}
                  className="w-full px-4 py-2 border border-gray-100 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black"
                />
                {errors.dateOfBirth && <p style={{ color: "red" }}>{errors.dateOfBirth}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gender <span className="text-red-500">*</span>
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  style={{ borderColor: getBorderColor("gender") }}
                  className="w-full px-4 py-2 border border-gray-100 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                {errors.gender && <p style={{ color: "red" }}>{errors.gender}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status <span className="text-red-500">*</span>
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  style={{ borderColor: getBorderColor("status") }}
                  className="w-full px-4 py-2 border border-gray-100 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black"
                >
                  <option value="">Select Status</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="divorced">Divorced</option>
                </select>
                {errors.status && <p style={{ color: "red" }}>{errors.status}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nationality <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                  style={{ borderColor: getBorderColor("nationality") }}
                  className="w-full px-4 py-2 border border-gray-100 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black"
                />
                {errors.nationality && <p style={{ color: "red" }}>{errors.nationality}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  National ID Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="idNumber"
                  value={formData.idNumber}
                  onChange={handleChange}
                  style={{ borderColor: getBorderColor("idNumber") }}
                  className="w-full px-4 py-2 border border-gray-100 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black"
                />
                {errors.idNumber && <p style={{ color: "red" }}>{errors.idNumber}</p>}
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-indigo-200">
              Address Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Province <span className="text-red-500">*</span>
                </label>
                <select
                  name="province"
                  value={formData.province}
                  onChange={handleChange}
                  style={{ borderColor: getBorderColor("province") }}
                  className="w-full px-4 py-2 border border-gray-100 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black"
                >
                  <option value="">Select Province</option>
                  <option value="Kigali">Kigali</option>
                  <option value="East">Eastern</option>
                  <option value="North">Northern</option>
                  <option value="South">Southern</option>
                  <option value="West">Western</option>
                </select>
                {errors.province && <p style={{ color: "red" }}>{errors.province}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  District <span className="text-red-500">*</span>
                </label>
                <select
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  style={{ borderColor: getBorderColor("district") }}
                  className="w-full px-4 py-2 border border-gray-100 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black"
                >
                  {getDistrictsByProvince(formData.province).map((district) => (
                    <option key={district} value={district}>{district}</option> 
                  ))}
                </select>
                {errors.district && <p style={{ color: "red" }}>{errors.district}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sector <span className="text-red-500">*</span>
                </label>
                <select
                  name="sector"
                  value={formData.sector}
                  onChange={handleChange}
                  style={{ borderColor: getBorderColor("sector") }}
                  className="w-full px-4 py-2 border border-gray-100 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black"
                >
                  {getSectorsByDistrict(formData.province, formData.district).map((sector) => (
                    <option key={sector} value={sector}>{sector}</option>
                  ))}
                </select>
                {errors.sector && <p style={{ color: "red" }}>{errors.sector}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cell <span className="text-red-500">*</span>
                </label>
                <select
                  name="cell"
                  value={formData.cell}
                  onChange={handleChange}
                  style={{ borderColor: getBorderColor("cell") }}
                  className="w-full px-4 py-2 border border-gray-100 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black"
                >
                  {getCellsBySector(formData.province, formData.district, formData.sector).map((cell) => (
                    <option key={cell} value={cell}>{cell}</option>
                  ))}
                </select>
                {errors.cell && <p style={{ color: "red" }}>{errors.cell}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Village <span className="text-red-500">*</span>
                </label>
                <select
                  name="village"
                  value={formData.village}
                  onChange={handleChange}
                  style={{ borderColor: getBorderColor("village") }}
                  className="w-full px-4 py-2 border border-gray-100 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black"
                >
                  {getVillagesByCell(formData.province, formData.district, formData.sector, formData.cell).map((cell) => (
                    <option key={cell} value={cell}>{cell}</option>
                  ))}
                </select>
                {errors.village && <p style={{ color: "red" }}>{errors.village}</p>}
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-indigo-200">
              Academic Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  High School Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="highSchool"
                  value={formData.highSchool}
                  onChange={handleChange}
                  style={{ borderColor: getBorderColor("highSchool") }}
                  className="w-full px-4 py-2 border border-gray-100 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black"
                />
                {errors.highSchool && <p style={{ color: "red" }}>{errors.highSchool}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Graduation Year <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="graduationYear"
                  value={formData.graduationYear}
                  onChange={handleChange}
                  style={{ borderColor: getBorderColor("graduationYear") }}
                  min="2000"
                  max="2030"
                  className="w-full px-4 py-2 border border-gray-100 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black"
                />
                {errors.graduationYear && <p style={{ color: "red" }}>{errors.graduationYear}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Combination <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="combination"
                  value={formData.combination}
                  onChange={handleChange}
                  style={{ borderColor: getBorderColor("combination") }}
                  className="w-full px-4 py-2 border border-gray-100 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black"
                />
                {errors.combination && <p style={{ color: "red" }}>{errors.combination}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Grade/Marks Obtained <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="aggregateScore"
                  value={formData.aggregateScore}
                  onChange={handleChange}
                  style={{ borderColor: getBorderColor("aggregateScore") }}
                  step="0.01"
                  className="w-full px-4 py-2 border border-gray-100 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black"
                />
                {errors.aggregateScore && <p style={{ color: "red" }}>{errors.aggregateScore}</p>}
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-indigo-200">
              University Preferences
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  University you're applying for <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  name="preferredUniversity"
                  value={formData.preferredUniversity}
                  onChange={handleChange}
                  style={{ borderColor: getBorderColor("preferredUniversity") }}
                  className="w-full px-4 py-2 border border-gray-100 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black"
                />
                {errors.preferredUniversity && <p style={{ color: "red" }}>{errors.preferredUniversity}</p>}
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-indigo-200">
              Guardian Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Father Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  style={{ borderColor: getBorderColor("fatherName") }}
                  className="w-full px-4 py-2 border border-gray-100 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black"
                />
                {errors.fatherName && <p style={{ color: "red" }}>{errors.fatherName}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mother Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="motherName"
                  value={formData.motherName}
                  onChange={handleChange}
                  style={{ borderColor: getBorderColor("motherName") }}
                  className="w-full px-4 py-2 border border-gray-100 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black"
                />
                {errors.motherName && <p style={{ color: "red" }}>{errors.motherName}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Guardian Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="guardianPhone"
                  value={formData.guardianPhone}
                  onChange={handleChange}
                  style={{ borderColor: getBorderColor("guardianPhone") }}
                  placeholder="+250..."
                  className="w-full px-4 py-2 border border-gray-100 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black"
                />
                {errors.guardianPhone && <p style={{ color: "red" }}>{errors.guardianPhone}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Relationship <span className="text-red-500">*</span>
                </label>
                <select
                  name="relationship"
                  value={formData.relationship}
                  onChange={handleChange}
                  style={{ borderColor: getBorderColor("relationship") }}
                  className="w-full px-4 py-2 border border-gray-100 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black"
                >
                  <option value="">Select Relationship</option>
                  <option value="Father">Father</option>
                  <option value="Mother">Mother</option>
                  <option value="Uncle">Uncle</option>
                  <option value="Aunt">Aunt</option>
                  <option value="Sibling">Sibling</option>
                  <option value="Other">Other</option>
                </select>
                {errors.relationship && <p style={{ color: "red" }}>{errors.relationship}</p>}
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-indigo-200">
              Additional Information
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Do you have any disability?
                </label>
                <select
                  name="hasDisability"
                  value={formData.hasDisability}
                  onChange={handleChange}
                  style={{ borderColor: getBorderColor("hasDisability") }}
                  className="w-full px-4 py-2 border border-gray-100 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black"
                >
                  <option value="">Select</option>
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
                {errors.hasDisability && <p style={{ color: "red" }}>{errors.hasDisability}</p>}
              </div>
              {formData.hasDisability === 'Yes' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Please specify
                  </label>
                  <textarea
                    name="disabilityDetails"
                    value={formData.disabilityDetails}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-100 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-indigo-600 text-white px-12 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed shadow-lg hover:shadow-xl cursor-pointer"
            >
              {loading ? 'Submitting...' : 'Send form for application'}
            </button>
          </div>

          <p className="text-center text-sm text-gray-600 mt-6">
            Need help? Contact us at <Link href="mailto:info@bentechrw.com" className="text-indigo-600 hover:underline">info@bentechrw.com</Link> or call <Link href='tel:+250782643272'>+250 782 643 272</Link>
          </p>
        </form>
      </div>
    </div>
  );
}