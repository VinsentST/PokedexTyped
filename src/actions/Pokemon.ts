import {
      AppActions,
      GET_FIRST_POKEMONS,
      SET_LOADING,
      GET_MORE_POKEMONS,
      POKEMON_ERROR,
      Data
    } from "../types/actions";

    import { Dispatch} from "redux";
    import { AppState } from "../store/configureStore";
    import axios,{AxiosResponse} from 'axios';
    import { Action } from 'redux';
    import { ThunkAction} from 'redux-thunk';
    
    const regionalPokedexNumbers = {
      kanto: {
        start: 1,
        end: 151
      },
      johto: {
        start: 152,
        end: 251
      },
      hoenn: {
        start: 252,
        end: 386
      },
      sinnoh: {
        start: 387,
        end: 493
      },
      unova: {
        start: 494,
        end: 649
      },
      kalos: {
        start: 650,
        end: 721
      },
      alola: {
        start: 722,
        end: 807
      },
      mega: {
        start: 793,
        end: 964
      }
    };
    const legendAndMyths = {
      kanto: {
        start: 144,
        end: 146
      },
      kanto2: {
        start: 150,
        end: 151
      },
      johto: {
        start: 243,
        end: 245
      },
      johto2: {
        start: 249,
        end: 251
      },
      hoenn: {
        start: 377,
        end: 386
      },
      sinnoh: {
        start: 480,
        end: 493
      },
      unova: {
        start: 638,
        end: 649
      },
      kalos: {
        start: 716,
        end: 721
      },
      alola: {
        start: 785,
        end: 808
      }
    };

  export const SetPokemonError = (err:any):AppActions=>({
    type:   POKEMON_ERROR,
    payload:err
  })
    export const SetLoading = ():AppActions=>({
      type:   SET_LOADING,
    })
    export const startSetLoading = ()=>{
      console.log("startsetLoading")
      return(dispatch: Dispatch<AppActions>, getState: () => AppState)=>{
            dispatch(SetLoading());
      }
    }
    export const GetFirstPokemon = (data:Data): AppActions => (
      {
        type:  GET_FIRST_POKEMONS,
        payload:data
      }); 
    export const startGetFirstPokemon = () => {
          console.log("startGetFirstPokemon")
      return async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
        try{
             dispatch(SetLoading());
         const data = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20`).then((res:any)=>{
          console.log("res.data ",res.data)
          return res.data
          });
            console.log("startGetFirstPokemon data ",data)
           dispatch(GetFirstPokemon(data));
            
        }catch(err){
          dispatch(SetPokemonError(err));
        }
      };
    };
    export const GetMorePokemons = (data:Data): AppActions => (
      {
        type:  GET_MORE_POKEMONS,
        payload:data
      }); 
    export const startGetMorePokemons = ()=>{
      console.log("startGetMorePokemons")
      return async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
        try{
           const start = getState().pokemons.pokemons.length;
        
         const data = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${start}`).then((res:any)=>{
          console.log("res.data ",res.data)
          return res.data
          });
            console.log("startGetMorePokemons data ",data)
            dispatch(GetMorePokemons(data));
            
        }catch(err){
          dispatch(SetPokemonError(err));
        }
      };
    };
    
 