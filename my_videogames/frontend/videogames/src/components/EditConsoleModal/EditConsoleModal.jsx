import React, { useState, useEffect } from 'react';

function EditConsoleModal({ isOpen, onClose, onSave, consoleToEdit }) {
    const [consoleName, setConsoleName] = useState('');

    useEffect(() => {
        if (consoleToEdit) {
            setConsoleName(consoleToEdit.console || '');
        }
    }, [consoleToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(consoleToEdit.id_console, { console: consoleName });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50">
            <div className="bg-gray-950 text-white p-6 rounded shadow-md w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">Editar Consola</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={consoleName}
                        onChange={(e) => setConsoleName(e.target.value)}
                        className="w-full p-2 border rounded mb-4"
                        required
                    />
                    <div className="flex justify-end space-x-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
                        >
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditConsoleModal;