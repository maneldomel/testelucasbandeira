import Sidebar from '../components/Sidebar';

interface Question10Props {
  onContinue: () => void;
}

export default function Question10({ onContinue }: Question10Props) {
  const stories = [
    {
      name: 'Paula',
      age: 32,
      lost: '10 kg',
      time: '3 meses',
      image: '/historias-reais/paulinha-antes-depois2.webp',
      testimonial: 'Nunca pensei que poderia emagrecer sem sofrer! O protocolo mudou minha vida completamente.'
    },
    {
      name: 'Miriellen',
      age: 28,
      lost: '15 kg',
      time: '2 meses',
      image: '/historias-reais/emagrecimento-antes-depois-miriellen-1018-1400x1403.jpg.jpg',
      testimonial: 'Depois de tentar tantas dietas, finalmente encontrei algo que funciona de verdade. Estou muito feliz!'
    },
    {
      name: 'Juliana',
      age: 35,
      lost: '22 kg',
      time: '4 meses',
      image: '/historias-reais/70_f1_1_0.jpg',
      testimonial: 'Incrível como minha autoestima melhorou! Me sinto outra pessoa, cheia de energia e confiança.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl">
      <div className="flex flex-col lg:flex-row gap-6">
        <main className="flex-1">
          <div className="max-w-4xl mx-auto">
            <div className="text-xs text-gray-500 font-semibold mb-3 uppercase tracking-wide border-l-4 border-[#c4170c] pl-2">
              HISTÓRIAS REAIS
            </div>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-gray-900 mb-3">
              Histórias Reais de Transformação com o Protocolo Gelatina Bariátrica
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              Veja os resultados reais de pessoas que transformaram suas vidas
            </p>

            <div className="space-y-6 md:space-y-8 mb-6 md:mb-8">
              {stories.map((story, idx) => (
                <div key={idx} className="bg-white border-2 border-gray-200 rounded-lg p-4 md:p-6">
                  <div className="mb-4">
                    <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-1">{story.name}, {story.age} anos</h3>
                    <p className="text-base md:text-lg text-[#c4170c] font-semibold">Perdeu {story.lost} em {story.time}</p>
                  </div>

                  <div className="mb-4">
                    <img src={story.image} alt={`Transformação de ${story.name}`} className="w-full rounded-lg" />
                  </div>

                  <p className="text-gray-700 italic text-sm md:text-lg">"{story.testimonial}"</p>
                </div>
              ))}
            </div>

            <button
              onClick={onContinue}
              className="w-full bg-[#c4170c] hover:bg-[#a01309] text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg text-base md:text-lg transition-all transform hover:scale-102 uppercase"
            >
              Continuar para meu teste
            </button>
          </div>
        </main>

        <Sidebar />
      </div>
    </div>
  );
}
