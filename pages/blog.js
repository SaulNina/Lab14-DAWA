import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | Tutoriales y Noticias Tech</title>
        <meta name="description" content="Aprende sobre Next.js, React y optimización web con nuestros últimos artículos." />
        <meta property="og:title" content="Blog de Tecnología - TechSolutions" />
        <meta property="og:description" content="Los mejores trucos de programación." />
        <meta property="og:image" content="/images/seo-image.png" />
      </Head>

      <Navbar />

      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
        <h1 style={{ borderBottom: '2px solid #0070f3', paddingBottom: '10px' }}>Últimas Noticias</h1>
        
        {/* Artículo Simulado 1 */}
        <article style={{ margin: '30px 0', padding: '20px', border: '1px solid #eaeaea', borderRadius: '8px' }}>
          <h2 style={{ color: '#333' }}>¿Por qué usar Next.js en 2025?</h2>
          <p style={{ color: '#555' }}>Next.js ofrece renderizado híbrido y estático, lo que lo hace ideal para el SEO...</p>
          <button style={{ background: '#0070f3', color: 'white', border: 'none', padding: '10px', marginTop: '10px', cursor: 'pointer' }}>Leer más</button>
        </article>

        {/* Artículo Simulado 2 */}
        <article style={{ margin: '30px 0', padding: '20px', border: '1px solid #eaeaea', borderRadius: '8px' }}>
          <h2 style={{ color: '#333' }}>Optimización de Imágenes</h2>
          <p style={{ color: '#555' }}>Descubre cómo el componente Image reduce el LCP y mejora tus Core Web Vitals...</p>
          <button style={{ background: '#0070f3', color: 'white', border: 'none', padding: '10px', marginTop: '10px', cursor: 'pointer' }}>Leer más</button>
        </article>
      </main>
    </>
  );
}