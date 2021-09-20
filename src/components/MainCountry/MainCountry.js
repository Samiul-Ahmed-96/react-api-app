import React, { useEffect, useState } from 'react';
import Country from '../Country/Country.js';
import './MainCountry.css';

const MainCountry = () => {
    const [countryData, setCountry] = useState([]);

    useEffect(()=> {
      fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountry(data))
    },[])

    return(
    <div className="main-country">
     {
      countryData.map(country => <Country country={country}></Country>)
     }
    </div>
  )
};

export default MainCountry;