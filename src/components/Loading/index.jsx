import React from 'react';
import { MoonLoader } from 'react-spinners';
import './index.css'

const Loader = () => {
    return (
        <div className='spinner'
            style={{
               
            }}
        >
            <MoonLoader color="#FF5A5F" size={50} />
        </div>
    );
};

export default Loader;
