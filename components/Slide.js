
import React from 'react';
import Image from 'next/image';

const Slide = ({ img, title, mainTitle, price }) => {
  return (
    <div className="relative">
       <section id="inicio" className="inicio-section mt-10"/>
      {/* Imagen del banner */}
      <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] relative">
      <Image
          src={img}
          alt="banner"
          fill  // Se utiliza "fill" en lugar de "layout='fill'"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Contenido superpuesto */}
      <div className="absolute inset-0 flex items-center justify-end p-4 lg:p-8 bg-gradient-to-r from-transparent via-black/30 to-black/70 rounded-xl">
        <div className="text-right max-w-[300px] sm:max-w-[400px]">
          <h2 className="text-yellow-300 text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
            {title}
          </h2>
          <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-semibold mb-4">
            {mainTitle}
          </h3>
          <h4 className="text-blue-400 text-lg sm:text-xl lg:text-2xl font-bold mb-6">
            {price}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Slide;
