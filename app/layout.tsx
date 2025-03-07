import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';
import { themeScript } from './theme-script';

export const metadata: Metadata = {
  title: 'Josphat Baraka | Web Developer & ICT Technician',
  description: 'Professional portfolio showcasing web development projects and ICT solutions. Expert in Next.js, React, and modern web technologies.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 antialiased">
        <div className="min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-300">
          <Providers>
            {children}
          </Providers>
        </div>
      </body>
    </html>
  );
}
