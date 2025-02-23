"use client";
import React, { useState } from "react";

export default function Info() {
  const [formData, setFormData] = useState({
    age: "",
    height: "",
    weight: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data:", formData);
    alert(`Submitted! Age: ${formData.age}, Height: ${formData.height} cm, Weight: ${formData.weight} kg`);
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-8">Enter Your Details</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-xl shadow-lg w-96 flex flex-col space-y-6"
      >
        {/* Age Input */}
        <label className="flex flex-col">
          <span className="text-lg font-semibold">Age</span>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter your age"
            className="p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 mt-1"
            required
          />
        </label>

        {/* Height Input */}
        <label className="flex flex-col">
          <span className="text-lg font-semibold">Height (cm)</span>
          <input
            type="number"
            name="height"
            value={formData.height}
            onChange={handleChange}
            placeholder="Enter your height in cm"
            className="p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 mt-1"
            required
          />
        </label>

        {/* Weight Input */}
        <label className="flex flex-col">
          <span className="text-lg font-semibold">Weight (kg)</span>
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            placeholder="Enter your weight in kg"
            className="p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 mt-1"
            required
          />
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gray-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-gray-700 transition-all duration-300"
        >
          Next
        </button>
      </form>
    </div>
  );
}