import styles from './styles.module.css';



export default function Funcionamento(){
  return(
    <>
    <div className={styles.containerFuncionamento}>
      <div className={styles.containerFuncionamentoUp}>
        <h2>Funcionamento</h2>
      </div>

      <div className={styles.containerFuncionamentoDown}>
        <h3>Funcionamento</h3>
        <p>O Pub abre de terça a domingo com programação e horários variados. Cobramos entrada
          apenas dos clientes que permanecem na casa durante as atrações musicais, independente
          do horário que entrou. Portanto, você pode vir em qualquer dia, mesmo às sextas e
          sábados, apenas para lanchar, jantar ou tomar um chopp geladinho, e sair antes do início
          da atração musical sem pagar entrada! Info e Rsvs: 11 2XXXX XXXX / 11 9XXXXX XXXX
          </p>

        <div className={styles.containerFuncionamentoDiasUp}>
          <div className={styles.containerFuncionamentoDiasCard}>
            <h4>Ter - Qua</h4>
            <p>Horário: À partir das 18h00</p>
            <p>Fechamento: 00h00</p>
            <p>* FREE (Couvert: $15,00)</p>
          </div>
          <div className={styles.containerFuncionamentoDiasCard}>
            <h4>Qui</h4>
            <p>Horário: À partir das 18h00</p>
            <p>Fechamento: 01h00</p>
            <p>* Entrada: à partir de $20,00</p>
          </div>
          <div className={styles.containerFuncionamentoDiasCard}>
            <h4>Sex</h4>
            <p>Horário: À partir das 18h00</p>
            <p>Fechamento: 03h00</p>
            <p>* Entrada: M $20,00 / H $30,00</p>
          </div>
        </div>
        <div className={styles.containerFuncionamentoDiasDown}>
          <div className={styles.containerFuncionamentoDiasCard}>
            <h4>Sab</h4>
            <p>Horário: À partir das 18h00</p>
            <p>Fechamento: 03h00</p>
            <p>* Entrada: M $30,00 / H $40,00</p>
          </div>
          <div className={styles.containerFuncionamentoDiasCard}>
            <h4>Dom</h4>
            <p>Horário: À partir das 18h00</p>
            <p>Fechamento: 00h00</p>
            <p>* Entrada: $15,00 (M/H)</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}  