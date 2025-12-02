import Sidebar from '../components/Sidebar';

interface DiagnosisProps {
  currentWeight: number;
  height: number;
  goalWeight: number;
  onContinue: () => void;
}

export default function Diagnosis({ currentWeight, height, goalWeight, onContinue }: DiagnosisProps) {
  const bmi = (currentWeight / Math.pow(height / 100, 2)).toFixed(1);
  const toLose = currentWeight - goalWeight;

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return { label: 'Abaixo do Peso', color: 'text-[#c4170c]', bg: 'bg-red-50', border: 'border-[#c4170c]' };
    if (bmi < 25) return { label: 'Peso Normal', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-500' };
    if (bmi < 30) return { label: 'Sobrepeso', color: 'text-[#c4170c]', bg: 'bg-red-50', border: 'border-[#c4170c]' };
    if (bmi < 35) return { label: 'Obesidade Grau I', color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-500' };
    if (bmi < 40) return { label: 'Obesidade Grau II', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-500' };
    return { label: 'Obesidade Grau III', color: 'text-red-800', bg: 'bg-red-50', border: 'border-red-700' };
  };

  const category = getBMICategory(Number(bmi));

  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl">
      <div className="flex flex-col lg:flex-row gap-6">
        <main className="flex-1">
          <div className="max-w-3xl mx-auto">
            <div className="text-xs text-gray-500 font-semibold mb-3 uppercase tracking-wide border-l-4 border-red-600 pl-2">
              ALERTA METABÓLICA
            </div>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-gray-900 mb-4 md:mb-6">
              Diagnóstico do Seu Metabolismo
            </h2>

            <div className={`${category.bg} border-2 ${category.border} rounded-lg p-6 md:p-8 mb-6 md:mb-8`}>
              <div className="text-center mb-6">
                <div className={`text-4xl md:text-6xl font-bold ${category.color} mb-2`}>
                  {bmi}
                </div>
                <p className={`text-lg md:text-xl font-semibold ${category.color} mb-1`}>
                  {category.label}
                </p>
                <p className="text-sm text-gray-600">Índice de Massa Corporal (IMC)</p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white rounded-lg p-3 md:p-4 text-center">
                  <p className="text-xs md:text-sm text-gray-600 mb-1">Peso Atual</p>
                  <p className="text-xl md:text-2xl font-bold text-gray-900">{currentWeight} kg</p>
                </div>
                <div className="bg-white rounded-lg p-3 md:p-4 text-center">
                  <p className="text-xs md:text-sm text-gray-600 mb-1">Peso Desejado</p>
                  <p className="text-xl md:text-2xl font-bold text-gray-900">{goalWeight} kg</p>
                </div>
                <div className="bg-white rounded-lg p-3 md:p-4 text-center">
                  <p className="text-xs md:text-sm text-gray-600 mb-1">Meta</p>
                  <p className="text-xl md:text-2xl font-bold text-[#c4170c]">-{toLose} kg</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border-l-4 border-[#c4170c] p-4 md:p-6 mb-6 md:mb-8">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
                O que está acontecendo com seu metabolismo?
              </h3>
              <div className="space-y-3 text-sm md:text-base text-gray-700">
                <p>
                  <strong>Metabolismo Lento:</strong> Suas células adiposas estão em modo de armazenamento, dificultando a queima de gordura natural.
                </p>
                <p>
                  <strong>Células Adiposas Adormecidas:</strong> O corpo não está queimando gordura de forma eficiente, causando acúmulo especialmente na região abdominal.
                </p>
                <p>
                  <strong>Resistência à Perda de Peso:</strong> Seu organismo está programado para manter o peso atual, dificultando qualquer tentativa de emagrecimento.
                </p>
              </div>
            </div>

            <div className="bg-white border-2 border-[#c4170c] rounded-lg p-4 md:p-6 mb-6 md:mb-8">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 text-center">
                A Boa Notícia
              </h3>
              <p className="text-base md:text-lg text-gray-700 text-center mb-4">
                O Protocolo Gelatina Bariátrica foi desenvolvido especificamente para <strong>reverter</strong> essas condições e reativar seu metabolismo em apenas 7 dias.
              </p>
              <div className="bg-red-50 p-3 md:p-4 rounded-lg">
                <p className="text-center text-gray-900">
                  <span className="text-xl md:text-2xl font-bold text-[#c4170c]">Potencial de perda: {toLose} kg</span>
                  <br />
                  <span className="text-sm text-gray-600">em 30-45 dias com o protocolo</span>
                </p>
              </div>
            </div>

            <button
              onClick={onContinue}
              className="w-full bg-[#c4170c] hover:bg-[#a01309] text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg text-base md:text-lg transition-all transform hover:scale-102 uppercase"
            >
              Ver como o protocolo funciona
            </button>
          </div>
        </main>

        <Sidebar />
      </div>
    </div>
  );
}
