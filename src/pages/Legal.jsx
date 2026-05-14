import styles from './StaticPage.module.css';

export function AvisoLegal() {
  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.narrow}>
          <h1>Aviso Legal</h1>
          <p className={styles.lead}>Información legal sobre el titular y las condiciones de uso de TechPulse.</p>
          <h2>Titular del sitio web</h2>
          <p>TechPulse es un blog de tecnología operado por TechPulse Media S.L., con domicilio en Madrid, España. Correo de contacto: legal@techpulse.es</p>
          <h2>Condiciones de uso</h2>
          <p>El acceso y uso de este sitio web implica la aceptación de las presentes condiciones. TechPulse se reserva el derecho a modificar el contenido en cualquier momento sin previo aviso.</p>
          <h2>Propiedad intelectual</h2>
          <p>Todos los textos, imágenes y contenidos de TechPulse son propiedad de sus respectivos autores. Está prohibida su reproducción sin autorización expresa.</p>
          <h2>Limitación de responsabilidad</h2>
          <p>TechPulse no se responsabiliza de las decisiones de compra tomadas en base a los artículos publicados. Los precios y disponibilidad de los productos pueden cambiar en cualquier momento en Amazon.</p>
        </div>
      </div>
    </main>
  );
}

export function Privacidad() {
  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.narrow}>
          <h1>Política de Privacidad</h1>
          <p className={styles.lead}>Cómo tratamos los datos de nuestros usuarios, conforme al RGPD.</p>
          <h2>Responsable del tratamiento</h2>
          <p>TechPulse Media S.L. · legal@techpulse.es</p>
          <h2>Datos que recopilamos</h2>
          <p>Únicamente recopilamos los datos que nos proporcionas voluntariamente a través del formulario de contacto (nombre, email y mensaje). No vendemos ni cedemos estos datos a terceros.</p>
          <h2>Cookies</h2>
          <p>Este sitio puede utilizar cookies de análisis (Google Analytics) para entender el comportamiento de los visitantes. Puedes desactivarlas en la configuración de tu navegador.</p>
          <h2>Derechos del usuario</h2>
          <p>Puedes ejercer tus derechos de acceso, rectificación, supresión y portabilidad escribiendo a legal@techpulse.es</p>
          <h2>Amazon Associates</h2>
          <p>Como participante en el Programa de Afiliados de Amazon, Amazon puede utilizar cookies para rastrear las compras realizadas a través de nuestros enlaces. Consulta la política de privacidad de Amazon para más información.</p>
        </div>
      </div>
    </main>
  );
}

export function PoliticaAfiliados() {
  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.narrow}>
          <h1>Política de Afiliados</h1>
          <p className={styles.lead}>Transparencia total sobre cómo funcionan los enlaces de afiliado en TechPulse.</p>
          <h2>¿Qué es un enlace de afiliado?</h2>
          <p>Un enlace de afiliado es un enlace especial que lleva a una tienda (en nuestro caso, Amazon) y que incluye un código de identificación. Cuando haces clic en él y realizas una compra, Amazon nos paga una pequeña comisión.</p>
          <h2>¿Cuánto nos pagan?</h2>
          <p>Las comisiones de Amazon varían según la categoría del producto, generalmente entre el 1% y el 10% del precio de venta. El precio que pagas tú es exactamente el mismo que si fueses directamente a Amazon.</p>
          <h2>¿Influye en nuestras opiniones?</h2>
          <p><strong>No.</strong> Damos malas notas a productos que las merecen, aunque tengamos un enlace de afiliado para ellos. Nuestra reputación y la confianza de nuestros lectores es lo primero.</p>
          <h2>Identificación de enlaces</h2>
          <p>Todos los enlaces de afiliado en TechPulse están marcados con el atributo <code>rel="nofollow sponsored"</code> y se identifican visualmente con el botón naranja "Ver en Amazon".</p>
          <h2>Amazon Associates</h2>
          <p>TechPulse es participante en el Programa de Afiliados de Amazon EU, un programa de publicidad para afiliados diseñado para ofrecer a sitios web un medio para obtener comisiones por publicidad mediante la creación de enlaces a amazon.es.</p>
        </div>
      </div>
    </main>
  );
}
