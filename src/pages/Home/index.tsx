import styles from './styles.module.css';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';

import OPub from '@/src/components/pub';
import Banner from '@/src/components/banner';



export default function HomePage() {
  

  return (
    <>
      <Header />
      <Banner />
      <OPub />
      <Footer />
    </>
  );
}
