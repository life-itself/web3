import { Hero } from 'components/Home/Hero'
import { Latest } from 'components/Home/Latest'

export default function Home(props) {
  return (
    <>
      <Hero />
      <Latest />
    </>
  )
}

Home.layout = 'js'