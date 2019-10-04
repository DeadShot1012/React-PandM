import React from 'react';

import './cardlist.styles.css';

import {Cards} from '../cards/cards.component';

export const CardList = props => {
    console.log(props);
    
    return <div className="card-list">

        {props.monsters.map(monster => (
        //   <h1 key={ monster.id }>{monster.name}</h1>
        <Cards key={ monster.id } monster= {monster}/>
          ))}

    </div>;
};