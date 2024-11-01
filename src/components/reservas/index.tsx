import styles from './styles.module.css';




export default function Reservas(){
  return(
    <>
    <div className={styles.containerReservas}>
      <div className={styles.containerReservasUp}>
        <h2>Reservas</h2>
      </div>

      <div className={styles.containerReservasDown}>
        <h3>Reservas de Mesa</h3>
        <p>As reservas de mesas são realizadas somente pelo WhatsApp 9XXXX XXXX, de segunda a
          sexta-feira das 13h00 às 18h00, e estão sujeitas a disponibilidade na data desejada. O
          número de mesas disponíveis para reservas é limitado. Sua reserva será garantida somente
          até as 20h30. Após este horário as mesas estão liberadas para qualquer cliente presente
          </p>
      </div>
    </div>
    </>
  )
}  