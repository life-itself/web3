import { useRouter } from 'next/router'

import { Tooltip } from './Tooltip';
import siteConfig from '../config/siteConfig.js'

/**
 * Component for adding previews on hover for specific anchor tags.
 * Note: currently tooltips will be displayed only for anchor tags pointing to concepts.
 */
export const Anchor = (props) => {
  const { href } = props;
  const router = useRouter();

  /* Check if the url is relative */
  const urlIsRelative = (url) => {
    return href &&
      href.indexOf("http:") !== 0 &&
      href.indexOf("https:") !== 0
  }

  /* Return absolute path to raw markdown content
   * Note: currently disabled for guide page due to non-standard relative paths in some anchors (TBD) */
  const getRawMdContentUrl = (url, routerPath) => {
    if (routerPath === '/guide' || !urlIsRelative(url)) {
      return null
    }
    const currentPageMdUrl = [siteConfig.repoRawContentRoot, routerPath].join("");
    return new URL(href, currentPageMdUrl).href;
  }

  const rawMdUrl = getRawMdContentUrl(href, router.asPath);

  if (rawMdUrl && !rawMdUrl.includes("notes") && !rawMdUrl.includes("claims")) {
    return (
      <Tooltip {...props} absolutePath={rawMdUrl} render={ tooltipTriggerProps => (
        <a {...tooltipTriggerProps} />
      )}
      />
    )
  }
  return <a {...props} />;
};
