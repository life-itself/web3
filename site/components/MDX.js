import Head from 'next/head'
import { useRouter } from "next/router";
import ReactPlayer from 'react-player/lazy'
import { Paragraph } from './Link'
import { getPostBySlug } from "../lib/api";
import ContentLayout from './ContentLayout';

const components = {
  Head,
  p: Paragraph
}

export default function MdxPage({ children }) {
    const { asPath } = useRouter();
      const post = getPostBySlug(asPath.split("#")[0]);
  const { Component, frontmatter } = children
  
  let podcastEmbed

  if (frontmatter.podcast && frontmatter.podcast.includes("life-itself")) {
    const url = frontmatter.podcast
    podcastEmbed = ([
      url.slice(0, "https://anchor.fm/life-itself".length),
      "/embed",
      url.slice("https://anchor.fm/life-itself".length)
    ].join(""))
  }

  return (
    <article className="prose dark:prose-invert min-w-full">
      <header>
        <div className="mb-6">
          {frontmatter.title && <h1 className="mb-0">{frontmatter.title}</h1>}
          {frontmatter.authors && (
            <div className="-mt-6">
              <p className="opacity-60 pl-1">{frontmatter.authors}</p>
            </div>
          )}
          {frontmatter.date && (
            <p className="text-gray-900 dark:text-gray-500 text-sm pl-2">
              on {frontmatter.date}
            </p>
          )}
          {frontmatter.description && (
            <p className="">{frontmatter.description}</p>
          )}
          {frontmatter.youtube && (
            <div className="relative pt-[56.25%]">
              <ReactPlayer
                className="absolute top-0 left-0"
                width="100%"
                height="100%"
                url={frontmatter.youtube}
              />
            </div>
          )}
          {frontmatter.podcast && (
            <div className="pt-4">
              <ul className="list-disc">
                <li>
                  Podcast: &nbsp;
                  <a href={frontmatter.podcast}>{frontmatter.podcast}</a>
                </li>
              </ul>
              {podcastEmbed && (
                <div className="md:mx-4">
                  <iframe
                    src={podcastEmbed}
                    height="100px"
                    width="100%"
                    frameBorder="0"
                    scrolling="no"
                    className="rounded-md"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </header>
      <ContentLayout post={post}>
        <main className="p-4 w-full">
          <Component components={components} />
        </main>
      </ContentLayout>
    </article>
  );
}
