import MdxPage from "../components/MDX";
import { allOtherPages } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { NewsArticleJsonLd, NextSeo } from "next-seo";

export default function Page({ data, toc }) {
  console.log(data);
  console.log(toc);
  const rest = data._raw;
  const Component = useMDXComponent(data.body.code);
  const children = {
    Component,
    frontmatter: {
      authors: rest.authors,
      title: rest.title,
      date: rest.date,
      description: rest.description,
      modified: rest.modified,
      tags: rest.tags,
    },
  };

  const titleFromUrl = rest.flattenedPath
    .split("/")
    .pop()
    .replace(/-/g, " ")
    // capitalize first char of each word
    .replace(/(^\w{1})|(\s{1}\w{1})/g, (str) => str.toUpperCase());
  return (
    <>
      <NextSeo title={children.frontmatter.title ?? titleFromUrl} />
      <MdxPage children={children} generalToc={toc} />
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  // All pages ending with .md in the /data folder are made available in allOtherPages
  // Based on the specified slug, the correct page is selected
  const urlPath = params.slug.join("/");
  const page = allOtherPages.find((p) => p._raw.flattenedPath === urlPath);
  const data = ["claims", "concepts", "guide", "notes"];
  const results = {};
  function add(arr, name) {
    results[name] = {
      children: [],
    };
    arr.some((el) => {
      console.log(el)
      if (el._raw.sourceFileDir == name) {
        if (Object.keys(results).length) {
          if (el._raw.flattenedPath.includes("/")) {
            console.log(el._raw.flattenedPath);
            results[name].children.push({
              name: el._raw.flattenedPath.split("/")[1].split("-").join(" "),
              link: el._raw.flattenedPath,
            });
          }
        }
      }
    });
  }
  data.map((el) => add(allOtherPages, el))
  return {
    props: {
      data: page,
      toc: results,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = allOtherPages.map((page) => {
    // console.log(page);
    // demo => [demo]
    // abc/demo => [abc,demo]
    const parts = page._raw.flattenedPath.split("/");
    // console.log(parts);
    return { params: { slug: parts } };
  });

  return {
    paths,
    fallback: false,
  };
};
