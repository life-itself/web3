import { Hero } from 'components/Home/Hero'
import { Latest } from 'components/Home/Latest'
import Features from 'components/Home/Features'
import Why from 'components/Home/Why'
import GetInvolved from 'components/Home/Get-Involved'
import { NextSeo } from 'next-seo'
import { allOtherPages } from 'contentlayer/generated'

export default function Home({ featuredPages }) {
  return (
    <>
      <NextSeo title="Home" />
      <Hero />
      <Latest posts={featuredPages} />
      <Features />
      <Why />
      <GetInvolved />
    </>
  );
}

export async function getStaticProps () {
  const featuredPages = allOtherPages
    .filter((page) => page.featured !== undefined && page.featured)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map((page) => {
      return {
        title: page.title ?? null,
        description: page.description ?? null,
        image: page.image ?? null,
        youtube: page.youtube ?? null,
        link: `/${page._raw.flattenedPath}`,
      }
    })

  return {
    props: {
      featuredPages
    }
  }
}