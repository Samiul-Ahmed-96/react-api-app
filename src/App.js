import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
       <MainCountry></MainCountry>
    </div>
  );
}

function MainCountry(){
    const [country, setCountry] = useState([]);

    useEffect(()=> {
      fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountry(data))
    },[])

    return(
    <div>
     {
       country.map(country => <Country name={country.name} capital={country.capital} population={country.population}></Country> )
     }
    </div>
  )
}

function Country(props){
  return(
    <div>
      <h2>Name : {props.name} </h2>
      <h3>Capital: {props.capital} </h3>
      <h4>Population: {props.population}</h4>
    </div>

  )
}

export default App;
