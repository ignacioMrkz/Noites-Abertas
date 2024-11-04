import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/header';
import { AuthProvider } from '@/components/auth-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Noites Abertas - Programa de Lecer',
  description: 'Descobre actividades emocionantes na túa área',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="gl" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen bg-background">{children}</main>
            <Toaster />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}