import React, { useEffect, useState } from 'react';
import axios from "axios";
import { toast } from 'react-toastify';
import EsrbCard from '../../components/EsrbCard';
import { IoMdAddCircle } from "react-icons/io";

function Clasifications() {
    const [esrb, setEsrb] = useState([]);
    //const [isFormOpen, setIsFormOpen] = useState(false);

    const fetchESRB = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/ESRB/clasifications");
            setEsrb(response.data);
        } catch (error) {
            toast.error("Error fetching ESRB classifications");
            console.error(error);
        }
    };

    useEffect(() => {
        fetchESRB();
    }, []);

    /*const handleSave = () => {
        fetchESRB();
        toast.success("Classification registered successfully");
    };*/

    return (
        <div className="lead p-6 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-4">Clasifications</h1>

            <div className="flex justify-end mb-4">
                <button
                    //onClick={() => setIsFormOpen(true)}
                    className="flex gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-4 py-4 rounded"
                >
                    <IoMdAddCircle className='text-2xl' />
                    Add ESRB
                </button>
            </div>

            {/* Cards grid (mover fuera del botón) */}
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
                {esrb.map((item) => (
                    <EsrbCard
                        key={item.id_clasification}
                        symbol={item.symbol}
                        clasification={item.clasification}
                        description={item.description}
                    />
                ))}
            </div>

            {/* Modal para agregar (si ya lo tienes implementado) */}
            {/* <FormAddGame
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                onSave={handleSave}
            /> */}
        </div>
    );
}

export default Clasifications;