import { useState } from 'react';
import Sidebar from '../components/Sidebar';

interface Question4Props {
  onSubmit: (value: string) => void;
}

export default function Question4({ onSubmit }: Question4Props) {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onSubmit(name.trim());
    }
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
              Para criar seu plano personalizado, precisamos do seu nome
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              Isso nos ajuda a tornar seu protocolo mais eficaz
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Escreva seu nome..."
                  className="w-full px-4 md:px-6 py-3 md:py-4 border-2 border-gray-200 rounded-lg text-base md:text-lg focus:border-[#c4170c] focus:outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#c4170c] hover:bg-[#a01309] text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg text-base md:text-lg transition-all transform hover:scale-102 uppercase"
              >
                Continuar
              </button>
            </form>
          </div>
        </main>

        <Sidebar />
      </div>
    </div>
  );
}
