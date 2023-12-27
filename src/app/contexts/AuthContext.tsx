"use client"
import firebase from "@/app/firebase/config";
import { createContext, useState } from "react";
import Usuario from "../model/Usuario";


interface AuthContextProps {
  user?: Usuario
  loginGoogle?: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({});

// async function userNormalizado(userFirebase: firebase.User):Promise<Usuario>{
//   const token = await userFirebase.getIdToken()
//   return {
//     uid: userFirebase.uid,
//     nome: userFirebase.displayName,
//     email: userFirebase.email,
//     token,
//     provedor: userFirebase.providerData[0].providerId,
//     imagemUrl: userFirebase.photoURL
//   }
// }

export function Authprovider(props) {
  const [user, setUsuario] = useState<Usuario>(null)
  async function loginGoogle(){
    console.log('login')
  }
  return (
    <AuthContext.Provider value={{user, loginGoogle}}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext