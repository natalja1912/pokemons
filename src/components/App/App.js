import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SelectedItems from '../SelectedItems/SelectedItems';
import PageNotFound from '../PageNotFound/PageNotFound';
import pokemonsList from '../../utils/constants';
import DetailedPokemonInfo from '../DetailedPokemonInfo/DetailedPokemonInfo';

function App() {
  /*удаляем список избранных покемонов каждый раз при перезагрузке приложения */
  useEffect(() => {
    localStorage.clear();
  }, []);

  const [favoriteCards, setFavoriteCards] = useState([]);
  /*функция для добавления и удаления покемонов из списка избранных */
  function setSelectedPokemons(card) {
    /*карточки выбранных покемонов хранятся в localStorage */
    let favoritesList = localStorage.getItem('favorites');
    if (!favoritesList || favoritesList.length === 0) {
      localStorage.setItem('favorites', JSON.stringify([card]));
      setFavoriteCards([card]);
    }
    else {
      favoritesList = JSON.parse(favoritesList);
      /*если карточка уже есть в списке избранных, удаляем ее */
      if (favoritesList.some(item => item.name === card.name)) {
        const newFavoritesList = favoritesList.filter(item => item.name !== card.name);
        localStorage.setItem('favorites', JSON.stringify(newFavoritesList));
        setFavoriteCards(newFavoritesList);
      }
      /*если карточки нет есть в списке избранных, добавляем ее */
      else {
        favoritesList.push(card);
        localStorage.setItem('favorites', JSON.stringify(favoritesList));
        setFavoriteCards(favoritesList);
      }
    }
  }

  return (
    <div className="page">
      <main className="content">
        <Header />
        <Switch>
          <Route exact path="/">
            <Main favorites={favoriteCards} pokemonsList={pokemonsList} onSelectButtonClick={(card) => setSelectedPokemons(card)} />
          </Route>
          <Route path="/my-collection">
            <SelectedItems cards={favoriteCards} onSelectButtonClick={(card) => setSelectedPokemons(card)} />
          </Route>
          <Route path="/pokemons/:name">
            <DetailedPokemonInfo pokemonsList={pokemonsList} />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        <Footer />
      </main>
    </div>
  );
}

export default App;
