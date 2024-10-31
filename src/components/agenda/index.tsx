import React, { useState, useEffect } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import styles from './styles.module.css';

// Dados dos cards
const dadosAgenda = [
  { id: 1, src: '/assets/Agenda/agenda01.jpg', title: 'Segunda Rock', description: 'Toda segunda os maiores sucessos dos anos 80 e 90 ' },
  { id: 2, src: '/assets/Agenda/agenda02.jpg', title: 'Queen Cover', description: 'Relembre os maiores clássicos da banda que marcou gerações: Bohemian Rhapsody, We Will Rock You, We Are the Champions, Radio Ga Ga e muitos outros hinos imortais' },
  { id: 3, src: '/assets/Agenda/agenda03.jpg', title: 'GNR Cover', description: 'Guns n Roses cover reproduz com fidelidade o som, a energia e a atitude do Guns N Roses, com um show que vai te fazer cantar e pular do início ao fim!' },
  { id: 4, src: '/assets/Agenda/agenda04.jpg', title: 'Sabado de Humor', description: 'Na sexta stand-up traz o melhor do humor com piadas hilárias, observações perspicazes e histórias engraçadas que vão te fazer gargalhar do início ao fim! 🤣' },
  
];

export default function Agenda() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  const updateCardsToShow = () => {
    if (window.innerWidth <= 768) {
      setCardsToShow(1);
    } else if (window.innerWidth <= 1024) {
      setCardsToShow(2);
    } else {
      setCardsToShow(3);
    }
  };

  useEffect(() => {
    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + cardsToShow >= dadosAgenda.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? dadosAgenda.length - cardsToShow : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [cardsToShow]);

  return (
    <div className={styles.containerAgenda}>
      <div className={styles.containerAgendaUp}>

        <h2>Agenda da Semana</h2>

      </div>

      <div className={styles.carouselContainer}>

        <button onClick={prevSlide} className={`${styles.button} ${styles.prevButton}`}>
          <AiOutlineLeft />
        </button>
        
        <div className={styles.carouselContainerDown}>
          <div
            className={styles.cardContainer}
            style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
          >
            {dadosAgenda.map((card) => (
              <div key={card.id} className={styles.card}>
                
                <img src={card.src} alt={card.title}  className={styles.carouselImage}/>

                <div className={styles.carouselCardIn}>
                  <h3 className={styles.carouselCardTitle}>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
                
              </div>
            ))}
          </div>
        </div>
        
        <button onClick={nextSlide} className={`${styles.button} ${styles.nextButton}`}>
          <AiOutlineRight />
        </button>
      </div>
    </div>
  );
}
