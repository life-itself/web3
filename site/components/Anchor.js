import { useState, Fragment } from 'react';
import { Tooltip } from './Tooltip';

export const Anchor = (props) => {
  const href = props.href;
  if (
    href &&
    href.indexOf("http://") !== 0 &&
    href.indexOf("http://") !== 0 &&
    href.includes(".md")
  ) {
    return (
          <Fragment key={href}>
            <Tooltip
              theme="light"
              mouseEnterDelay="0.5"
              value={href}
            >
              <a {...props} />
            </Tooltip>
          </Fragment>
        );
  }
  return <a {...props} />;
};
