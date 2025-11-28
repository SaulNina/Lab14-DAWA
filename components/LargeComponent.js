// components/LargeComponent.js

export default function LargeComponent() {
  return (
    <div style={{ 
      marginTop: '40px', 
      padding: '30px', 
      background: '#f9f9f9', 
      borderLeft: '5px solid #0070f3',
      borderRadius: '4px'
    }}>
      <h3 style={{ color: '#0070f3', margin: '0 0 10px 0' }}>Sección de Carga Diferida</h3>
      <p style={{ color: '#555', lineHeight: '1.6' }}>
        Este contenido se ha cargado de forma inteligente usando <strong>next/dynamic</strong>. 
        Esto significa que la página principal cargó rapidísimo porque no tuvo que esperar a que esta sección estuviera lista. 
        ¡Es genial para el SEO!
      </p>
    </div>
  );
}