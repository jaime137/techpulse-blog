import { useParams, Link, Navigate } from 'react-router-dom';
import { comparativas, buildAmazonLink } from '../data/content';
import AmazonButton from '../components/AmazonButton';
import styles from './ArticleDetail.module.css';
import cStyles from './Comparativa.module.css';

export default function ComparativaDetail() {
  const { slug } = useParams();
  const comp = comparativas.find(c => c.slug === slug);
  if (!comp) return <Navigate to="/comparativas" replace />;

  return (
    <main className={styles.main}>
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/">Inicio</Link><span>›</span>
          <Link to="/comparativas">Comparativas</Link><span>›</span>
          <span>{comp.title}</span>
        </nav>

        <div className={styles.layout}>
          <article className={styles.article}>
            <header className={styles.header}>
              <div className="flex gap-2 items-center flex-wrap" style={{marginBottom:12}}>
                <span className="tag tag-comparativa">Comparativa</span>
                <span className="text-muted text-small">{comp.category}</span>
                <span className="text-muted text-small">·</span>
                <time className="text-muted text-small">{comp.date}</time>
                <span className="text-muted text-small">·</span>
                <span className="text-muted text-small">{comp.readTime} lectura</span>
              </div>
              <h1 className={styles.title}>{comp.title}</h1>
              <p className={styles.excerpt}>{comp.excerpt}</p>
              <div className={styles.byline}>Por <strong>{comp.author}</strong></div>
            </header>

            <div className={styles.heroImg}>
              <img src={comp.image} alt={comp.title} />
            </div>

            <div className="affiliate-notice">
              📢 Esta comparativa contiene enlaces de afiliado de Amazon. Si realizas una compra a través de ellos, podemos recibir una comisión sin coste adicional para ti.
            </div>

            {/* ── RANKING ── */}
            <h2 style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:'1.4rem',margin:'32px 0 20px'}}>
              Ranking completo
            </h2>

            {comp.products.map((p, i) => (
              <div key={i} className={`${styles.rankRow} ${i === 0 ? styles.top : ''}`}>
                <span className={styles.rankNum}>#{p.rank}</span>
                <div>
                  <h3 style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:'1.05rem',marginBottom:4}}>
                    {p.name}
                    {i === 0 && <span className={cStyles.badge}>🏆 Mejor opción</span>}
                  </h3>
                  <p style={{fontSize:'0.85rem',color:'var(--muted)',marginBottom:4}}>{p.highlights}</p>
                  <p style={{fontSize:'0.82rem',fontStyle:'italic',color:'#555'}}>{p.verdict}</p>
                  <div style={{marginTop:12,display:'flex',gap:12,alignItems:'center',flexWrap:'wrap'}}>
                    <span style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:'1.1rem'}}>{p.price}</span>
                    <a
                      href={buildAmazonLink(p.asin)}
                      target="_blank"
                      rel="nofollow noopener sponsored"
                      className="btn btn-amazon"
                      style={{padding:'8px 18px',fontSize:'0.85rem'}}
                    >
                      Ver en Amazon
                    </a>
                  </div>
                </div>
                <div className={`score-badge score-${Math.floor(p.score)}`}>
                  {p.score}
                </div>
              </div>
            ))}

            {/* ── TABLE ── */}
            <h2 style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:'1.4rem',margin:'40px 0 16px'}}>
              Tabla comparativa
            </h2>
            <div style={{overflowX:'auto'}}>
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Posición</th>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Puntuación</th>
                    <th>Veredicto</th>
                  </tr>
                </thead>
                <tbody>
                  {comp.products.map((p, i) => (
                    <tr key={i} className={i === 0 ? 'winner' : ''}>
                      <td>#{p.rank}</td>
                      <td><strong>{p.name}</strong></td>
                      <td>{p.price}</td>
                      <td><strong>{p.score}/10</strong></td>
                      <td>{p.verdict}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{marginTop:40,background:'var(--surface)',padding:'32px',borderRadius:8}}>
              <h3 style={{fontFamily:'var(--font-display)',fontWeight:700,marginBottom:12}}>💡 Conclusión</h3>
              <p style={{lineHeight:1.75,color:'#333'}}>
                Después de probar todos los productos de esta comparativa, nuestra recomendación principal es el <strong>{comp.products[0].name}</strong> por su excelente equilibrio entre prestaciones, calidad y precio en 2026.
                Si tienes un presupuesto más ajustado, el <strong>{comp.products[2]?.name}</strong> ofrece una relación calidad-precio muy difícil de superar.
              </p>
            </div>
          </article>

          {/* ── SIDEBAR ── */}
          <aside className={styles.sidebar}>
            <div className={styles.sideCard}>
              <h3>Nuestra elección</h3>
              <p style={{fontWeight:700,fontFamily:'var(--font-display)',marginBottom:4}}>{comp.products[0].name}</p>
              <p className="text-small text-muted" style={{marginBottom:16}}>{comp.products[0].verdict}</p>
              <AmazonButton asin={comp.products[0].asin} price={comp.products[0].price} text="Ver en Amazon" />
            </div>

            <div className={styles.sideCard}>
              <h3>Mejor precio</h3>
              <p style={{fontWeight:700,fontFamily:'var(--font-display)',marginBottom:4}}>{comp.products[comp.products.length-1].name}</p>
              <p className="text-small text-muted" style={{marginBottom:16}}>{comp.products[comp.products.length-1].price}</p>
              <AmazonButton asin={comp.products[comp.products.length-1].asin} price={comp.products[comp.products.length-1].price} text="Ver en Amazon" />
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
