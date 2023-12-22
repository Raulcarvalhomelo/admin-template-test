"use client"
import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { DarkMode, DarkOnlyPage } from "../components/darkmode";
import { useDarkContext } from "../contexts/darktheme";


export default function login () {
  const { theme } = useDarkContext();
  const [modo, setModo] = useState<'login'|'cadastro'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <div className={` ${theme}${DarkMode} flex flex-col h-screen md:bg-block bg-gradient-to-br from-white to-black bg-opacity-25  object-cover  justify-center items-center `}>
      <div className={`${DarkOnlyPage} flex flex-col shadow-[1px_5px_5px_2px_rgba(0,0,0,0.9)] shadow-gray-900 gap-y-4 p-5 rounded-lg justify-center items-center bg-white`}>
        <img className="float-left w-1/3 h-1/6" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
        <h1 className="text-sm font-bold">{modo==='login' ? 'Entre com sua conta' : 'Cadastrar-se na plataforma'}</h1>
        <AuthInput label="Email" type="email" value={email} changeValue={setEmail} verifyValue />
        <AuthInput label="Senha" type="password" value={password} changeValue={setPassword}verifyValue />
        <button className={`dark dark:bg-sky-800 dark:text-white dark:border-black dark:hover:bg-sky-800 grid justify-items-center rounded-lg hover:bg-green-200 bg-green-300 text-sm w-full`}>
          {modo==='login' ? 'Entrar' : 'Cadastrar'}
        </button>
        <p className=" grid text-xs text-gray-600">Usar conta</p>
        <button className="gap-1 justify-items-center">
          <img className="w-8 hover:opacity-80" src="https://cdn-icons-png.flaticon.com/512/720/720255.png" alt="" />
        </button>
        <p className="grid justify-items-end  w-full text-xs">
        {modo==='login'?(
            <p>Novo por aqui?
              <a onClick={() => setModo('cadastro')} className="dark:text-cyan-300 text-blue-500"> Cadastrar</a>
            </p>
            ):(
            <p>Ja tem uma conta?
              <a onClick={() => setModo('login')}className="dark:text-cyan-300 text-blue-500">Login</a>
            </p>
        )}
        </p>
      </div>
    </div>
  );
};