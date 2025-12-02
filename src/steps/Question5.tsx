import Sidebar from '../components/Sidebar';

interface Question5Props {
  name: string;
  onSelect: (value: string) => void;
}

export default function Question5({ name, onSelect }: Question5Props) {
  const options = [
    'Evito tirar fotos porque tenho vergonha',
    'Meu parceiro(a) já não me olha como antes',
    'Evito reuniões sociais',
    'Nenhuma opção'
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
              {name}, como seu peso afeta sua vida?
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              Entender isso nos ajuda a criar um protocolo mais eficiente para você
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
