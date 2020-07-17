import React, { Component } from 'react'
import { AppState } from "../../store/configureStore";
import { AppActions } from "../../types/actions";
import { ThunkDispatch } from "redux-thunk";
import { StartSignIn } from './../../actions/autotification'
import { bindActionCreators } from "redux";
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {AuthDataType} from './../../types/actions'
import {initialStateAutotificationType} from './../../reducers/autotificationRed'


interface HomePageProps {}
interface HomePageState {
      email:string,
      password:string
}

type Props = HomePageProps & LinkStateProps & LinkDispatchProps;
export class SignIn extends Component<Props,HomePageState>{
      state:HomePageState = {
            email: 'e',
            password: 'p'
      }
      handleChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
          this.setState({
            ...this.state,
            [e.target.id]: e.target.value
          });
          console.log("State ",this.state)
      }
      handleSubmit = ( e: React.FormEvent<HTMLFormElement>):void => {
            e.preventDefault();
            this.props.StartSignIn(this.state)
      }
      componentDidMount(){
         //   this.props.StartSignIn( {email:"Karina",password:"password"})
      }
      render(){
            return (
                  <div className="container">
                  <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                      <label htmlFor="email">Email</label>
                      <input type="email" id='email' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                      <label htmlFor="password">Password</label>
                      <input type="password" id='password' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                      <button className="btn pink lighten-1 z-depth-0">Login</button>
                      <div className="center red-text">
                      
                      </div>
                    </div>
                  </form>
                </div>
                )
      }
}

interface LinkStateProps {
      authError:initialStateAutotificationType["authError"]
}
interface LinkDispatchProps {
      StartSignIn:(creds:AuthDataType)=>void
 }
 const mapStateToProps = (
      state: AppState,
      ownProps: HomePageProps
    ): LinkStateProps => ({
      authError:state.auth.authError
    });
    
    const mapDispatchToProps = (
      dispatch: ThunkDispatch<any, any, AppActions>,
      ownProps: HomePageProps
    ): LinkDispatchProps => ({
      StartSignIn: bindActionCreators(StartSignIn, dispatch),
    });
export default connect(
      mapStateToProps,
      mapDispatchToProps
)(SignIn);

