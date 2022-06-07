import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useMDXComponent } from "next-contentlayer/hooks";

import { Heading } from "./Heading";
import useHeadingsObserver from "../hooks/useHeadingsObserver";

const Anchor = dynamic(
  () => import("./Anchor").then((module) => module.Anchor)
  // {
  //   ssr: false,
  // }
);

const Paragraph = dynamic(() =>
  import("./Paragraph").then((module) => module.Paragraph)
);

const MdxContent = ({ body }) => {
  const observer = useHeadingsObserver();

  const customComponents = {
    Head,
    p: Paragraph,
    a: Anchor,
    h1: Heading({ level: 1, observer }),
    h2: Heading({ level: 2, observer }),
    h3: Heading({ level: 3, observer }),
    h4: Heading({ level: 4, observer }),
    h5: Heading({ level: 5, observer }),
    h6: Heading({ level: 6, observer }),
  };
  const Component = useMDXComponent(body.code);

  return <Component components={customComponents} />;
};

export default MdxContent;
