import { defineDocumentType, makeSource } from 'contentlayer/source-files'
// import readingTime from 'reading-time'
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import wikiLinkPlugin from "remark-wiki-link-plus"

const OtherPage = defineDocumentType(() => ({
  name: 'OtherPage',
  filePathPattern: '**/*.md*',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: false },
    date: { type: 'string', required: false },
    authors: { type: 'string', required: false },
    description: { type: 'string', required: false },
  }
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [OtherPage],
  mdx: {
    remarkPlugins: [
      remarkGfm,
      [wikiLinkPlugin, { markdownFolder: 'content' }]
    ],
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
  }
})