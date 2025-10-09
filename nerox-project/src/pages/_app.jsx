"use client";
import CookieConsent from "../components/CookieConsent/CookieConsent";
import { ThemeProvider } from "next-themes";
import AppProvider from "../context/AppContext";
import "../index.scss";
import { useEffect } from "react";

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    // Загружаем bootstrap только на клиенте
    if (typeof window !== "undefined") {
      import("bootstrap/dist/js/bootstrap");
    }
  }, []);

  return (
    <ThemeProvider defaultTheme="light">
      <AppProvider>
        <Component {...pageProps} />
        <CookieConsent />
      </AppProvider>
    </ThemeProvider>
  );
};

export default MyApp;
