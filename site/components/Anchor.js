import { useRouter } from 'next/router'

import { Tooltip } from './Tooltip';
import siteConfig from '../config/siteConfig.js'


export const Anchor = (props) => {
  const { href } = props;
  const router = useRouter();

  const absoluteContentPath = (href) => {
    // return content path only if it points to a local file (href path is relative)
    if (
      href &&
      href.indexOf("http:") !== 0 &&
      href.indexOf("https:") !== 0
    ) {
      const currentPageContentPath = [siteConfig.rawContentBaseUrl, router.asPath].join("");
      const hrefContentPath = new URL(href, currentPageContentPath).href;
      // excluding notes and claims
      if (!hrefContentPath.includes("notes") && !hrefContentPath.includes("claims")) {
        return hrefContentPath;
      }
    }
  }

  if (absoluteContentPath(props.href)) {
    return (
      <Tooltip {...props} absolutePath={absoluteContentPath(props.href)} render={ tooltipTriggerProps => (
        <a {...tooltipTriggerProps} />
      )}
      />
    )
  }
  return <a {...props} />;
};
