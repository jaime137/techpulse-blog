import { useParams, Link, Navigate } from 'react-router-dom';
import { reviews, buildAmazonLink } from '../data/content';
import AmazonButton from '../components/AmazonButton';
import ArticleCard from '../components/ArticleCard';
import styles from './ArticleDetail.module.css';

export default function ReviewDetail() {
  const { slug } = useParams();
  const review = reviews.find(r => r.slug === slug);
  if (!review) return <Navigate to="/articulos" replace />;

  const related = reviews.filter(r => r.slug !== slug).slice(0, 2);

  return (
    <main className={styles.main}>
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/">Inicio</Link><span>›</span>
          <Link to="/articulos">Artículos</Link><span>›</span>
          <span>{review.category}</span><span>›</span>
          <span>{review.title}</span>
        </nav>

        <div className={styles.layout}>
          <article className={styles.article}>
            {/* ── HEADER ── */}
            <header className={styles.header}>
              <div className="flex gap-2 items-center flex-wrap" style={{marginBottom:12}}>
                <span className={`tag tag-review`}>Review</span>
                <span className="text-muted text-small">{review.category}</span>
                <span className="text-muted text-small">·</span>
                <time className="text-muted text-small">{review.date}</time>
                <span className="text-muted text-small">·</span>
                <span className="text-muted text-small">{review.readTime} lectura</span>
              </div>
              <h1 className={styles.title}>{review.title}</h1>
              <p className={styles.excerpt}>{review.excerpt}</p>
              <div className={styles.byline}>
                <span>Por <strong>{review.author}</strong></span>
              </div>
            </header>

            {/* ── HERO IMAGE ── */}
            <div className={styles.heroImg}>
              <img src={review.image} alt={review.title} />
            </div>

            {/* ── AFFILIATE NOTICE ── */}
            <div className="affiliate-notice">
              📢 Este artículo contiene enlaces de afiliado de Amazon. Si realizas una compra a través de ellos, podemos recibir una pequeña comisión sin ningún coste adicional para ti.
            </div>

            {/* ── VERDICT BOX ── */}
            <div className={styles.verdictBox}>
              <div className={styles.verdictScore}>
                <span className={`score-badge score-${Math.floor(review.score)}`} style={{width:72,height:72,fontSize:'1.6rem'}}>
                  {review.score}
                </span>
                <span>Puntuación TechPulse</span>
              </div>
              <div className={styles.verdictText}>
                <h3>Veredicto</h3>
                <p>
                  {review.score >= 9
                    ? 'Producto excepcional. Recomendado sin reservas para la mayoría de usuarios.'
                    : 'Muy buena opción en su categoría, con algunas reservas menores.'}
                </p>
                <AmazonButton asin={review.asin} price={review.price} />
              </div>
            </div>

            {/* ── PROS & CONS ── */}
            <div className="pros-cons">
              <div className="pros-box">
                <h4>✅ Lo mejor</h4>
                <ul>{review.pros.map((p,i) => <li key={i}>{p}</li>)}</ul>
              </div>
              <div className="cons-box">
                <h4>❌ Lo mejorable</h4>
                <ul>{review.cons.map((c,i) => <li key={i}>{c}</li>)}</ul>
              </div>
            </div>

            {/* ── SPECS ── */}
            <div className={styles.specsTable}>
              <h2 style={{fontFamily:'var(--font-display)',fontWeight:700,marginBottom:16}}>Especificaciones técnicas</h2>
              <table>
                <tbody>
                  {Object.entries(review.specs).map(([k, v]) => (
                    <tr key={k}>
                      <th>{k}</th>
                      <td>{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ── CONTENT ── */}
            <div
              className="article-body"
              dangerouslySetInnerHTML={{ __html: review.content }}
            />

            {/* ── BOTTOM CTA ── */}
            <div className={styles.bottomCta}>
              <div>
                <h3>¿Listo para comprarlo?</h3>
                <p className="text-muted text-small">Precio actualizado en Amazon España</p>
              </div>
              <AmazonButton asin={review.asin} price={review.price} text="Comprar en Amazon" />
            </div>
          </article>

          {/* ── SIDEBAR ── */}
          <aside className={styles.sidebar}>
            <div className={styles.sideCard}>
              <h3>Comprar ahora</h3>
              <img src={review.image} alt={review.title} style={{borderRadius:8, marginBottom:16}} />
              <p style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:'1.3rem',marginBottom:4}}>{review.price}</p>
              <AmazonButton asin={review.asin} price={null} text="Ver en Amazon" />
            </div>

            <div className={styles.sideCard}>
              <h3>Artículos relacionados</h3>
              <div style={{display:'flex',flexDirection:'column',gap:16}}>
                {related.map(r => (
                  <Link key={r.id} to={`/reviews/${r.slug}`} className={styles.relatedItem}>
                    <img src={r.image} alt={r.title} />
                    <div>
                      <p className={styles.relatedTitle}>{r.title}</p>
                      <span className="text-muted text-small">{r.price}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
