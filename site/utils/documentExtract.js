import { unified } from 'unified'
import rehypeParse from 'rehype-parse'
import find from 'unist-util-find'
import { toString } from 'hast-util-to-string'


// get first paragraph inside article's main tag
const documentExtract = (htmlString) => {
  const hast = unified().use(rehypeParse).parse(htmlString);
  const article = find(hast, (node) => node.tagName === "article");
  const main = find(article, (node) => node.tagName === "main");
  const paragraph = find(main, (node) => node.tagName === "p");
  return toString(paragraph);
}

export default documentExtract;
