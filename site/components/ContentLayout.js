import React from "react";
import { useMediaQuery } from "react-responsive";
import Container from "./Container";
import RightToc from "./RightToc";

export default function ContentLayout({ post, children }) {
  const isMobile = useMediaQuery({ query: "(max-width: 992px)" });
  return (
    <Container isMobile={isMobile}>
      // Line below is for LHS table of content
      <div style={{ width: "20%" }}></div>
      <div
        style={{
          width: isMobile ? "100%" : "60%",
        }}
      >
        {children}
      </div>
      <RightToc
        toc={post.toc}
        cssBreakingPoint="lg"
        isMobile={isMobile}
        className={`bg-slate-800 mt-6 p-4 sticky top-0 overflow-y-auto max-h-screen lg:bg-transparent lg:pt-0 lg:pb-8 lg:top-4 lg:max-h-(screen-16) lg:border-l lg:border-gray-800 lg:min-w-40 lg:w-5/12 xl:min-w-72 w-full`}
      />
    </Container>
  );
}
