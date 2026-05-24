import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Media from './sections/secMedia'
import SobreNosotros from './sections/SobreNosotros'
import Eventos from './sections/Eventos'
import Contacto from './sections/Contacto'
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
        <section>
         <Media/>
        </section>
        <section id='sobreNosotros'>
          <SobreNosotros />
        </section>
        <section id='eventos'>
          <Eventos/>
        </section>
        <section id='contacto'>
          <Contacto />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
