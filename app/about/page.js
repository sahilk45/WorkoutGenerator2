import React from 'react';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import Link from 'next/link';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main About Section */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-[#00df82] mb-8">About PowerHouse</h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Welcome to PowerHouse, your ultimate destination for personalized fitness solutions. 
            We believe in making fitness accessible, enjoyable, and effective for everyone, 
            regardless of their fitness level or experience.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Our AI-powered workout generator creates customized fitness plans tailored to your 
            specific goals, whether you're looking to build muscle, lose weight, or improve 
            your overall fitness level.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[#03624c]/10 p-8 rounded-lg border border-[#03624c]">
            <h2 className="text-2xl font-bold text-[#00df82] mb-4">Our Mission</h2>
            <p className="text-gray-300">
              To empower individuals on their fitness journey by providing intelligent, 
              personalized workout solutions that adapt to their needs and progress.
            </p>
          </div>
          <div className="bg-[#03624c]/10 p-8 rounded-lg border border-[#03624c]">
            <h2 className="text-2xl font-bold text-[#00df82] mb-4">Our Vision</h2>
            <p className="text-gray-300">
              To revolutionize the way people approach fitness by making expert-level 
              workout planning accessible to everyone through technology.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-[#03624c]/10 p-8 rounded-lg border border-[#03624c]">
          <h2 className="text-2xl font-bold text-[#00df82] mb-6">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <FiPhone className="text-[#00df82]" />
              <span className="text-gray-300">+91 6205146659</span>
            </div>
            <div className="flex items-center space-x-3">
              <FiMail className="text-[#00df82]" />
              <a href="mailto:priyanshu82711@gmail.com" className="text-gray-300 hover:text-[#00df82]">
                priyanshu82711@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <FiMapPin className="text-[#00df82]" />
              <a 
                href="https://maps.app.goo.gl/1QoTfRcwEokrs9D87"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#00df82]"
              >
                UIET, Panjab University, Chandigarh - 160036
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <FiClock className="text-[#00df82]" />
              <span className="text-gray-300">
                Working Hours: Monday - Saturday (9:00 AM - 6:00 PM)
              </span>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-[#00df82] mb-6">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#03624c]/10 p-6 rounded-lg border border-[#03624c]">
              <h3 className="text-xl font-bold text-[#00df82] mb-2">Development Team</h3>
              <p className="text-gray-300">
                Our skilled developers work tirelessly to create and maintain the intelligent 
                workout generation system that powers PowerHouse.
              </p>
            </div>
            <div className="bg-[#03624c]/10 p-6 rounded-lg border border-[#03624c]">
              <h3 className="text-xl font-bold text-[#00df82] mb-2">Fitness Experts</h3>
              <p className="text-gray-300">
                Certified trainers and fitness professionals who ensure the quality and 
                effectiveness of our workout programs.
              </p>
            </div>
            <div className="bg-[#03624c]/10 p-6 rounded-lg border border-[#03624c]">
              <h3 className="text-xl font-bold text-[#00df82] mb-2">Support Team</h3>
              <p className="text-gray-300">
                Dedicated support staff ready to assist you with any questions or concerns 
                about your fitness journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;