import React from "react";
import { connect } from "react-redux";
import { startRemoveExpense, startEditExpense } from "../actions/expenses";
import {startGetFirstPokemon,startGetMorePokemons} from './../actions/Pokemon'
import { Expense } from "../types/Expense";
import { AppState } from "../store/configureStore";
import { bindActionCreators } from "redux";
import { AppActions } from "../types/actions";
import { ThunkDispatch } from "redux-thunk";
import {initialStatePokemonType} from './../reducers/pokemosRed'
interface HomePageProps {
  id?: string;
  color?: string;
}

interface HomePageState {}

type Props = HomePageProps & LinkStateProps & LinkDispatchProps;

export class HomePagePage extends React.Component<Props, HomePageState> {
  onEdit = (expense: Expense) => {
    this.props.startEditExpense(expense);
  };
  onRemove = (id: string) => {
    this.props.startRemoveExpense(id);
  };
  componentDidMount(){
    console.log("HomePage componentDidMount ")
    this.props.startGetFirstPokemon()
    this.props.startGetMorePokemons()
  }
  render() {
    const { expenses } = this.props;
    return (
      <div>
        <h1>Expense Page</h1>
        <div>
          {expenses.map(expense => (
            <div key={expense.id}>
              <p>{expense.description}</p>
              <p>{expense.amount}</p>
              <p>{expense.note}</p>
              <button onClick={() => this.onRemove(expense.id)}>
                Remove Expense c c zxcz
              </button>
              <button onClick={() => this.onEdit(expense)}>Edit Expense</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

interface LinkStateProps {
  expenses: Expense[];
  pokemons:initialStatePokemonType;
}
interface LinkDispatchProps {
  startEditExpense: (expense: Expense) => void;
  startRemoveExpense: (id: string) => void;
  startGetFirstPokemon:()=>void;
  startGetMorePokemons:()=>void;
 
}

const mapStateToProps = (
  state: AppState,
  ownProps: HomePageProps
): LinkStateProps => ({
  expenses: state.expenses,
  pokemons:state.pokemons
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: HomePageProps
): LinkDispatchProps => ({
  startEditExpense: bindActionCreators(startEditExpense, dispatch),
  startRemoveExpense: bindActionCreators(startRemoveExpense, dispatch),
  startGetFirstPokemon:bindActionCreators(startGetFirstPokemon, dispatch),
  startGetMorePokemons:bindActionCreators(startGetMorePokemons, dispatch),
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePagePage);
