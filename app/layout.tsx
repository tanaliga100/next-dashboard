import '@/app/ui/global.css';
import { Toaster } from 'react-hot-toast';
import { inter } from './ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Toaster position="top-right" reverseOrder={false} />
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
