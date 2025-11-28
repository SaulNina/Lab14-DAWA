import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Contacto | Habla con un Experto</title>
        <meta name="description" content="¿Tienes un proyecto en mente? Contáctanos para asesoría gratuita en Arequipa y todo Perú." />
        <meta property="og:title" content="Contacto TechSolutions" />
        <meta property="og:description" content="Estamos listos para ayudarte." />
        <meta property="og:image" content="/images/seo-image.png" />
      </Head>

      <Navbar />

      <main style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
        <h1 style={{ textAlign: 'center' }}>Contáctanos</h1>
        <p style={{ textAlign: 'center', marginBottom: '30px' }}>Llena el formulario y te responderemos en breve.</p>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input type="text" placeholder="Tu Nombre" style={{ padding: '10px', fontSize: '1rem', border: '1px solid #ccc', borderRadius: '5px' }} />
          <input type="email" placeholder="Tu Correo" style={{ padding: '10px', fontSize: '1rem', border: '1px solid #ccc', borderRadius: '5px' }} />
          <textarea rows="5" placeholder="¿En qué podemos ayudarte?" style={{ padding: '10px', fontSize: '1rem', border: '1px solid #ccc', borderRadius: '5px' }}></textarea>
          <button type="submit" style={{ background: '#28a745', color: 'white', border: 'none', padding: '15px', fontSize: '1.2rem', borderRadius: '5px', cursor: 'pointer' }}>Enviar Mensaje</button>
        </form>
      </main>
    </>
  );
}