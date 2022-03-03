import Head from 'next/head'
import Link from 'next/link'
import { MDXProvider } from '@mdx-js/react'


const components = {
  Head,
}

export default function MdxPage({ children }) {
  const { Component, pageProps } = children

  return (
    <article className="prose mx-auto p-6">
      <header>
        <div className="mb-6">
          <h1>{pageProps.title}</h1>
          {pageProps.author && (
            <div className="-mt-6"><p className="opacity-60 pl-1">{pageProps.author}</p></div>
          )}
          {pageProps.description && (
            <p className="description">{pageProps.description}</p>
          )}
        </div>
      </header>
      <section>
        <MDXProvider components={components}>
          <Component {...pageProps} />
        </MDXProvider>
      </section>
    </article>
  )
}
