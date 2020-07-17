import React, { useEffect } from "react";
import { connect } from "react-redux";
import uuid from 'uuid';
import { startGetFirstPokemon, startGetMorePokemons } from './../../actions/Pokemon'
import InfiniteScroll from 'react-infinite-scroll-component';
import { AppState } from "../../store/configureStore";
import { bindActionCreators } from "redux";
import { AppActions } from "../../types/actions";
import { ThunkDispatch } from "redux-thunk";
import { initialStatePokemonType } from './../../reducers/pokemosRed'
 import { PokemonItem } from "./PokemonItem";
interface HomePageProps { }

interface HomePageState { }

type Props = HomePageProps & LinkStateProps & LinkDispatchProps;


export const Pokemon: React.FC<Props> = ({
  startGetFirstPokemon,
  startGetMorePokemons,
  pokemons: { loading, pokemons, filtered_pokemons, regional_pokemons }
}
) => {
  useEffect(() => {
    startGetFirstPokemon();
  }, []);
  if (loading) {
    return (
      <h1> Spiner</h1>
    );
  } else if (pokemons !== null && pokemons.length !== 0) {
    return (

      <InfiniteScroll
        dataLength={pokemons.length} //This is important field to render the next data
        next={startGetMorePokemons}
        hasMore={true}
        loader={<h4 className='text-center'>Loading....</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className='card-group d-flex align-items-center py-4'>
          
           
        {pokemons.map(pokemon => (
					 <PokemonItem key={uuid.v4()} pokemon={pokemon} />
					))}
          
        </div>
      </InfiniteScroll>
    )
  }
  else {
    return (
      <h1>No Results Found</h1>
    )
  }

}


/*
export class Pokemon extends React.Component<Props, HomePageState> {

  componentDidMount(){
    console.log("HomePage componentDidMount ")
    this.props.startGetFirstPokemon()
    this.props.startGetMorePokemons()
  }
  render() {
    
    return (
      <div>
        <h1>Expense Page</h1>
      
      </div>
    );
  }
}
*/
interface LinkStateProps {
  pokemons: initialStatePokemonType;
}
interface LinkDispatchProps {
  startGetFirstPokemon: () => void;
  startGetMorePokemons: () => void;

}

const mapStateToProps = (
  state: AppState,
  ownProps: HomePageProps
): LinkStateProps => ({
  pokemons: state.pokemons
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: HomePageProps
): LinkDispatchProps => ({
  startGetFirstPokemon: bindActionCreators(startGetFirstPokemon, dispatch),
  startGetMorePokemons: bindActionCreators(startGetMorePokemons, dispatch),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pokemon);
