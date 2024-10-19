import '../styles/global.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'To-Do List App',
  description: 'A simple and elegant to-do list application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen`}>
        <div className="max-w-4xl mx-auto p-6">
          {children}
        </div>
      </body>
    </html>
  );
}