import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

export class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="stylesheet" href="/fonts/LeagueSpartan.css" />
          <style>{`.fzx2kui , body{background:rgb(19,19,19);color:rgb(226,226,266);font-family:League Spartan;margin:0}.fzx2kui a{color:#31b666}.f1l67xna{border-radius:8px;padding:8px}.f196hi23{margin:0 auto;max-width:1200px}.f1ts74ev{align-items:center;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-around;padding:8px;text-align:center}.f1ts74ev img{border-radius:128px;margin-right:16px;max-width:256px;min-width:256px}.femt1sx{padding:16px}.f122r2ii{font-size:6em;line-height:1em;margin:8px;text-transform:uppercase}.f10mkve1{font-size:2em;padding:8px;text-align:center}.f1tgjws2{display:flex;justify-content:center}`}</style>
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
