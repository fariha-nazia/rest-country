import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])


    return (
        <div>
            <h1>Lets Have Your Dream Trip</h1>
            <h3>More Than Over {countries.length} Countries</h3>

            <div className='countries-container'>
            {
                countries.map(country => <Country country = {country}
                key= {country.cca3}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;