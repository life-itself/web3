import { useRouter } from 'next/router';
import { useState, useEffect } from "react";
import Head from "next/head";
import ContentLayout from "./ContentLayout";
import { Paragraph } from "./Link";
import { getPostBySlug } from '../lib/api';

const CustomHeading = ({ as, ...rest }) => {
  const [value, setValue] = useState("");
  const { query } = useRouter();
  const post = getPostBySlug(`/${query.slug[0]}`);
  const toc = post.toc
  useEffect(() => {
    toc.map((t) => {
      if (t.content === rest.children) {
        setValue(t.slug);
      }
    });
  }, []);
  if (as === "h2") {
    return <h2 id={value} {...rest} />;
  } else if (as === "h3") {
    return <h2 id={value} {...rest} />;
  } else if (as === "h4") {
    return <h4 id={value} {...rest} />;
  } else if (as === "h5") {
    return <h5 id={value} {...rest} />;
  } else if (as === "h6") {
    return <h6 id={value} {...rest} />;
  }
  return <h1 id={value} {...rest} />;
};

const components = {
  Head,
  p: Paragraph,
  h1: (props) => <CustomHeading as="h1" {...props} />,
  h2: (props) => <CustomHeading as="h2" {...props} />,
  h3: (props) => <CustomHeading as="h3" {...props} />,
  h4: (props) => <CustomHeading as="h4" {...props} />,
  h5: (props) => <CustomHeading as="h5" {...props} />,
  h6: (props) => <CustomHeading as="h6" {...props} />,
};

export default function MdxPage({ children }) {
  const { query } = useRouter();
  const { Component, frontmatter } = children;
    const post = getPostBySlug(`/${query.slug[0]}`)
  return (
    <article className="prose dark:prose-invert mx-auto p-6">
      <header>
        <div className="mb-6">
          <h1>{frontmatter.title}</h1>
          {frontmatter.authors && (
            <div className="-mt-6"><p className="opacity-60 pl-1">{frontmatter.authors}</p></div>
          )}
          {frontmatter.date && (
            <p className="">{frontmatter.date}</p>
          )}
          {frontmatter.description && (
            <p classname="">frontmatter.description}</p>
          )}
        </div>
      </header>
      <main>
        <Component components={components} />
      </main>
    </article>
  )
}
