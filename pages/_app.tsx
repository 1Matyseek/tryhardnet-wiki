import "@/styles/main.scss";
import type { AppProps } from "next/app";
import {Fragment, useEffect, useState} from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [Loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000)
    });

  return (
    <>
      {!Loading ? (
        <Fragment>
          <Component {...pageProps} />
        </Fragment>
      ) : (
        <div className="loader"></div>
      )}
    </>
  );
  
}