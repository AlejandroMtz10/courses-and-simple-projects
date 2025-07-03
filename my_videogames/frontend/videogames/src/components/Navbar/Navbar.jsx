import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle';

function Navbar() {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="flex justify-between items-center max-w-6xl mx-auto">
                <Link to="/" className="text-white text-lg font-bold">🎮 My Videogames</Link>
                <div className="flex space-x-4">
                    <Link to="/videogames" className="text-white hover:text-yellow-400">Videojuegos</Link>
                    <Link to="/consoles" className="text-white hover:text-yellow-400">Consolas</Link>
                    <Link to="/clasifications" className="text-white hover:text-yellow-400">Clasificaciones ESRB</Link>
                </div>
                <div>
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;