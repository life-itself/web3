import Head from 'next/head'
import { Paragraph } from './Paragraph'
import { Anchor } from './Anchor'
import { Heading } from './Heading'


const getMDXComponents = ({ params: { h } }) => ({
      Head,
      p: Paragraph,
      a: Anchor,
      h1: Heading({ level: 1, ...h }),
      h2: Heading({ level: 2, ...h }),
      h3: Heading({ level: 3, ...h }),
      h4: Heading({ level: 4, ...h }),
      h5: Heading({ level: 5, ...h }),
      h6: Heading({ level: 6, ...h }),
});

export default getMDXComponents;
