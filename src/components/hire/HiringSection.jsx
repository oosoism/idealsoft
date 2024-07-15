import React, { useState } from 'react';
import { SquareDashedBottomCode } from 'lucide-react';
import { Database } from 'lucide-react';
import { TvMinimalPlay } from 'lucide-react';
import { PenTool } from 'lucide-react';
import { ScanEye } from 'lucide-react';
import { ClipboardPenLine } from 'lucide-react';

const HiringSection = () => {
  const professionals = [
    {
      id: 1,
      title: 'Graphic Designer',
      icon:  <PenTool  color='#ff005a' size={32} strokeWidth='1.5'/>,
      prices: { hourly: 450, daily: 900, weekly: 6000 },
    },
    {
      id: 2,
      title: 'Frontend Developer',
      icon:  <SquareDashedBottomCode color='#ff005a' size={32} strokeWidth='1.5'/>,
      prices: { hourly: 500, daily: 1000, weekly: 7000 },
    },
    {
      id: 3,
      title: 'SEO Expert',
      icon: <ScanEye  color='#ff005a' size={32} strokeWidth='1.5'/>,
      prices: { hourly: 350, daily: 800, weekly: 5000 },
    },
    {
      id: 4,
      title: 'Content Writer',
      icon:  <ClipboardPenLine  color='#ff005a' size={32} strokeWidth='1.5'/>,
      prices: { hourly: 400, daily: 750, weekly: 5500 },
    },
    {
      id: 5,
      title: 'Digital Marketer',
      icon:  <TvMinimalPlay  color='#ff005a' size={32} strokeWidth='1.5'/>,
      prices: { hourly: 425, daily: 850, weekly: 6000 },
    },
    {
      id: 6,
      title: 'Backend Developer',
      icon:  <Database  color='#ff005a' size={32} strokeWidth='1.5'/>,
      prices: { hourly: 600, daily: 1200, weekly: 8000 },
    },
  ];

  return (
    <div className="hiring-section p-8 md:p-16 bg-gray-100">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Hire Professionals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {professionals.map((professional) => (
            <Card key={professional.id} professional={professional} />
          ))}
        </div>
      </div>
      <div className="mt-16 p-8 bg-white">
        <h3 className="text-3xl font-bold mb-4 text-gray-800">Why Choose Our Services?</h3>
        <p className="mb-4 text-gray-600">
          We offer a range of professionals to meet your needs. Whether you need a graphic designer, web developer, SEO expert, content writer, or digital marketer, we have the right person for you.
        </p>
        <h4 className="text-2xl font-bold mb-2 text-gray-800">Benefits:</h4>
        <ul className="list-disc list-inside mb-4 text-gray-600">
          <li>High-quality work from experienced professionals</li>
          <li>Flexible hiring options (hourly, daily, weekly)</li>
          <li>Competitive pricing</li>
          <li>Dedicated support</li>
        </ul>
        <h4 className="text-2xl font-bold mb-2 text-gray-800">How We Can Help:</h4>
        <p className="mb-4 text-gray-600">
          Our team can assist you in achieving your business goals by providing top-notch services tailored to your specific requirements. From website development to digital marketing, we've got you covered.
        </p>
        <h4 className="text-2xl font-bold mb-2 text-gray-800">Terms and Conditions:</h4>
        <p className="mb-4 text-gray-600">
          By hiring our professionals, you agree to the following terms and conditions:
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-600">
          <li>Provide detailed documentation about the project, clearly explaining all requirements.</li>
          <li>No changes can be made after the final edit is delivered.</li>
          <li>A contract must be signed before the project is assigned.</li>
        </ul>
        <p className="text-gray-600">
          Please ensure to read these terms thoroughly before proceeding. For more information, contact our support team.
        </p>
      </div>
    </div>
  );
};

const Card = ({ professional }) => {
  const [selectedOption, setSelectedOption] = useState('hourly');
  const price = professional.prices[selectedOption];

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="card bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 ease-in-out hover:scale-105">
      <div className="card-header p-6 flex justify-between items-center">
        <h3 className="title font-bold text-xl mb-2 text-gray-800">{professional.title}</h3>
        <span className="icon text-gray-500 text-3xl">{professional.icon}</span>
      </div>
      <div className="card-body p-6">
        <div className="price text-4xl font-bold mb-6 text-gray-900">₹{price.toLocaleString()}</div>
        <div className="options flex justify-center space-x-4">
          {Object.keys(professional.prices).map((option) => (
            <button
              key={option}
              className={`option-button px-4 py-2 rounded-full text-sm font-medium transition duration-300 ease-in-out ${
                selectedOption === option ? 'bg-[#ff005a] text-white' : 'bg-gray-200 text-gray-700'
              } hover:bg-[#a20038] hover:text-white focus:outline-none`}
              onClick={() => handleOptionChange(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HiringSection;
