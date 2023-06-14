import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <html className="scroll-smooth">
            <Head>
                <title>Portfolio site Rabii Ghais</title>
                <meta
                    name="description"
                    content="Rabii Ghaith is a full-stack web developer with a passion for creating modern and responsive websites and applications."
                />
                <meta
                    name="keywords"
                    content="web development, portfolio, next.js, react, tailwindcss"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <body>
                <Component {...pageProps} />
            </body>
        </html>
    );
}
