import MdxPage from '../components/MDX';
import { allOtherPages } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { NewsArticleJsonLd, NextSeo } from 'next-seo';


export default function Page({ body, ...rest }) {
  const Component = useMDXComponent(body.code);
  const children = {
    Component,
    frontmatter: {
      authors: rest.authors,
      title: rest.title,
      date: rest.date,
      description: rest.description,
      modified: rest.modified,
      tags: rest.tags,
    }
  }

  const titleFromUrl = rest._raw.flattenedPath
    .split("/")
    .pop()
    .replace(/-/g, " ")
    // capitalize first char of each word
    .replace(/(^\w{1})|(\s{1}\w{1})/g, (str) => str.toUpperCase());
  
  return (
    <>
      <NextSeo title={children.frontmatter.title ?? titleFromUrl} />
      <MdxPage children={children} />
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  // All pages ending with .md in the /data folder are made available in allOtherPages
  // Based on the specified slug, the correct page is selected
  const urlPath = params.slug.join('/')
  const page = allOtherPages.find(p => p._raw.flattenedPath === urlPath)
  return { props: page }
}

export const getStaticPaths = async () => {
  const paths = allOtherPages.map((page) => {
    // demo => [demo]
    // abc/demo => [abc,demo]
    const parts = page._raw.flattenedPath.split('/')
    return { params: { slug: parts } }
  })

  return {
    paths,
    fallback: false,
  }
}

