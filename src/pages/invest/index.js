import { useState } from 'react';

export default function GraficoInvestimento() {
  const [valorInicial, setValorInicial] = useState('');
  const [contribuicaoMensal, setContribuicaoMensal] = useState('');
  const [numMeses, setNumMeses] = useState('');
  const [dadosGrafico, setDadosGrafico] = useState(null);

  const calcularInvestimento = (e) => {
    e.preventDefault();
    const valorInicialNum = parseFloat(valorInicial);
    const contribuicaoMensalNum = parseFloat(contribuicaoMensal);
    const numMesesNum = parseInt(numMeses);

    if (
      !isNaN(valorInicialNum) &&
      !isNaN(contribuicaoMensalNum) &&
      !isNaN(numMesesNum) &&
      numMesesNum > 0
    ) {
      const taxaMensal = 0.13 / 12; // Taxa de rendimento mensal baseada em 13% ao ano
      let saldo = valorInicialNum;
      const valores = [saldo];
      const labels = ['Início'];

      for (let i = 1; i <= numMesesNum; i++) {
        saldo += saldo * taxaMensal + contribuicaoMensalNum;
        valores.push(saldo);
        labels.push(`Mês ${i}`);
      }

      setDadosGrafico({ valores, labels });
    } else {
      alert('Por favor, insira valores válidos.');
    }
  };

  const maxValor = dadosGrafico ? Math.max(...dadosGrafico.valores) : 0;
  const scaleFactor = 300 / maxValor; // Ajuste para o gráfico caber na tela (escala do gráfico)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-100 p-6">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">Gráfico de Investimento</h2>

        <form className="space-y-4" onSubmit={calcularInvestimento}>
          <div>
            <label className="text-gray-700 font-semibold">Valor Inicial:</label>
            <input
              type="number"
              value={valorInicial}
              onChange={(e) => setValorInicial(e.target.value)}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
              placeholder="Digite o valor inicial"
            />
          </div>
          <div>
            <label className="text-gray-700 font-semibold">Contribuição Mensal:</label>
            <input
              type="number"
              value={contribuicaoMensal}
              onChange={(e) => setContribuicaoMensal(e.target.value)}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
              placeholder="Digite a contribuição mensal"
            />
          </div>
          <div>
            <label className="text-gray-700 font-semibold">Número de Meses:</label>
            <input
              type="number"
              value={numMeses}
              onChange={(e) => setNumMeses(e.target.value)}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
              placeholder="Digite o número de meses"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-600 text-white font-semibold py-2 rounded-md hover:bg-pink-700"
          >
            Calcular
          </button>
        </form>

        {dadosGrafico && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">Evolução do Investimento</h3>
            <svg
              width="100%"
              height="300"
              viewBox="0 0 1000 300"
              className="border border-gray-300 rounded-md"
            >
              <g>
                <path
                  fill="none"
                  stroke="rgb(75, 192, 192)"
                  strokeWidth="3"
                  d={`M 0,${300 - dadosGrafico.valores[0] * scaleFactor} ${
                    dadosGrafico.valores
                      .map((valor, index) => `L ${(index + 1) * (1000 / dadosGrafico.valores.length)},${300 - valor * scaleFactor}`)
                      .join(' ')
                  }`}
                />
                {dadosGrafico.valores.map((valor, index) => (
                  <circle
                    key={index}
                    cx={(index + 1) * (1000 / dadosGrafico.valores.length)}
                    cy={300 - valor * scaleFactor}
                    r="4"
                    fill="rgb(75, 192, 192)"
                  />
                ))}
              </g>
              <g>
                {dadosGrafico.labels.map((label, index) => (
                  <text
                    key={index}
                    x={(index + 1) * (1000 / dadosGrafico.labels.length)}
                    y="320"
                    fontSize="12"
                    textAnchor="middle"
                    fill="gray"
                  >
                    {label}
                  </text>
                ))}
              </g>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
