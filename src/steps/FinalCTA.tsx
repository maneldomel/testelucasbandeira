import Sidebar from '../components/Sidebar';
import { appendParamsToUrl, trackInitiateCheckout } from '../utils/urlParams';

interface FinalCTAProps {
  name: string;
}

export default function FinalCTA({ name }: FinalCTAProps) {
  const handleCheckoutClick = () => {
    trackInitiateCheckout();
  };

  const checkoutUrl = appendParamsToUrl('https://pay.kiwify.com.br/mMavpsz');

  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl">
      <div className="flex flex-col lg:flex-row gap-6">
        <main className="flex-1">
          <div className="max-w-4xl mx-auto">
            <div className="text-xs text-gray-500 font-semibold mb-3 uppercase tracking-wide border-l-4 border-green-600 pl-2">
              SEU PROTOCOLO ESTÁ PRONTO
            </div>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-gray-900 mb-3 md:mb-4">
              Parabéns {name}! Seu Protocolo Personalizado Foi Criado
            </h2>
            <p className="text-base md:text-xl text-gray-700 mb-6 md:mb-8">
              Baseado nas suas respostas, preparamos um protocolo exclusivo que vai te ajudar a alcançar seus objetivos de forma natural e saudável.
            </p>

            <div className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-[#c4170c] rounded-lg p-6 md:p-8 mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 text-center">
                O Que Você Vai Receber:
              </h3>

              <div className="space-y-3 md:space-y-4 mb-6">
                <div className="flex gap-3 md:gap-4 bg-white rounded-lg p-3 md:p-4">
                  <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 bg-[#c4170c] rounded-full flex items-center justify-center text-white text-sm md:text-base font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-sm md:text-base text-gray-900 mb-1">Protocolo Personalizado</h4>
                    <p className="text-xs md:text-sm text-gray-700">Instruções completas adaptadas ao seu perfil e objetivos</p>
                  </div>
                </div>

                <div className="flex gap-4 bg-white rounded-lg p-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#c4170c] rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Gelatina Bariátrica Premium</h4>
                    <p className="text-gray-700">Fórmula científica que ativa seu metabolismo em 7 dias</p>
                  </div>
                </div>

                <div className="flex gap-4 bg-white rounded-lg p-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#c4170c] rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Guia de Implementação</h4>
                    <p className="text-gray-700">Passo a passo detalhado para maximizar seus resultados</p>
                  </div>
                </div>

                <div className="flex gap-4 bg-white rounded-lg p-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#c4170c] rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Suporte Especializado</h4>
                    <p className="text-gray-700">Acompanhamento para garantir seu sucesso</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-[#c4170c] rounded-lg p-4 md:p-6 text-center">
                <p className="text-sm text-gray-600 mb-2 uppercase font-semibold">Oferta Especial - Hoje</p>
                <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  PROTOCOLO COMPLETO
                </p>
                <p className="text-base md:text-lg text-gray-700 mb-4">
                  Tudo que você precisa para transformar seu corpo
                </p>
                <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-gray-600 mb-6">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Frete Grátis</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Garantia de 30 dias</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Suporte Incluso</span>
                </div>

                <a
                  href={checkoutUrl}
                  onClick={handleCheckoutClick}
                  className="inline-block w-full bg-[#c4170c] hover:bg-[#a01309] text-white font-bold py-4 md:py-5 px-6 md:px-8 rounded-lg text-lg md:text-xl transition-all transform hover:scale-105 uppercase shadow-lg"
                >
                  QUERO MEU PROTOCOLO AGORA
                </a>

                <p className="text-xs text-gray-500 mt-4">
                  ⏰ Oferta válida por tempo limitado
                </p>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <h3 className="font-bold text-green-900 mb-3">
                ✓ Garantia Incondicional de 30 Dias
              </h3>
              <p className="text-gray-700">
                Se você não perder pelo menos 3 kg na primeira semana ou não ficar completamente satisfeita com os resultados, devolvemos 100% do seu dinheiro. Sem perguntas, sem complicações.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 text-center text-sm text-gray-600">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                  <span className="text-2xl">🔒</span>
                </div>
                <p className="font-semibold">Pagamento Seguro</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                  <span className="text-2xl">📦</span>
                </div>
                <p className="font-semibold">Entrega Rápida</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                  <span className="text-2xl">✓</span>
                </div>
                <p className="font-semibold">Garantia Total</p>
              </div>
            </div>
          </div>
        </main>

        <Sidebar />
      </div>
    </div>
  );
}
