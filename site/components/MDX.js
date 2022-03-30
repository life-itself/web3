import { useRouter } from 'next/router'
import Head from "next/head";
import ContentLayout from "./ContentLayout";
import { Paragraph } from "./Link";
import { getPostBySlug, getAllPosts } from '../lib/api';

const components = {
  Head,
  p: Paragraph,
};

export default function MdxPage({ children }) {
  const { asPath } = useRouter();
  const { Component, frontmatter } = children;
    const post = getPostBySlug(asPath)
  return (
    <div className="flex justify-center">
      <article className="prose dark:prose-invert p-6 min-w-full ">
        <header>
          <div className="mb-6">
            <h1>{frontmatter.title}</h1>
            {frontmatter.authors && (
              <div className="-mt-6">
                <p className="opacity-60 pl-1">{frontmatter.authors}</p>
              </div>
            )}
            {frontmatter.description && (
              <p className="description">{frontmatter.description}</p>
            )}
          </div>
        </header>
        <ContentLayout post={post}>
          <main className="w-4/5 p-4">
            <Component components={components} />
          </main>
        </ContentLayout>
      </article>
    </div>
  );
}
