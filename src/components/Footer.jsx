import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <div className={styles.logo}>⚡ Tech<strong>Pulse</strong></div>
          <p>Reviews y comparativas honestas de tecnología desde 2022. Ayudamos a más de 50.000 lectores mensuales a tomar mejores decisiones de compra.</p>
          <p className={styles.affiliate}>
            <strong>Aviso de afiliación:</strong> TechPulse participa en el Programa de Afiliados de Amazon EU, un programa de publicidad para afiliados diseñado para ofrecer a sitios web un medio para obtener comisiones por publicidad mediante la creación de enlaces a amazon.es. El precio es el mismo para ti, sin ningún coste adicional.
          </p>
        </div>

        <div className={styles.links}>
          <div>
            <h4>Contenido</h4>
            <ul>
              <li><Link to="/articulos">Todos los artículos</Link></li>
              <li><Link to="/comparativas">Comparativas</Link></li>
              <li><Link to="/sobre-nosotros">Sobre nosotros</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li><Link to="/aviso-legal">Aviso legal</Link></li>
              <li><Link to="/politica-privacidad">Política de privacidad</Link></li>
              <li><Link to="/politica-cookies">Política de cookies</Link></li>
              <li><Link to="/politica-afiliados">Política de afiliados</Link></li>
            </ul>
          </div>
          <div>
            <h4>Categorías</h4>
            <ul>
              <li><Link to="/articulos">Auriculares</Link></li>
              <li><Link to="/articulos">Wearables</Link></li>
              <li><Link to="/articulos">Almacenamiento</Link></li>
              <li><Link to="/articulos">Periféricos</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p>© {new Date().getFullYear()} TechPulse. Todos los derechos reservados.</p>
          <p>Amazon y el logotipo de Amazon son marcas comerciales de Amazon.com, Inc. o sus afiliados.</p>
        </div>
      </div>
    </footer>
  );
}
