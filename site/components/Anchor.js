import { useRouter } from 'next/router'
import { useState, useEffect, Fragment } from 'react'
import { useFloating, useHover, useInteractions } from '@floating-ui/react-dom-interactions'
import { unified } from 'unified'
import rehypeParse from 'rehype-parse'
import find from 'unist-util-find'
import { toString } from 'hast-util-to-string'

import { Tooltip } from './Tooltip'
import getAbsolutePath from '../utils/absolutePath'


// TODO cancel request on mouseleave when it hasn't been fulfilled yet

export const Anchor = (props) => {
  const { href } = props;
  const router = useRouter();
  const [ open, setOpen ] = useState(false);
  const [ loaded, setLoaded ] = useState(false);
  const [ preview, setPreview ] = useState("");
  const { x, y, reference, floating, strategy, context } = useFloating({
    open,
    onOpenChange: setOpen
  });
  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context, props)
  ]);

  useEffect(() => {
    if (open) {
      fetchPreview();
    }
  }, [open])

  const fetchPreview = async () => {
    setLoaded(false);
    const basePath = "http://localhost:3000"; // TODO
    const currentPath = router.asPath;
    const relativePath = props.href.split(".")[0]; // TBD temp remove .md
    const absolutePath = getAbsolutePath({ currentPath, basePath, relativePath });
    console.log(`Fetching: ${absolutePath}`);

    const response = await fetch(absolutePath);
    if (response.status !== 200) {
      // TODO
      console.log(`Looks like there was a problem. Status Code: ${response.status}`)
      return
    }
    const html = await response.text();
    const hast = unified().use(rehypeParse).parse(html);
    console.log(hast)
    const article = find(hast, (node) => {
      return node.tagName === "article"
    })
    const main = find(article, (node) => {
      return node.tagName === "main"
    })
    const p = find(main, (node) => {
      return node.tagName === "p"
    })

    setPreview(toString(p));
    setLoaded(true);
  }

  if (
    href &&
    href.indexOf("http:") !== 0 &&
    href.indexOf("https:") !== 0 &&
    href.includes(".md")
  ) {
    return <Fragment>
             <a {...props} {...getReferenceProps({ref: reference})} />
             {open && loaded && (
               // TODO temp span
               <span
                 {...getFloatingProps({
                   ref: floating,
                   className: "tooltip",
                   style: {
                     position: strategy,
                     left: x ?? '',
                     top: y ?? '',
                   },
                 })}
               >
               { preview }
               </span>
             )}
           </Fragment>;
  }
  return <a {...props} />;
};
