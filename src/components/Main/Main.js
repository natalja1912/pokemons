import React from 'react';
import { Link } from "react-router-dom";
import pokemonsList from '../../utils/constants';
import Wrapper from '../Wrapper/Wrapper';
import Pokemon from '../Pokemon/Pokemon';
import './Main.css';
const uniqid = require('uniqid');

function Main({ selectedCards, onSelectButtonClick, onDeleteButtonClick }) {
  const updatedPokemonsList = pokemonsList.map((item) => {
    const id = uniqid();
    return {
      ...item,
      'id': id
    }
  })

  function selectButtonClick(card){
    console.log(card);
    onSelectButtonClick(card);
  }

  function deleteButtonClick(card){
    console.log(card);
    onDeleteButtonClick(card);
  }

  return (
    <Wrapper>
      <main className="main-page">
        <ul className="pokemons">
          {updatedPokemonsList && updatedPokemonsList.map((item) =>
            (<Pokemon key={item.id} card={item} selectedCards={selectedCards} setSelectedItems={(card) => selectButtonClick(card)} deleteSelectedItems={(card) => deleteButtonClick(card)}></Pokemon>))
          }
        </ul>
      </main>
    </Wrapper>
  );
}

export default Main;