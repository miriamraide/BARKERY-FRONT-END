
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-blue-400 py-6 w-full">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
      <section id="contacto" className="contacto-section"></section>
        {/* Columna 1 */}
        <div>
          <h3 className="text-red-700 tracking-widest text-xl sm:text-2xl font-bold uppercase mb-4">
            Barkery Pet Shop
          </h3>
          <p className="text-blackish font-bold mb-4">
            Nuestros productos son realizados con materiales reciclados. Nuestros alimentos orgánicos son producidos con los más altos estándares de calidad.
          </p>
          <p className="mb-4">🐶❤️</p>
          <a
            href="https://www.youtube.com/shorts/0O8I0xtQFP8"
            target="_blank"
            className="inline-block bg-red-600 text-white py-2 px-4 text-sm rounded-full"
          >
            Visita Nuestro Canal de Youtube
          </a>
        </div>

        {/* Columna 2 */}
        <div className="text-center">
          <h3 className="text-red-700 font-extrabold text-xl mb-4">
            Contacto
          </h3>
          <p className="text-blackish font-bold">San Martin 1512</p>
          <p className="text-blackish font-bold">
            Buenos Aires - Capital - CP 1912
          </p>
          <p className="text-blackish font-bold">Teléfono: (11) 312-852-2134</p>
          <div className="flex justify-center mt-4">
            <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={35} />
            </a>
          </div>
        </div>

        {/* Columna 3 */}
        <div>
          <h3 className="text-red-700 font-extrabold text-xl mb-4">
            Síguenos en Social Media
          </h3>
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <BsFacebook size={30} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <BsInstagram size={30} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <BsTwitterX size={30} />
            </a>
          </div>
          <div className="text-center font-extrabold">
            <BiCopyright className="inline-block" /> 2024 - The A Team
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



