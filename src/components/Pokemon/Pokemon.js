import React, { useState } from 'react';
import './Pokemon.css';
import FlagIcon from '../icons/FlagIcon/FlagIcon';
import TrashIcon from '../icons/TrashIcon/TrashIcon';

function Pokemon({ card, selectedCards, setSelectedItems, deleteSelectedItems }) {
    let selected = selectedCards.some(item => item.id === card.id);
    const [isSelected, setSelected] = useState(selected);

    /*функция для добавления и удаления покемонов из списка избранных */
    function handleSelectButton() {
        /* если покемон уже был выбран, удаляем его из списка избранных */
        if (!isSelected) {
            setSelectedItems(card);
        }
        /* если покемон не был выбран, добавляем его из список избранных */
        else {
            deleteSelectedItems(card);
        }
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
            <img className="card__image" src={card.picture} alt="Изображение покемона" />
            <div className="card__group">
                <h2 className="card__heading">{card.name}</h2>
                {selected && <p className="card__info">{`тип: ${card.type}`}</p>}
                {selected && <p className="card__info">{`высота: ${card.height}`}</p>}
                {selected && <p className="card__info">{`вес: ${card.weight}`}</p>}
                {selected && <p className="card__text">{card.description}</p>}
            </div>
        </section>
    );
}

export default Pokemon;