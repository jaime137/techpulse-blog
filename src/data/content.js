// ─────────────────────────────────────────────
//  TECHPULSE – BASE DE DATOS DE CONTENIDO
// ─────────────────────────────────────────────

const AFFILIATE_TAG = 'jaime420-21'; 

export const buildAmazonLink = (asin) =>
  `https://www.amazon.es/dp/${asin}?tag=${AFFILIATE_TAG}&linkCode=ogi&th=1&psc=1`;

// ── REVIEWS ──────────────────────────────────
export const reviews = [
  {
    id: 'review-airpods-pro-2',
    slug: 'review-airpods-pro-2',
    title: 'Review AirPods Pro 2: ¿Vale la pena en 2026?',
    excerpt: 'Apple actualiza sus auriculares estrella con cancelación de ruido mejorada, audio espacial y un nuevo chip H2. Los hemos probado durante tres semanas.',
    category: 'Auriculares',
    tag: 'review',
    date: '2 Mayo 2026',
    readTime: '8 min',
    score: 9,
    image: 'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=800&q=80',
    asin: 'B0BDHWDR12',
    price: '279€',
    featured: true,
    author: 'Carlos Mendoza',
    specs: {
      'Chip': 'Apple H2',
      'ANC': 'Sí, adaptativa',
      'Batería auriculares': 'Hasta 6h (ANC on)',
      'Batería total (estuche)': 'Hasta 30h',
      'Resistencia': 'IPX4',
      'Conectividad': 'Bluetooth 5.3',
      'Precio': '279€',
    },
    pros: [
      'Cancelación de ruido excepcional, la mejor del mercado',
      'Audio espacial personalizado muy convincente',
      'Fit cómodo para uso prolongado',
      'Integración perfecta con ecosistema Apple',
      'Control táctil muy preciso',
    ],
    cons: [
      'Precio elevado respecto a competidores',
      'Experiencia óptima solo con iPhone/iPad',
      'Sin soporte para aptX o LDAC',
    ],
    content: `
Los AirPods Pro de segunda generación llegaron con grandes promesas, y tras tres semanas de uso diario podemos decirte sin rodeos: Apple ha vuelto a poner el listón muy alto en auriculares TWS premium.

<h2>Diseño y comodidad</h2>
<p>El estuche MagSafe rediseñado incorpora un altavoz para la función "Buscar" y soporte para correa. Los propios auriculares mantienen el perfil compacto del modelo anterior, pero con tres tallas de almohadillas que garantizan un sellado excelente.</p>
<p>Los llevé durante más de 4 horas seguidas sin molestias. El control táctil del stem ha mejorado notablemente: pellizcar para pausa/play, deslizar para volumen. Sencillo y efectivo.</p>

<h2>Cancelación de ruido: el punto fuerte</h2>
<p>El nuevo chip H2 marca una diferencia real. La ANC del Pro 2 atenúa frecuencias bajas (metro, avión) mejor que cualquier rival en este precio, incluyendo los Sony WF-1000XM5. En una prueba a bordo de un AVE Madrid-Barcelona, casi no escuché el ruido de fondo durante todo el trayecto.</p>
<p>El modo Transparencia también ha mejorado: suena más natural y menos "artificial" que el de los AirPods 3 o incluso el anterior Pro.</p>

<h2>Calidad de sonido</h2>
<p>El perfil sonoro de Apple sigue siendo un V-shape suavizado: graves presentes pero controlados, medios claros, agudos detallados sin fatiga. Para pop, hip-hop y podcasts es perfecto. Los amantes del audio de alta fidelidad echarán en falta LDAC o aptX Adaptive.</p>
<p>El audio espacial personalizado (con escáner facial en iPhone 14+) añade una dimensión real de profundidad en contenido Dolby Atmos. Es el mejor audio espacial que he escuchado en un TWS.</p>

<h2>Batería</h2>
<p>Con ANC activa, 5,5-6 horas por carga. El estuche suma hasta 30 horas totales. Nada revolucionario, pero suficiente para la mayoría de usuarios. La carga es rápida: 5 minutos dan 1 hora de reproducción.</p>

<h2>¿Para quién son?</h2>
<p>Son los mejores TWS si tienes iPhone y presupuesto. Si usas Android o buscas mejor relación calidad-precio, mira los Sony WF-1000XM5 o los Nothing Ear (2).</p>
    `,
  },
  {
    id: 'review-xiaomi-smart-band-8',
    slug: 'review-xiaomi-smart-band-8',
    title: 'Review Xiaomi Smart Band 8: La pulsera fitness imbatible en 2026',
    excerpt: 'Nuevo diseño, pantalla más grande, más sensores de salud y el mismo precio de siempre. Analizamos a fondo la Smart Band 8 de Xiaomi.',
    category: 'Wearables',
    tag: 'review',
    date: '18 Abril 2026',
    readTime: '7 min',
    score: 8,
    image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800&q=80',
    asin: 'B0C1JXVH4P',
    price: '49,99€',
    featured: true,
    author: 'Laura Sánchez',
    specs: {
      'Pantalla': 'AMOLED 1.62" 326 ppi',
      'Batería': 'Hasta 16 días',
      'Resistencia': '5 ATM + IP68',
      'GPS': 'GPS conectado',
      'Sensores': 'FC, SpO2, Estrés',
      'Compatibilidad': 'Android 6+ / iOS 12+',
      'Precio': '49,99€',
    },
    pros: [
      'Relación calidad-precio inmejorable',
      'Pantalla AMOLED muy luminosa y nítida',
      'Batería de hasta 16 días con uso normal',
      'Resistencia al agua fiable (5 ATM)',
      'Seguimiento preciso de frecuencia cardíaca',
    ],
    cons: [
      'GPS conectado, no autónomo',
      'Pulsómetro pierde precisión en ejercicios de alta intensidad',
      'App Mi Fitness podría mejorar en análisis de datos',
    ],
    content: `
Xiaomi lleva años dominando el segmento de pulseras fitness por debajo de 60€, y con la Smart Band 8 vuelve a demostrar por qué es tan difícil competir con ellos en esta franja de precio.

<h2>Lo primero que notas: el diseño</h2>
<p>La Smart Band 8 abandona el diseño "cápsula" de las generaciones anteriores. Ahora es más cuadrada, casi parecida a un smartwatch compacto. La correa es intercambiable y hay decenas de opciones en el mercado. El hardware es sólido y no parece un producto de 50€.</p>
<p>La pantalla AMOLED de 1,62" es espectacular para este precio: 326 ppi, brillo máximo de 600 nits y visualización perfecta bajo la luz del sol.</p>

<h2>Salud y deporte</h2>
<p>Monitorización continua de frecuencia cardíaca, SpO2, niveles de estrés y ciclo menstrual. El seguimiento del sueño desglosa fases REM, sueño profundo y ligero con bastante precisión comparado con mi Garmin Forerunner (que vale 10 veces más).</p>
<p>Tiene más de 150 modos deportivos. Para running, senderismo y ciclismo funciona bien usando el GPS del móvil. Si necesitas GPS autónomo, tendrás que subir de gama.</p>

<h2>Batería: el punto fuerte</h2>
<p>Con uso moderado (notificaciones, sleep tracking, 30 min de ejercicio diario), llego tranquilamente a 13-14 días. Con el Always-On Display activado, bajas a 7-8 días. Cualquiera de las dos opciones gana a la mayoría de smartwatches de precio medio.</p>

<h2>¿La compro?</h2>
<p>Si buscas una pulsera fitness funcional, fiable y duradera por menos de 55€, la Smart Band 8 es la respuesta obvia en 2026. No tiene rival directo a este precio.</p>
    `,
  },
  {
    id: 'review-samsung-970-evo-ssd',
    slug: 'review-samsung-970-evo-ssd',
    title: 'Review Samsung 970 EVO Plus: El SSD NVMe más recomendado',
    excerpt: 'Velocidades de lectura de 3.500 MB/s, fiabilidad contrastada y precio competitivo. El 970 EVO Plus sigue siendo la referencia en SSDs NVMe de gama media.',
    category: 'Almacenamiento',
    tag: 'review',
    date: '5 Abril 2026',
    readTime: '6 min',
    score: 9,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    asin: 'B07MFBLN7K',
    price: '89,99€',
    featured: false,
    author: 'Diego Torres',
    specs: {
      'Interfaz': 'NVMe PCIe 3.0 x4',
      'Lectura secuencial': 'Hasta 3.500 MB/s',
      'Escritura secuencial': 'Hasta 3.300 MB/s',
      'Capacidades': '250GB, 500GB, 1TB, 2TB',
      'NAND': 'Samsung V-NAND 3-bit MLC',
      'Garantía': '5 años',
      'Precio (1TB)': '89,99€',
    },
    pros: [
      'Velocidades de lectura/escritura excelentes para PCIe 3.0',
      'Muy fiable: 600 TBW en el modelo 1TB',
      'Temperaturas controladas gracias al disipador integrado',
      'Software Samsung Magician para monitorización',
      'Garantía de 5 años',
    ],
    cons: [
      'No aprovecha PCIe 4.0 (para eso, mira el 980 Pro)',
      'Ligero throttling en cargas de escritura sostenidas muy largas',
    ],
    content: `
Cuando buscas un SSD NVMe para gaming o trabajo que ofrezca excelentes prestaciones sin pagar precio de flagship, el Samsung 970 EVO Plus aparece siempre en las primeras posiciones. Lo hemos puesto a prueba durante un mes en un build de gaming y una workstation de edición de vídeo.

<h2>Rendimiento en benchmarks</h2>
<p>En CrystalDiskMark, el modelo de 1TB logró 3.491 MB/s de lectura secuencial y 3.274 MB/s de escritura. Prácticamente en línea con las especificaciones oficiales de Samsung. En lectura/escritura aleatoria 4K, los resultados también son sólidos: 600.000/560.000 IOPS.</p>
<p>Para gaming, los tiempos de carga en juegos pesados como Cyberpunk 2077 o Microsoft Flight Simulator mejoran entre un 30-40% respecto a un SSD SATA convencional.</p>

<h2>Temperaturas y throttling</h2>
<p>Con el disipador de cobre integrado, las temperaturas se mantienen entre 45-55°C en operación normal. Solo he visto throttling en escrituras sostenidas durante más de 10 minutos (copia de archivos de vídeo RAW masivos). Para uso cotidiano, ni se nota.</p>

<h2>¿PCIe 3.0 en 2026?</h2>
<p>Si tu placa base soporta PCIe 4.0, considera el Samsung 980 Pro o el WD Black SN850X. Pero si tienes un sistema más antiguo o buscas el mejor precio/rendimiento, el 970 EVO Plus sigue siendo imbatible.</p>
    `,
  },
];

