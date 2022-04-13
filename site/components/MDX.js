import Head from 'next/head'
import { Paragraph } from './Link'

const components = {
  Head,
  p: Paragraph
}

export default function MdxPage({ children }) {
  const { Component, frontmatter } = children

  return (
    <article className="prose dark:prose-invert mx-auto p-6">
      <header>
        <div className="mb-6">
          <h1>{frontmatter.title}</h1>
          {frontmatter.authors && (
            <div className="-mt-6"><p className="opacity-60 pl-1">{frontmatter.authors}</p></div>
          )}
          {frontmatter.date && (
            <p className="">{frontmatter.date}</p>
          )}
          {frontmatter.description && (
            <p classname="">frontmatter.description}</p>
          )}
        </div>
      </header>
      <main>
        <Component components={components} />
      </main>
    </article>
  )
}
