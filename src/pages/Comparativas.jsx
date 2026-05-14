import ArticleCard from '../components/ArticleCard';
import { comparativas } from '../data/content';
import styles from './ArticlesList.module.css';

export default function Comparativas() {
  return (
    <main className={styles.main}>
      <div className="container">
        <header className={styles.pageHeader}>
          <h1>Comparativas</h1>
          <p>Enfrentamos los productos más populares para que no tengas que elegir a ciegas. Benchmarks reales, análisis honestos.</p>
        </header>
        <div className={styles.grid}>
          {comparativas.map(c => <ArticleCard key={c.id} article={c} size="large" />)}
        </div>
      </div>
    </main>
  );
}
