import Sidebar from '../components/Sidebar';

interface TransformationProps {
  onContinue: () => void;
}

export default function Transformation({ onContinue }: TransformationProps) {
  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl">
      <div className="flex flex-col lg:flex-row gap-6">
        <main className="flex-1">
          <div className="max-w-4xl mx-auto">
            <div className="text-xs text-gray-500 font-semibold mb-3 uppercase tracking-wide border-l-4 border-[#c4170c] pl-2">
              CASO REAL
            </div>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-gray-900 mb-4 md:mb-6">
              A Transformação Inspiradora de Rosana Rocha
            </h2>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-4 md:p-8 mb-6 md:mb-8">
              <div className="mb-4 md:mb-6">
                <img
                  src="/historias-reais/Jennifer-Nielsen-before-after-18kg-weight-loss.jpg"
                  alt="Transformação de Rosana Rocha"
                  className="w-full rounded-lg"
                />
              </div>

              <div className="border-t-2 border-gray-200 pt-4 md:pt-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                  Como ela conseguiu?
                </h3>
                <div className="space-y-3 md:space-y-4 text-gray-700">
                  <p className="text-base md:text-lg">
                    Rosana, 38 anos, mãe de dois filhos, lutou durante anos contra o sobrepeso. Ela tentou inúmeras dietas, academias e até medicamentos, mas nada funcionava a longo prazo.
                  </p>
                  <p className="text-base md:text-lg">
                    "Eu estava desesperada. Minha autoestima estava no fundo do poço. Foi quando descobri o Protocolo Gelatina Bariátrica através de uma amiga," conta Rosana.
                  </p>
                  <div className="bg-red-50 border-l-4 border-[#c4170c] p-4 md:p-6">
                    <p className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                      Resultados de Rosana:
                    </p>
                    <ul className="space-y-2 text-sm md:text-base">
                      <li className="flex items-center gap-2">
                        <span className="text-[#c4170c] font-bold">✓</span>
                        <span><strong>18 kg eliminados</strong> em 60 dias</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#c4170c] font-bold">✓</span>
                        <span>Sem dieta restritiva ou academia</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#c4170c] font-bold">✓</span>
                        <span>Ansiedade alimentar controlada</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#c4170c] font-bold">✓</span>
                        <span>Energia triplicada</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#c4170c] font-bold">✓</span>
                        <span>Autoestima restaurada</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-lg italic">
                    "Pela primeira vez na vida, consegui emagrecer sem sofrer. O protocolo mudou completamente minha relação com a comida e meu corpo. Hoje me sinto livre e feliz!" - Rosana Rocha
                  </p>
                </div>
              </div>
            </div>

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
