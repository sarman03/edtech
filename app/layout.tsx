import './globals.css';
import { ThemeProvider } from '../context/ThemeContext';
import { Poppins } from '@next/font/google'; // Adjust path as needed
import LayoutWrapper from '@/components/LayoutWrapper';
import ThemeToggle from '@/components/ThemeToggle';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400','500', '600', '700'],
  variable: '--font-poppins',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="relative">
        <ThemeProvider>
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
          <div className="fixed bottom-4 right-4">
            <ThemeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
