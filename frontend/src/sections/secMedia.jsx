import styles from '../styles/SecMedia.module.css'

const grupos = [
  {
    icono: '⛪',
    titulo: 'IMEV Longaví',
    sub: 'Iglesia Misionera Esperanza y Vida',
    conocenos: '#SobreNosotros',
    facebook: 'https://facebook.com/tu-pagina',
    instagram: 'https://instagram.com/tu-pagina',
    whatsapp: 'https://wa.me/56912345678',
  },
  {
    icono: '✨',
    titulo: 'Cuerpo de Jóvenes',
    sub: 'Juventud IMEV Longaví',
    conocenos: '#SobreNosotros',
    facebook: 'https://facebook.com/jovenes',
    instagram: 'https://instagram.com/jovenes',
    whatsapp: 'https://wa.me/56987654321',
  },
]

export default function SecMedia() {
  return (
    <section className={styles.media} id="media">
      <br />
      <br />
      <div className={styles.topLine}></div>

      <div className={styles.header}>
        <p className={styles.label}>Síguenos</p>
        <h2 className={styles.title}>Nuestras Redes</h2>
        <div className={styles.divider}>
          <div className={styles.dividerLine}></div>
          <div className={styles.dividerDot}></div>
          <div className={styles.dividerLine}></div>
        </div>
      </div>

      <div className={styles.cards}>
        {grupos.map((g, i) => (
          <div className={styles.card} key={i}>
            <div className={styles.cardIcon}>{g.icono}</div>
            <h3 className={styles.cardTitle}>{g.titulo}</h3>
            <p className={styles.cardSub}>{g.sub}</p>
            <div className={styles.cardDivider}></div>
            <div className={styles.socialBtns}>
              <a href={g.conocenos} className={`${styles.sBtn} ${styles.sBtnConoce}`}>Conócenos</a>
              <a href={g.facebook} target="_blank" rel="noreferrer" className={`${styles.sBtn} ${styles.sBtnFb}`}>Facebook</a>
              <a href={g.instagram} target="_blank" rel="noreferrer" className={`${styles.sBtn} ${styles.sBtnIg}`}>Instagram</a>
              <a href={g.whatsapp} target="_blank" rel="noreferrer" className={`${styles.sBtn} ${styles.sBtnWa}`}>WhatsApp</a>
            </div>
          </div>
        ))}
      </div>
      <br />
      <br />
      <p className={styles.year}>· Año 2026 ·</p>
    </section>
  )
}