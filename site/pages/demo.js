import { Latest } from "components/Home/Latest"
import { allOtherPages } from "contentlayer/generated"

export default function Demo ({ deepDivePages }) {
    return <Latest posts={deepDivePages} />
}

export async function getStaticProps() {
    const deepDivePages = allOtherPages
      .filter((page) => page.featured !== undefined && page.featured)
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .map((page) => {
        return {
          title: page.title ?? null,
          description: page.description ?? null,
          image: page.image ?? null,
          youtube: page.youtube ?? null,
          link: `/${page._raw.flattenedPath}`,
        };
      });

    return {
        props: { deepDivePages }
    }
}