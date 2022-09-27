import React from 'react';
import './Country.css'

const Country = (props) => {
    // Destructuring 
    const {name,population,flags} = props.country;
    return (
        <div className='country'>
            <h2>{name.common}</h2>
            <img src={flags.png} alt="" />
            <h4>Population: {population}</h4>
        </div>
    );
};

export default Country;