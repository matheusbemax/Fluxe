'use client'
import Image from "next/image";
import Deposito from "../pages/deposito";
import Poupanca from "@/pages/poupanca";
import FAQPage from "@/pages/faq";
import { useState } from "react";
import AuthPage from "@/pages/login";
import Objetivos from "@/pages/objetivos";
import Agradecimento from "@/pages/agradecimento";

export default function Home() {
  const [component, setComponent] = useState('auth');
  const [valor, setValor] = useState('');
  const [extrato, setExtrato] = useState([]);

  const [saldo, setSaldo] = useState(0);

  return (
    <div className="bg-bgCustom min-h-screen text-black">
      {
       component != 'auth' && (
        <nav className="bg-pink-500 text-white p-4 px-96 flex justify-between">
        <h1 className="text-2xl font-bold text-white">Fluxe</h1>
        <div className="flex justify-between align-middle items-center">
          <div></div>
          <div className="flex space-x-8">
            <p onClick={() => setComponent('deposito')} className="hover:underline">
              Depósito
            </p>
            <p className="hover:underline" onClick={() => setComponent('poupanca')}>
              Poupança
            </p>
            <p className="hover:underline" onClick={() => setComponent('faq')}>
              FAQ
            </p>
            <p className="hover:underline" onClick={() => setComponent('objetivos')}>
              Objetivos
            </p>
            <p className="hover:underline" onClick={() => setComponent('autors')}>
              Autores
            </p>
          </div>
          
        </div>
        <p className="hover:underline" onClick={() => setComponent('auth')}>
              Logout
            </p>
      </nav>
       )
      }
    
      {component === 'auth' && <AuthPage charge={()=>setComponent('deposito')}/>}
      {component === 'deposito' && <Deposito />}  
      {component === 'poupanca' && <Poupanca />}
      {component === 'faq' && <FAQPage />}
      {component === 'objetivos' && <Objetivos />}
      {component === 'autors' && <Agradecimento />}
    </div>
  );
}
