import React from 'react';

function DeleteConsole({ isOpen, onClose, onConfirm, consoleToDelete }) {
    if (!isOpen || !consoleToDelete) return null;

    return (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50">
            <div className="bg-gray-950 text-white p-6 rounded shadow-md w-full max-w-md">
                <h2 className="text-lg font-bold mb-4">¿Eliminar consola?</h2>
                <p className="mb-4">¿Estás seguro de que deseas eliminar <strong>{consoleToDelete.console}</strong>?</p>
                <div className="flex justify-end space-x-2">
                    <button onClick={onClose} className="px-4 py-2 bg-gray-400 hover:bg-gray-600 rounded">Cancelar</button>
                    <button
                        onClick={() => onConfirm(consoleToDelete.id_console)}
                        className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded"
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeleteConsole;
