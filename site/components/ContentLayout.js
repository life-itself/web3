import React from "react";
import { useMediaQuery } from "react-responsive";
import Container from "./Container";
import LeftToc from "./LeftToc";

export default function ContentLayout({ children, leftToc }) {
    console.log(leftToc);
  const isMobile = useMediaQuery({ query: "(max-width: 992px)" });
  return (
    <Container isMobile={isMobile}>
      <LeftToc data={leftToc} isMobile={isMobile} />
      <div
        style={{
          width: isMobile ? "100%" : "60%",
        }}
      >
        {children}
      </div>
    </Container>
  );
}
