// components/EsrbCard.jsx
import React from "react";

function EsrbCard({ symbol, clasification, description }) {
    return (
        <div className="bg-[#1e1e1e] text-white p-4 rounded-2xl shadow-lg w-full sm:w-80 md:flex md:flex-row md:items-center md:justify-between md:gap-6 transition-all">
            {/* Symbol */}
            <div className="flex justify-center items-center mb-4 md:mb-0 md:order-2">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center text-black text-2xl font-bold">
                    {symbol}
                </div>
            </div>

            {/* Info */}
            <div className="flex flex-col justify-between md:order-1 flex-grow">
                <h2 className="text-lg font-semibold">{clasification}</h2>
                <p className="text-sm text-gray-300 mt-1">
                    <strong>Description:</strong><br />
                    {description}
                </p>
            </div>
        </div>
    );
}

export default EsrbCard;