// ── COMPARATIVAS ─────────────────────────────
export const comparativas = [
  {
    id: 'mejores-auriculares-calidad-precio-2026',
    slug: 'mejores-auriculares-calidad-precio-2026',
    title: 'Mejores auriculares calidad-precio 2026: Top 5 probados',
    excerpt: 'Hemos probado durante meses los auriculares más vendidos. Esta es nuestra selección honesta para cada presupuesto: desde 30€ hasta 300€.',
    category: 'Auriculares',
    tag: 'comparativa',
    date: '10 Mayo 2026',
    readTime: '12 min',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    featured: true,
    author: 'Carlos Mendoza',
    products: [
      {
        rank: 1,
        name: 'AirPods Pro 2',
        price: '279€',
        score: 9.2,
        verdict: 'Mejor opción premium (ecosistema Apple)',
        asin: 'B0BDHWDR12',
        highlights: 'ANC líder del mercado, audio espacial, integración iOS perfecta',
      },
      {
        rank: 2,
        name: 'Sony WF-1000XM5',
        price: '239€',
        score: 9.0,
        verdict: 'Mejor para Android y audiófilos',
        asin: 'B0C33XXLN1',
        highlights: 'LDAC, ANC premium, comodidad excepcional',
      },
      {
        rank: 3,
        name: 'Nothing Ear (2)',
        price: '119€',
        score: 8.3,
        verdict: 'Mejor relación calidad-precio mid-range',
        asin: 'B0BW2BVNZ7',
        highlights: 'Diseño único, app completa, buena ANC para el precio',
      },
      {
        rank: 4,
        name: 'Xiaomi Redmi Buds 4 Pro',
        price: '59€',
        score: 7.8,
        verdict: 'Mejor opción por menos de 60€',
        asin: 'B0BQTJV8W8',
        highlights: 'ANC decente, 9h batería, precio imbatible',
      },
      {
        rank: 5,
        name: 'JBL Tune 230NC TWS',
        price: '39€',
        score: 7.2,
        verdict: 'Mejor opción económica',
        asin: 'B09XLWSZ2M',
        highlights: 'Buena calidad de sonido, 40h totales, IP54',
      },
    ],
  },
  {
    id: 'top-5-ssd-gaming-2026',
    slug: 'top-5-ssd-gaming-2026',
    title: 'Top 5 SSDs para gaming en 2026: Comparativa completa',
    excerpt: 'Benchmarks reales, análisis de temperaturas y veredicto final. Cuál es el mejor SSD NVMe para tu PC gaming según presupuesto.',
    category: 'Almacenamiento',
    tag: 'comparativa',
    date: '22 Abril 2026',
    readTime: '10 min',
    image: 'https://images.unsplash.com/photo-1601524909162-ae8725290836?w=800&q=80',
    featured: true,
    author: 'Diego Torres',
    products: [
      {
        rank: 1,
        name: 'Samsung 990 Pro 2TB',
        price: '159€',
        score: 9.4,
        verdict: 'Mejor SSD PCIe 4.0 para gaming',
        asin: 'B0BHJJ9Y77',
        highlights: '7.450 MB/s lectura, bajo calentamiento, PS5 compatible',
      },
      {
        rank: 2,
        name: 'WD Black SN850X 1TB',
        price: '99€',
        score: 9.1,
        verdict: 'El favorito de los gamers',
        asin: 'B0B7CKVCCW',
        highlights: '7.300 MB/s, optimizado para gaming, disipador incluido',
      },
      {
        rank: 3,
        name: 'Seagate FireCuda 530 1TB',
        price: '109€',
        score: 8.9,
        verdict: 'Bestia para cargas de trabajo intensas',
        asin: 'B08GVJGWJX',
        highlights: 'Hasta 7.300 MB/s, 2.500 TBW en 4TB, gran endurance',
      },
      {
        rank: 4,
        name: 'Samsung 970 EVO Plus 1TB',
        price: '89€',
        score: 8.7,
        verdict: 'Mejor PCIe 3.0 del mercado',
        asin: 'B07MFBLN7K',
        highlights: '3.500 MB/s, fiabilísimo, ideal para builds más antiguos',
      },
      {
        rank: 5,
        name: 'Kingston NV2 1TB',
        price: '59€',
        score: 7.5,
        verdict: 'El más económico recomendable',
        asin: 'B0BBWH1Y7C',
        highlights: '3.500 MB/s lectura, ideal como segunda unidad o upgrade de SATA',
      },
    ],
  },
];

