import { useState } from 'react';
import Sidebar from '../components/Sidebar';

interface Question8Props {
  onSubmit: (values: string[]) => void;
}

export default function Question8({ onSubmit }: Question8Props) {
  const [selected, setSelected] = useState<string[]>([]);

  const options = [
    'Emagrecer sem efeito sanfona',
    'Dormir melhor',
    'Ter mais energia',
    'Aumentar autoestima',
    'Reduzir estresse'
  ];

  const toggleOption = (option: string) => {
    setSelected(prev =>
      prev.includes(option)
        ? prev.filter(o => o !== option)
        : [...prev, option]
    );
  };

  const handleContinue = () => {
    if (selected.length > 0) {
      onSubmit(selected);
    }
  };

  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl">
      <div className="flex flex-col lg:flex-row gap-6">
        <main className="flex-1">
          <div className="max-w-3xl mx-auto">
            <div className="text-xs text-gray-500 font-semibold mb-3 uppercase tracking-wide border-l-4 border-[#c4170c] pl-2">
              TESTE PERSONALIZADO
            </div>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-gray-900 mb-3">
              Quais benefícios você gostaria de ter?
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              Selecione todas as opções que você deseja
            </p>

            <div className="space-y-4 mb-8">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => toggleOption(option)}
                  className={`w-full border-2 p-4 md:p-6 rounded-lg text-left transition-all transform hover:scale-102 ${
                    selected.includes(option)
                      ? 'bg-red-50 border-[#c4170c]'
                      : 'bg-white border-gray-200 hover:border-red-300'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-5 h-5 md:w-6 md:h-6 rounded border-2 flex items-center justify-center ${
                      selected.includes(option)
                        ? 'bg-[#c4170c] border-[#c4170c]'
                        : 'border-gray-300'
                    }`}>
                      {selected.includes(option) && (
                        <span className="text-white font-bold">✓</span>
                      )}
                    </div>
                    <span className="text-base md:text-lg font-semibold text-gray-900">
                      {option}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={handleContinue}
              disabled={selected.length === 0}
              className={`w-full font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg text-base md:text-lg transition-all uppercase ${
                selected.length > 0
                  ? 'bg-[#c4170c] hover:bg-[#a01309] text-white transform hover:scale-102'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Continuar ({selected.length} selecionado{selected.length !== 1 ? 's' : ''})
            </button>
          </div>
        </main>

        <Sidebar />
      </div>
    </div>
  );
}
