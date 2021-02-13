import React from 'react';
import Wrapper from '../Wrapper/Wrapper';
import Pokemon from '../Pokemon/Pokemon';
import './SelectedItems.css';

function SelectedItems({ cards, onSelectButtonClick }) {
    return (
        <Wrapper>
            <main className="selected">
                <ul className="selected_pokemons">
                    {(cards.length > 0) &&
                        cards.map((item) =>
                            (<Pokemon mainpage={false} key={item.name} card={item} favorite={cards.some(it => it.name === item.name)} addToFavorites={(card) => onSelectButtonClick(card)}></Pokemon>))
                    }
                </ul>
            </main>
        </Wrapper>
    );
}

export default SelectedItems;