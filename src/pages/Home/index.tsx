import styles from './styles.module.css';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';

import OPub from '@/src/components/pub';
import Banner from '@/src/components/banner';
import Agenda from '@/src/components/agenda';
import Reservas from '@/src/components/reservas';
import Funcionamento from '@/src/components/funcionamento';



export default function HomePage() {
  

  return (
    <>
      <Header />
      <Banner />
      <OPub />
      <Agenda />
      <Reservas />
      <Funcionamento />
      <Footer />
    </>
  );
}
