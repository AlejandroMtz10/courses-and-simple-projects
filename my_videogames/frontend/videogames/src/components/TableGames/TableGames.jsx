import { useEffect, useState } from "react";
import axios from "axios";

function TableGames() {
    const [videogames, setVideogames] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/videogames/videogames")
        .then(response => {
            setVideogames(response.data);
        })
        .catch(error => {
            console.error("Error to get the list of videogames:", error);
        });
    }, []);

    return (
        <div className="p-4">
            <div className="overflow-x-auto">
                {/* Ahora usa las clases que mapean a tus variables temáticas */}
                <table className="min-w-full bg-table-bg text-sm border border-table-border text-table-text">
                    <thead>
                        <tr className="bg-table-header-bg text-left">
                            <th className="px-4 py-2 border border-table-border">Folio</th>
                            <th className="px-4 py-2 border border-table-border">Game</th>
                            <th className="px-4 py-2 border border-table-border">Console</th>
                            <th className="px-4 py-2 border border-table-border">Price</th>
                            <th className="px-4 py-2 border border-table-border">History</th>
                            <th className="px-4 py-2 border border-table-border">100%</th>
                        </tr>
                    </thead>
                    <tbody>
                        {videogames.map((game) => (
                        <tr key={game.id_videogame} className="hover:bg-table-row-hover-bg">
                            <td className="px-4 py-2 border border-table-border">{game.id_videogame}</td>
                            <td className="px-4 py-2 border border-table-border">{game.videogame}</td>
                            <td className="px-4 py-2 border border-table-border">{game.id_console}</td>
                            <td className="px-4 py-2 border border-table-border">{game.id_clasification}</td>
                            <th className="px-4 py-2 border border-table-border">{game.history_completed} %</th>
                            <td className="px-4 py-2 border border-table-border">
                                {game.game_completed ? "✔️" : "❌"}
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