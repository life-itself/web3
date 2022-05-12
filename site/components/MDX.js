import Head from 'next/head'
import ReactPlayer from 'react-player/lazy'
import { Paragraph } from './Link'
import { NextSeo } from 'next-seo'
import siteConfig from "../config/siteConfig"

const components = {
  Head,
  p: Paragraph
}

export default function MdxPage({ children }) {
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
          <Component components={components} />
        </main>
      </article>
    </>
  );
}
