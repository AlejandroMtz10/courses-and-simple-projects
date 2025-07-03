import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import './layout.css'

function Layout() {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Navbar />
            <main className="flex-grow p-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
