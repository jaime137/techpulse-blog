import { Link } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard';
import { reviews, comparativas, blogPosts, featuredArticles } from '../data/content';
import styles from './Home.module.css';

export default function Home() {
  const hero = featuredArticles[0];
  const secondary = featuredArticles.slice(1, 3);
  const latest = [...reviews, ...comparativas, ...blogPosts]
    .sort((a, b) => 0).slice(0, 3);

  return (
    <main>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <article className={styles.heroMain}>
              <Link to={`/reviews/${hero.slug}`} className={styles.heroImg}>
                <img src={hero.image} alt={hero.title} />
                <span className={`tag tag-${hero.tag}`}>{hero.tag}</span>
                <span className={`score-badge score-${Math.floor(hero.score)}`}>
                  {hero.score}
                </span>
              </Link>
              <div className={styles.heroContent}>
                <div className="flex gap-2 items-center text-muted text-small">
                  <strong style={{color:'var(--black)'}}>{hero.category}</strong>
                  <span>·</span>
                  <time>{hero.date}</time>
                  <span>·</span>
                  <span>{hero.readTime} lectura</span>
                </div>
                <h1>
                  <Link to={`/reviews/${hero.slug}`}>{hero.title}</Link>
                </h1>
                <p>{hero.excerpt}</p>
                <div className={styles.heroPriceRow}>
                  <span className={styles.heroPrice}>{hero.price}</span>
                  <Link to={`/reviews/${hero.slug}`} className="btn btn-primary">Leer análisis completo</Link>
                </div>
              </div>
            </article>

            <aside className={styles.heroSecondary}>
              {secondary.map(art => (
                <ArticleCard key={art.id} article={art} />
              ))}
            </aside>
          </div>
        </div>
      </section>

      {/* ── AFFILIATE BANNER ── */}
      <div className="container">
        <div className="affiliate-notice">
          📢 <strong>Aviso de afiliación:</strong> TechPulse participa en el Programa de Afiliados de Amazon. Podemos recibir una pequeña comisión si compras a través de nuestros enlaces, <strong>sin ningún coste adicional para ti</strong>.
        </div>
      </div>

      {/* ── LATEST REVIEWS ── */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Últimas reviews</h2>
            <Link to="/articulos" className={styles.viewAll}>Ver todas →</Link>
          </div>
          <div className={styles.grid3}>
            {reviews.map(r => <ArticleCard key={r.id} article={r} />)}
          </div>
        </div>
      </section>

      {/* ── COMPARATIVAS ── */}
      <section className={`${styles.section} ${styles.sectionGray}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Comparativas destacadas</h2>
            <Link to="/comparativas" className={styles.viewAll}>Ver todas →</Link>
          </div>
          <div className={styles.grid2}>
            {comparativas.map(c => <ArticleCard key={c.id} article={c} size="large" />)}
          </div>
        </div>
      </section>

      {/* ── BLOG ── */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Del blog</h2>
            <Link to="/articulos" className={styles.viewAll}>Ver todos →</Link>
          </div>
          <div className={styles.grid3}>
            {blogPosts.map(p => <ArticleCard key={p.id} article={p} />)}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className={styles.newsletter}>
        <div className="container">
          <div className={styles.newsletterInner}>
            <div>
              <h2>¿No quieres perderte nada?</h2>
              <p>Recibe en tu correo nuestras mejores reviews y comparativas cada semana.</p>
            </div>
            <form className={styles.form} onSubmit={e => e.preventDefault()}>
              <input type="email" placeholder="tucorreo@ejemplo.com" required />
              <button type="submit" className="btn btn-primary">Suscribirme</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
