import { createStore, combineReducers, applyMiddleware,compose } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { expenseReducer } from "../reducers/expenses";
import {pokemonsReducer} from '../reducers//pokemosRed'
import { AppActions } from "../types/actions";
import autotificationReducer from "../reducers/autotificationRed";
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './../config/fbConfog'
export const rootReducer = combineReducers({
  expenses: expenseReducer,
  pokemons:pokemonsReducer,
  auth: autotificationReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore}) as ThunkMiddleware<AppState, AppActions>),
    //@ts-ignore
    reactReduxFirebase(fbConfig, {userProfile: 'users', useFirestoreForProfile: true, attachAuthIsReady: true}),
    //@ts-ignore
    reduxFirestore(fbConfig),
    //@ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
