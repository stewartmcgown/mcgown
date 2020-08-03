import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

export class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="stylesheet" href="/fonts/LeagueSpartan.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
