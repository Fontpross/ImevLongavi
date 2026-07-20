import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Media from './sections/secMedia'
import SobreNosotros from './sections/SobreNosotros'
import DiasCulto from './sections/Dias_Culto'
import EventosPasados from './sections/EventosPasados'
import Eventos from './sections/Eventos'
import Footer from './components/Footer'
import './styles/index.css'

function App() {
  
  return (
    <>
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="media">
         <Media/>
        </section>
        <section id='sobreNosotros'>
          <SobreNosotros />
        </section>
        <section id='diasCulto'>
          <DiasCulto />
        </section>
        <section id='eventosPasados'>
          <EventosPasados />
        </section>
        <section id='eventos'>
          <Eventos/>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
