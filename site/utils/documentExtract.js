import { unified } from 'unified'
import remarkParse from 'remark-parse'
import find from 'unist-util-find'
import { toString } from 'mdast-util-to-string'


// get first paragraph
const documentExtract = (md) => {
  const mdast = unified().use(remarkParse).parse(md);
  let paragraph = find(mdast, (node) => node.type === "paragraph");
  return toString(paragraph);
}

export default documentExtract;
