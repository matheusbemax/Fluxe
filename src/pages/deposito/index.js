import { useState } from 'react';

export default function Banco() {
  const [saldo, setSaldo] = useState(0);
  const [valor, setValor] = useState('');
  const [extrato, setExtrato] = useState([]);

  const depositar = (e) => {
    e.preventDefault();
    const valorNumerico = parseFloat(valor);
    if (!isNaN(valorNumerico) && valorNumerico > 0) {
      setSaldo(saldo + valorNumerico);
      setExtrato([
        ...extrato,
        { tipo: 'Depósito', valor: valorNumerico, data: new Date().toLocaleString() },
      ]);
      setValor('');
    } else {
      alert('Por favor, insira um valor válido para depósito.');
    }
  };

  const sacar = (e) => {
    e.preventDefault();
    const valorNumerico = parseFloat(valor);
    if (!isNaN(valorNumerico) && valorNumerico > 0) {
      if (valorNumerico <= saldo) {
        setSaldo(saldo - valorNumerico);
        setExtrato([
          ...extrato,
          { tipo: 'Saque', valor: valorNumerico, data: new Date().toLocaleString() },
        ]);
        setValor('');
      } else {
        alert('Saldo insuficiente para realizar o saque.');
      }
    } else {
      alert('Por favor, insira um valor válido para saque.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 p-6">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl text-center font-semibold text-gray-900 mb-6">Banco Digital</h2>
        <p className="text-center text-xl text-gray-700 mb-8">Saldo Atual: R$ {saldo.toFixed(2)}</p>

        <form className="flex flex-col items-center" onSubmit={(e) => e.preventDefault()}>
          <label className="text-gray-700 font-semibold mb-2">Valor:</label>
          <input
            type="number"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            placeholder="Digite o valor"
            className="mb-4 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <div className="flex space-x-4">
            <button
              className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onClick={depositar}
            >
              Depositar
            </button>
            <button
              className="rounded-md bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              onClick={sacar}
            >
              Sacar
            </button>
          </div>
        </form>

        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Extrato de Transações</h3>
          <ul className="space-y-2">
            {extrato.length > 0 ? (
              extrato.map((transacao, index) => (
                <li
                  key={index}
                  className={`p-4 rounded-md ${
                    transacao.tipo === 'Saque' ? 'bg-red-100' : 'bg-green-100'
                  }`}
                >
                  {transacao.data} - {transacao.tipo}: R$ {transacao.valor.toFixed(2)}
                </li>
              ))
            ) : (
              <p className="text-gray-500">Nenhuma transação realizada ainda.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
