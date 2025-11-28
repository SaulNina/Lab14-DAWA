// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  const navStyle = {
    background: '#333',
    color: '#fff',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '20px'
  };

  const linkStyle = { color: '#fff', textDecoration: 'none', fontSize: '1.2rem' };

  return (
    <nav style={navStyle}>
      <Link href="/" style={linkStyle}>Inicio</Link>
      <Link href="/blog" style={linkStyle}>Blog</Link>
      <Link href="/contacto" style={linkStyle}>Contacto</Link>
    </nav>
  );
}