import './globals.css';

export const metadata = {
  title: 'Ps. Claudio Fernández | Psicología de Alta Fidelidad',
  description: 'Psicoterapia privada y de pareja en Concepción. Estándar de excelencia clínica y absoluta discreción.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <nav className="glass-modern" style={{
          position: 'fixed',
          top: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(90%, 1200px)',
          zIndex: 1000,
          padding: '1rem 2.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div className="instrument-serif" style={{ fontSize: '1.6rem', color: 'var(--primary)', letterSpacing: '-0.02em', color: '#1a1a1a' }}>
            Ps. Claudio Fernández
          </div>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <a href="#servicios" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em' }}>SERVICIOS</a>
            <a href="https://wa.me/56978789839" className="magnetic-btn" style={{ padding: '0.8rem 1.8rem', fontSize: '0.75rem' }}>AGENDAR</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
