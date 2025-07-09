// En FormEditGame.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function FormEditGame({ isOpen, onClose, game, onUpdate }) {
    const [form, setForm] = useState({
        price: 0,
        historyCompleted: 0,
        gameCompleted: false,
    });

    useEffect(() => {
        if (game) {
            setForm({
                price: game.price,
                historyCompleted: game.historyCompleted,
                gameCompleted: game.gameCompleted,
            });
        }
    }, [game]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (form.price < 0 || form.historyCompleted < 0 || form.historyCompleted > 100) { // <-- Usar historyCompleted
            toast.error("Please enter valid values.");
            return;
        }

        // Ya hiciste una buena verificación, pero la dejo por si acaso
        if (!game || typeof game.idVideogame === 'undefined') {
            console.error("Error: game.idVideogame is undefined. Cannot update game.");
            toast.error("Could not find game ID. Please try again.");
            return;
        }

        try {
            await axios.put(`http://localhost:8080/api/videogames/updateVideogame/${game.idVideogame}`, {
                price: parseFloat(form.price),
                historyCompleted: parseFloat(form.historyCompleted), 
                gameCompleted: form.gameCompleted
            });

            toast.success("Game updated successfully");
            onUpdate();
            onClose();
        } catch (err) {
            console.error("Error updating game:", err);
            toast.error("Failed to update game");
        }
    };

    if (!isOpen || !game) return null;

    return (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50">
            <div className="bg-gray-950 p-6 rounded-lg w-full max-w-md shadow-xl text-white">
                <h2 className="text-xl font-bold mb-4">Edit Videogame</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block">Price</label>
                        <input
                            type="number"
                            step="0.01"
                            name="price"
                            value={form.price}
                            onChange={handleChange}
                            className="w-full p-2 rounded bg-gray-700"
                        />
                    </div>
                    <div>
                        <label className="block">History Completed (%)</label>
                        <input
                            type="number"
                            name="historyCompleted"
                            value={form.historyCompleted}
                            onChange={handleChange}
                            className="w-full p-2 rounded bg-gray-700"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="gameCompleted"
                            checked={form.gameCompleted}
                            onChange={handleChange}
                        />
                        <label>Game Completed</label>
                    </div>
                    <div className="flex justify-end gap-2">
                        <button type="button" onClick={onClose} className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded">
                            Cancel
                        </button>
                        <button type="submit" className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormEditGame;