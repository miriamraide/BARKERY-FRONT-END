
import React from 'react';
import Slider from 'react-slick';
import Slide from "@/components/Slide";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const slideData = [
    {
      id: 1,
      title: "Correa con soporte para pasear a nuestros amigos caninos",
      mainTitle: "Super Segura, con correa extendible, realizada con materiales reciclados",
      img: "/bark-02-dogleash-support.jpg",
      price: "Precio con descuento: $28.000",
    },
    {
      id: 2,
      title: "Mochila para llevar mascotas pequeñas/como gatos",
      mainTitle: "Confeccionada por abuelas del Noreste Argentino, super liviana y flexible",
      img: "/bark-01-catbackpack.jpg",
      price: "Precio con descuento: $35.000",
    },
    {
      id: 3,
      title: "Cama moderna, ideal para mascotas pequeñas",
      mainTitle: "Super contemporánea, y muy original, para quienes buscan un estilo moderno",
      img: "/bark-23-catbed2.jpg",
      price: "Precio con descuento: $45.000",
    },
    {
      id: 4,
      title: "Pecera de vidrio acogedora adaptable a lugares pequeños",
      mainTitle: "Un estilo clásico para admirar a nuestros peces amigos",
      img: "/bark-05-fishbowl.jpg",
      price: "Precio con descuento: $55.000",
    },
    {
      id: 5,
      title: "Alimentador con semillas y néctar para pájaros",
      mainTitle: "Un atractivo para aves de distintos tipos y colores, fácil de instalar",
      img: "/bark-04-birdfeeder.jpg",
      price: "Precio con descuento: $25.000",
    },
    {
      id: 6,
      title: "Doble set of bowls para perros",
      mainTitle: "Realizado completamente con productos reciclados, este estilo de bowls es perfecto para adornar cualquier ambiente.",
      img: "/bark-03-dogbowls.jpg",
      price: "Precio con descuento: $32.000",
    },
    {
      id: 7,
      title: "Alimento orgánico para perros",
      mainTitle:  "Ingrededientes de alta calidad, desarrollado por nutricionistas.",
      img: "/bark-06-dogfood.jpg",
      price: "Precio con descuento: $5.000",
    },
    {
      id: 8,
      title: "Alimento orgánico para gatos",
      mainTitle:  "Ingrededientes de alta calidad, desarrollado por nutricionistas.",
      img: "/bark-07-catfood.jpeg",
      price: "Precio con descuento: $5.000",
    },
    {
      id: 9,
      title: "Alimento orgánico para peces",
      mainTitle:  "Ingrededientes de alta calidad, desarrollado por nutricionistas.",
      img: "/bark-09-fishfood.jpg",
      price: "Precio con descuento: $2.000",
    },
    {
      id: 10,
      title: "Cama estilo cueva a para nuestros amigos felinos",
      mainTitle:  "Realizado completamente con productos reciclados, este estilo de cama/cueva es perfecto para adornar cualquier ambiente.",
      img: "/bark-24-catbed3.jpeg",
      price: "Precio con descuento: $28.000",
    },
  ];

  return (
    <div className="container mx-auto px-4 pt-6 lg:pt-0 lg:pb-5 max-w-screen-lg">
      <Slider {...settings}>
        {slideData.map((item) => (
          <Slide
            key={item.id}
            img={item.img}
            title={item.title}
            mainTitle={item.mainTitle}
            price={item.price}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
