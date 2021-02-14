import React from 'react';
import { useParams } from 'react-router-dom';
import Wrapper from '../Wrapper/Wrapper';
import './DetailedPokemonInfo.css';

function DetailedPokemonInfo({ pokemonsList }) {
    const { name } = useParams();
    const cards = pokemonsList.filter(item => item.name === name);
    const card = cards[0];

    return (
        <Wrapper>
            <section className="pokemon">
                <img className="pokemon__image" src={card.picture} alt="Изображение покемона" />
                <div className="pokemon__group">
                    <h2 className="pokemon__heading">{card.name}</h2>
                    <p className="pokemon__text">{`тип: ${card.type}`}</p>
                    <p className="pokemon__text">{`высота: ${card.height}`}</p>
                    <p className="pokemon__text">{`вес: ${card.weight}`}</p>
                    <p className="pokemon__text">{card.description}</p>
                </div>
            </section>
        </Wrapper>
    );
}

export default DetailedPokemonInfo;