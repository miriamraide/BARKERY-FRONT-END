
import Link from 'next/link';
import Image from 'next/image'; 
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-blue-500 py-2 sticky top-0 z-50 w-full shadow-lg">
      {/* Contenedor principal sin márgenes automáticos */}
      <div className="flex justify-between items-center px-4 lg:px-0">
        
        {/* Logo alineado al margen izquierdo */}
        <Link href="/" className="navbar-brand flex items-center">
          <div className="relative w-[160px] h-[100px]"> {/* Ajusta las dimensiones del logo */}
            <Image
              src="/barkery-logo.jpg"
              alt="BARKERY - Pet Shop"
              fill
              style={{ objectFit: 'contain' }} // Para evitar que se deforme
            />
          </div>
        </Link>

        {/* Botón de menú para pantallas pequeñas */}
        <button 
          className="lg:hidden text-white text-3xl" 
          onClick={toggleMenu}
          aria-label="Abrir menú">
          ☰
        </button>

        {/* Menú de navegación */}
        <div 
          className={`flex-col lg:flex-row flex ${isOpen ? 'block' : 'hidden'} lg:flex items-center gap-4 lg:gap-10 font-bold text-white text-lg md:text-xl lg:text-2xl xl:text-3xl text-center mt-4 lg:mt-0`}>
          <Link className="navbar_link text-white hover:bg-orange-500 px-4 py-2 rounded-lg" href="#inicio">Inicio</Link>
          <Link className="navbar_link text-white hover:bg-orange-500 px-4 py-2 rounded-lg" href="#productos">Productos</Link>
          <Link className="navbar_link text-white hover:bg-orange-500 px-4 py-2 rounded-lg" href="/perros">Perros</Link>
          <Link className="navbar_link text-white hover:bg-orange-500 px-4 py-2 rounded-lg" href="/gatos">Gatos</Link>
          <Link className="navbar_link text-white hover:bg-orange-500 px-4 py-2 rounded-lg" href="/mascotas">Mascotas</Link>
          <Link className="navbar_link text-white hover:bg-orange-500 px-4 py-2 rounded-lg" href="/ofertas">Ofertas</Link>
          <Link className="navbar_link text-white hover:bg-orange-500 px-4 py-2 rounded-lg" href="#contacto">Contacto</Link> 
        </div>
      </div>
    </div>
  );
};

export default Navbar;






