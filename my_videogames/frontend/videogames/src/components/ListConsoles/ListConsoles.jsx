import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

// ListConsoles component to display the list of consoles
function ListConsoles({ consoles, loading, error, onEdit, onDelete }) {
    // helper functions to call the passed-in handlers
    const handleEdit = (id) => {
        if (onEdit) onEdit(id);
    };

    const handleDelete = (id) => {
        if (onDelete) onDelete(id);
    };

    if (loading) {
        return <div className="text-center text-white text-xl">Loading consoles...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500 text-xl">{error}</div>;
    }

    return (
        <div className="p-4 sm:p-6 md:p-8 bg-gray-950 rounded-4xl min-h-screen text-white">
            <div className="max-w-xl mx-auto space-y-4">
                {consoles.length > 0 ? (
                    consoles.map((consoleItem) => (
                        <div
                            key={consoleItem.id_console}
                            className="bg-gray-800 hover:bg-gray-500 rounded-lg p-4 shadow-lg flex items-center justify-between"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0 h-10 w-10 bg-gray-700 rounded-full flex items-center justify-center font-bold text-lg">
                                    {consoleItem.id_console}
                                </div>
                                <div>
                                    <h2 className="text-lg font-semibold">{consoleItem.console}</h2>
                                </div>
                            </div>
                            <div className="flex space-x-2">
                                <button
                                    onClick={() => handleEdit(consoleItem)}
                                    className="p-2 rounded-full text-white bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
                                    aria-label="Edit"
                                >
                                    <FaEdit />
                                </button>
                                <button
                                    onClick={() => handleDelete(consoleItem)}
                                    className="p-2 rounded-full text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                                    aria-label="Delete"
                                >
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center text-gray-500 text-lg p-8">No consoles found.</div>
                )}
            </div>
        </div>
    );
}

export default ListConsoles;