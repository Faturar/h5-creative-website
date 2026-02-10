import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Axilab - Creative Landing Page',
  description: 'Pixel-perfect SaaS creative landing page recreation.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
