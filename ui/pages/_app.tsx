import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../config/theme";
import React, { memo } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const MemoizedComponent = memo(Component);
  return (
    <React.StrictMode>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <MemoizedComponent {...pageProps} />
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default MyApp;
