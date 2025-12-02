import { User } from 'lucide-react';
import Sidebar from '../components/Sidebar';

interface VideoCommentsProps {
  onContinue: () => void;
}

export default function VideoComments({ onContinue }: VideoCommentsProps) {
  const comments = [
    {
      name: 'Marina Silva',
      time: '2 dias atrás',
      text: 'Comecei hoje! Já senti menos fome no almoço. Muito animada com os resultados! 🙏',
      likes: 243
    },
    {
      name: 'Paula Costa',
      time: '5 dias atrás',
      text: 'Gente, já perdi 4kg em uma semana!!! Não acredito que finalmente encontrei algo que funciona de verdade! ❤️',
      likes: 567
    },
    {
      name: 'Juliana Fernandes',
      time: '1 semana atrás',
      text: 'Minha mãe começou há 3 semanas e já perdeu 9kg. Estou fazendo também agora. Protocolo incrível!',
      likes: 389
    },
    {
      name: 'Carla Mendes',
      time: '1 semana atrás',
      text: 'Alguém mais sentindo muito mais energia? Eu estou dormindo melhor também!',
      likes: 421
    },
    {
      name: 'Ana Paula Rodrigues',
      time: '2 semanas atrás',
      text: 'Perdi 12kg em 30 dias sem passar fome. Melhor decisão que tomei! Obrigada por compartilhar isso 🙌',
      likes: 892
    },
    {
      name: 'Beatriz Santos',
      time: '2 semanas atrás',
      text: 'Comecei cética, mas os resultados não mentem. 7kg em 3 semanas e ainda estou chocada!',
      likes: 654
    }
  ];

  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl">
      <div className="flex flex-col lg:flex-row gap-6">
        <main className="flex-1">
          <div className="max-w-4xl mx-auto">
            <div className="text-xs text-gray-500 font-semibold mb-3 uppercase tracking-wide border-l-4 border-[#c4170c] pl-2">
              DEPOIMENTOS
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              O que as pessoas estão dizendo
            </h2>

            <div className="bg-gray-900 rounded-lg overflow-hidden mb-8">
              <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#c4170c] rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-0 h-0 border-l-[16px] border-l-transparent border-t-[12px] border-t-gray-900 border-b-[12px] border-b-gray-900 ml-1"></div>
                  </div>
                  <p className="text-white text-lg">Veja depoimentos reais em vídeo</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Comentários</h3>
                <span className="text-sm text-gray-600">{comments.length} comentários</span>
              </div>

              <div className="space-y-6">
                {comments.map((comment, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-gray-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-semibold text-gray-900">{comment.name}</span>
                          <span className="text-xs text-gray-500">{comment.time}</span>
                        </div>
                        <p className="text-gray-700">{comment.text}</p>
                      </div>
                      <div className="mt-2 flex items-center gap-4 text-sm text-gray-600">
                        <button className="hover:text-[#c4170c]">👍 {comment.likes}</button>
                        <button className="hover:text-[#c4170c]">Responder</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-red-50 border-2 border-[#c4170c] rounded-lg p-8 text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Está pronta para ter seu próprio depoimento de sucesso?
              </h3>
              <p className="text-lg text-gray-700">
                Milhares de pessoas já transformaram suas vidas. Você pode ser a próxima!
              </p>
            </div>

            <button
              onClick={onContinue}
              className="w-full bg-[#c4170c] hover:bg-[#a01309] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-102 uppercase"
            >
              Quero meu protocolo gratuito
            </button>
          </div>
        </main>

        <Sidebar />
      </div>
    </div>
  );
}
