import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Atención Psicológica y Terapia de Pareja | Claudio Fernández Bolton',
  description: 'Psicólogo Clínico Especialista en Vínculos. Atención presencial en Concepción y San Pedro de la Paz (Andalué).',
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
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
