export default function Footer() {
  return (
    <footer className="bg-[#c4170c] py-6 mt-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <img
              src="/Logotipo_g1.svg"
              alt="G1"
              className="h-8 w-auto brightness-0 invert"
            />
            <span className="text-white text-sm font-light">
              últimas notícias
            </span>
          </div>
        </div>

        <div className="border-t border-white/20 pt-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white text-xs">
            <div>
              © Copyright 2000-2025 Globo Comunicação e Participações S.A.
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="hover:underline">princípios editoriais</a>
              <a href="#" className="hover:underline">política de privacidade</a>
              <a href="#" className="hover:underline">minha conta</a>
              <a href="#" className="hover:underline">anuncie conosco</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
