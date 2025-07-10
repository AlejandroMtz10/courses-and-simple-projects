import React from "react";
import { MdCancel } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";


function ConfirmModal({ isOpen, title, message, onConfirm, onCancel }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-gray-950 p-6 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-xl font-bold mb-4 text-red-600">{title}</h2>
                <p className="mb-6 text-white">{message}</p>
                <div className="flex justify-end gap-4">
                    <button
                        onClick={onCancel}
                        className="flex content-center gap-1 font-bold bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                    >
                        <MdCancel className="text-xl"/>
                        No
                    </button>
                    <button
                        onClick={onConfirm}
                        className="flex content-center gap-1 font-bold bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                    >
                        <GiConfirmed className="text-xl"/>
                        Yes, Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmModal;