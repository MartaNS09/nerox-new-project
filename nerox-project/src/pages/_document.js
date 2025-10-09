import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      lang="ru"
      suppressHydrationWarning={true}
      data-scroll-behavior="smooth"
    >
      <Head />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Roboto:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <link href="/assets/css/font-awesome-pro.css" rel="stylesheet" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
