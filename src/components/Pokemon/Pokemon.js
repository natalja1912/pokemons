import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Pokemon.css';
import FlagIcon from '../icons/FlagIcon/FlagIcon';
import TrashIcon from '../icons/TrashIcon/TrashIcon';

function Pokemon({ card, mainpage, favorite, addToFavorites }) {
    const [isSelected, setSelected] = useState(favorite);

    /*функция для добавления и удаления покемонов из списка избранных */
    function handleSelectButton() {
        addToFavorites(card);
        setSelected(prev => !prev);
    }

    let cardInfoText = "";
    isSelected ? cardInfoText = "Убрать из избранных" : cardInfoText = "Добавить в избранное";

    return (
        <section className="card">
            <button className="card__flag-icon" onClick={handleSelectButton}>{!isSelected ? <FlagIcon /> : <TrashIcon />}</button>
            <div className="card__info-text">
                {cardInfoText}
            </div>
            <Link to={`pokemons/${card.name}`}>
            <img className="card__image" src={card.picture} alt="Изображение покемона" />
            <div className="card__group">
                <h2 className="card__heading">{card.name}</h2>
                {!mainpage && <p className="card__info">{`тип: ${card.type}`}</p>}
                {!mainpage && <p className="card__info">{`высота: ${card.height}`}</p>}
                {!mainpage && <p className="card__info">{`вес: ${card.weight}`}</p>}
                {!mainpage && <p className="card__text">{card.description}</p>}
            </div>
            </Link>
        </section>
    );
}

export default Pokemon;