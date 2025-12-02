import { useEffect } from 'react';

interface LoadingProps {
  onComplete: () => void;
}

export default function Loading({ onComplete }: LoadingProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <div className="w-24 h-24 border-8 border-[#c4170c] border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
            Aguarde enquanto preparamos seu Protocolo...
          </h2>
          <p className="text-lg text-gray-700">
            Estamos analisando suas respostas e criando um plano personalizado para você
          </p>
        </div>

        <div className="space-y-3 text-left bg-white rounded-lg p-6 shadow-lg">
          <div className="flex items-center gap-3 text-gray-700">
            <div className="w-6 h-6 bg-[#c4170c] rounded-full flex items-center justify-center text-white text-sm font-bold">✓</div>
            <span>Calculando seu IMC...</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <div className="w-6 h-6 bg-[#c4170c] rounded-full flex items-center justify-center text-white text-sm font-bold">✓</div>
            <span>Analisando seu metabolismo...</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <div className="w-6 h-6 bg-[#c4170c] rounded-full flex items-center justify-center text-white text-sm font-bold animate-pulse">...</div>
            <span>Criando protocolo personalizado...</span>
          </div>
        </div>
      </div>
    </div>
  );
}
