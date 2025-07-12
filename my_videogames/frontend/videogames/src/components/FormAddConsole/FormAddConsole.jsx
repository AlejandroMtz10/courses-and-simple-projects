import { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import { MdCancel } from "react-icons/md";
import { CiSaveDown1 } from "react-icons/ci";

function FormAddConsole({ isOpen, onClose, onSave }) {
    const [form, setForm] = useState({
        console: "",
        manufacturer: ""
    });

    const resetForm = () => {
        setForm({
            console: "",
            manufacturer: ""
        });
    };

    const handleCancel = () => {
        resetForm();
        onClose();
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();

        if (!form.console) {
            toast.error("Please complete all fields correctly.");
            return;
        }

        try {
            await axios.post("http://localhost:8080/api/consoles/console", form);
            onSave();
            resetForm();
            onClose();
        } catch (err) {
            console.error("Error creating console:", err);
            toast.error("Error registering console.");
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50">
            <div className="bg-gray-950 p-6 rounded-lg w-full max-w-md shadow-xl text-white">
                <h2 className="text-xl font-semibold mb-4">Register New Console</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="console" className="block text-lg py-2">Console:</label>
                        <input
                            type="text"
                            id="console"
                            name="console"
                            placeholder="Enter console name"
                            value={form.console}
                            onChange={handleChange}
                            className="w-full p-2 border rounded bg-gray-700 text-white"
                        />
                    </div>
                    <div className="flex justify-end gap-2">
                        <button type="button" onClick={handleCancel} className="flex gap-1 font-bold content-center px-4 py-2 bg-red-600 text-white rounded hover:bg-red-400">
                            <MdCancel className="text-2xl" />
                            Cancel
                        </button>
                        <button type="submit" className="flex gap-1 font-bold content-center px-4 py-2 bg-green-600 text-white rounded hover:bg-green-400">
                            <CiSaveDown1 className="text-2xl" />
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormAddConsole;