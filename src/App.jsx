import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ArticlesList from './pages/ArticlesList';
import Comparativas from './pages/Comparativas';
import ReviewDetail from './pages/ReviewDetail';
import ComparativaDetail from './pages/ComparativaDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import { AvisoLegal, Privacidad, PoliticaAfiliados } from './pages/Legal';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articulos" element={<ArticlesList />} />
        <Route path="/comparativas" element={<Comparativas />} />
        <Route path="/reviews/:slug" element={<ReviewDetail />} />
        <Route path="/comparativas/:slug" element={<ComparativaDetail />} />
        <Route path="/sobre-nosotros" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/aviso-legal" element={<AvisoLegal />} />
        <Route path="/politica-privacidad" element={<Privacidad />} />
        <Route path="/politica-cookies" element={<Privacidad />} />
        <Route path="/politica-afiliados" element={<PoliticaAfiliados />} />
        <Route path="*" element={
          <div style={{textAlign:'center',padding:'100px 20px'}}>
            <h1 style={{fontFamily:'var(--font-display)',fontSize:'4rem',fontWeight:800}}>404</h1>
            <p style={{color:'var(--muted)',marginBottom:24}}>Página no encontrada</p>
            <a href="/" className="btn btn-primary">Volver al inicio</a>
          </div>
        } />
      </Routes>
      <Footer />
    </>
  );
}
