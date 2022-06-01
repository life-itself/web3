import React, { useEffect, useState } from 'react';


export const Heading = ({ level, observer }) => (props) => {
  useEffect(() => {
    /* start observing heading's intersection with the bounding box
     * set by observer's `rootMargin` */
    if (!observer) {
      return
    }
    observer.observe(document.getElementById(props.id));
  });

  return React.createElement(`h${level}`, {
    ...props,
    className: "scroll-mt-16 cursor-pointer"
  })
}
