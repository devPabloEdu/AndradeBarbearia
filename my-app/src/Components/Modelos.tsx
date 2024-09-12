import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Corte1 from "../assets/cortes/1_resized.jpg";
import Corte2 from "../assets/cortes/2_resized_resized.jpg";
import Corte3 from "../assets/cortes/3_resized_resized.jpeg";
import Corte4 from "../assets/cortes/4_resized.jpg";

const ModelCarousel = () => {
    const settings = {
        dots: true, // Adiciona os pontinhos de navegação
        infinite: true, // Faz com que o carrossel continue rodando
        speed: 800,
        slidesToShow: 4, // Mostra uma imagem por vez
        slidesToScroll: 1, // Desliza uma imagem por vez
        autoplay: true, // Faz o carrossel rodar automaticamente
        autoplaySpeed: 1800, // Tempo de intervalo para o autoplay
    };

    const images = [
        Corte1,
        Corte2,
        Corte3,
        Corte4
    ];

    return   <div className='ModelosExemplos'>
        <h2>AlGUNS DE NOSSOS <span>TRABALHOS</span></h2>
        <div className="carousel-container">
        <Slider {...settings}>
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image} alt={`Slide ${index}`} className="carousel-image" />
                </div>
            ))}
        </Slider>
        </div>
    </div>
}
export default ModelCarousel;
