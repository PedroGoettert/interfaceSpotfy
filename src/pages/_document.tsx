import { Html, Head, Main, NextScript } from 'next/document'

export const metaData = {
  title: 'Spotfy',
  description: 'Listen to music'
}

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.webp" type="image/x-icon" />
      </Head>
      <body className='bg-zinc-800 text-zinc-50'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
