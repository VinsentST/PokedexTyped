import { AppActions,LOGIN_SUCCESS,LOGIN_ERROR, AuthDataType } from "../types/actions"; 
import { Dispatch} from "redux";
import { AppState } from "../store/configureStore";
import axios,{AxiosResponse} from 'axios';
export const SetLoginSuccess=():AppActions=>({
      type:LOGIN_SUCCESS 
})
export const SetLoadingError=(err:any):AppActions=>({
      type:LOGIN_ERROR, 
      payload:err 
})
 
export const StartSignIn=(creds:AuthDataType)=>{
      console.log("startSignIn",creds )
      return async(dispatch:Dispatch<AppActions>,getState: () => AppState)=>{
      //it works
      // const data = axios.get(`http://localhost:3000/users`).then((res:any)=>{
      //     console.log("users ",res.data)
      //     return res.data
      //     });
     
      const data= await axios.post('http://localhost:3000/users/login', 
      //       {
      //       name: "Karina",
      //       password: "password"
      //     }
      creds
          )
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

      
      //   var bodyFormData = new FormData();
      //   bodyFormData.set('name', 'Kyle');
      //   bodyFormData.set('password', 'password');
      //   const data= await axios({
      //       method: 'post',
      //       url: 'http://localhost:3000/users',
      //       data: bodyFormData,
      //       headers: {'Content-Type': 'application/json' }
      //       })
      //       .then(function (response) {
      //           //handle success
      //           console.log(response);
      //       })
      //       .catch(function (response) {
      //           //handle error
      //           console.log(response);
      //       });
          //  dispatch(SetLoginSuccess())
      }
}