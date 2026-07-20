// src/components/Footer.jsx
import styles from '../styles/Footer.module.css'
import { FiMapPin, FiUsers } from 'react-icons/fi'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const msg = encodeURIComponent('Hola Pastor Fabian Mella, vengo desde la página web de IMEV Longaví queriendo saber más sobre la iglesia y su congregación.')

export default function Footer() {
  return (
    <footer className={styles.footerWrap}>
      <div className={styles.footerTop}>
        <div className={styles.footerBrand}>
          <p className={styles.brandName}>IMEV</p>
          <p className={styles.brandSub}>Iglesia Misionera Esperanza y Vida</p>
          <p className={styles.brandMotto}>Más que una Iglesia,<br/>Una Familia</p>
          <p className={styles.verse}>
            "Y cerraré sus portillos y levantaré sus ruinas..."<br/>
            <em>Amós 9:11</em>
          </p>
        </div>

        <div>
          <p className={styles.colTitle}>Navegación</p>
          <ul className={styles.footerLinks}>
            <li><a href="#hero">Inicio</a></li>
            <li><a href="#SobreNosotros">Sobre Nosotros</a></li>
            <li><a href="#media">Redes Sociales</a></li>
            <li><a href="#diasCulto">Días de Culto</a></li>
            <li><a href="#eventosPasados">Eventos Pasados</a></li>
            <li><a href="#eventos">Eventos</a></li>
          </ul>
        </div>

        <div>
          <p className={styles.colTitle}>Encuéntranos</p>
          <div className={styles.contactItem}>
            <span><FiMapPin className={styles.ico}/></span>
            <span>Callejón los montecinos s/n, Paine, longavi</span>
          </div>
          <div className={styles.contactItem}>
            <span><FiUsers className={styles.ico}/></span>
            <span>Hno. Fabián Mella · Hna. Lorena Aliaga</span>
          </div>
        </div>
      </div>

      <div className={styles.dividerCross}>✦ ✦ ✦</div>

      <div className={styles.footerBottom}>
        <p className={styles.copy}>© 2026 <span>IMEV Longaví</span> — Todos los derechos reservados</p>
        <div className={styles.socialLinks}>
          <a href="https://web.facebook.com/iglesiaimevlongavi" aria-label="Facebook" target="_blank" rel="noreferrer">
            <FaFacebook size={18} />
          </a>
          <a href="https://www.instagram.com/imevlongavi/" aria-label="Instagram" target="_blank" rel="noreferrer">
            <FaInstagram size={18} />
          </a>
          <a href={`https://wa.me/+56949261955?text=${msg}`} aria-label="WhatsApp" target="_blank" rel="noreferrer">
            <FaWhatsapp size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}