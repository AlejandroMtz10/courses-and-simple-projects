import React from 'react';
import logoDev from '../../assets/pictures/small_logo.webp';
import { FaCode } from "react-icons/fa6";

function Footer() {
    return (
        <footer className="bg-gray-900 py-4 mt-10">
            <div className="flex flex-col items-center">
                <img src={logoDev} alt="Logo" className="w-40 h-auto mb-4" />
                <div className='place-content-center place-items-center flex text-lg gap-2 font-bold'>
                    <FaCode className='text-green-500'/>
                    <h2 className='text-white'>By Alejandro Martinez</h2>
                </div>
                <p className="mt-4 text-base text-white text-center">
                    &copy; {new Date().getFullYear()} All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
