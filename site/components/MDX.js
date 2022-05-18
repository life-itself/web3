import Head from 'next/head'
import ReactPlayer from 'react-player/lazy'
import { NextSeo } from 'next-seo'
import siteConfig from "../config/siteConfig"
import { Paragraph } from './Paragraph'
import { Anchor } from './Anchor'

const components = {
  Head,
  p: Paragraph,
  a: Anchor
}

export default function MdxPage({ children, editUrl }) {
  const { Component, frontmatter: {
    title, description, date, authors, youtube, podcast, image, _raw
  }} = children

  let youtubeThumnbnail
  let podcastEmbed

  if (youtube && !image) {
    //  get the youtube thumbnail image from https://img.youtube.com/vi/<youtube-video-id>/maxresdefault.jpg
    const regex =
      /\www.youtube.com\/\embed\/|youtube.com\/\embed\/|youtu.be\/|\www.youtube.com\/\watch\?v=|\youtube.com\/\watch\?v=/;
    youtubeThumnbnail =
      youtube.replace(regex, "img.youtube.com/vi/") + "/maxresdefault.jpg";
  }

  if (podcast && podcast.includes("life-itself")) {
    const podcastUrl = podcast
    podcastEmbed = ([
      podcastUrl.slice(0, "https://anchor.fm/life-itself".length),
      "/embed",
      podcastUrl.slice("https://anchor.fm/life-itself".length)
    ].join(""))
  }

  const titleFromUrl = _raw.flattenedPath
    .split("/")
    .pop()
    .replace(/-/g, " ")
    // capitalize first char of each word
    .replace(/(^\w{1})|(\s{1}\w{1})/g, (str) => str.toUpperCase());

  const SeoTitle = title ?? titleFromUrl;
  const imageUrl = image
    ? siteConfig.url + image
    : youtubeThumnbnail ? youtubeThumnbnail : null

  return (
    <>
      <NextSeo
        title={SeoTitle}
        description={description}
        canonical={`${siteConfig.url}/${_raw.flattenedPath}`}
        openGraph={{
          title: SeoTitle,
          description: description,
          images: imageUrl
            ? ([
                {
                  url: imageUrl,
                  width: 1200,
                  height: 627,
                  alt: title,
                  type: "image/png"
                },
              ])
            : siteConfig.nextSeo.openGraph.images,
        }}
      />
      <article className="prose dark:prose-invert mx-auto p-6">
        <header>
          <div className="mb-6">
            {title && <h1 className="mb-0">{title}</h1>}
            {authors && (
              <div className="-mt-6">
                <p className="opacity-60 pl-1">{authors}</p>
              </div>
            )}
            {date && (
              <p className="text-gray-900 dark:text-gray-500 text-sm pl-2">
                on {date}
              </p>
            )}
            {description && (
              <p className="">{description}</p>
            )}
            {youtube && (
              <div className="relative pt-[56.25%]">
                <ReactPlayer
                  className="absolute top-0 left-0"
                  width="100%"
                  height="100%"
                  url={youtube}
                />
              </div>
            )}
            {podcast && (
              <div className="pt-4">
                <ul className="list-disc">
                  <li>
                    Podcast: &nbsp;
                    <a href={podcast}>{podcast}</a>
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
        <main>
          <div className="my-6">
          <Component components={components} />
        </div>
        {editUrl && (
          <div className='mt-12 mb-6'>
            <a className="flex no-underline font-semibold text-yellow-li" href={editUrl} target="_blank">
              Edit this page
              <span className="mx-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </a>
          </div>)}
        </main>
      </article>
    </>
  );
}
