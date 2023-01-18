import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@/firebase/init";
import { useEffect } from "react";
import initFireBase from "@/firebase/init";
import useFirebaseState from "@/state/firebase";

export default function App({ Component, pageProps }: AppProps) {
  const { setFirebaseApp, setFirebaseAuth } = useFirebaseState();
  useEffect(() => {
    const { app, auth } = initFireBase();
    setFirebaseApp(app);
    setFirebaseAuth(auth);
  }, [setFirebaseApp, setFirebaseAuth]);

  return <Component {...pageProps} />;
}
