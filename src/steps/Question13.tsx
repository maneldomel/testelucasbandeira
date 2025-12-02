import { useState } from 'react';
import Sidebar from '../components/Sidebar';

interface Question13Props {
  currentWeight: number;
  onSubmit: (value: number) => void;
}

export default function Question13({ currentWeight, onSubmit }: Question13Props) {
  const [goalWeight, setGoalWeight] = useState(Math.max(40, currentWeight - 10));

  const handleSubmit = () => {
    onSubmit(goalWeight);
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
              Qual é seu peso desejado?
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              Defina sua meta de peso ideal
            </p>

            <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6 md:p-8 mb-6 md:mb-8">
              <div className="text-center mb-6">
                <div className="text-4xl md:text-5xl font-bold text-[#c4170c] mb-2">
                  {goalWeight} kg
                </div>
                <p className="text-sm text-gray-600">Peso Desejado</p>

                {currentWeight > goalWeight && (
                  <div className="mt-4 p-3 md:p-4 bg-red-100 border border-red-300 rounded-lg">
                    <p className="text-base md:text-lg font-semibold text-gray-900">
                      Você quer perder: <span className="text-[#c4170c]">{currentWeight - goalWeight} kg</span>
                    </p>
                  </div>
                )}
              </div>

              <input
                type="range"
                min="40"
                max={currentWeight}
                value={goalWeight}
                onChange={(e) => setGoalWeight(Number(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#c4170c]"
              />

              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>40 kg</span>
                <span>{currentWeight} kg</span>
              </div>
            </div>

            <button
              onClick={handleSubmit}
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
