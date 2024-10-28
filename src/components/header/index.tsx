import styles from "./styles.module.css";
import Link from "next/link";


export function Header() {

  return(
    <>
      <div className={styles.menuContainer} id="home">
        <nav className={styles.menuUp}>

          <Link href="#home" className={styles.menuUpLogo}>
            <img className={styles.menuLogo} src="/assets/baiao-logo.png" alt="logo-site" />
          </Link>

          <ul  className={styles.menuLinksUp}>

            <li  className={styles.menuLinkUp}>
              <Link  href="https://api.whatsapp.com/send?phone=5511940124694&text=Ol%C3%A1%20Dener,%20preciso%20de%20um%20orçamento!"
              target="_blank">
                <img 
                  src="/assets/icones/whatsapp.svg" 
                  alt="link whattsapp" 
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
              <Link  href="https://twitter.com/home" target="_blank">
                <img 
                  src="/assets/icones/twitter.svg" 
                  alt="link twitter" 
                  className={styles.menuLinkUpSocial}
                  />
              </Link>
            </li>

            <li className={styles.menuLinkUp}>
              <Link href="#home" className={styles.menuLinkLogin}>
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles.containerDown}>
        <div  className={styles.menuContainerDown}>
          <nav  className={styles.menuDown}>
            <ul  className={styles.menuLinksDown}>

              <li  className={styles.menuLinkDown}>
                <Link href="#eventos">Home</Link>
              </li>  
              <li  className={styles.menuLinkDown}>
                <Link href="#eventos">O Pub</Link>
              </li>
              <li className={styles.menuLinkDown}>
                <Link href="#galeria">Agenda</Link>
              </li>
              <li className={styles.menuLinkDown}>
                <Link href="#cardapio">Reservas</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div  className={styles.menuContainerDown}>
          <nav  className={styles.menuDown}>
            <ul  className={styles.menuLinksDown}>
              <li  className={styles.menuLinkDown}>
                <Link href="#eventos">Eventos</Link>
              </li>  
              <li  className={styles.menuLinkDown}>
                <Link href="#eventos">Galeria</Link>
              </li>
              <li className={styles.menuLinkDown}>
                <Link href="#galeria">Contato</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
} 