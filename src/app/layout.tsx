import { ReactNode } from 'react';
import { ThemeProvider } from '../common/styles/theme/themeProvider';
import theme from '../common/styles/theme';
import Header from '../components/header';

export const metadata = {
  title: 'BookHistory',
  description: 'Generated by Next.js',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
