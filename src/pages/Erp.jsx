import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import ContactSection from "../components/ContactSection";

const ErpPage = () => {
    

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <Navbar />
            {/* Bannière avec image de fond */}
            <div className="w-full pt-16 pb-10 relative h-72" style={{ backgroundImage: 'url(/images/COMING-SOON-HEADER.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            </div>

            <div className="-translate-y-44 lg:max-w-6xl mx-auto flex flex-col items-center lg:flex-row lg:items-center lg:justify-between px-4 relative z-10">
                <div className="bg-red-5">
                    <img src="/images/USER-PROFILE.png" alt="Dowonou RH Mockup" className="w-full" />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ErpPage; 