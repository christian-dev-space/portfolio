import { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import userImage from "./images/user.png"; // Adjust the path if needed
import { FaGraduationCap, FaBriefcase, FaCode, FaPalette } from "react-icons/fa";

export default function PortfolioLayout() {
    const [text, setText] = useState("");
    const words = ["Developer", "Designer", "Creator"];
    let index = 0;

    useEffect(() => {
        const interval = setInterval(() => {
            setText(words[index]);
            index = (index + 1) % words.length;
        }, 2000);
        return () => clearInterval(interval);
    }, []);
    const [activeTab, setActiveTab] = useState("Creative");

    const tabContent = {
        Background: "I have a strong foundation in software development, having studied Computer Science and worked on various projects.",
        Experience: "With years of experience in front-end and back-end development, I’ve built scalable web applications for different industries.",
        Technical: "Proficient in JavaScript, React, Node.js, and UI/UX design principles, always exploring new technologies.",
        Creative: "I believe websites should be both useful and fun. I enjoy combining clean design with creative touches to make something unique.",
    };
    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center relative p-4 overflow-y-auto">
            {/* Portfolio Section */}
            <section className="h-screen flex flex-col items-center justify-center">
                {/* Navbar */}
                <div className="absolute top-4 w-full flex justify-between items-center px-10">
                    <div className="flex space-x-4">
                        <FaFacebook className="text-xl" />
                        <FaTwitter className="text-xl" />
                        <FaInstagram className="text-xl" />
                        <FaLinkedin className="text-xl" />
                    </div>
                    <button className="flex items-center space-x-2 border px-4 py-2 rounded-lg hover:bg-gray-700">
                        <MdEmail /> <span>Get in Touch</span>
                    </button>
                </div>

                {/* Profile Image */}
                <div className="relative flex justify-center mt-10">
                    <div className="w-40 h-40 bg-cover bg-center rounded-lg" style={{
                        backgroundImage: `url(${userImage})`,
                    }}></div>
                </div>

                {/* Title and Dynamic Text */}
                <h2 className="mt-4 text-lg tracking-wide">WEB DEVELOPER</h2>
                <motion.h1 className="text-4xl font-bold" animate={{ opacity: [0, 1] }} transition={{ duration: 1 }}>
                    &lt; {text} /&gt;
                </motion.h1>

                {/* Navigation Buttons */}
                <div className="mt-8 flex space-x-4">
                    <button className="flex items-center space-x-2 px-6 py-3 rounded-full border border-gray-500 bg-gray-800 text-gray-300 shadow-md hover:bg-gray-700 transition">
                        <span>👋</span>
                        <span>About</span>
                    </button>
                    <button className="flex items-center space-x-2 px-6 py-3 rounded-full border border-gray-500 bg-gray-800 text-gray-300 shadow-md hover:bg-gray-700 transition">
                        <span>💼</span>
                        <span>Experience</span>
                    </button>
                    <button className="flex items-center space-x-2 px-6 py-3 rounded-full border border-gray-500 bg-gray-800 text-gray-300 shadow-md hover:bg-gray-700 transition">
                        <span>⚡</span>
                        <span>Skills</span>
                    </button>
                    <button className="flex items-center space-x-2 px-6 py-3 rounded-full border border-gray-500 bg-gray-800 text-gray-300 shadow-md hover:bg-gray-700 transition">
                        <span>🚀</span>
                        <span>Projects</span>
                    </button>
                </div>
            </section>

            {/* About Section - New Design */}
            <section id="about" className="h-screen flex flex-col items-center justify-center text-center text-white px-6 py-10">
            {/* Title */}
            <h2 className="text-3xl font-bold text-green-400 uppercase tracking-wider mb-6">
                About
            </h2>

            {/* Main Flex Container (Profile Image + Tabs + Content) */}
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center space-x-6 w-full max-w-4xl">
                {/* Hexagonal Profile Picture */}
                <div className="relative">
                    <div
                        className="w-48 h-48 overflow-hidden bg-cover bg-center"
                        style={{
                            clipPath: "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
                            backgroundImage: `url(${userImage})`,
                        }}
                    ></div>
                </div>

                {/* Right Section (Tabs + Content) */}
                <div className="flex flex-col w-full max-w-2xl">
                    {/* Subtitle */}
                    <h3 className="text-2xl font-semibold text-green-300 underline decoration-green-400 mb-4">
                        Here's a little about me
                    </h3>

                    {/* Tab Navigation */}
                    <div className="flex space-x-4 bg-[#1e3a3f] p-2 rounded-full justify-center">
                        {Object.keys(tabContent).map((tab) => (
                            <button
                                key={tab}
                                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition ${
                                    activeTab === tab ? "bg-green-400 text-black" : "bg-gray-700 text-gray-300"
                                }`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab === "Background" && <FaGraduationCap className="mr-2" />}
                                {tab === "Experience" && <FaBriefcase className="mr-2" />}
                                {tab === "Technical" && <FaCode className="mr-2" />}
                                {tab === "Creative" && <FaPalette className="mr-2" />}
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Content Box with Glow Effect */}
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mt-6 p-6 w-full bg-[#23383e] text-green-300 rounded-lg shadow-lg border border-green-500 relative"
                    >
                        {tabContent[activeTab]}
                        <div className="absolute bottom-2 right-2 text-green-400 text-sm">↻</div>
                    </motion.div>
                </div>
            </div>
        </section>


        </div>
    );
}
