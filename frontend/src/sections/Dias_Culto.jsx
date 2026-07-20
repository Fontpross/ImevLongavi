import styles from '../styles/DiasCulto.module.css'
import imgJueves from '../assets/images/CultoJueves.jpeg'
import imgDomingo from '../assets/images/CultoDomingo.jpeg'
import imgMiercoles from '../assets/images/TabernaculoMiercoles.jpeg'
import { FiCalendar, FiClock, FiMapPin, FiVideo } from 'react-icons/fi'

const cultos = [
    {
    img: imgMiercoles,
    tag: 'Reunión online',
    nombre: 'Zoom de Oración',
    dia: 'Miércoles de cada semana',
    hora: '20:00 hrs',
    lugar: 'Reunión por Zoom',
    esZoom: true,
  },
  {
    img: imgJueves,
    tag: 'Cada semana',
    nombre: 'Jueves de Gratitud',
    dia: 'Todos los jueves',
    hora: '20:00 hrs',
    lugar: 'Callejón los montecinos s/n, Paine, longavi',
    esZoom: false,
  },
  {
    img: imgDomingo,
    tag: 'Cada semana',
    nombre: 'Domingo de Adoración',
    dia: 'Todos los domingos',
    hora: '11:00 hrs',
    lugar: 'Callejón los montecinos s/n, Paine, longavi',
    esZoom: false,
  }
]

export default function DiasCulto() {
  return (
    <section className={styles.section} id="diasCulto">
      <div className={styles.topLine}></div>
      <br />
      <br />

      <div className={styles.header}>
        <p className={styles.label}>Únete a nosotros</p>
        <h2 className={styles.title}>Días de Culto</h2>
        <div className={styles.divider}>
          <div className={styles.dividerLine}></div>
          <div className={styles.dividerDot}></div>
          <div className={styles.dividerLine}></div>
        </div>
      </div>

      <div className={styles.cards}>
        {cultos.map((c, i) => (
          <div className={styles.card} key={i}>
            <img src={c.img} alt={c.nombre} className={styles.cardImg} />
            <div className={styles.overlay}></div>
            <div className={styles.cardBody}>
              <p className={styles.tag}>{c.tag}</p>
              <h3 className={styles.nombre}>{c.nombre}</h3>
              <div className={styles.cardDivider}></div>
              <div className={styles.infoRow}>
                <FiCalendar className={styles.infoIcon} />
                <span className={styles.infoText}><strong>{c.dia}</strong></span>
              </div>
              <div className={styles.infoRow}>
                <FiClock className={styles.infoIcon} />
                <span className={styles.infoText}><strong>{c.hora}</strong></span>
              </div>
              <div className={styles.infoRow}>
                {c.esZoom ? <FiVideo className={styles.infoIcon} /> : <FiMapPin className={styles.infoIcon} />}
                <span className={styles.infoText}>{c.lugar}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    
  )
}