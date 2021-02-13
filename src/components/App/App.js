import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  const [selectedCards, setSelectedCards] = useState([]);

  function setSelectedPokemons(card) {
    console.log('fff');
    console.log(card);
    if (selectedCards.length > 0) {
      if (!selectedCards.some(item => item.id === card.id)) {
        setSelectedCards(prev => {
          return [
            ...prev,
            card
          ]
        })
      }
    }
    else setSelectedCards([card]);
  }

  function deleteSelectedItems(card) {
    console.log('ddd');
    setSelectedCards(prev => {
      const newCardsList = selectedCards.filter(item => item.id !== card.id);
      return newCardsList;
    })
  }

  return (
    <div className="page">
      <main className="content">
        <Header />
        <Switch>
          <Route exact path="/">
            <Main selectedCards={selectedCards} onSelectButtonClick={(card) => setSelectedPokemons(card)} onDeleteButtonClick={(card) => deleteSelectedItems(card)} />
          </Route>
          <Route path="/pokemons/:id">
            <Main />
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
