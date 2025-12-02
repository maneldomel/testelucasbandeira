import Sidebar from '../components/Sidebar';

interface ArticleProps {
  onContinue: () => void;
}

export default function Article({ onContinue }: ArticleProps) {
  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl">
      <div className="flex flex-col lg:flex-row gap-6">
        <main className="flex-1">
          <article className="mb-8">
            <div className="text-xs text-[#c4170c] font-bold mb-3 uppercase tracking-wide">
              BEM ESTAR
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-4 leading-tight">
              INFLUENCER MEXICANA SURPREENDE SEUS FÃS AO REVELAR COMO PERDEU 8 KG COM UMA GELATINA BARIÁTRICA CONSUMIDA ANTES DAS REFEIÇÕES
            </h1>
            <p className="text-xl text-gray-700 mb-6 font-serif leading-relaxed">
              O mudança radical ocorreu depois que a influencer mexicana realizou um TESTE GRATUITO do Protocolo da Gelatina Bariátrica, que atua nas células adiposas do intestino e permite perder de 3 a 5 kg em apenas 7 dias – sem dieta, sem medicamentos e sem academia.
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-500 mb-6 pb-4 border-b border-gray-200">
              <span className="font-semibold">Redação Saúde</span>
              <span>•</span>
              <span>{new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            </div>

            <div className="prose prose-lg max-w-none font-serif">
              <img
                src="https://assets.tvnotas.com.mx/dims4/default/3a2d095/2147483647/strip/true/crop/1200x675+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fk3-prod-tvnotas.s3.us-west-2.amazonaws.com%2Fbrightspot%2F11%2F21%2F10057b3e495c90f013f93454cc3d%2Fplantilla-1200px-maf-50.png"
                alt="Influencer mexicana"
                className="w-full mb-6 rounded"
              />
              <p className="text-gray-900 leading-relaxed mb-4 text-xl">
                <strong>Uma influencer mexicana chocou seus milhões de seguidores ao revelar como perdeu 8 kg em poucas semanas usando um método natural e científico.</strong>
              </p>
              <p className="text-gray-800 leading-relaxed mb-4 text-lg">
                O protocolo chamado <strong>Gelatina Bariátrica</strong> é consumido antes das principais refeições e atua diretamente nas células adiposas do intestino, criando um efeito de saciedade natural e acelerando o metabolismo.
              </p>
              <p className="text-gray-800 leading-relaxed mb-4 text-lg">
                Segundo especialistas, este método revolucionário permite que o corpo entre em estado de queima de gordura acelerada, resultando em perda de 3 a 5 kg na primeira semana - sem dieta restritiva, sem remédios e sem precisar de academia.
              </p>
              <p className="text-gray-800 leading-relaxed mb-6 text-lg">
                Milhares de pessoas já experimentaram o protocolo e relataram resultados impressionantes:
              </p>

              <div className="bg-gray-50 border-l-4 border-[#c4170c] p-6 mb-8">
                <ul className="space-y-2 text-gray-800 text-lg">
                  <li className="flex items-start gap-2">
                    <span className="text-[#c4170c] font-bold">✓</span>
                    <span>Perda de 3 a 5 kg na primeira semana</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c4170c] font-bold">✓</span>
                    <span>Redução da ansiedade e compulsão alimentar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c4170c] font-bold">✓</span>
                    <span>Aceleração do metabolismo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c4170c] font-bold">✓</span>
                    <span>Sem efeito sanfona</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c4170c] font-bold">✓</span>
                    <span>Mais energia e disposição</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c4170c] font-bold">✓</span>
                    <span>Melhora do sono e digestão</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c4170c] font-bold">✓</span>
                    <span>Aumento da autoestima</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4 mt-8 pb-3 border-b border-gray-200">
                Como funciona o Protocolo da Gelatina Bariátrica?
              </h2>

              <img
                src="https://images.pexels.com/photos/6551415/pexels-photo-6551415.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Ciência"
                className="w-full mb-6 rounded"
              />

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 border border-gray-200 p-6">
                  <div className="text-4xl font-bold text-[#c4170c] mb-3">01</div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Saciedade Natural</h3>
                  <p className="text-base text-gray-700">Cria uma camada protetora no estômago que gera saciedade imediata e duradoura.</p>
                </div>
                <div className="bg-gray-50 border border-gray-200 p-6">
                  <div className="text-4xl font-bold text-[#c4170c] mb-3">02</div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Queima Acelerada</h3>
                  <p className="text-base text-gray-700">Ativa células adiposas dormentes no intestino para acelerar o metabolismo.</p>
                </div>
                <div className="bg-gray-50 border border-gray-200 p-6">
                  <div className="text-4xl font-bold text-[#c4170c] mb-3">03</div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Controle Hormonal</h3>
                  <p className="text-base text-gray-700">Regula hormônios da fome e ansiedade, eliminando a compulsão alimentar.</p>
                </div>
              </div>

              <div className="bg-red-50 border-2 border-[#c4170c] p-8 text-center mb-8">
                <p className="text-2xl font-bold text-gray-900 mb-4">
                  Quer descobrir quantos kg você pode perder com este método?
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Responda ao teste rápido e receba seu protocolo personalizado GRATUITO
                </p>
                <button
                  onClick={onContinue}
                  className="bg-[#c4170c] hover:bg-[#a01309] text-white font-bold py-4 px-8 text-lg transition-all transform hover:scale-105 uppercase"
                >
                  INICIAR MEU TESTE GRÁTIS AGORA
                </button>
              </div>
            </div>
          </article>
        </main>

        <Sidebar />
      </div>
    </div>
  );
}
