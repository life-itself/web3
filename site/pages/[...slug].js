import MdxPage from '../components/MDX';
import { allOtherPages } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { NextSeo } from 'next-seo';
import siteConfig from "../config/siteConfig"


export default function Page({ body, ...rest }) {
  const Component = useMDXComponent(body.code);
  const children = {
    Component,
    frontmatter: {
      title: rest.title,
      date: rest.date,
      description: rest.description,
      image: rest.image,
      youtube: rest.youtube,
      podcast: rest.podcast,
      featured: rest.featured,
      created: rest.created,
      aliases: rest.aliases
    },
  };

  const titleFromUrl = rest._raw.flattenedPath
    .split("/")
    .pop()
    .replace(/-/g, " ")
    // capitalize first char of each word
    .replace(/(^\w{1})|(\s{1}\w{1})/g, (str) => str.toUpperCase());
  
  return (
    <>
      <NextSeo
        title={children.frontmatter.title ?? titleFromUrl}
        description={children.frontmatter.description}
        canonical={siteConfig.url + "/" + rest._raw.flattenedPath}
        openGraph={{
          title: children.frontmatter.title ?? titleFromUrl,
          description: children.frontmatter.description,
          images: [
            {
              url: siteConfig.url + children.frontmatter.image,
              width: 1200,
              height: 627,
              alt: children.frontmatter.title,
            },
          ],
        }}
      />
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

