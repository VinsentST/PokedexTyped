import { Expense } from "./Expense";

// action strings
export const ADD_EXPENSE = "ADD_EXPENSE";
export const EDIT_EXPENSE = "EDIT_EXPENSE";
export const REMOVE_EXPENSE = "REMOVE_EXPENSE";
export const SET_EXPENSES = "SET_EXPENSES";

export interface SetExpenseAction {
  type: typeof SET_EXPENSES;
  expenses: Expense[];
}

export interface EditExpenseAction {
  type: typeof EDIT_EXPENSE;
  expense: Expense;
}

export interface RemoveExpenseAction {
  type: typeof REMOVE_EXPENSE;
  id: string;
}

export interface AddExpenseAction {
  type: typeof ADD_EXPENSE;
  expense: Expense;
}


////--------------------------------------------------
export const GET_FIRST_POKEMONS = 'GET_FIRST_POKEMONS';
export const GET_MORE_POKEMONS = 'GET_MORE_POKEMONS';
export const GET_POKEMON_DETAIL = 'GET_POKEMON_DETAIL';
export const GET_POKEMON_SPECIES = 'GET_POKEMON_SPECIES';
export const GET_REGIONAL_POKEMONS = 'GET_REGIONAL_POKEMONS';
export const CLEAR_REGIONAL_POKEMONS = 'CLEAR_REGIONAL_POKEMONS';
export const CLEAR_CURRENT = 'CLEAR_CURRENT';
export const SET_LOADING = 'SET_LOADING';
export const POKEMON_ERROR = 'POKEMON_ERROR';
export const FILTER_POKEMONS = 'FILTER_POKEMONS';
export const CLEAR_FILTER = 'CLEAR_FILTER';

export type GetMorePokemons={
      type:typeof GET_MORE_POKEMONS,
      payload:Data
}
export type PokemonErrorAction={
  type: typeof POKEMON_ERROR
  payload:any
}
export type pokemonsType={
  name:string,
  url:string
}
export interface Data{
  count:number,
  next:string,
  previous:null|string,
  results:Array<pokemonsType>
}
export interface GetFirstPokemonAction{
  type: typeof GET_FIRST_POKEMONS,
  payload:Data
}
export interface SetLoadingAction{
  type: typeof SET_LOADING
}
///-------------------------
export const LOGIN_SUCCESS='LOGIN_SUCCESS';
export const LOGIN_ERROR='LOGIN_ERROR';
export interface SetLoginSuccess{
  type:typeof LOGIN_SUCCESS
}
export interface SetLoginError{
  type:typeof LOGIN_ERROR
  payload:any
}
export interface AuthDataType{
  email:string,
  password:string,
}
///-------------------------
export type ExpenseActionTypes =
  | SetExpenseAction
  | EditExpenseAction
  | RemoveExpenseAction
  | AddExpenseAction;
export  type PokemonActionTypes = 
  | GetFirstPokemonAction
  | PokemonErrorAction
  | GetMorePokemons
  | SetLoadingAction;
export type AutotificationType=
  | SetLoginSuccess
  | SetLoginError;
export type AppActions = ExpenseActionTypes|PokemonActionTypes|AutotificationType;  
