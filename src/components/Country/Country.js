import React from 'react';
import './Country.css';
const Country = (props) => {
    console.log(props.country)
    const {name,capital,flag,population}=props.country;
    return(
        <div className="country">
          <img src={flag} alt="" />
          <h2>Name : {name} </h2>
          <h3>Capital: {capital} </h3>
          <h4>Population: {population}</h4>
        </div>
    
      )
};

export default Country;