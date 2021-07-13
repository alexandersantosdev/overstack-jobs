import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <title>OverJob</title>
                    <link rel="icon" href="/favicon.ico" />
                    <meta name="description" content="Um lugar para encontrar vagas de emprego em Piraquara" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                    <link href={"https://fonts.googleapis.com/css2? família=Nunito:wght@400;700;800&display=swap"} rel="stylesheet" ></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}

export default MyDocument;