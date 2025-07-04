import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import './layout.css'

function Layout() {
    return (
        <div className="min-h-screen flex flex-col justify-between bg-primary dark:bg-primary-dark transition-colors duration-300">
            <Navbar />
            <main className="grow p-4">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
export default Layout;
