export default function Agradecimento() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-pink-600 mb-4">Agradecimentos</h1>
        <p className="text-gray-700 text-lg">
          Criadoras e Idealizadoras do Projeto Fluxe um Banco digital para todos os públicos.
        </p>
        <div className="mt-8 space-y-4">
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-pink-500">Flávia</h2>
            <p className="text-gray-600">Por sua expertise e dedicação em tornar este projeto possível.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-pink-500">Suellyn</h2>
            <p className="text-gray-600">Pelo comprometimento e ideias inovadoras que enriqueceram este trabalho.</p>
          </div>
        </div>
        <p className="mt-8 text-gray-600 text-sm">
          Obrigado Pela Atenção!
        </p>
      </div>
    </div>
  );
}
