import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { theme } from "@/utils/theme";
import { ThemeProvider } from "@emotion/react";
import { Box } from "@mui/material";
import type { AppProps } from "next/app";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Box className={roboto.className}>
        <Box sx={{ bgcolor: "primary.main" }}>
          <Navbar />
          <Box sx={{ mx: 10 }}>
            <Component {...pageProps} />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
