import Head from 'next/head'
import { Paragraph } from './Paragraph'
import { Anchor } from './Anchor'
import { Heading } from './Heading'


/**
 * @param {object} [props] Props passed to each component
 * @param {object} [props.h] Props passed to Heading component
 */
const getMDXComponents = (props) => ({
      Head,
      p: Paragraph,
      a: Anchor,
      h1: Heading({ level: 1, ...props?.h }),
      h2: Heading({ level: 2, ...props?.h }),
      h3: Heading({ level: 3, ...props?.h }),
      h4: Heading({ level: 4, ...props?.h }),
      h5: Heading({ level: 5, ...props?.h }),
      h6: Heading({ level: 6, ...props?.h }),
});

export default getMDXComponents;
