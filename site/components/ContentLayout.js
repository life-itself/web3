import React from 'react'
import Container from './Container'
import LeftToc from './LeftToc';
import TOC from './Toc';

export default function ContentLayout({ post, children, generalToc }) {
  return (
    <Container>
      <LeftToc data={generalToc} />
      {children}
      <TOC
        toc={post.toc}
        cssBreakingPoint="lg"
        className="bg-slate-800 mt-4 p-4 sticky top-0 overflow-y-auto max-h-screen lg:bg-transparent lg:mt-0 lg:pt-0 lg:pb-8 lg:top-4 lg:max-h-(screen-16) lg:border-l lg:border-gray-800 lg:min-w-40 lg:w-5/12 w-full  xl:min-w-72 "
      />
    </Container>
  );
}
