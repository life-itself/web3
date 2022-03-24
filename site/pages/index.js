import { Hero } from 'components/Home/Hero'
import { Latest } from 'components/Home/Latest'
import Features from 'components/Home/Features'
import Why from 'components/Home/Why'
import { NextSeo } from 'next-seo'

export default function Home(props) {
  return (
    <>
      <NextSeo title='Home' />
      <Hero />
      <Latest />
      <Features />
      <Why />
    </>
  )
}