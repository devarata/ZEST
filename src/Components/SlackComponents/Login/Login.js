import React from 'react'
import './Login.css'
import logo from './logo.png'
import {Button} from "@material-ui/core"
import {auth,provider} from "../../../firebase"
import {useStateValue} from '../../../StateProvider.js'
import {actionType} from '../../../reducer.js'

function Login() {

  const [state,dispatch] = useStateValue()

  const signIn = () =>{
    auth.signInWithPopup(provider)
    .then(result=>{
      console.log(result);
      dispatch({
        type:actionType.SET_USER,
        user:result.user,
      })
    })
    .catch((error)=>{
      alert(error.message);
    })
  }

  return (
    <div className="login">
      <div className="login__container">
        <img src={logo} alt=""/>
        <h1> Sign in to ZEST</h1>
        <p>Keeps you connected</p>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  )
}

export default Login
