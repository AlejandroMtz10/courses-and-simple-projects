import React, { useEffect, useState } from 'react';
import axios from "axios";
import { toast } from 'react-toastify';
import TableGames from '../../components/TableGames';
import FormAddGame from '../../components/FormAddGame';
import { IoMdAddCircle } from "react-icons/io";

function Videogames() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [videogames, setVideogames] = useState([]); // Esta será la lista completa de videojuegos
    const [loading, setLoading] = useState(true); // Nuevo estado para indicar si se están cargando los datos
    const [error, setError] = useState(null); // Nuevo estado para manejar errores de carga

    // Función para cargar los videojuegos desde la API
    const fetchVideogames = async () => {
        setLoading(true);
        setError(null);
        try {
            // Asegúrate que esta URL es la que devuelve los DTOs "joinados"
            const res = await axios.get("http://localhost:8080/api/videogames/videogames/details");
            setVideogames(res.data);
        } catch (err) {
            console.error("Error loading videogames:", err);
            setError("Error loading videogames. Please try again.");
            toast.error("Error loading videogames ❌");
        } finally {
            setLoading(false);
        }
    };

    // Cargar los videojuegos al montar el componente
    useEffect(() => {
        fetchVideogames();
    }, []); // El array vacío asegura que se ejecute solo una vez al montar

    // Función que se llama cuando se guarda un nuevo juego (desde FormAddGame)
    const handleSave = () => {
        fetchVideogames(); // Vuelve a cargar la lista completa para reflejar el nuevo juego
        toast.success("Game registered successfully ✅");
    };

    // --- Funciones para Editar y Eliminar (Pasar a TableGames) ---

    // Función dummy para editar (la implementarás completamente después)
    const handleEditGame = (gameToEdit) => {
        console.log("Editing game:", gameToEdit);
        // Aquí podrías:
        // 1. Abrir un modal de edición (similar a FormAddGame, pero para editar)
        // 2. Pasar `gameToEdit` a ese modal
        // 3. Cuando el modal de edición guarde, llamar a `fetchVideogames()` para actualizar la tabla.
        toast.info(`Edit functionality for ${gameToEdit.videogame} coming soon!`);
    };

    // Función para eliminar un juego
    const handleDeleteGame = async (gameId) => {
        if (window.confirm("Are you sure you want to delete this game?")) {
            try {
                await axios.delete(`http://localhost:8080/api/videogames/deleteVideogame/${gameId}`);
                // Actualiza el estado directamente para evitar otra llamada GET completa si prefieres
                setVideogames(prevGames => prevGames.filter(game => game.idVideogame !== gameId));
                toast.success("Game deleted successfully ✔️");
            } catch (err) {
                console.error("Error deleting game:", err);
                toast.error("Error deleting game ❌");
            }
        }
    };

    // Mostrar estado de carga o error
    if (loading) {
        return <div className="container mx-auto py-6 text-center text-xl text-white">Loading videogames...</div>;
    }

    if (error) {
        return <div className="container mx-auto py-6 text-center text-xl text-red-500">{error}</div>;
    }

    return (
        <div className="container mx-auto py-6">
            <h1 className="text-4xl font-bold text-center mb-4 text-white">Videogames</h1>
            <div className="flex justify-end mb-4">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-4 py-4 rounded"
                >
                    <IoMdAddCircle className='text-2xl'/>
                    New Game
                </button>
            </div>
            <div>
                {/* Pasar la lista completa de videojuegos y las funciones de acción */}
                <TableGames
                    videogames={videogames}
                    onEdit={handleEditGame}
                    onDelete={handleDeleteGame}
                />
            </div>

            <FormAddGame
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSave} // Esto ahora recarga los juegos
            />
        </div>
    );
}

export default Videogames;