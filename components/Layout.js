
import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Store } from "../utils/Store";
import Image from "next/image";

export default function Layout({ title, children }) {
  const { state } = useContext(Store);
  const { cart } = state;

  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false); // Estado para manejar la visibilidad del menú

  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

// Función para alternar la visibilidad del menú
const toggleMenu = () => {
  setIsOpen(!isOpen);
};


  return (
    <div>
      <Head>
        <title>{title ? `${title} - Barkery` : "Barkery"}</title>
      </Head>

      {/* Navbar */}
      <nav className="bg-blue-500 py-1 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-[160px] h-[100px]">
              <Image
                src="/barkery-logo.jpg"
                alt="BARKERY - Pet Shop"
                fill
                style={{ objectFit: "contain" }}
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
          {/* Menú de navegación - Visible en pantallas grandes */}
          <ul
            className={`lg:flex gap-6 items-center text-white font-bold text-lg lg:text-3xl ${isOpen ? "block" : "hidden"} lg:block`}>
          
            <li>
              <Link href="#inicio" className= "navbar-link hover:text-orange-400">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="#productos" className= "navbar-link hover:text-orange-400">
                Productos
              </Link>
            </li>
            <li>
              <Link href="#ofertas" className="navbar-link hover:text-orange-400">
                Ofertas
              </Link>
            </li>
            <li>
              <Link href="#contacto" className="navbar-link hover:text-orange-400">
                Contacto
              </Link>
            </li>
            {/* Carrito */}
            <li>
              <Link href="/cart" className="navbar-link hover:text-orange-400 flex items-center">
                Mi Carrito
                <span className="ml-2 text-sm bg-red-500 text-white rounded-full px-2 py-1">
                  {cartItemsCount}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

     <main>{children}</main>
    </div>
  );
}
