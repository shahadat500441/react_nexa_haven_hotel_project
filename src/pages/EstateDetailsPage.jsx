import React from 'react';
import { useLoaderData } from 'react-router-dom';

const EstateDetailsPage = () => {
    const estate = useLoaderData();
    console.log(estate)

    
  

  
    return (
        <div>
        <h1>This is details page</h1>
        
        </div>
    );
};

export default EstateDetailsPage;