import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoMark}>⚡</span>
          <span>Tech<strong>Pulse</strong></span>
        </Link>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
          <NavLink to="/" end className={({isActive}) => isActive ? styles.active : ''} onClick={() => setOpen(false)}>Inicio</NavLink>
          <NavLink to="/articulos" className={({isActive}) => isActive ? styles.active : ''} onClick={() => setOpen(false)}>Artículos</NavLink>
          <NavLink to="/comparativas" className={({isActive}) => isActive ? styles.active : ''} onClick={() => setOpen(false)}>Comparativas</NavLink>
          <NavLink to="/sobre-nosotros" className={({isActive}) => isActive ? styles.active : ''} onClick={() => setOpen(false)}>Sobre nosotros</NavLink>
          <NavLink to="/contacto" className={({isActive}) => isActive ? styles.active : ''} onClick={() => setOpen(false)}>Contacto</NavLink>
        </nav>

        <button
          className={styles.burger}
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
