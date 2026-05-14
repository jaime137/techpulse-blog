import { Link } from 'react-router-dom';
import styles from './ArticleCard.module.css';

export default function ArticleCard({ article, size = 'normal' }) {
  const { slug, title, excerpt, category, tag, date, readTime, score, image, price } = article;

  const path = tag === 'review' || tag === 'comparativa'
    ? `/${tag === 'review' ? 'reviews' : 'comparativas'}/${slug}`
    : `/articulos/${slug}`;

  return (
    <article className={`${styles.card} ${size === 'large' ? styles.large : ''}`}>
      <Link to={path} className={styles.imgWrap}>
        <img src={image} alt={title} loading="lazy" />
        <span className={`tag tag-${tag}`}>{tag.charAt(0).toUpperCase() + tag.slice(1)}</span>
        {score && (
          <span className={`score-badge score-${Math.floor(score / 1)}`} style={{position:'absolute',bottom:12,right:12}}>
            {score}
          </span>
        )}
      </Link>
      <div className={styles.body}>
        <div className={styles.meta}>
          <span className={styles.category}>{category}</span>
          <span className={styles.dot}>·</span>
          <time>{date}</time>
          {readTime && <><span className={styles.dot}>·</span><span>{readTime} lectura</span></>}
        </div>
        <h2 className={styles.title}>
          <Link to={path}>{title}</Link>
        </h2>
        <p className={styles.excerpt}>{excerpt}</p>
        {price && (
          <div className={styles.footer}>
            <span className={styles.price}>{price}</span>
            <Link to={path} className={styles.readMore}>Ver análisis →</Link>
          </div>
        )}
        {!price && (
          <Link to={path} className={styles.readMore}>Leer artículo →</Link>
        )}
      </div>
    </article>
  );
}
