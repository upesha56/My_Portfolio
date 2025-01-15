import { useState } from 'react';
import { navLinks } from '../utils/dataBase';
import Image from 'next/image';
import Button from './Button';
import { MenuIcon, X } from 'lucide-react';

function Nav({ className }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = id => {
    document
      .getElementById(id)
      .scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    setIsOpen(false);
  };

  const renderLinks = () => {
    return navLinks.map(({ id, label }) => (
      <li
        key={id}
        className="text-sm font-semibold text-gray-900 transition cursor-pointer hover:text-[#0B7474]"
        onClick={() => handleLinkClick(id)}
      >
        {label}
      </li>
    ));
  };

  return (
    <nav
      className={`z-50 transition p-4 duration-500 ease-out bg-white border-b ${className}`}
    >
      <div className="flex items-center justify-between max-w-screen-2xl mx-auto h-20">
        <div className="z-30">
          <Image
            src="/logo.png"
            alt="logo"
            className="transition-transform duration-300 cursor-pointer hover:-rotate-6"
            width={150}
            height={30}
          />
        </div>

        <div className="items-center hidden gap-6 md:flex z-50">
          <ul className="flex items-center gap-6">{renderLinks()}</ul>
          <a
            href="/CV.pdf" // Replace with the actual file path
            download="Imandi_Upesha_CV.pdf" // The name of the downloaded file
            className="text-white bg-[#10adad] px-4 py-2 rounded-md hover:bg-[#0B7474]"
          >
            Download CV
          </a>
        </div>

        <button className="z-30 md:hidden" onClick={handleMenuToggle}>
          {isOpen ? <X /> : <MenuIcon />}
        </button>

        <div
          className={`fixed bg-white md:hidden z-10 left-0 w-full p-4 transition-all duration-500 ease-in-out ${
            isOpen
              ? 'top-[4rem] translate-y-0 opacity-100'
              : '-translate-y-[200%] opacity-0'
          }`}
        >
          <ul className="flex flex-col items-center gap-4">
            {renderLinks()}
            <a
              href="/CV.pdf" // Replace with the actual file path
              download="My-CV.pdf" // The name of the downloaded file
              className="text-white bg-[#10adad] px-4 py-2 rounded-md hover:bg-[#0B7474]"
            >
              Download CV
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
