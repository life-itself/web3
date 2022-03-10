import { Hero } from 'components/Home/Hero'
import { Latest } from 'components/Home/Latest'
import Features from 'components/Home/Features'

export default function Home(props) {
  return (
    <>
      <Hero />
      <Latest />
      <Features />
    </>
  )
}

Home.layout = 'js'