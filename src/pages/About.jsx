import styles from './StaticPage.module.css';

export default function About() {
  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.narrow}>
          <h1>Sobre nosotros</h1>
          <p className={styles.lead}>
            TechPulse nació en 2022 con una misión clara: ofrecer reviews honestas y comparativas detalladas de tecnología, sin publicidad engañosa ni contenido patrocinado encubierto.
          </p>

          <h2>¿Quiénes somos?</h2>
          <p>
            Somos un equipo de tres apasionados de la tecnología con años de experiencia probando gadgets. Compramos todos los productos que analizamos (o los pedimos en préstamo a fabricantes, indicándolo siempre claramente) y los usamos durante semanas antes de publicar una review.
          </p>

          <div className={styles.teamGrid}>
            <div className={styles.teamCard}>
              <div className={styles.avatar}>CM</div>
              <h3>Carlos Mendoza</h3>
              <p>Editor jefe. Especializado en auriculares, altavoces y audio portátil. Lleva 8 años probando gadgets de sonido.</p>
            </div>
            <div className={styles.teamCard}>
              <div className={styles.avatar}>LS</div>
              <h3>Laura Sánchez</h3>
              <p>Editora de wearables y smartphones. Fitness runner que pone a prueba smartwatches en condiciones reales de entrenamiento.</p>
            </div>
            <div className={styles.teamCard}>
              <div className={styles.avatar}>DT</div>
              <h3>Diego Torres</h3>
              <p>Especialista en hardware PC. Monta y desmonta ordenadores desde los 12 años. Su pasión son los SSDs y las tarjetas gráficas.</p>
            </div>
          </div>

          <h2>Nuestra metodología</h2>
          <p>
            Cada producto que analizamos pasa por un protocolo de pruebas estandarizado. Para auriculares, usamos mediciones HRTF y pruebas de escucha a ciegas. Para SSDs, benchmarks con CrystalDiskMark, AS SSD y pruebas de temperatura bajo carga. Para wearables, comparamos datos con dispositivos médicos certificados.
          </p>
          <p>
            Publicamos tanto lo bueno como lo malo. Si un producto falla, lo decimos. Nuestra reputación depende de nuestra honestidad.
          </p>

          <h2>Transparencia sobre afiliados</h2>
          <p>
            TechPulse participa en el Programa de Afiliados de Amazon EU. Esto significa que si haces clic en un enlace de Amazon en nuestro sitio y realizas una compra, podemos recibir una pequeña comisión.
          </p>
          <p>
            <strong>Importante:</strong> esto nunca influye en nuestras puntuaciones ni conclusiones. Damos malas notas a productos que las merecen, aunque tengamos enlaces de afiliado para ellos. La confianza de nuestros lectores vale más que cualquier comisión.
          </p>

          <h2>Contacto editorial</h2>
          <p>
            ¿Eres fabricante y quieres que probemos tu producto? ¿Tienes una sugerencia de review? Escríbenos a <strong>hola@techpulse.es</strong> o usa nuestro <a href="/contacto" style={{color:'var(--accent)'}}>formulario de contacto</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
