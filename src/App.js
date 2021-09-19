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
    const [country, setcountry] = useState([]);

    useEffect(()=> {
      fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setcountry(data))
    },[])

    return(
    <div>
      <h2>Name : </h2>
      <h3>Capital: </h3>
      <h4>Population: </h4>
    </div>
  )
}

function Country(){
  return(
    <div>
      <h2>Name : </h2>
      <h3>Capital: </h3>
      <h4>Population: </h4>
    </div>
  )
}

export default App;
