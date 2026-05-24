import styles from '../styles/Navbar.module.css'
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <a href="/"><span>Imev Longavi</span></a>
      </div>

      {/* DESKTOP MENU */}
      <ul className={styles.navLinks}>
        <li><a href="#hero">Inicio</a></li>
        <li><a href="#sobreNosotros">Sobre Nosotros</a></li>
        <li><a href="#eventos">Eventos</a></li>
        <li><a href="#contacto" className={styles.contactBtn}>Contacto</a></li>
      </ul>

      {/* HAMBURGER MENU */}
      <button 
        className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menú"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* MOBILE MENU */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.active : ''}`}>
        <a href="#hero" onClick={handleLinkClick}>Inicio</a>
        <a href="#sobreNosotros" onClick={handleLinkClick}>Sobre Nosotros </a>
        <a href="#eventos" onClick={handleLinkClick}>Eventos</a>
        <a href="#contacto" onClick={handleLinkClick}>Contacto</a>
      </div>
    </nav>
  );
}