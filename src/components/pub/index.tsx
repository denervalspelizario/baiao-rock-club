import styles from './styles.module.css';

// material ui
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const dadosOPub = [
  {
    id: 1,
    src: '/assets/Pub/pub01.png',  // Caminho da imagem
    alt: 'imagem do pub 01', 
    title: 'Para Comer', 
    description: 'Surpreendente cardápio elaborado com suculentos Hamburguers artesanais, o tradicional Fish and Chips, crocantes Porções, pratos Grelhados, Saladas, Cremes e Sobremesas',
  },
  { 
    id: 2,
    src: '/assets/Pub/pub02.png',
    alt: 'imagem do pub 02',
    title: 'Para Beber', 
    description: 'Seleção de mais de 80 rótulos, entre Chopps e Cervejas artesanais, nacionais e importadas, além dos melhores Whiskys, Vinhos e Destilados de todo o mundo, e uma carta de Coquetéis sensacional!',
  },
  {
    id: 3,
    src: '/assets/Pub/pub03.png',
    alt: 'imagem do pub 03',
    title: 'Para Ouvir', 
    description: 'Uma programação musical impecável, com os melhores Músicos e Bandas da noite paulistana. Aqui você também assiste aos melhores Tributos além de atrações Internacionais.',
  },
];





export default function OPub(){
  return(
    <>
    <div className={styles.containerPub} id='pub'>
      <div className={styles.containerPubUp}>

        <h2>O Pub</h2>

      </div>
      <div className={styles.containerPubDown}>

        {dadosOPub.map((dados) => (

          <div className={styles.containerPubDownCard} key={dados.id}>

            <Card sx={{ width: 300, height: 350, borderRadius: 10, marginTop: 5 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={dados.src}
                  alt={dados.alt}
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div" sx={{fontFamily: 'Pacifico', color: '#d25c0d', fontWeight: '700'}}>
                    {dados.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {dados.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}