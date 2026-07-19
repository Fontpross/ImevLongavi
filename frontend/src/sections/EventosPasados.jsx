import styles from '../styles/EventosPasados.module.css'
import { FiCalendar, FiClock, FiMapPin, FiVideo } from 'react-icons/fi'
import { useState, useRef, useEffect } from 'react'

import EventoDeMujeres from '../assets/images/EventoEnLaIntimidad.jpeg'

const eventos = [
  {
    img: EventoDeMujeres,
    tag: 'Enero 2026',
    nombre: 'Evento de Mujeres',
    dia: 'Realizado el dia 11 de enero',
    hora: 'A las 17:00 hrs',
    lugar: 'Las Pataguas #18, Longaví',
    esZoom: false,
  },
  {
    img: '/src/assets/images/evento2.jpg',
    tag: 'Febrero 2026',
    nombre: 'Culto de Edificación',
    dia: 'Realizado el dia 15 de febrero',
    hora: 'A las 20:00 hrs',
    lugar: 'Las Pataguas #18, Longaví',
    esZoom: false,
  },
  {
    img: '/src/assets/images/evento3.jpg',
    tag: 'Marzo 2026',
    nombre: 'Encuentro Juvenil',
    dia: 'Realizado el dia 8 de marzo',
    hora: 'A las 19:00 hrs',
    lugar: 'Las Pataguas #18, Longaví',
    esZoom: false,
  },
  {
    img: '/src/assets/images/evento4.jpg',
    tag: 'Abril 2026',
    nombre: 'Misión Longaví',
    dia: 'Realizado el dia 20 de abril',
    hora: 'A las 18:00 hrs',
    lugar: 'Las Pataguas #18, Longaví',
    esZoom: false,
  },
  {
    img: '/src/assets/images/evento5.jpg',
    tag: 'Mayo 2026',
    nombre: 'Tabernáculo General',
    dia: 'Realizado el dia 3 de mayo',
    hora: 'A las 20:00 hrs',
    lugar: 'Las Pataguas #18, Longaví',
    esZoom: false,
  },
]

export default function EventosPasados() {
  const [idx, setIdx] = useState(0)
  const [cardWidth, setCardWidth] = useState(0)
  const trackRef = useRef(null)

  useEffect(() => {
    const calcWidth = () => {
      if (!trackRef.current) return
      const card = trackRef.current.querySelector(`.${styles.card}`)
      if (!card) return
      const gap = 19.2
      setCardWidth(card.offsetWidth + gap)
    }

    calcWidth()
    window.addEventListener('resize', calcWidth)
    return () => window.removeEventListener('resize', calcWidth)
  }, [])

  const next = () => { if (idx < eventos.length - 1) setIdx(idx + 1) }
  const prev = () => { if (idx > 0) setIdx(idx - 1) }

  return (
    <section className={styles.section} id="eventosPasados">
      <div className={styles.topLine}></div>
      <br />
      <br />
      <div className={styles.header}>
        <p className={styles.label}>Galería</p>
        <h2 className={styles.title}>Eventos Pasados</h2>
        <div className={styles.divider}>
          <div className={styles.dividerLine}></div>
          <div className={styles.dividerDot}></div>
          <div className={styles.dividerLine}></div>
        </div>
      </div>

      <div className={styles.carouselWrap}>
        <div className={styles.track} ref={trackRef}>
          <div
            className={styles.inner}
            style={{ transform: `translateX(-${idx * cardWidth}px)` }}
          >
            {eventos.map((e, i) => (
              <div className={styles.card} key={i}>
                <img src={e.img} alt={e.nombre} className={styles.cardImg} />
                <div className={styles.overlay}></div>
                <div className={styles.cardBody}>
                  <p className={styles.tag}>{e.tag}</p>
                  <h3 className={styles.nombre}>{e.nombre}</h3>
                  <div className={styles.cardDivider}></div>
                  <div className={styles.row}><FiCalendar className={styles.ico} /><span>{e.dia}</span></div>
                  <div className={styles.row}><FiClock className={styles.ico} /><span>{e.hora}</span></div>
                  <div className={styles.row}>
                    {e.esZoom ? <FiVideo className={styles.ico} /> : <FiMapPin className={styles.ico} />}
                    <span>{e.lugar}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className={`${styles.btn} ${styles.prev}`} onClick={prev} aria-label="Anterior" disabled={idx === 0}>‹</button>
        <button className={`${styles.btn} ${styles.next}`} onClick={next} aria-label="Siguiente" disabled={idx >= eventos.length - 1}>›</button>
      </div>
    </section>
  )
}