import {
	AppActions,
      LOGIN_SUCCESS,
      LOGIN_ERROR
} from "../types/actions";

const initialState={
      authError: null as null|string
}
export type initialStateAutotificationType=typeof initialState;

const autotificationReducer = (state=initialState,action:AppActions):initialStateAutotificationType=>{
      switch(action.type){
            case LOGIN_SUCCESS:
            return{
                  ...state,
                  authError:null
            }
            case  LOGIN_ERROR:
            return{
                  ...state,
                  authError: 'Login failed'     
            }
      }
      return state
}
export default autotificationReducer;