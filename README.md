# ⚡ TechPulse — Blog de Tecnología con Afiliados Amazon

Web de nicho tecnológico lista para producción y para aplicar al Programa de Afiliados de Amazon Associates.

## 🚀 Arrancar en local

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # carpeta dist/ lista para desplegar
npm run preview    # previsualiza el build
```

---

## 📁 Estructura del proyecto

```
src/
├── components/
│   ├── Header.jsx / .module.css
│   ├── Footer.jsx / .module.css
│   ├── ArticleCard.jsx / .module.css
│   └── AmazonButton.jsx / .module.css
├── pages/
│   ├── Home.jsx / .module.css
│   ├── ArticlesList.jsx / .module.css
│   ├── Comparativas.jsx
│   ├── ReviewDetail.jsx
│   ├── ComparativaDetail.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   └── Legal.jsx
├── data/
│   └── content.js          ← TODA la base de datos de artículos
├── styles/
│   └── global.css
├── App.jsx
└── main.jsx
```

---

## 🔗 1. Subir a GitHub

```bash
# En la carpeta del proyecto:
git init
git add .
git commit -m "Initial commit – TechPulse blog"

# Crear repo en github.com, luego:
git remote add origin https://github.com/TU_USUARIO/techpulse.git
git branch -M main
git push -u origin main
```

---

## ☁️ 2. Desplegar gratis en Vercel (recomendado)

1. Ve a **vercel.com** → Sign up con GitHub
2. "New Project" → importa tu repo `techpulse`
3. Framework: **Vite** (lo detecta automáticamente)
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Click **Deploy** → tu web estará en `techpulse.vercel.app`

### Alternativa: Netlify
1. Ve a **netlify.com** → "Add new site" → "Import from Git"
2. Conecta GitHub, selecciona el repo
3. Build command: `npm run build`, Publish directory: `dist`
4. El archivo `public/_redirects` ya está configurado para el routing SPA

---

## 🌐 3. Dominio gratuito o subdominio

### Opción A — Subdominio gratuito (más rápido)
- **Vercel**: `techpulse.vercel.app` (incluido automáticamente)
- **Netlify**: `techpulse.netlify.app` (incluido automáticamente)

### Opción B — Dominio .es o .com barato
- **Namecheap**: dominios .com desde ~8€/año
- **Porkbun**: dominios .com desde ~7€/año
- **GoDaddy España**: busca ofertas primer año

### Opción C — Dominio gratuito (no recomendado para Amazon)
- **Freenom** (.tk, .ml): Amazon suele rechazar estos dominios
- ⚠️ **Para Amazon Associates, lo mejor es un dominio .com o .es de pago**

### Conectar dominio a Vercel:
1. En Vercel: Settings → Domains → Add domain
2. Añade los registros DNS que te indica Vercel en tu registrador
3. En 24-48h el dominio está activo con HTTPS automático

---

## 🛒 4. Conectar con Amazon Associates

1. Ve a **afiliados.amazon.es** (o affiliate-program.amazon.com/es)
2. Regístrate con tu cuenta de Amazon
3. "Añadir sitio web o aplicación" → introduce tu URL desplegada
4. Elige tu **ID de asociado** (ej: `techpulse-21`)
5. **IMPORTANTE**: Actualiza el tag en `src/data/content.js`:
   ```js
   const AFFILIATE_TAG = 'techpulse-21'; // ← cambia esto por tu tag real
   ```
6. Amazon revisará tu solicitud en 1-3 días laborables
7. Una vez aceptado, tendrás acceso al panel de enlazado de productos

### Obtener ASINs reales:
- Ve a Amazon.es → busca el producto
- El ASIN está en la URL: `amazon.es/dp/B0BDHWDR12`
- O en la página del producto bajo "Información adicional"
- Actualiza los ASINs en `src/data/content.js`

---

## ✅ 5. Checklist para que Amazon apruebe la web

### Contenido (lo más importante):
- [x] Mínimo 10 artículos publicados (tienes 8, añade 2-3 más antes de aplicar)
- [x] Contenido original, no copiado de otras webs
- [x] Reviews reales con pros y contras detallados
- [x] Sin errores ortográficos graves
- [x] Imágenes de calidad (no pixeladas)

### Páginas requeridas:
- [x] Página de inicio con contenido claro
- [x] Página "Sobre nosotros" con información real del editor
- [x] Página de "Contacto" funcional
- [x] Aviso legal / Política de privacidad
- [x] **Política de afiliados / Disclosure visible** ← MUY IMPORTANTE

### Técnico:
- [x] Dominio propio (evita subdominios gratuitos .tk, .ml)
- [x] HTTPS activo (Vercel/Netlify lo incluyen gratis)
- [x] Diseño responsive (móvil y escritorio)
- [x] Velocidad de carga aceptable
- [x] Sin errores 404 en páginas principales

### Legal (CRÍTICO para aprobación):
- [x] Aviso de afiliación visible en TODAS las páginas con enlaces de Amazon
- [x] El aviso debe decir explícitamente que eres participante en Amazon Associates
- [x] No usar imágenes de productos de Amazon sin permiso (usa fotos de Unsplash o propias)
- [x] No prometer precios exactos (los precios cambian)

### Lo que Amazon NO acepta:
- ✗ Webs con contenido adulto, armas, drogas
- ✗ Webs que incentiven clics artificialmente
- ✗ Webs con menos de 10 páginas/artículos
- ✗ Webs que no tienen tráfico real (necesitas visitantes para mantener el acceso)
- ✗ Webs copiadas o con contenido duplicado

### Consejo final:
Amazon requiere que hagas **al menos 3 ventas en los primeros 180 días** para que tu cuenta quede activa permanentemente. Comparte el blog en redes sociales, grupos de Facebook de tecnología y foros como Forocoches o Mediavida para conseguir tráfico inicial.

---

## 📝 Añadir nuevo artículo

Edita `src/data/content.js` y añade un objeto al array `reviews`, `comparativas` o `blogPosts`:

```js
{
  id: 'review-samsung-galaxy-buds3',
  slug: 'review-samsung-galaxy-buds3',
  title: 'Review Samsung Galaxy Buds3 Pro',
  excerpt: 'Samsung renueva...',
  category: 'Auriculares',
  tag: 'review',
  date: '20 Mayo 2026',
  readTime: '7 min',
  score: 8.5,
  image: 'https://images.unsplash.com/...',
  asin: 'B0D4XXXXX',  // ← ASIN real de Amazon
  price: '219€',
  featured: false,
  author: 'Carlos Mendoza',
  specs: { ... },
  pros: [...],
  cons: [...],
  content: `<h2>...</h2><p>...</p>`,
}
```

---

## 🎨 Stack

- **React 18** + **Vite 5**
- **React Router v6** (rutas client-side)
- **CSS Modules** (sin dependencias de UI)
- **Google Fonts**: Syne + DM Sans
- Zero dependencias innecesarias
