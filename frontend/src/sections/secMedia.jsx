import styles from '../styles/SecMedia.module.css'

export default function Hero() {
  return (
    <section className={styles.media} id="media">
      <div className={styles.topLine}></div>
      <div className={styles.content}>
        <div className={styles.badge}>Iglesia Misionera Esperanza y Vida · Longaví</div>
        
        <div className={styles.divider}>
          <div className={styles.dividerLine}></div>
          <span>✦</span>
          <div className={styles.dividerLine}></div>
        </div>
        <div className={styles.btns}>
          <a href="#SobreNosotros" className={styles.btnPrimary}>Conócenos</a>
          <a href="#contacto" className={styles.btnSecondary}>Facebook</a>
          <a href="#contacto" className={styles.btnSecondary}>Instagram</a>
          <a href="#contacto" className={styles.btnSecondary}>Whatsapp</a>
        </div>
      </div>
      <div className={styles.year}>· Año 2026 ·</div>
    </section>
  )
}