import React, {useEffect, useState} from 'react';
import axios from "axios";
import CharacterContainer from "./components/CharacterContainer";
import Paganation from "./components/Paganation"
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,
  NavbarBrand
} from "reactstrap";
import './App.css';

const App = () => {

  const [data, setData] = useState([]);
  const [pageNum, setPageNum] = useState(2);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/?page=${pageNum}`)
    .then(response => {
      // console.log(response.data);
      setData(response.data.results);
    })
    .catch(err => {
        console.log(err);
    })
  }, [])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <Navbar fixed="top" className="Header navbar"><NavbarBrand>Rick and Morty</NavbarBrand></Navbar>
      <CharacterContainer data={data}/>
      <footer className="footer"><Paganation /></footer>
    </div>
  );
}

export default App;
