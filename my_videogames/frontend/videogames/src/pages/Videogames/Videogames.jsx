import React, { useEffect, useState } from 'react';
import axios from "axios";
import { toast } from 'react-toastify';
import TableGames from '../../components/TableGames';
import FormAddGame from '../../components/FormAddGame';
import ConfirmModal from '../../components/ConfirmModal';
import { IoMdAddCircle } from "react-icons/io";

function Videogames() {
    const [videogames, setVideogames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [gameToDelete, setGameToDelete] = useState(null);

    const [isFormOpen, setIsFormOpen] = useState(false);       // Form add game modal state
    const [isConfirmOpen, setIsConfirmOpen] = useState(false); // Modal confirm delete state


    // Fetch videogame list from API
    const fetchVideogames = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await axios.get("http://localhost:8080/api/videogames/videogames/details");
            setVideogames(res.data);
        } catch (err) {
            console.error("Error loading videogames:", err);
            setError("Error loading videogames. Please try again.");
            toast.error("Error loading videogames");
        } finally {
            setLoading(false);
        }
    };

    // Fetch data on component mount
    useEffect(() => {
        fetchVideogames();
    }, []);

    // After saving a game, refresh the list
    const handleSave = () => {
        fetchVideogames();
        toast.success(
            "Game registered successfully "
        );
    };

    // Handle editing (feature pending)
    const handleEditGame = (gameToEdit) => {
        console.log("Editing game:", gameToEdit);
        toast.info(`Edit functionality for ${gameToEdit.videogame} coming soon!`);
    };

    // Handle game deletion
    const handleDeleteGame = (gameId) => {
        setGameToDelete(gameId);
        setIsConfirmOpen(true);
    };

    // Confirm deletion of a game
    const confirmDelete = async () => {
        try {
            await axios.delete(`http://localhost:8080/api/videogames/deleteVideogame/${gameToDelete}`);
            setVideogames(prev => prev.filter(game => game.id !== gameToDelete));
            toast.success("Game deleted successfully");
        } catch (err) {
            console.error("Error deleting game:", err);
            toast.error("Error deleting game");
        } finally {
            setIsConfirmOpen(false);
            setGameToDelete(null);
        }
    };

    // Cancel deletion
    const cancelDelete = () => {
        setIsConfirmOpen(false);
        setGameToDelete(null);
    };

    // Show loading or error state
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
                    onClick={() => setIsFormOpen(true)}
                    className="flex gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-4 py-4 rounded"
                >
                    <IoMdAddCircle className='text-2xl'/>
                    New Game
                </button>
            </div>

            <div>
                <TableGames
                    videogames={videogames}
                    onEdit={handleEditGame}
                    onDelete={handleDeleteGame}
                />
            </div>

            <ConfirmModal
                isOpen={isConfirmOpen}
                title="Confirm Deletion"
                message="Are you sure you want to delete this game?"
                onConfirm={confirmDelete}
                onCancel={cancelDelete}
            />

            <FormAddGame
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                onSave={handleSave}
            />

        </div>
    );
}

export default Videogames;