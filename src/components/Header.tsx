import { Menu, Search } from 'lucide-react';

interface HeaderProps {
  showMobileMenu: boolean;
  setShowMobileMenu: (show: boolean) => void;
}

export default function Header({ showMobileMenu, setShowMobileMenu }: HeaderProps) {
  return (
    <header className="bg-[#c4170c] sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-4">
          <button
            className="text-white"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <Menu className="w-6 h-6" />
          </button>

          <img
            src="/Logotipo_g1.svg"
            alt="G1"
            className="h-7 w-auto brightness-0 invert"
          />
        </div>

        <span className="text-white text-base md:text-lg font-normal uppercase tracking-wider">
          SAÚDE
        </span>

        <button className="text-white">
          <Search className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
