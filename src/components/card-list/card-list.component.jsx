import React from 'react'
import './card-list.styles.css'
import {Card} from '../card/card.component.jsx'

export const CardList = (props) => <div className='card-list'>
    {props.heroes.map(hero => (
    <Card id={hero.id} hero={hero}/>
    ))}
    </div>