import { useState } from 'react';

export default function Poupanca() {
  const [valorInicial, setValorInicial] = useState('');
  const [numMeses, setNumMeses] = useState('');
  const [valoresMensais, setValoresMensais] = useState([]);

  const calcularPoupancaMensal = (e) => {
    e.preventDefault();
    const valorNumerico = parseFloat(valorInicial);
    const mesesNumerico = parseInt(numMeses);

    if (!isNaN(valorNumerico) && !isNaN(mesesNumerico) && mesesNumerico > 0) {
      const aumentoMensal = 0.13 / 12;  // Aumento mensal equivalente a 13% ao ano
      let valorAtual = valorNumerico;
      const valores = [];

      for (let mes = 1; mes <= mesesNumerico; mes++) {
        valorAtual += valorAtual * aumentoMensal;
        valores.push({ mes, valor: valorAtual });
      }
      
      setValoresMensais(valores);
    } else {
      setValoresMensais([{ mes: 'Erro', valor: 'Por favor, insira valores válidos.' }]);
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-100 p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl text-center font-bold text-pink-600 mb-6">Calculadora de Poupança</h2>

        <form className="flex flex-col space-y-4" onSubmit={calcularPoupancaMensal}>
          <label className="text-gray-700 font-semibold">Valor da Poupança Inicial:</label>
          <input
            type="number"
            value={valorInicial}
            onChange={(e) => setValorInicial(e.target.value)}
            placeholder="Digite o valor inicial"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
          />

          <label className="text-gray-700 font-semibold">Número de Meses:</label>
          <input
            type="number"
            value={numMeses}
            onChange={(e) => setNumMeses(e.target.value)}
            placeholder="Digite o número de meses"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
          />

          <button
            type="submit"
            className="rounded-md bg-pink-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-600"
          >
            Calcular
          </button>
        </form>

        {valoresMensais.length > 0 && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-pink-600">Valor da Poupança mês a mês:</h3>
            <ul className="space-y-4 mt-4">
              {valoresMensais.map(({ mes, valor }) => (
                <li
                  key={mes}
                  className="flex justify-between bg-gray-100 rounded-lg p-4 shadow-sm"
                >
                  <span className="text-gray-700 font-medium">Mês {mes}:</span>
                  <span className="text-gray-900 font-semibold">R$ {valor.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
