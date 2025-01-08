import "@/styles/globals.scss";
import "@/styles/blog.scss";
import "@/styles/contact.scss";
import "@/styles/footer.scss";
import "@/styles/frequently-asked-questions.scss";
import "@/styles/home.scss";
import "@/styles/menu.scss";
import "@/styles/podcast.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
