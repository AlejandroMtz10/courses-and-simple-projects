import { useEffect, useState } from "react";
import axios from "axios";

function TableGames() {
    const [videogames, setVideogames] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/videogames/videogames/details")
        .then(response => {
            setVideogames(response.data);
        })
        .catch(error => {
            console.error("Error to get the list of videogames:", error);
        });
    }, []);

    return (
        <div className="p-2">
            <div className="container mx-auto">
                <table className="table-auto border-double border-table-border w-auto mx-auto">
                    <thead className="bg-sky-700">
                        <tr className="bg-table-header-bg text-xl text-center">
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
                    <tbody className="bg-blue-600">
                        {videogames.map((game) => (
                        <tr key={game.id_videogame} className="hover:bg-blue-400 text-lg">
                            <td className="px-4 py-2 border border-table-border text-center">{game.id}</td>
                            <td className="px-4 py-2 border border-table-border text-center">{game.videogame}</td>
                            <td className="px-4 py-2 border border-table-border text-center">{game.consoleName}</td>
                            <td className="px-4 py-2 border border-table-border text-center">{game.esrbSymbol} - {game.esrbClasification}</td>
                            <td className="px-4 py-2 border border-table-border text-center">
                                {game.price === 0 ? "Free" : `$${game.price.toFixed(2)}`}
                            </td>
                            <td className="px-4 py-2 border border-table-border text-center">{game.historyCompleted} %</td>
                            <td className="px-4 py-2 border border-table-border text-center">
                                {game.gameCompleted ? "✔️" : "❌"}
                            </td>
                            <td className="px-4 py-2 border border-table-border text-center ">
                                <div className="gap-2 flex justify-center">
                                    <button className="bg-amber-400 hover:bg-amber-300 text-white hover:text-black font-bold py-1 px-3 rounded">
                                        Edit
                                    </button>
                                    <button className="bg-red-500 hover:bg-red-700 text-white hover:text-black font-bold py-1 px-3 rounded">
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TableGames;