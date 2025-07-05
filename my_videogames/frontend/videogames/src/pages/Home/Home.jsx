import React from 'react';
import companies from '../../assets/pictures/companies_videogames.png';

function Home() {
    return (
        <div className="lead p-6 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-4">Welcome to my videogames app.</h1>
            <p className="text-center text-lg">
                Discover my collection of video games and consoles and you explore and know more about the clasifications of the video games about the ESRB.
            </p>
            <div className="flex flex-col items-center py-8">
                <h3 className=' text-4xl'>The most important companies currently</h3>
                <img src={companies} alt="Logo" className="w-auto h-64 my-8 p-1.5 rounded-2xl bg-sky-700 shadow-2xl/85 shadow-cyan-500/75" />
            </div>
            
        </div>
    );
}

export default Home;
