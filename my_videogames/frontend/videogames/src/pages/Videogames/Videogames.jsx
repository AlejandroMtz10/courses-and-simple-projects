import React from 'react';
import TableGames from '../../components/TableGames';

function Videogames() {
    return (
        <div className="container mx-auto py-6">
            <h1 className="text-4xl font-bold text-center mb-4">Videogames</h1>
            <div>
                <TableGames />
            </div>
        </div>
    );
}

export default Videogames;