import { Html, Head, Main, NextScript } from "next/document";
import Favicon from '../public/favicon.ico';

export default function Document() {
  return (        
    <Html lang="cz">
          
    <meta name="keywords" content="CZ, SK, CZSK, Minecraft, Minecraft Server, Server, Fantasy Survival, Survival, Minecraft Survival, TryhardNET, CZSK Minecraft, CZSK Minecraft Server, Gulag, PVP, 1v1 , alexpoky2011"/>
    <meta name="author" content="AlexPoky2011"/>
    <meta name="image" content="http://tryhardnet.vercel.app/favicon.ico"/>
    <meta name="description" content="Ahoj, vítej na našem webu! Jsme minecraft server zaměřený na Survival, PVP, 1V1 (Gulag). Chceme aby zde hráči svůj volný čas s kamarády. A proč? Protože jsme propracovaný server a máme A-team který je ochotný vbám kdykoliv pomoci! 😀 Neváhej a připoj se!"/>
    <meta content="#00e1ff" data-react-helmet="true" name="theme-color" />

    <meta property="og:locale" content="cs_CZ" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="http://tryhardnet.vercel.app/favicon.ico"></meta>
    <meta property="og:title" content="TryhardNET" />
    <meta property="og:description" content="Ahoj, vítej na našem webu! Jsme minecraft server zaměřený na Survival, PVP, 1V1 (Gulag). Chceme aby zde hráči svůj volný čas s kamarády. A proč? Protože jsme propracovaný server a máme A-team který je ochotný vbám kdykoliv pomoci! 😀 Neváhej a připoj se!" />
    <meta property="og:url" content="https://www.tryhardnet.eu" />

      <Head />    
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}