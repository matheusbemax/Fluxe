// pages/faq.js
import { useState } from 'react';

export default function FAQPage() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  // Lista de perguntas e respostas
  const faqData = [
    {
      question: "Como posso começar a investir?",
      answer:
        "Defina seus objetivos e perfil de risco. O banco te ajuda a abrir uma conta de investimentos e escolher opções adequadas.",
    },
    {
      question: "O que é investimento?",
      answer:
        "É aplicar dinheiro para gerar retorno, aumentando seu patrimônio ao longo do tempo.",
    },
    {
      question: "Como posso abrir uma poupança?",
      answer:
        "Traga RG, CPF e comprovante de residência. Abrimos a conta rapidamente.",
    },
    {
      question: "Pra que serve uma conta poupança?",
      answer:
        "Serve para guardar dinheiro com rendimento e é ideal para reservas de emergência.",
    },
    {
      question: "Quais são as opções seguras de investimento?",
      answer:
        "Tesouro Direto, CDBs e LCI/LCA são boas alternativas com segurança e rendimento.",
    },
    {
      question: "Como Economizar?",
      answer: "Planeje seus gastos e corte despesas desnecessárias.",
    },
    {
      question: "O que é um orçamento pessoal?",
      answer:
        "Um guia financeiro que ajuda a controlar ganhos e gastos.",
    },
    {
      question: "Qual a importância de poupar?",
      answer:
        "Garantir segurança financeira para emergências e objetivos futuros.",
    },
  ];

  // Alterna entre abrir/fechar a resposta ao clicar na pergunta
  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-100">
      <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-pink-500 mb-8">
          FAQ - Dúvidas Frequentes
        </h1>
        {faqData.map((item, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full text-left font-semibold text-gray-800 py-2 focus:outline-none"
            >
              <div className="flex items-center justify-between">
                <span>{item.question}</span>
                <span className={`text-pink-500 ${activeQuestion === index ? 'rotate-180' : ''}`}>
                  &#9660;
                </span>
              </div>
            </button>
            {activeQuestion === index && (
              <p className="mt-2 text-gray-600">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