// ── BLOG POSTS ────────────────────────────────
export const blogPosts = [
  {
    id: 'guide-wifi-router-2026',
    slug: 'guia-routers-wifi-7-2026',
    title: 'WiFi 7: Todo lo que necesitas saber antes de comprar un router en 2026',
    excerpt: 'El nuevo estándar WiFi 7 promete velocidades de hasta 46 Gbps. Explicamos qué mejora realmente y si vale la pena actualizar ahora.',
    category: 'Redes',
    tag: 'guia',
    date: '8 Mayo 2026',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    author: 'Laura Sánchez',
    featured: false,
  },
  {
    id: 'mejores-teclados-mecanicos-2026',
    slug: 'mejores-teclados-mecanicos-2026',
    title: 'Los 6 mejores teclados mecánicos de 2026 (para gaming y trabajo)',
    excerpt: 'Switches Cherry MX, Gateron o Kailh: cuáles son mejores y para qué. Selección probada a fondo de los teclados mecánicos más valorados este año.',
    category: 'Periféricos',
    tag: 'comparativa',
    date: '1 Mayo 2026',
    readTime: '9 min',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80',
    author: 'Carlos Mendoza',
    featured: false,
  },
  {
    id: 'smartwatch-comparativa-2026',
    slug: 'apple-watch-vs-galaxy-watch-2026',
    title: 'Apple Watch Series 10 vs Samsung Galaxy Watch 7: Comparativa definitiva',
    excerpt: 'Dos gigantes del smartwatch enfrentados. Salud, batería, ecosistema y precio: te decimos cuál comprar según tu móvil y estilo de vida.',
    category: 'Wearables',
    tag: 'comparativa',
    date: '25 Abril 2026',
    readTime: '11 min',
    image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&q=80',
    author: 'Laura Sánchez',
    featured: false,
  },
];

// ── TODOS LOS ARTÍCULOS COMBINADOS ────────────
export const allArticles = [
  ...reviews,
  ...comparativas,
  ...blogPosts,
].sort((a, b) => new Date(b.date) - new Date(a.date));

export const featuredArticles = [...reviews, ...comparativas].filter(a => a.featured);
