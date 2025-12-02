import Sidebar from '../components/Sidebar';

interface Question14Props {
  onSelect: (value: string) => void;
}

export default function Question14({ onSelect }: Question14Props) {
  const options = [
    'Só café ou chá',
    '1-2 copos',
    '3-6 copos',
    'Mais de 6 copos'
  ];

  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl">
      <div className="flex flex-col lg:flex-row gap-6">
        <main className="flex-1">
          <div className="max-w-3xl mx-auto">
            <div className="text-xs text-gray-500 font-semibold mb-3 uppercase tracking-wide border-l-4 border-[#c4170c] pl-2">
              TESTE PERSONALIZADO
            </div>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-gray-900 mb-3">
              Quantos copos de água você bebe por dia?
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              A hidratação é fundamental para o sucesso do protocolo
            </p>

            <div className="space-y-4">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => onSelect(option)}
                  className="w-full bg-white border-2 border-gray-200 hover:border-[#c4170c] hover:bg-red-50 p-4 md:p-6 rounded-lg text-left transition-all transform hover:scale-102 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-[#c4170c]">
                      {option}
                    </span>
                    <span className="text-[#c4170c] text-xl md:text-2xl">→</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </main>

        <Sidebar />
      </div>
    </div>
  );
}
