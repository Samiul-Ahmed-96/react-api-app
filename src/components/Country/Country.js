import React from 'react';
import './Country.css';
const Country = (props) => {
    return(
        <div>
          <h2>Name : {props.name} </h2>
          <h3>Capital: {props.capital} </h3>
          <h4>Population: {props.population}</h4>
        </div>
    
      )
};

export default Country;