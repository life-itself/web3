import React from 'react'
import Container from './Container'
import TOC from './Toc';

export default function ContentLayout({ post, children }) {
  console.log(post)
  return (
    <Container cssBreakingPoint="lg" flex flexReverse>
      {children}
      <TOC
        toc={post.toc}
        cssBreakingPoint="lg"
        className="bg-blue-100 mt-4 p-4 sticky top-0 overflow-y-auto max-h-screen lg:bg-transparent lg:mt-0 lg:pt-0 lg:pb-8 lg:top-4 lg:max-h-(screen-16) lg:border-l lg:border-gray-800 lg:min-w-40 lg:max-w-64 lg:-mr-20 xl:min-w-72 xl:-mr-36"
      />
    </Container>
  );
}
