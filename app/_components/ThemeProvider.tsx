"use client";

import {ThemeProvider as NextThemesProvider} from "next-themes";
import {ReactNode} from "react";

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: string;
  forcedTheme?: string;
}

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  forcedTheme,
}: ThemeProviderProps) {
  return (
    <NextThemesProvider defaultTheme={defaultTheme} forcedTheme={forcedTheme}>
      {children}
    </NextThemesProvider>
  );
}
