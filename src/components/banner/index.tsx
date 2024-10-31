import styles from './styles.module.css';

import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

import React, { useState } from 'react';
import { useEffect } from 'react';


// Importando as imagens corretamente
const images = [
  '/assets/Banner/banner01.png',
  '/assets/Banner/banner02.png',
  '/assets/Banner/banner03.png',
  '/assets/Banner/banner04.png',
];

export default function Banner(){

  // Agora o useState está dentro do componente
  const [current, setCurrent] = useState(0);

  // mudando as pics do carrousel modo manual
  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // modo automatico para avanço das fotos
 useEffect(() => {
    const interval = setInterval(() => {

      nextSlide(); // chamando a função que avança a foto do carousel
    
    }, 3000); // chama a função a cada 3 segundos

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(interval);

  }, []); // Executa apenas uma vez ao montar o componente

  return(
    <>
    <div className={styles.containerBanner}>

      <div className={styles.carouselContainer}>

        <button onClick={prevSlide} className={styles.carouselBtn}>
          <AiOutlineLeft size={40}/>
        </button>
        <img 
          src={images[current]} 
          alt={`Slide ${current + 1}`} 
          className={styles.carouselImage} 
        />
        <button onClick={nextSlide} className={styles.carouselBtn}>
          <AiOutlineRight size={40}/>
        </button>
      </div>
    </div>
    </>
  )
}

