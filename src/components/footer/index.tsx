import Link from "next/link";
import styles from "./styles.module.css";

export function Footer() {

  return(
    <footer className={styles.container}>
  <hr className={styles.footerLine} />

  <div className={styles.footerContainer}>
    <ul className={styles.menuLinksUp}>
      <li className={styles.menuLinkUp}>
        <Link 
          href="https://api.whatsapp.com/send?phone=5511940124694&text=Ol%C3%A1%20Dener,%20preciso%20de%20um%20orçamento!" 
          target="_blank"
        >
          <img 
            src="/assets/icones/whatsapp.svg" 
            alt="link whatsapp" 
            className={styles.menuLinkUpSocial} 
          />
        </Link>
      </li>

      <li className={styles.menuLinkUp}>
        <Link href="https://www.instagram.com" target="_blank">
          <img 
            src="/assets/icones/instagram.svg" 
            alt="link instagram" 
            className={styles.menuLinkUpSocial} 
          />
        </Link>
      </li>

      <li className={styles.menuLinkUp}>
        <Link href="https://facebook.com/" target="_blank">
          <img 
            src="/assets/icones/facebook.svg" 
            alt="link facebook" 
            className={styles.menuLinkUpSocial} 
          />
        </Link>
      </li>

      <li className={styles.menuLinkUp}>
        <Link href="https://twitter.com/home" target="_blank">
          <img 
            src="/assets/icones/twitter.svg" 
            alt="link twitter" 
            className={styles.menuLinkUpSocial} 
          />
        </Link>
      </li>
    </ul>

    <p>© 2024 Baião Rock Bar | by Dener Pelizario</p>
  </div>
</footer>
  )
} 