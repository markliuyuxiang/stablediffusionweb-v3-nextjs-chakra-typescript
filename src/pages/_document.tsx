/* eslint-disable react/jsx-props-no-spreading */
import { ColorModeScript } from "@chakra-ui/react";
import type { DocumentContext } from "next/document";
import Document, { Html, Head, Main, NextScript } from "next/document";

import Meta from "lib/components/Meta";
import customTheme from "lib/styles/theme";

class MyDocument extends Document {
  static getInitialProps(ctx: DocumentContext) {
    return Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap"
            rel="stylesheet"
          />
          <Meta />

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-54226380-4"
          ></script>
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'UA-54226380-4');`,
            }}
          />

          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2284343423495096"
            crossOrigin="anonymous"
          ></script>
        </Head>
        <body>
          <ColorModeScript
            initialColorMode={customTheme.config?.initialColorMode}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
