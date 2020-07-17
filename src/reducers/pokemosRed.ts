import { pokemonsType } from './../types/actions'
import {
	AppActions,
	GET_FIRST_POKEMONS,
	POKEMON_ERROR,
	GET_MORE_POKEMONS,
	SET_LOADING
    } from "../types/actions";
const initialState = {
	pokemons:[] as Array<pokemonsType> ,
	filtered_pokemons: null as null|Array<pokemonsType>,
	regional_pokemons: null as null|Array<pokemonsType>,
	current_pokemon: null as any, //Потом затипизируем
	current_pokemon_species: null as any,
	loading: true as boolean,
	error: null as any
};
export type initialStatePokemonType = typeof initialState;

const pokemonsReducer = (state = initialState, action: AppActions):initialStatePokemonType => {
	console.log("POKEMONReducer")
	switch (action.type) {
		
		case GET_FIRST_POKEMONS:
				console.log("GET_FIRST_POKEMONS")
			return{
				...state,
				pokemons: action.payload.results,
				loading: false
			}
		case GET_MORE_POKEMONS:
			return {
				...state,
				pokemons: state.pokemons.concat(action.payload.results),
				loading: false
			};
		case SET_LOADING:
			return {
				...state,
				loading: true
			};
		case POKEMON_ERROR:
				console.log("POKEMON_ERROR")
			console.log(action.payload);
			return {
				...state,
				error: action.payload
			};
		default:
			return state;
	}
};
export {pokemonsReducer}