// "use client";
// import CookieConsent from "../components/CookieConsent/CookieConsent";
// import { ThemeProvider } from "next-themes";
// import AppProvider from "../context/AppContext";
// import "../index.scss";
// import { useEffect } from "react";

// const MyApp = ({ Component, pageProps }) => {
//   useEffect(() => {
//     // Загружаем bootstrap только на клиенте
//     if (typeof window !== "undefined") {
//       import("bootstrap/dist/js/bootstrap");
//     }
//   }, []);

//   return (
//     <ThemeProvider defaultTheme="light">
//       <AppProvider>
//         <Component {...pageProps} />
//         <CookieConsent />
//       </AppProvider>
//     </ThemeProvider>
//   );
// };

// export default MyApp;
"use client";
import Head from "next/head";
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
        {/* ===== УЛУЧШЕННЫЕ МЕТАТЕГИ С РАЗДЕЛЕНИЕМ ГОРОДОВ ===== */}
        <Head>
          <title>
            Создание сайтов под ключ в Витебске | Разработка сайтов в Минске |
            SEO-продвижение | APSOD
          </title>
          <meta
            name="description"
            content="🚀 Создание сайтов под ключ в Витебске и Минске. Профессиональная разработка веб-сайтов, Landing Page, интернет-магазинов. SEO-продвижение в поисковых системах. Заказать сайт с гарантией. Бесплатная консультация!"
          />
          <meta
            name="keywords"
            content="сайт под ключ Витебск, сайт под ключ Минск, создание сайтов Витебск, разработка сайта Минск, заказать сайт, веб-сайт, лендинг, интернет-магазин, SEO продвижение, раскрутка сайта, контекстная реклама, веб-студия Витебск, веб-разработка Минск"
          />

          <meta
            property="og:title"
            content="Создание сайтов под ключ в Витебске и Минске | APSOD"
          />
          <meta
            property="og:description"
            content="Профессиональная разработка сайтов под ключ в Витебске и Минске. SEO-продвижение, современный дизайн. Бесплатная консультация!"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://apsod.com" />
          <meta property="og:image" content="https://apsod.com/og-image.jpg" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Создание сайтов в Витебске и Минске | APSOD Веб-студия"
          />
          <meta
            name="twitter:description"
            content="Разработка сайтов под ключ. SEO-продвижение, современный дизайн в Витебске и Минске."
          />
          <meta name="twitter:image" content="https://apsod.com/og-image.jpg" />

          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="index, follow" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="canonical" href="https://apsod.com" />
        </Head>

        {/* ===== СУЩЕСТВУЮЩИЙ КОД ОСТАЁТСЯ ===== */}
        <Component {...pageProps} />
        <CookieConsent />
      </AppProvider>
    </ThemeProvider>
  );
};

export default MyApp;
