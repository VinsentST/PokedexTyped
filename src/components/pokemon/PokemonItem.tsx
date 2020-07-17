import React from 'react';
import { parseId } from '../HelpFunction';
import { Link } from 'react-router-dom';
import {pokemonsType} from './../../types/actions'

export interface PokeomnProps{
      pokemon:pokemonsType
};
export const  PokemonItem: React.FC<PokeomnProps> = ({ pokemon }) => {
      return (
		<div
                  className='card m-auto flex-fill align-items-center'
			style={cardStyle}
		>
			<img
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${parseId(
					pokemon.url
				)}.png`}
				className='card-img-top pokeimg'
				alt={pokemon.name}
			/>
			<Link
				to={`/pokemon/${parseId(pokemon.url)}`}
				className='card-title h4 text-capitalize'
			>
				{pokemon.name}
			</Link>
		</div>
	);
} 
const cardStyle = {
	width: '160px',
	height: '160px',
	backgroundColor: '#3B4CCA',
	margin: '5px'
};