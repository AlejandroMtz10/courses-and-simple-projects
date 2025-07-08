import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from 'react-toastify';

function FormAddGame({ isOpen, onClose, onSave }) {
    const [form, setForm] = useState({
        videogame: "",
        id_console: "",
        id_clasification: "",
        price: 0,
        history_completed: 0,
        game_completed: false,
    });

    // Reset form when the modal is closed
    const resetForm = () => {
        setForm({
            videogame: "",
            id_console: "",
            id_clasification: "",
            price: 0,
            history_completed: 0,
            game_completed: false,
        });
    };

    const handleCancel = () => {
        resetForm();        // Reset the form
        onClose();
    };


    const [consoles, setConsoles] = useState([]);
    const [clasifications, setClasifications] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/consoles/consoles").then(res => setConsoles(res.data));
        axios.get("http://localhost:8080/api/ESRB/clasifications").then(res => setClasifications(res.data));
    }, []);

    const handleChange = e => {
        const { name, value, type, checked } = e.target;
        setForm(prev => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();

        // Validate form fields
        if (
            !form.videogame.trim() ||
            !form.id_console ||
            !form.id_clasification ||
            form.price < 0 ||
            form.history_completed < 0 ||
            form.history_completed > 100
        ) {
            toast.error("Please complete all fields correctly.");
            return;
        }

        try {
            const res = await axios.post("http://localhost:8080/api/videogames/videogame", form);
            onSave(res.data);
            resetForm();        // Reset the form after saving
            onClose();          // Close the modal
        } catch (err) {
            console.error("Error creating game:", err);
        }
    };


    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50">
            <div className="bg-gray-950 p-6 rounded-lg w-full max-w-md shadow-xl">
                <h2 className="text-xl font-semibold mb-4 text-white">Register New Videogame</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <label htmlFor="videogame" className="text-lg py-2">Video game: </label>
                    <input
                        type="text"
                        name="videogame"
                        placeholder="Game name"
                        value={form.videogame}
                        onChange={handleChange}
                        className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
                    />
                    <label htmlFor="console" className="text-lg py-2">Console: </label>
                    <select
                        name="id_console"
                        value={form.id_console}
                        onChange={handleChange}
                        className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
                    >
                        <option value="">Select Console</option>
                        {consoles.map(c => (
                        <option key={c.id_console} value={c.id_console}>{c.console}</option>
                        ))}
                    </select>
                    
                    <label htmlFor="classification" className="text-lg py-2">Classification: </label>
                    <select
                        name="id_clasification"
                        value={form.id_clasification}
                        onChange={handleChange}
                        className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
                    >
                        <option value="">Select Clasification</option>
                        {clasifications.map(c => (
                            <option key={c.id_clasification} value={c.id_clasification}>
                                {c.symbol} - {c.clasification}
                            </option>
                        ))}
                    </select>
                    <label htmlFor="price" className="text-lg py-2">Price: </label>
                    <input
                        type="number"
                        step="0.01"
                        name="price"
                        value={form.price}
                        onChange={handleChange}
                        className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
                        placeholder="Price"
                    />
                    <label htmlFor="history" className="text-lg py-2">History completed: </label>
                    <input
                        type="number"
                        step="0.01"
                        name="history_completed"
                        value={form.history_completed}
                        onChange={handleChange}
                        className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
                        placeholder="Completion %"
                    />

                    <label className="flex items-center gap-2 dark:text-white">
                        <input
                        type="checkbox"
                        name="game_completed"
                        checked={form.game_completed}
                        onChange={handleChange}
                        />
                        Game completed
                    </label>

                    <div className="flex justify-end gap-2">
                        <button type="button" onClick={handleCancel} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-400">
                            Cancel
                        </button>
                        <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-400">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormAddGame;
