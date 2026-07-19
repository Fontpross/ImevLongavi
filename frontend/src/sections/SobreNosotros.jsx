import styles from '../styles/SobreNosotros.module.css'
import imagenPastor from '../assets/images/Pastor.jpeg'
import imagenPastora from '../assets/images/Pastora.jpeg'

const cardPastores = [
  {
    img: imagenPastor,
    tag: 'Encargado de obra',
    title: 'Hno. Fabian Mella',
    desc: 'El Hno. Fabián Mella lidera nuestra congregación con vision, amor y dedicación, edificando vidas y fortaleciendo la fe de nuestra comunidad en Longaví.',
  },
  {
    img:  imagenPastora,
    tag: 'Encargada de obra',
    title: 'Hna. Lorena Aliaga',
    desc: 'La Hna. Lorena Aliaga, Trabaja comprometida con la congregacion, entregando amor geniuno, servicio, apoyo y fortalecimiento espiritual a nuestra comunidad en Longaví.',
  },
]

const cardExtras = [
  {
    img:  'https://placehold.co/400x200/6b0a12/ffffff?text=IMEV',
    tag: 'Cuerpo de jovenes',
    title: 'Cuerpo de jovenes',
    desc: 'Un espacio dedicado a los jóvenes, donde se fomenta el crecimiento espiritual, la union, la obediencia, la comunión y el servicio a las personas.',
  },
  {
    img:  'https://placehold.co/400x200/6b0a12/ffffff?text=IMEV',
    tag: 'Actividades',
    title: 'Actividades',
    desc: 'Semana a semana nos reunimos para predicar, orar, ayunar y estudiar la Palabra de Dios. A través del tabernáculo, cultos y nuestros encuentros Presenciales o por Zoom, sigamos creciendo juntos como familia en Cristo.',
  }
]

export default function SobreNosotros() {
  return (
    <section className={styles.section} id="SobreNosotros">
      <br />
      <br />
      <div className={styles.topLine}></div>
      <div className={styles.header}>
        <p className={styles.label}>Imev Longavi</p>
        <h2 className={styles.title}>Sobre Nosotros</h2>
        <div className={styles.divider}>
          <div className={styles.dividerLine}></div>
          <div className={styles.dividerDot}></div>
          <div className={styles.dividerLine}></div>
        </div>
      </div>

      <div className={styles.grid}>
        {cardPastores.map((card, i) => (
          <div className={styles.card} key={i}>
            <img src={card.img} alt={card.title} className={styles.cardImg} />
            <div className={styles.cardBody}>
              <p className={styles.cardTag}>{card.tag}</p>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.desc}</p>
              <a href="#contacto" className={styles.cardBtn}>Contáctanos</a>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.grid}>
        {cardExtras.map((card, i) => (
          <div className={styles.card} key={i}>
            <img src={card.img} alt={card.title} className={styles.cardImg} />
            <div className={styles.cardBody}>
              <p className={styles.cardTag}>{card.tag}</p>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.desc}</p>
              <a href="#contacto" className={styles.cardBtn}>Contáctanos</a>
            </div>
          </div>
        ))}
      </div>

      
    </section>
  )
}