import React from 'react'
import { useParams } from "react-router-dom";

import underConstruction from '../data/UnderConstructionData';



const ProjectDetails = () => {


    const { name } = useParams();
    const item = underConstruction.find((item) => item.name === name);

    return (
        <>
            <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg">
                <h1 className="text-2xl font-bold mb-4">{item.name}</h1>
                <p className="text-gray-700">{item.flats}</p>
            </div>
        </>
    )
}

export default ProjectDetails