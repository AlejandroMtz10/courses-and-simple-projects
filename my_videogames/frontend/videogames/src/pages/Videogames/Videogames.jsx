import React, { useEffect, useState } from 'react';
import axios from "axios";
import TableGames from '../../components/TableGames';
import FormAddGame from '../../components/FormAddGame';

function Videogames() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [videogames, setVideogames] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/videogames/videogames/details")
            .then(res => setVideogames(res.data))
            .catch(err => console.error("Error loading videogames:", err));
    }, []);

    const handleSave = () => {
        axios.get("http://localhost:8080/api/videogames/videogames/details")
        .then(res => setVideogames(res.data))
        .catch(err => console.error("Error reloading videogames:", err));
    };


    return (
        <div className="container mx-auto py-6">
            <h1 className="text-4xl font-bold text-center mb-4">Videogames</h1>
            <div className="flex justify-end mb-4">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded"
                >
                    New Game
                </button>
            </div>
            <div>
                <TableGames videogames={videogames} />
            </div>

            <FormAddGame
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSave}
            />
        </div>
    );
}

export default Videogames;