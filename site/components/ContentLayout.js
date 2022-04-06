import React from 'react';
import { useMediaQuery } from "react-responsive";
import Container from './Container';
import LeftToc from './LeftToc';
import TOC from './Toc';

export default function ContentLayout({ post, children, globalToc }) {
  const isMobile = useMediaQuery({ query: "(max-width: 992px)" });
  return (
    <Container isMobile={isMobile}>
      <LeftToc data={globalToc} isMobile={isMobile} />
      <div
        style={{
          width: isMobile ? "100%" : "60%",
        }}
      >
        {children}
      </div>
      <TOC
        toc={post.toc}
        cssBreakingPoint="lg"
        isMobile={isMobile}
        className={`bg-slate-800 mt-6 p-4 sticky top-0 overflow-y-auto max-h-screen lg:bg-transparent lg:pt-0 lg:pb-8 lg:top-4 lg:max-h-(screen-16) lg:border-l lg:border-gray-800 lg:min-w-40 lg:w-5/12 xl:min-w-72 w-full`}
      />
    </Container>
  );
}
