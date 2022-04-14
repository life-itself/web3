import { NextSeo } from "next-seo";
import { allOtherPages } from "contentlayer/generated";

export default function Concepts({ pages }) {
  const labels = new Set(pages.map((p) => p.wikiPage.charAt(0)));
  return (
    <>
      <NextSeo title="Concepts - all pages" />
      <div className="prose dark:prose-invert pt-6 mx-4 md:mx-auto">
        <h1>Concepts / A-Z Index</h1>
        {Array.from(labels).map((pageTitle) => (
          <div key={pageTitle} className="ml-2 pt-2">
            <h3>{pageTitle}</h3>
            <hr className="m-0 w-full" />
            <ul className="list-disc flex flex-wrap">
              {pages.map(
                ({ wikiPage, wikiPath }) =>
                  pageTitle === wikiPage.charAt(0) && (
                    <li key={wikiPath} className="pr-8 w-fit">
                      <a href={wikiPath}>{wikiPage}</a>
                    </li>
                  )
              )}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const pages = allOtherPages
    .filter((page) => page._raw.sourceFileDir === "concepts")
    .map((page) => {
      const wikiPath = page._raw.flattenedPath;
      const wikiPage = wikiPath
        .split("/")
        .pop()
        .replace(/-/g, " ")
        .replace(
          /^(\w)(.+)/,
          (match, p1, p2) => p1.toUpperCase() + p2.toLowerCase()
        );

      return { wikiPage, wikiPath };
    })
    .sort((a, b) => a.wikiPage.localeCompare(b.wikiPage));

  return {
    props: { pages },
  };
}
