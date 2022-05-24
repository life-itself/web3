import { unified } from 'unified'
import remarkParse from 'remark-parse'
import { toString } from 'mdast-util-to-string'


// get first paragraph found in the document
const documentExtract = (md) => {
  const mdast = unified().use(remarkParse).parse(md);
  let paragraph = mdast.children.find((node) => node.type === "paragraph");
  return toString(paragraph);
}

export default documentExtract;
