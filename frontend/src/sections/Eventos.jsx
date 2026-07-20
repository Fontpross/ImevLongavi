import { useState, useEffect, useCallback } from 'react'
import styles from '../styles/Eventos.module.css'
//import enlaIntimidad from '../assets/images/EventoEnLaIntimidad.jpeg'
//import imgJueves from '../assets/images/ImgJueves.jpeg'

const fotos = [
  {
    img: 'https://placehold.co/400x200/6b0a12/ffffff?text=Eventos+No+Disponibles',
    tag: 'Eventos no disponibles',
    title: 'Eventos por confirmar hasta próxima fecha',
  },
  {
    img: 'https://placehold.co/400x200/6b0a12/ffffff?text=Eventos+No+Disponibles',
    tag: 'Eventos no disponibles',
    title: 'Eventos por confirmar hasta próxima fecha',
  },
  // {
  //   img: '/src/assets/images/evento3.jpg',
  //   tag: 'Reunión de jóvenes',
  //   title: 'Encuentro Juvenil — Marzo 2026',
  // },
  // {
  //   img: '/src/assets/images/evento4.jpg',
  //   tag: 'Campaña misionera',
  //   title: 'Misión Longaví — Abril 2026',
  // },
]

export default function Eventos() {
  const [current, setCurrent] = useState(0)

  const goTo = useCallback((n) => {
    setCurrent((n + fotos.length) % fotos.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => goTo(current + 1), 6000)
    return () => clearInterval(timer)
  }, [current, goTo])

  return (
    <section className={styles.section} id="eventos">
      <div className={styles.topLine}></div>

      <br />
      <br />
      
      <div className={styles.header}>
        <p className={styles.label}>Nuestros</p>
        <h2 className={styles.title}>Proximos Eventos</h2>
        <div className={styles.divider}>
          <div className={styles.dividerLine}></div>
          <div className={styles.dividerDot}></div>
          <div className={styles.dividerLine}></div>
        </div>
      </div>

      <div className={styles.carousel}>
        <div className={styles.track}>
          <img
            src={fotos[current].img}
            alt={fotos[current].title}
            className={styles.img}
          />
          <div className={styles.caption}>
            <p className={styles.captionTag}>{fotos[current].tag}</p>
            <p className={styles.captionTitle}>{fotos[current].title}</p>
          </div>
        </div>

        <button className={`${styles.btn} ${styles.prev}`} onClick={() => goTo(current - 1)} aria-label="Anterior">
          ‹
        </button>
        <button className={`${styles.btn} ${styles.next}`} onClick={() => goTo(current + 1)} aria-label="Siguiente">
          ›
        </button>

        <div className={styles.dots}>
          {fotos.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Foto ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}