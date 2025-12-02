import Sidebar from '../components/Sidebar';

interface ComparisonProps {
  onContinue: () => void;
}

export default function Comparison({ onContinue }: ComparisonProps) {
  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl">
      <div className="flex flex-col lg:flex-row gap-6">
        <main className="flex-1">
          <div className="max-w-4xl mx-auto">
            <div className="text-xs text-gray-500 font-semibold mb-3 uppercase tracking-wide border-l-4 border-[#c4170c] pl-2">
              COMPARATIVO
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              Sua Vida com e sem o Protocolo
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-3xl">✘</span>
                  <h3 className="text-2xl font-bold text-red-700">Sem o Protocolo</h3>
                </div>
                <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✘</span>
                    <span>Continuar com sobrepeso e baixa autoestima</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✘</span>
                    <span>Dietas restritivas que geram efeito sanfona</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✘</span>
                    <span>Ansiedade e compulsão alimentar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✘</span>
                    <span>Falta de energia e disposição</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✘</span>
                    <span>Vergonha de tirar fotos e ir a eventos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✘</span>
                    <span>Problemas de saúde relacionados ao peso</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✘</span>
                    <span>Frustração com métodos que não funcionam</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✘</span>
                    <span>Gastar dinheiro com soluções temporárias</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 border-2 border-green-400 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-3xl">✓</span>
                  <h3 className="text-2xl font-bold text-green-700">Com o Protocolo</h3>
                </div>
                <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>Perder 3 a 5 kg na primeira semana</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Emagrecer sem dieta restritiva</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Controlar ansiedade naturalmente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Aumentar energia e disposição</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Recuperar autoestima e confiança</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Melhorar saúde geral e bem-estar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>Sem efeito sanfona</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Método comprovado cientificamente</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 border-2 border-[#c4170c] rounded-lg p-8 text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                A Escolha é Sua
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Você pode continuar tentando métodos que não funcionam, ou pode dar uma chance ao único protocolo cientificamente comprovado que reativa seu metabolismo em 7 dias.
              </p>
              <p className="text-xl font-bold text-[#c4170c]">
                O que você escolhe?
              </p>
            </div>

            <button
              onClick={onContinue}
              className="w-full bg-[#c4170c] hover:bg-[#a01309] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-102 uppercase"
            >
              Quero experimentar o protocolo
            </button>
          </div>
        </main>

        <Sidebar />
      </div>
    </div>
  );
}
