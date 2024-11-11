// pages/auth.js
import { useState } from 'react';

export default function AuthPage({charge}) {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        {/* Tabs de Login e Cadastro */}
        <div className="flex justify-center space-x-8 border-b-2 pb-4">
          <button
            onClick={() => setIsLogin(true)}
            className={`font-semibold pb-1 ${
              isLogin ? 'text-pink-500 border-b-2 border-pink-500' : 'text-gray-500'
            }`}
          >
            login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`font-semibold pb-1 ${
              !isLogin ? 'text-pink-500 border-b-2 border-pink-500' : 'text-gray-500'
            }`}
          >
            Cadastro
          </button>
        </div>

        {/* Formulário de Login */}
        {isLogin ? (
          <form className="space-y-4">
            <h1 className="text-4xl text-center font-semibold text-gray-900">
              <label htmlFor="login" className="block text-pink-500">Fluxe</label>
              Banco Digital</h1>
            <div>
              <label htmlFor="login" className="block text-gray-700">
                Login:
              </label>
              <input
                type="text"
                id="login"
                name="login"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div>
              <label htmlFor="senha" className="block text-gray-700">
                Senha:
              </label>
              <input
                type="password"
                id="senha"
                name="senha"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <button
              onClick={charge}
              className="w-full py-2 mt-4 text-white bg-pink-500 rounded-md hover:bg-pink-600"
            >
              Entrar
            </button>
          </form>
        ) : (
          // Formulário de Cadastro
          <form className="space-y-4">
            <div>
              <label htmlFor="cpf" className="block text-gray-700">
                CPF:
              </label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div>
              <label htmlFor="nome" className="block text-gray-700">
                Nome:
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div>
              <label htmlFor="sobrenome" className="block text-gray-700">
                Sobrenome:
              </label>
              <input
                type="text"
                id="sobrenome"
                name="sobrenome"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div>
              <label htmlFor="signupLogin" className="block text-gray-700">
                Login:
              </label>
              <input
                type="text"
                id="signupLogin"
                name="signupLogin"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div>
              <label htmlFor="signupSenha" className="block text-gray-700">
                Senha:
              </label>
              <input
                type="password"
                id="signupSenha"
                name="signupSenha"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div>
              <label htmlFor="repetirSenha" className="block text-gray-700">
                Repetir Senha:
              </label>
              <input
                type="password"
                id="repetirSenha"
                name="repetirSenha"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div>
              <label htmlFor="idade" className="block text-gray-700">
                Idade:
              </label>
              <input
                type="number"
                id="idade"
                name="idade"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 mt-4 text-white bg-pink-500 rounded-md hover:bg-pink-600"
            >
              Cadastrar
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
