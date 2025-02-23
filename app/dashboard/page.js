"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { FiActivity, FiUser, FiBarChart } from "react-icons/fi";
import { GiWeight, GiBodyHeight, GiCalendar } from "react-icons/gi";

export default function Dashboard() {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [age, setAge] = useState("");
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleGenerate = async () => {
        setLoading(true);
        const res = await fetch("/api/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ height: parseFloat(height), weight: parseFloat(weight),age:parseFloat(age) })
        });

        const result = await res.json();
        setData(result);
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-black text-white p-4 md:p-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-7xl mx-auto space-y-8"
            >
                {/* Header */}
                <h1 className="text-4xl font-bold bg-gradient-to-r from-[#00df82] to-[#03624c] bg-clip-text text-transparent">
                    Fitness Analysis Dashboard
                </h1>

                {/* Input Grid */}
                <motion.div 
                    className="grid md:grid-cols-3 gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    {/* Height Input */}
                    <div className="bg-black/50 backdrop-blur-sm p-6 rounded-2xl border border-[#00df82]/20">
                        <div className="flex items-center gap-3 mb-4">
                            <GiBodyHeight className="text-[#00df82]" size={24} />
                            <label className="text-lg font-medium">Height</label>
                        </div>
                        <input 
                            type="number" 
                            placeholder="Height in cm" 
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            className="w-full bg-black/30 border border-[#00df82]/20 rounded-lg p-3 focus:ring-2 focus:ring-[#00df82]/50 transition-all"
                        />
                    </div>

                    {/* Weight Input */}
                    <div className="bg-black/50 backdrop-blur-sm p-6 rounded-2xl border border-[#00df82]/20">
                        <div className="flex items-center gap-3 mb-4">
                            <GiWeight className="text-[#00df82]" size={24} />
                            <label className="text-lg font-medium">Weight</label>
                        </div>
                        <input 
                            type="number" 
                            placeholder="Weight in kg" 
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            className="w-full bg-black/30 border border-[#00df82]/20 rounded-lg p-3 focus:ring-2 focus:ring-[#00df82]/50 transition-all"
                        />
                    </div>

                    {/* Age Input */}
                    <div className="bg-black/50 backdrop-blur-sm p-6 rounded-2xl border border-[#00df82]/20">
                        <div className="flex items-center gap-3 mb-4">
                            <GiCalendar className="text-[#00df82]" size={24} />
                            <label className="text-lg font-medium">Age</label>
                        </div>
                        <input 
                            type="number" 
                            placeholder="Age in years" 
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            className="w-full bg-black/30 border border-[#00df82]/20 rounded-lg p-3 focus:ring-2 focus:ring-[#00df82]/50 transition-all"
                        />
                    </div>
                </motion.div>

                {/* Generate Button */}
                <motion.button
                    onClick={handleGenerate}
                    disabled={loading}
                    className="w-full px-6 py-4 bg-gradient-to-r from-[#03624c] to-[#00df82] hover:from-[#00df82] hover:to-[#03624c] rounded-xl transition-all duration-300 flex items-center justify-center gap-3 font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    {loading ? (
                        <>
                            <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                            <span>Analyzing...</span>
                        </>
                    ) : (
                        <>
                            <FiActivity size={20} />
                            <span>Generate Fitness Plan</span>
                        </>
                    )}
                </motion.button>

                {/* Results Section */}
                {data && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-black/50 backdrop-blur-sm p-6 rounded-2xl border border-[#00df82]/20"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <FiBarChart className="text-[#00df82]" size={24} />
                            <h2 className="text-2xl font-bold">Your Personalized Plan</h2>
                        </div>

                        <div className="grid gap-6">
                            {/* BMI Result */}
                            <div className="bg-black/30 p-4 rounded-xl">
                                <div className="flex items-center gap-2 mb-2">
                                    <FiUser className="text-[#00df82]" size={20} />
                                    <h3 className="font-bold text-[#00df82]">BMI Score: {data.bmi}</h3>
                                </div>
                                <p className="text-gray-300">Category: {data.category}</p>
                            </div>

                            {/* Recommendations */}
                            <div className="bg-black/30 p-4 rounded-xl prose prose-invert max-w-none">
                                <pre className="whitespace-pre-wrap font-sans text-gray-300">
                                    {data.recommendations}
                                </pre>
                            </div>
                        </div>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
}