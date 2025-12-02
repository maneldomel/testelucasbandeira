import Sidebar from '../components/Sidebar';

interface Question9Props {
  onContinue: () => void;
}

export default function Question9({ onContinue }: Question9Props) {
  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl">
      <div className="flex flex-col lg:flex-row gap-6">
        <main className="flex-1">
          <div className="max-w-3xl mx-auto">
            <div className="text-xs text-gray-500 font-semibold mb-3 uppercase tracking-wide border-l-4 border-[#c4170c] pl-2">
              TESTE PERSONALIZADO
            </div>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-gray-900 mb-4 md:mb-6">
              Você conhece o Protocolo Gelatina Bariátrica?
            </h2>

            <div className="bg-gray-50 border-l-4 border-[#c4170c] p-4 md:p-6 mb-6 md:mb-8">
              <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-3 md:mb-4">
                O Protocolo Gelatina Bariátrica é um método científico que atua diretamente nas células adiposas do intestino, criando uma camada de saciedade natural que:
              </p>
              <ul className="space-y-2 text-sm md:text-base text-gray-800">
                <li className="flex items-start gap-2">
                  <span className="text-[#c4170c] font-bold">✓</span>
                  <span>Reduz a fome e ansiedade alimentar</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c4170c] font-bold">✓</span>
                  <span>Acelera o metabolismo em até 300%</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c4170c] font-bold">✓</span>
                  <span>Permite perder de 3 a 5 kg na primeira semana</span>
                </li>
              </ul>
            </div>

            <img
              src="/minha-vida-gelatina-amp_hero-1.webp"
              alt="Gelatina Bariátrica"
              className="w-full rounded-lg mb-8"
            />

            <button
              onClick={onContinue}
              className="w-full bg-[#c4170c] hover:bg-[#a01309] text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg text-base md:text-lg transition-all transform hover:scale-102 uppercase"
            >
              Continuar
            </button>
          </div>
        </main>

        <Sidebar />
      </div>
    </div>
  );
}
