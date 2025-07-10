import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBinFill } from "react-icons/ri";

// TableGames component receives videogames list and action handlers as props
function TableGames({ videogames, onEdit, onDelete }) {

    const [selectedConsole, setSelectedConsole] = useState("");
    const [selectedEsrb, setSelectedEsrb] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const [consoles, setConsoles] = useState([]);
    const [clasifications, setClasifications] = useState([]);

    // Load filter data (consoles and ESRB) on mount
    useEffect(() => {
        const fetchFilterOptions = async () => {
            try {
                const [consolesRes, clasificationsRes] = await Promise.all([
                    axios.get("http://localhost:8080/api/consoles/consoles"),
                    axios.get("http://localhost:8080/api/ESRB/clasifications")
                ]);
                setConsoles(consolesRes.data);
                setClasifications(clasificationsRes.data);
            } catch (error) {
                console.error("Error fetching filter options:", error);
            }
        };
        fetchFilterOptions();
    }, []);

    // Filter videogames based on selected filters and search term
    const filteredVideogames = videogames.filter(game => {
        if (selectedConsole && game.consoleName !== selectedConsole) return false;
        if (selectedEsrb && game.esrbClasification !== selectedEsrb) return false;
        if (searchTerm) return game.videogame.toLowerCase().includes(searchTerm.toLowerCase());
        return true;
    });

    return (
        <div className="p-2">
            <div className="container mx-auto">

                {/* Filters */}
                <div className="mb-4 p-4 bg-gray-950 rounded-lg shadow-lg flex flex-col md:flex-row gap-4 items-center justify-between text-white">
                    <div className="flex flex-col w-full md:w-1/3">
                        <label htmlFor="console-filter" className="mb-1 text-sm font-medium">Filter by Console:</label>
                        <select
                            id="console-filter"
                            className="p-2 border rounded-md bg-gray-700 text-white focus:ring-blue-500 focus:border-blue-500"
                            value={selectedConsole}
                            onChange={(e) => setSelectedConsole(e.target.value)}
                        >
                            <option value="">All Consoles</option>
                            {consoles.map(c => (
                                <option key={c.id_console} value={c.console}>
                                    {c.console}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex flex-col w-full md:w-1/3">
                        <label htmlFor="esrb-filter" className="mb-1 text-sm font-medium">Filter by ESRB:</label>
                        <select
                            id="esrb-filter"
                            className="p-2 border rounded-md bg-gray-700 text-white focus:ring-blue-500 focus:border-blue-500"
                            value={selectedEsrb}
                            onChange={(e) => setSelectedEsrb(e.target.value)}
                        >
                            <option value="">ESRB</option>
                            {clasifications.map(c => (
                                <option key={c.id_clasification} value={c.clasification}>
                                    {c.symbol} - {c.clasification}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex flex-col w-full md:w-1/3">
                        <label htmlFor="game-search" className="mb-1 text-sm font-medium">Search by Game Name:</label>
                        <input
                            id="game-search"
                            type="text"
                            placeholder="Enter game name..."
                            className="p-2 border rounded-md bg-gray-700 text-white focus:ring-blue-500 focus:border-blue-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border-double border-table-border text-table-text">
                        <thead className="bg-table-header-bg bg-blue-600">
                            <tr className="text-xl text-center">
                                <th className="px-4 py-2 border border-table-border">Folio</th>
                                <th className="px-4 py-2 border border-table-border">Game</th>
                                <th className="px-4 py-2 border border-table-border">Console</th>
                                <th className="px-4 py-2 border border-table-border">ESRB</th>
                                <th className="px-4 py-2 border border-table-border">Price</th>
                                <th className="px-4 py-2 border border-table-border">History</th>
                                <th className="px-4 py-2 border border-table-border">100%</th>
                                <th className="px-4 py-2 border border-table-border">Options</th>
                            </tr>
                        </thead>
                        <tbody className="bg-table-bg bg-blue-400">
                            {filteredVideogames.length > 0 ? (
                                filteredVideogames.map((game) => (
                                    <tr key={game.id} className="hover:bg-blue-300 text-lg">
                                        <td className="px-4 py-2 border border-table-border text-center">{game.id}</td>
                                        <td className="px-4 py-2 border border-table-border text-start">{game.videogame}</td>
                                        <td className="px-4 py-2 border border-table-border text-center">{game.consoleName}</td>
                                        <td className="px-4 py-2 border border-table-border text-center">{game.esrbSymbol} - {game.esrbClasification}</td>
                                        <td className="px-4 py-2 border border-table-border text-center">
                                            {game.price === 0 ? "Free" : `$${game.price.toFixed(2)}`}
                                        </td>
                                        <td className="px-4 py-2 border border-table-border text-center">{game.historyCompleted} %</td>
                                        <td className="px-4 py-2 border border-table-border text-center">
                                            {game.gameCompleted ? "✔️" : "❌"}
                                        </td>
                                        <td className="px-4 py-2 border border-table-border text-center">
                                            <div className="gap-2 flex justify-center">
                                                <button
                                                    onClick={() => onEdit(game)}
                                                    className="flex gap-2 bg-amber-400 hover:bg-amber-300 text-white hover:text-black font-bold py-1 px-3 rounded"
                                                >
                                                    <FiEdit3 className="text-2xl"/>
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() => onDelete(game.id)}
                                                    className="flex gap-2 bg-red-500 hover:bg-red-700 text-white hover:text-black font-bold py-1 px-3 rounded"
                                                >
                                                    <RiDeleteBinFill className="text-2xl" />
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="8" className="px-4 py-4 text-center text-gray-500">
                                        No videogames found matching your criteria.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default TableGames;