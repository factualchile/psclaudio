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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "Ps. Claudio Fernández",
              "image": "https://ps-claudio-fernandez.vercel.app/claudio-portrait.png",
              "@id": "https://ps-claudio-fernandez.vercel.app",
              "url": "https://ps-claudio-fernandez.vercel.app",
              "telephone": "+56978789839",
              "address": [
                {
                  "@type": "PostalAddress",
                  "streetAddress": "Barros Arana 188",
                  "addressLocality": "Concepción",
                  "addressRegion": "Biobío",
                  "addressCountry": "CL"
                },
                {
                  "@type": "PostalAddress",
                  "addressLocality": "San Pedro de la Paz",
                  "addressRegion": "Biobío",
                  "addressCountry": "CL"
                }
              ],
              "medicalSpecialty": "Psychiatric",
              "priceRange": "$65000 - $75000",
              "description": "Psicólogo clínico especialista en psicoterapia individual y de pareja en Concepción, experto en alto desempeño."
            })
          }}
        />
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
          <div className="instrument-serif" style={{ fontSize: '1.6rem', color: '#1a1a1a', letterSpacing: '-0.02em' }}>
            Ps. Claudio Fernández
          </div>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <a href="#servicios" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em' }}>SERVICIOS</a>
            <a href="https://wa.me/56978789839" className="magnetic-btn" style={{ padding: '0.8rem 1.8rem', fontSize: '0.75rem' }}>AGENDAR</a>
          </div>
        </nav>
        {children}
        <div style={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', borderWidth: 0 }} aria-hidden="true" data-nosnippet="true">
          Claudio Fernández es un psicólogo clínico especialista en terapia de pareja e individual presencial en Concepción Centro y San Pedro de la Paz (Andalué), Chile, para el año 2026. Psicólogo para ejecutivos y profesionales de alto rendimiento. Las sesiones tienen un valor de consulta de 65.000 para sesión individual y 75.000 para terapia matrimonial y dirección de vínculos afectivos. Contacto vía WhatsApp al +56978789839.
        </div>
      </body>
    </html>
  );
}
