import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata = {
  title: 'Ps. Claudio Fernández | Psicoterapia en Concepción',
  description: 'Psicoterapia individual y de pareja en Concepción y San Pedro de la Paz (Andalué). Espacio profesional para el bienestar emocional y vínculos saludables.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <nav className="glass" style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 1000,
          padding: '1.5rem 8%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div className="serif" style={{ fontSize: '1.4rem', color: 'var(--primary)', letterSpacing: '0.05em' }}>
            Ps. Claudio Fernández
          </div>
          <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
            <a href="#inicio" style={{ textDecoration: 'none', color: 'var(--text-main)', fontSize: '0.9rem', fontWeight: '500' }}>Inicio</a>
            <a href="#servicios" style={{ textDecoration: 'none', color: 'var(--text-main)', fontSize: '0.9rem', fontWeight: '500' }}>Servicios</a>
            <a href="#contacto" className="btn-accent" style={{ fontSize: '0.9rem' }}>Agendar Sesión</a>
          </div>
        </nav>
        {children}
        <footer style={{ backgroundColor: 'var(--primary)', color: 'var(--white)', padding: '5rem 8%', marginTop: '4rem' }}>
          <div className="grid-2">
            <div>
              <h2 className="serif" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Ps. Claudio Fernández</h2>
              <p style={{ opacity: 0.7, maxWidth: '400px', fontSize: '0.9rem' }}>
                Dedicado a proporcionar un espacio de escucha y sanación profunda para individuos y parejas en el corazón de Concepción.
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontWeight: '500', marginBottom: '0.5rem' }}>Contacto Directo</p>
              <p style={{ fontSize: '1.5rem', color: 'var(--accent)' }}>+56 9 7878 9839</p>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '4rem', paddingTop: '2rem', fontSize: '0.8rem', opacity: 0.5 }}>
            © {new Date().getFullYear()} Ps. Claudio Fernández. Todos los derechos reservados.
          </div>
        </footer>
      </body>
    </html>
  );
}
