import styles from '../styles/Hero.module.css'
import heroBg from '../assets/images/imgHero.jpeg'

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.topLine}></div>

      {/* TEXTO IZQUIERDA */}
      <div className={styles.heroText}>
        <div className={styles.badge}>Iglesia Misionera Esperanza y Vida · Longaví</div>
        <p className={styles.script}>El año de La,</p>
        <h1 className={styles.title}>Edificación</h1>
        <span className={styles.titleY}>y</span>
        <h2 className={styles.title2}>Reivindicación</h2>
        <div className={styles.divider}>
          <div className={styles.dividerLine}></div>
          <div className={styles.dividerDot}></div>
          <div className={styles.dividerLine}></div>
        </div>
        <p className={styles.verse}>"Restauraré a los cautivos de mi pueblo Israel, y edificarán las ciudades asoladas y las habitarán"</p>
        <p className={styles.verseRef}>Amós 9:14</p>
        <div className={styles.btns}>
          <a href="#SobreNosotros" className={styles.btnPrimary}>Conócenos</a>
          <a href="#media" className={styles.btnSecondary}>Contáctanos</a>
        </div>

        <br />
      </div>


      {/* IMAGEN DERECHA */}
      <div className={styles.imgWrap}>
        <div className={styles.decoLine}></div>
        <div className={styles.imgCard}>
          <img src={heroBg} alt="IMEV Longaví" />
        </div>
      </div>

    </section>
  )
}