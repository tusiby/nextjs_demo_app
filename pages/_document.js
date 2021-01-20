import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Spartan&display=swap" rel="stylesheet" />
                    <meta name="description" content="Demo App" />
                    <meta name="keywords" content="react,ssr,next,js" />
                    <meta name="author" content="Denis Lukin" />
                    <meta charSet="utf-8" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
                <style jsx>{`
                    body {
                        padding: 0;
                        margin: 0;
                    }
                `}</style>
            </Html>
        )
    }
}