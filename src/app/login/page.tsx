"use client"
import {useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { FcNoIdea,FcIdea,FcHighPriority } from "react-icons/fc";
import { AiOutlineWarning } from "react-icons/ai";
import { DarkMode, DarkOnlyPage } from "../components/darkmode";
import Image from "next/image";
import { error } from "console";
import UseAuth from "../hooks/useAuth";


export default function Login () {
  const {user,loginGoogle}=UseAuth();
  const [erro,setErro]=useState<'hidden'|''>('hidden')
  const [loginDark,setLoginDark]=useState<'dark'|'ligth'>('ligth')
  const [modo, setModo] = useState<'login'|'cadastro'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const profileimage=['https://cdn-icons-png.flaticon.com/512/149/149071.png','https://cdn-icons-png.flaticon.com/512/720/720255.png'];
  



  function submeter(){
    try{
      if(modo==='login'){
          console.log('login')
      }else{
          console.log('cadastrar')
      }
    }
    catch{()=>{console.log('Error')}}
  }

  return (
    <div className={` ${loginDark==='dark'?'ligth':'dark'} ${DarkMode} flex flex-col h-screen md:bg-block bg-gradient-to-br from-white to-black bg-opacity-25  object-cover  justify-center items-center `}>
      <div className={`${DarkOnlyPage} flex flex-col shadow-[1px_5px_5px_2px_rgba(0,0,0,0.9)] shadow-gray-900 gap-y-4 p-5 rounded-lg justify-center items-center bg-white`}>
        <Image className="float-left" width={50} height={50} src={profileimage[0]} alt="profile image" />
        <h1 className="text-sm font-bold">{modo==='login' ? 'Entre com sua conta' : 'Cadastrar-se na plataforma'}</h1>
        <div className={`${erro} flex rounded-md gap-2 justify-center w-full bg-red-500 text-xs`}>
          <p className="text-sm">
            <AiOutlineWarning/>
          </p>
          <p>Informações Inválidas</p>
        </div>
        <AuthInput label="Email" type="email" value={email} changeValue={setEmail} verifyValue />
        <AuthInput label="Senha" type="password" value={password} changeValue={setPassword}verifyValue />
        <button onClick={submeter}className={`dark dark:bg-sky-800 dark:text-white text-white ${modo==='login' ? 'bg-green-500 hover:bg-green-400 dark:hover:bg-green-500' : 'bg-blue-500 hover:bg-blue-400 dark:hover:bg-sky-500 dark:border-black'}   grid justify-items-center rounded-lg  text-sm w-full`}>
          {modo==='login' ? 'Entrar'  : 'Cadastrar'}
        </button>
        <p className=" grid text-xs text-gray-600">Usar conta</p>
        <button className="gap-1 justify-items-center">
          <Image className="w-8 hover:opacity-80" width={30} height={30} src={profileimage[1]} alt="GoogleLogin" />
        </button>
        <div className="flex">
          <button onClick={loginGoogle} className="flex-none w-14  ">{loginDark==='dark'?(<FcIdea onClick={()=>setLoginDark('ligth')}/>):(<FcNoIdea onClick={()=>setLoginDark('dark')}/>)}</button>
          <p className="grid justify-items-end  -full text-xs">
          {modo==='login'?(
              <p>Novo por aqui?
                <a onClick={() => setModo('cadastro')} className="dark:text-cyan-300 text-blue-500"> Cadastrar</a>
              </p>
              ):(
              <p>Ja tem uma conta?
                <a onClick={() => setModo('login')}className="dark:text-cyan-300 text-blue-500 pointer">Login</a>
              </p>
          )}
          </p>
        </div>
      </div>
    </div>
  );
};