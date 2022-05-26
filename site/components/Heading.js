import React, { useEffect, useState, useRef } from 'react';


export const Heading = ({ level, observer }) => (props) => {
  const ref = useRef(null);

  const handleClick = async () => {
    const url = ref.current.querySelector("a").href;
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      return
    }
  }

  useEffect(() => {
    if (observer) {
      observer.observe(document.getElementById(props.id));
    }
  });

  return React.createElement(`h${level}`, {
    ...props,
    className: "scroll-mt-16 cursor-copy",
    ref,
    onClick: handleClick
  })
}
