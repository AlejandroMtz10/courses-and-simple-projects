import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle';
import { IoLogoGameControllerB } from "react-icons/io";
import './Navbar.css'; // Import the CSS file for Navbar styles

function Navbar() {
    return (
        <nav className="bg-gray-900 dark:bg-gray-900 p-4">
            <div className="flex justify-between items-center px-4 mx-auto">
                <ul className="hidden sm:flex gap-x-6">
                    <Link to="/" className="text-white text-4xl font-bold"><IoLogoGameControllerB /></Link>
                    <Link to="/videogames"><li className="font-bold text-2xl text-white hover:text-green-500 hover:underline">Videogames</li></Link>
                    <Link to="/consoles"><li className="font-bold text-2xl text-white hover:text-green-500 hover:underline">Consoles</li></Link>
                    <Link to="/clasifications"><li className="font-bold text-2xl text-white hover:text-green-500 hover:underline">ESRB</li></Link>
                </ul>
                <div>
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;