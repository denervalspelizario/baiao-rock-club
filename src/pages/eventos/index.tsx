import styles from './styles.module.css';
import { HeaderSecond } from '@/src/components/headerSecond';
import { Footer } from "@/src/components/footer";

import { FaCheck } from "react-icons/fa";
import { FaFire } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";











export default function Eventos() {
  return (
    <>
      <HeaderSecond/>
      <main>
        <div className={styles.containerEventos}>
          
          <div className={styles.containerEventosIn}>
            <h3>COMO FUNCIONA</h3>
            <p>
              É uma honra para nós sermos palco para sua comemoração nesse dia tão especial,
            então o Baião Rock Bar tem um super presente pra você
            </p>

        
            <h3>IMPERDÍVEL !!</h3>
            <p>
              Quanto mais convidados trouxer, maior é o seu presente!
            </p>
            <p>
              <FaCheck color='green'/> 10 convidados presentes na casa - você ganha R$100,00 de consumação;
            </p>
            <p>
              <FaCheck color='green'/>  15 convidados presentes na casa - você ganha R$150,00 de consumação;
            </p>
            <p>
              <FaCheck color='green'/> 20 convidados presentes na casa - você ganha R$200,00 de consumação;
            </p>
            <p>
              e assim por sucessivamente!!!
            </p>

            <p>
              <FaFire  color='#d25c0d'/>  Esta consumação é apenas para o aniversariante, é intransferível e deve ser usada somente na noite da sua comemoração no Pub.
            </p>

            <strong className={styles.eventosBeneficios} >
              * Benefício válidos para aniversário agendado pelo nosso
            </strong>

            <span className={styles.eventosWhats}>
              <FaWhatsapp color='green'/> WhatsApp (11) 99707-6420.
            </span>

            <h3>E TEM MAIS</h3>
            <p>
              * O aniversariante mais um acompanhante são VIPS (não pagam a entrada);
            </p>
            <br />
            <p>
              * A lista proporciona aos seus convidados o direito ao desconto de R$ 5,00 no valor de entrada de cada convidado.
            </p>
            <br />
            <p>
              * Aniversários com mais de 15 pessoas (presentes na casa) dá direito a 01 Garrafa de Frizante.
            </p>
            <br />
            <p>
              * Caso traga o bolo, não esquecer dos descartáveis (pratinhos e talheres).
            </p>
            <br />
            <p> 
              * Não será permitido a utilização de velas "tipo vulcão"
            </p>
            <br />
            <p>
              * Listas são válidas somente às sextas, sábados e/ou véspera de feriado, exceto em eventos Especiais, Covers, Tributos, etc.
            </p>
      
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
