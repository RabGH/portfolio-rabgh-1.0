import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en" className="scroll-smooth">
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
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
