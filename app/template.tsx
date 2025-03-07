"use client";

import { ThemeProvider } from './context/ThemeContext';

export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}
