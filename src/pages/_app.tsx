import Navbar from "@/components/Navbar";
import ResponsiveAppBar from "@/components/Navbar copy";
import "@/styles/globals.css";
import { theme } from "@/utils/theme";
import { ThemeProvider } from "@emotion/react";
import { Box } from "@mui/material";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: "primary.main" }}>
        <Navbar />
        <Box sx={{ mx: 10 }}>
          <Component {...pageProps} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
