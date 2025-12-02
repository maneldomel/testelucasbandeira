import Sidebar from '../components/Sidebar';

interface Question2Props {
  onSelect: (value: string) => void;
}

export default function Question2({ onSelect }: Question2Props) {
  const options = [
    { label: 'Regular', desc: 'Peso normal com algumas áreas para melhorar' },
    { label: 'Flácido', desc: 'Peso adequado mas com pouco tônus muscular' },
    { label: 'Sobrepeso', desc: 'Acima do peso ideal' },
    { label: 'Obeso', desc: 'Muito acima do peso ideal' }
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
              Como você classificaria seu corpo hoje?
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              Seja sincero, isso nos ajudará a personalizar seu protocolo
            </p>

            <div className="space-y-4">
              {options.map((option) => (
                <button
                  key={option.label}
                  onClick={() => onSelect(option.label)}
                  className="w-full bg-white border-2 border-gray-200 hover:border-[#c4170c] hover:bg-red-50 p-4 md:p-6 rounded-lg text-left transition-all transform hover:scale-102 group"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-[#c4170c] mb-1">
                        {option.label}
                      </div>
                      <div className="text-xs md:text-sm text-gray-600">
                        {option.desc}
                      </div>
                    </div>
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
