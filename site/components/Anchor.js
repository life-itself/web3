import ReactDOM from 'react-dom'
import { useRouter } from 'next/router'
import { useState, useEffect, useRef, Fragment } from 'react'
import {
  useFloating,
  useHover,
  useInteractions,
  arrow,
  autoPlacement,
  autoUpdate,
  offset
} from '@floating-ui/react-dom-interactions'

import getAbsolutePath from '../utils/absolutePath'
import documentExtract from '../utils/documentExtract'
import { Tooltip } from './Tooltip'


// TODO cancel request on mouseleave when it hasn't been fulfilled yet

export const Anchor = (props) => {
  const { href } = props;
  const router = useRouter();
  const arrowRef = useRef(null);

  const [ showTooltip, setShowTooltip ] = useState(false);
  const [ preview, setPreview ] = useState("");
  const [ previewLoaded, setPreviewLoaded ] = useState(false);

  const {
    x,
    y,
    reference,
    floating,
    placement,
    strategy,
    context,
    middlewareData: { arrow: { x: arrowX, y: arrowY } = {}}
  } = useFloating({
    open: showTooltip,
    onOpenChange: setShowTooltip,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(5),
      autoPlacement(),
      arrow({ element: arrowRef, padding: 4 })
    ]
  });
  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context, props)
  ]);

  useEffect(() => {
    if (showTooltip) {
      fetchPreview();
    }
  }, [showTooltip])

  const fetchPreview = async () => {
    setPreviewLoaded(false);
    const basePath = "http://localhost:3000"; // TODO
    const currentPath = router.asPath;
    const relativePath = props.href.split(".")[0]; // TBD temp remove .md
    const absolutePath = getAbsolutePath({ currentPath, basePath, relativePath });

    const response = await fetch(absolutePath);
    if (response.status !== 200) {
      // TODO
      console.log(`Looks like there was a problem. Status Code: ${response.status}`)
      return
    }
    const html = await response.text();
    const extract = documentExtract(html);

    setPreview(extract);
    setPreviewLoaded(true);
  }

  if (
    href &&
    href.indexOf("http:") !== 0 &&
    href.indexOf("https:") !== 0 &&
    href.includes(".md")
  ) {
    return <Fragment>
             <a {...props} {...getReferenceProps({ref: reference})} />
             {( // TODO temp client only
               typeof window !== 'undefined' && window.document &&
               ReactDOM.createPortal(
                 (<Tooltip
                    {...getFloatingProps({
                      ref: floating,
                      theme: 'light',
                      arrowRef,
                      arrowX,
                      arrowY,
                      placement,
                      style: {
                        position: strategy,
                        visibility: showTooltip && previewLoaded ? 'visible' : 'hidden',
                        left: x ?? '',
                        top: y ?? '',
                      },
                    })}
                  >
                    { preview }
                  </Tooltip>
                 ), document.body
               )
             )}
           </Fragment>;
  }
  return <a {...props} />;
};
