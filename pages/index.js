import Head from "next/head";
import Navbar from "../components/Navbar";
import dynamic from "next/dynamic";
import Image from "next/image";

const DynamicComponent = dynamic(() => import("../components/LargeComponent"), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | TechSolutions Arequipa</title>
        <meta name="google-site-verification" content="Evo7kC61tptbpvBeOi-zIndDYm2Q2QMi8umXD_9h6vQ" />
        <meta name="description" content="Soluciones tecnológicas avanzadas en Arequipa. Desarrollo web, SEO y optimización con Next.js." />
        {/* Open Graph */}
        <meta property="og:title" content="TechSolutions - Expertos en Web" />
        <meta property="og:description" content="Llevamos tu negocio al siguiente nivel digital." />
        <meta property="og:image" content="/images/seo-image.png" />
      </Head>

      <Navbar />

      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
        <div style={{ textAlign: 'center', padding: '50px 0' }}>
          <h1 style={{ color: '#0070f3', fontSize: '3rem' }}>Bienvenidos a TechSolutions</h1>
          <p style={{ fontSize: '1.5rem', color: '#666' }}>Transformamos ideas en código optimizado.</p>
          
          <div style={{ marginTop: '30px', borderRadius: '10px', overflow: 'hidden' }}>
             {/* Asegúrate de tener la imagen en public/images/seo-image.png */}
             <Image 
               src="/images/seo-image.png" 
               width={800} 
               height={400} 
               alt="Equipo de desarrollo trabajando" 
               priority
               style={{ objectFit: 'cover' }}
             />
          </div>
        </div>

        <DynamicComponent />
      </main>
    </>
  );
}