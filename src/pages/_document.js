import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel='manifest' href='manifest.json' />
        <link rel='app-touch-icon' href='icon.png' />
        <meta name='them-color' content='#fff' />
      </Head >
      <body>
        <Main />
        <NextScript />
      </body>
      
    </Html>
  );
}
