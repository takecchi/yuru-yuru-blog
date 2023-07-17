'use client';

import EmotionCacheProvider from './EmotionCache';
import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';

const theme = createTheme();

const EmotionRegistry = ({ children }: { children: React.ReactNode }) => {
  return (
    <EmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </EmotionCacheProvider>
  );
};

export default EmotionRegistry;
