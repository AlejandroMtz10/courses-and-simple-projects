import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { IoMdAddCircle } from "react-icons/io";
import ListConsoles from '../../components/ListConsoles';
import FormAddConsole from '../../components/FormAddConsole';
import EditConsoleModal from '../../components/EditConsoleModal';
import DeleteConsole from '../../components/DeleteConsole';

function Consoles() {
    const [isFormOpen, setIsFormOpen] = useState(false);
    
    // 1. Move the state variables to the Consoles component
    const [consoles, setConsoles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedConsole, setSelectedConsole] = useState(null);

    // 2. Function to fetch consoles from the API
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
    //Open modal to edit a console
    const handleEditClick = (console) => {
        setSelectedConsole(console);
        setEditModalOpen(true);
    };

    // Save the edited console
    const handleUpdateConsole = async (id, updatedData) => {
        try {
            await axios.put(`http://localhost:8080/api/consoles/updateConsole/${id}`, updatedData);
            toast.success("Consola actualizada correctamente");
            setEditModalOpen(false);
            fetchConsoles();
        } catch (err) {
            toast.error("Error al actualizar consola");
            console.error(err);
        }
    };


    // 3. Upload the consoles when the component mounts
    useEffect(() => {
        fetchConsoles();
    }, []);

    // This function will be called when the form is submitted
    const handleSave = () => {
        toast.success("Console registered successfully!");
        fetchConsoles();
    };

    // Open modal to delete a console
    const handleDeleteClick = (console) => {
        setSelectedConsole(console);
        setDeleteModalOpen(true);
    };

    // Confirm deletion of a console
    const handleConfirmDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/consoles/deleteConsole/${id}`);
            toast.success("Consola eliminada");
            setDeleteModalOpen(false);
            fetchConsoles();
        } catch (err) {
            toast.error("Error al eliminar consola");
            console.error(err);
        }
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
                    onEdit={handleEditClick}
                    onDelete={handleDeleteClick}
                />

                <EditConsoleModal
                    isOpen={editModalOpen}
                    onClose={() => setEditModalOpen(false)}
                    onSave={handleUpdateConsole}
                    consoleToEdit={selectedConsole}
                />

                <DeleteConsole
                    isOpen={deleteModalOpen}
                    onClose={() => setDeleteModalOpen(false)}
                    onConfirm={handleConfirmDelete}
                    consoleToDelete={selectedConsole}
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