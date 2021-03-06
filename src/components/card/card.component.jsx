import React from 'react'
import './card.styles.css'

export const Card = (props) => <div className='card-container'>
    <img alt='monster' src={`https://robohash.org/${props.hero.id}1?set=set2&size=180x180`}></img>
    <h2>{props.hero.name}</h2>
    <p>{props.hero.email}</p>
    </div>