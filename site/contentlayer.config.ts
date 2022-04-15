import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer/source-files'
// import readingTime from 'reading-time'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import wikiLinkPlugin from "remark-wiki-link-plus"

const ObsidianAliases = defineNestedType(() => ({
  name: 'Obsidian',
  filePathPattern: '**/*.md*',
  fields: {
    title: { type: 'string', required: true }
  }
}))

const OtherPage = defineDocumentType(() => ({
  name: 'OtherPage',
  filePathPattern: '**/*.md*',
  contentType: 'mdx',
  fields: {
    title: { type: 'string' },
    date: { type: "date", description: "This will be the publication date" },
    image: { type: "string" },
    description: { type: 'string' },
    youtube: { type: "string" },
    podcast: { type: "string" },
    featured: { type: "boolean", default: false },
    created: { type: "date", description: "The date this page was created (For internal use)" },
    aliases: { type: 'reference', of: ObsidianAliases }
  },
  computedFields: {
    date: {
      type: "date",
      resolve: (doc) => new Date(doc.date).toLocaleDateString('en-US', {
        weekday: "long", year: "numeric", month: "long", day: "numeric"
      })
    },
    created: {
      type: "date",
      resolve: (doc) => new Date(doc.created).toLocaleDateString('en-US')
    },
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