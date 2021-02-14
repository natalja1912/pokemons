import React from 'react';
import Wrapper from '../Wrapper/Wrapper';
import Pokemon from '../Pokemon/Pokemon';
import './Main.css';
var uniqid = require('uniqid');

function Main({ pokemonsList, favorites, onSelectButtonClick }) {

  return (
    <Wrapper>
      <main className="main-page">
        <ul className="pokemons">
          {pokemonsList && pokemonsList.map((item) =>
            (<Pokemon mainpage={true} key={uniqid()} card={item} favorite={favorites.some(it => it.name === item.name)} addToFavorites={(card) => onSelectButtonClick(card)}></Pokemon>))
          }
        </ul>
      </main>
    </Wrapper>
  );
}

export default Main;