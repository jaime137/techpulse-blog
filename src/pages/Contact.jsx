import { useState } from 'react';
import styles from './StaticPage.module.css';
import cStyles from './Contact.module.css';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.narrow}>
          <h1>Contacto</h1>
          <p className={styles.lead}>
            ¿Tienes alguna pregunta, sugerencia o quieres que probemos algún producto? Escríbenos.
          </p>

          {sent ? (
            <div className={cStyles.success}>
              ✅ <strong>¡Mensaje enviado!</strong> Te responderemos en menos de 48 horas.
            </div>
          ) : (
            <div className={cStyles.form}>
              <div className={cStyles.field}>
                <label>Nombre</label>
                <input type="text" placeholder="Tu nombre" required />
              </div>
              <div className={cStyles.field}>
                <label>Email</label>
                <input type="email" placeholder="tu@email.com" required />
              </div>
              <div className={cStyles.field}>
                <label>Asunto</label>
                <select>
                  <option>Consulta general</option>
                  <option>Sugerencia de review</option>
                  <option>Propuesta de colaboración</option>
                  <option>Error en un artículo</option>
                  <option>Otro</option>
                </select>
              </div>
              <div className={cStyles.field}>
                <label>Mensaje</label>
                <textarea placeholder="Cuéntanos..." rows={6} required></textarea>
              </div>
              <button className="btn btn-primary" onClick={handleSubmit} style={{width:'100%',justifyContent:'center'}}>
                Enviar mensaje
              </button>
              <p style={{fontSize:'0.78rem',color:'var(--muted)',marginTop:8}}>
                Tus datos solo se usarán para responder a tu consulta. No los compartimos con terceros.
              </p>
            </div>
          )}

          <div className={cStyles.info}>
            <div>
              <h3>Email</h3>
              <p>hola@techpulse.es</p>
            </div>
            <div>
              <h3>Respuesta típica</h3>
              <p>Menos de 48 horas</p>
            </div>
            <div>
              <h3>Para prensa</h3>
              <p>prensa@techpulse.es</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
