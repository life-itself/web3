import { useEffect, useState } from "react"
import Link from 'next/link';
import { Tooltip } from './Tooltip';
/**
 * Component for adding previews on hovering over anchor tags with relative paths
 */
export const Anchor = (props) => {
  /* Check if the path is relative */
  const pathIsRelative = (path) => {
    return path &&
      path.indexOf("http:") !== 0 &&
      path.indexOf("https:") !== 0
  }

  const href = props.href.endsWith(".md")
    ? props.href.replace(".md", "")
    : props.href;

  const [ path, setPath ] = useState(href)

  useEffect(() => {
    let isMount = true
    if (isMount) {
      const link = document.createElement("a")
      link.href = href
      setPath(link.pathname)
    }
    return () => {
      setPath(href)
      isMount = false
    }
  },[])

  if (pathIsRelative(href)) {
    if (href.indexOf("#") !== 0) {
      return (
        <Tooltip {...props} href={href} render={ tooltipTriggerProps => (
          <Link href={path}>
            <a {...tooltipTriggerProps} href={path} />
          </Link>
        )}
        />
      )
    }
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    )
  }
  return <a target="_blank" rel="noopener" {...props} />;
};
