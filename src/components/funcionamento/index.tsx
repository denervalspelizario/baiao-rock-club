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
      </div>
      <div className={styles.containerFuncionamentoDias}>

      </div>
    </div>
    </>
  )
}  