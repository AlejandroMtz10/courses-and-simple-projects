import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { IoMdAddCircle } from "react-icons/io";
import ListConsoles from '../../components/ListConsoles';
import FormAddConsole from '../../components/FormAddConsole';

function Consoles() {
    const [isFormOpen, setIsFormOpen] = useState(false);
    
    // 1. Mover el estado de los datos al componente padre
    const [consoles, setConsoles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // 2. Crear la función para cargar los datos
    const fetchConsoles = async () => {
        try {
            setLoading(true);
            const response = await axios.get("http://localhost:8080/api/consoles/consoles");
            setConsoles(response.data);
            setLoading(false);
        } catch (err) {
            console.error("Error fetching consoles:", err);
            setError("Failed to load consoles. Please try again later.");
            setLoading(false);
        }
    };
    
    // 3. Cargar los datos la primera vez
    useEffect(() => {
        fetchConsoles();
    }, []);

    // Esta función se llama cuando se cierra el modal después de un registro exitoso
    const handleSave = () => {
        toast.success("Console registered successfully!");
        fetchConsoles();
    };

    return (
        <div className="lead p-6 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-4">Consoles</h1>
            <div className="flex justify-end mb-4">
                <button
                    onClick={() => setIsFormOpen(true)}
                    className="flex gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-4 py-4 rounded"
                >
                    <IoMdAddCircle className='text-2xl'/>
                    New Console
                </button>
            </div>
            <div>
                <ListConsoles 
                    consoles={consoles}
                    loading={loading}
                    error={error}
                />
            </div>

            <FormAddConsole
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                onSave={handleSave}
            />
        </div>
    );
}

export default Consoles;