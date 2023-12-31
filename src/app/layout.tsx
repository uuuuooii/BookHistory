import React, { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';
import theme from '@/lib/styles/theme';
import Header from '@/components/header';
import globals from '../lib/styles/globals';
import Global from '@/lib/provider/styleProvider';
import ThemeProvider from '@/lib/provider/themeProvider';
import ErrorBoundary from '../components/errorBoundary';
import RecoilProvider from '@/lib/provider/recoil';

export const metadata = {
  title: 'BookHistory',
  description: '나만의 독서기록을 하는 공간',
};

const RootLayout = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <html lang="en">
      <body style={{ background: '#141414' }}>
        <RecoilProvider>
          <ErrorBoundary>
            <ThemeProvider theme={theme}>
              <Global styles={globals} />
              <Header />
              {children}
              <Analytics />
            </ThemeProvider>
          </ErrorBoundary>
        </RecoilProvider>
      </body>
    </html>
  );
};

export default RootLayout;
