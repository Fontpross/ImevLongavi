import styles from '../styles/SobreNosotros.module.css'


const cardPastores = [
  {
    img:  '/src/assets/images/Pastor.jpeg',
    tag: 'Encargados de obra',
    title: 'Pastor Fabian Mella',
    desc: 'Dirigidos por el Hno. Fabián Mella y la Hna. Lorena Aliaga, líderes comprometidos con el crecimiento espiritual y el bienestar de cada miembro.',
  },
  {
    img:  '/src/assets/images/Pastora.jpeg',
    tag: 'Encargados de obra',
    title: 'Pastora Lorena Alianga',
    desc: 'Dirigidos por el Hno. Fabián Mella y la Hna. Lorena Aliaga, líderes comprometidos con el crecimiento espiritual y el bienestar de cada miembro.',
  },
]

const cardExtras = [
  {
    img:  'https://placehold.co/400x200/6b0a12/ffffff?text=IMEV',
    tag: 'Nuestra Iglesia',
    title: 'Cultos',
    desc: '',
  },
  {
    img:  'https://placehold.co/400x200/6b0a12/ffffff?text=IMEV',
    tag: 'Actividades',
    title: '',
    desc: 'Nos guiamos por la Palabra de Dios, la oración y el compañerismo. Cada domingo abrimos nuestras puertas a toda persona que busca un encuentro genuino con Dios.',
  }
]

export default function SobreNosotros() {
  return (
    <section className={styles.section} id="SobreNosotros">
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