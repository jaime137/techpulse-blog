import { useState } from 'react';
import { Link } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard';
import { reviews, comparativas, blogPosts } from '../data/content';
import styles from './ArticlesList.module.css';

const CATEGORIES = ['Todos', 'Reviews', 'Comparativas', 'Guías y blog'];

export default function ArticlesList() {
  const [active, setActive] = useState('Todos');

  const all = [
    ...reviews.map(r => ({...r, _type:'reviews'})),
    ...comparativas.map(c => ({...c, _type:'comparativas'})),
    ...blogPosts.map(p => ({...p, _type:'blog'})),
  ];

  const filtered = all.filter(a => {
    if (active === 'Todos') return true;
    if (active === 'Reviews') return a._type === 'reviews';
    if (active === 'Comparativas') return a._type === 'comparativas';
    if (active === 'Guías y blog') return a._type === 'blog';
    return true;
  });

  return (
    <main className={styles.main}>
      <div className="container">
        <header className={styles.pageHeader}>
          <h1>Todos los artículos</h1>
          <p>Reviews en profundidad, comparativas y guías de compra para que siempre elijas bien.</p>
        </header>

        <div className={styles.filters}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`${styles.filter} ${active === cat ? styles.filterActive : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filtered.map(art => (
            <ArticleCard key={art.id} article={art} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p style={{textAlign:'center',color:'var(--muted)',padding:'60px 0'}}>
            No hay artículos en esta categoría todavía.
          </p>
        )}
      </div>
    </main>
  );
}
