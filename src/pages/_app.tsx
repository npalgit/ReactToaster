import type { AppProps } from "next/app";
import "../styles/globals.css";
import "../styles/toastList.css";
import { ToastProvider } from "../toast";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ToastProvider {...pageProps}>
      <Component {...pageProps} />
    </ToastProvider>
  );
}
