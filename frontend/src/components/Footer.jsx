// src/components/Footer.jsx
import styles from '../styles/Footer.module.css'

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
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>

        <div>
          <p className={styles.colTitle}>Encuéntranos</p>
          <div className={styles.contactItem}>
            <span>📍</span>
            <span>Las Pataguas #18, Villa Vida Nueva, Longaví</span>
          </div>
          <div className={styles.contactItem}>
            <span>👥</span>
            <span>Hno. Fabián Mella · Hna. Lorena Aliaga</span>
          </div>
        </div>
      </div>

      <div className={styles.dividerCross}>✦ ✦ ✦</div>

      <div className={styles.footerBottom}>
        <p className={styles.copy}>© 2026 <span>IMEV Longaví</span> — Todos los derechos reservados</p>
        <div className={styles.socialLinks}>
          <a href="#" aria-label="Facebook">f</a>
          <a href="#" aria-label="Instagram">ig</a>
          <a href="#" aria-label="WhatsApp">w</a>
        </div>
      </div>
    </footer>
  )
}