import type {Metadata} from 'next';
import {Inter, Noto_Sans_Devanagari} from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({subsets: ['latin'], variable: '--font-sans'});
const noto = Noto_Sans_Devanagari({subsets: ['devanagari'], variable: '--font-hindi'});

export const metadata: Metadata = {
  title: 'लोकदर्पण | हर गांव, हर जिला, हर खबर',
  description: 'Hyperlocal News & Citizen Journalism Platform',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${noto.variable}`}>
      <body className="font-sans antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
