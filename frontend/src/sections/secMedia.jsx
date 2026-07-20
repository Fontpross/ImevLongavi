import styles from '../styles/SecMedia.module.css'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa6'

const msg = encodeURIComponent('Hola Pastor Fabian Mella, vengo desde la página web de IMEV Longaví queriendo saber más sobre la iglesia y su congregación.')
const msg2 = encodeURIComponent('Hola Pastora Lorena Aliaga, vengo desde la página web de IMEV Longaví y quisiera obetener más información sobre el Cuerpo de Jóvenes y la Comunidad.')

const grupos = [
  {
    icono: '⛪',
    titulo: 'IMEV Longaví',
    sub: 'Iglesia Misionera Esperanza y Vida',
    conocenos: '#SobreNosotros',
    facebook: 'https://web.facebook.com/iglesiaimevlongavi',
    instagram: 'https://www.instagram.com/imevlongavi/',
    whatsapp: `https://wa.me/+56949261955?text=${msg}`,
  },
]

const redesJovenes = [
  {

    icono: '✨',
    titulo: 'Cuerpo de Jóvenes',
    sub: 'Juventud IMEV Longaví',
    conocenos: '#SobreNosotros',
    Tiktok: 'https://www.tiktok.com/@cuerpo.de.jovenes_imev',
    whatsapp: `https://wa.me/+56933876558?text=${msg2}`,
  }
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
              <a href={g.facebook} target="_blank" rel="noreferrer" className={`${styles.sBtn} ${styles.sBtnFb}`}> <FaFacebook /> Facebook</a>
              <a href={g.instagram} target="_blank" rel="noreferrer" className={`${styles.sBtn} ${styles.sBtnIg}`}> <FaInstagram /> Instagram</a>
              <a href={g.whatsapp} target="_blank" rel="noreferrer" className={`${styles.sBtn} ${styles.sBtnWa}`}> <FaWhatsapp /> WhatsApp</a>
            </div>
          </div>
        ))}

        {redesJovenes.map((g, i) => (
          <div className={styles.card} key={i}>
            <div className={styles.cardIcon}>{g.icono}</div>
            <h3 className={styles.cardTitle}>{g.titulo}</h3>
            <p className={styles.cardSub}>{g.sub}</p>
            <div className={styles.cardDivider}></div>
            <div className={styles.socialBtns}>
              <a href={g.conocenos} className={`${styles.sBtn} ${styles.sBtnConoce}`}>Conócenos</a>
              <a href={g.Tiktok} target="_blank" rel="noreferrer" className={`${styles.sBtn} ${styles.sBtnTk}`}> <FaTiktok /> TikTok</a>
              <a href={g.whatsapp} target="_blank" rel="noreferrer" className={`${styles.sBtn} ${styles.sBtnWa}`}> <FaWhatsapp /> WhatsApp</a>
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