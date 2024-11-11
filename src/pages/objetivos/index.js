import Image from 'next/image';

export default function Objetivos() {
  const objetivos = [
    {
      nome: 'Moto',
      descricao: 'Uma moto econômica para o dia a dia.',
      total: 15000,
      economizado: 5000,
      prazo: 'Dezembro 2024',
      imagem: '/moto.jpg', // Certifique-se de ter essa imagem na pasta public
    },
    {
      nome: 'Viagem',
      descricao: 'Uma viagem dos sonhos para o exterior.',
      total: 10000,
      economizado: 2500,
      prazo: 'Janeiro 2026',
      imagem: '/travel.jpg', // Certifique-se de ter essa imagem na pasta public
    },
    {
      nome: 'Carro',
      descricao: 'Um carro compacto para viagens e lazer.',
      total: 50000,
      economizado: 20000,
      prazo: 'Julho 2025',
      imagem: '/car.jpg', // Certifique-se de ter essa imagem na pasta public
    },

  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Objetivos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {objetivos.map((objetivo, index) => {
          const porcentagemEconomizada = (objetivo.economizado / objetivo.total) * 100;
          const falta = objetivo.total - objetivo.economizado;

          return (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={objetivo.imagem}
                  alt={objetivo.nome}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">{objetivo.nome}</h2>
              <p className="text-gray-600 mb-2">{objetivo.descricao}</p>
              <p className="text-gray-700">
                <strong>Total Necessário:</strong> R$ {objetivo.total.toFixed(2)}
              </p>
              <p className="text-gray-700">
                <strong>Economizado:</strong> R$ {objetivo.economizado.toFixed(2)} ({porcentagemEconomizada.toFixed(1)}%)
              </p>
              <p className="text-gray-700">
                <strong>Falta:</strong> R$ {falta.toFixed(2)}
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Prazo:</strong> {objetivo.prazo}
              </p>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-indigo-600 h-4 rounded-full"
                  style={{ width: `${porcentagemEconomizada}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
