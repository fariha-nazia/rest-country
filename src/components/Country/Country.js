import React from 'react';
import './Country.css'

const Country = (props) => {
    const {flags,name,population,region,area} = props.country;

    // console.log(props.country);
    return (
        <div className='country'>

            <img src={flags.png} alt="" />
            <h2>Your Destination: {name.common}</h2>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p>Area: {area}</p>
        </div>
    );
};

export default Country;