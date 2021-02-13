import React from 'react';
import { Link } from "react-router-dom";
import Wrapper from '../Wrapper/Wrapper';
import Pokemon from '../Pokemon/Pokemon';
import './Main.css';

function Main({ pokemonsList, favorites, onSelectButtonClick }) {

  return (
    <Wrapper>
      <main className="main-page">
        <ul className="pokemons">
          {pokemonsList && pokemonsList.map((item) =>
            (<Pokemon mainpage={true} key={item.name} card={item} favorite={favorites.some(it => it.name === item.name)} addToFavorites={(card) => onSelectButtonClick(card)}></Pokemon>))
          }
        </ul>
      </main>
    </Wrapper>
  );
}

export default Main;