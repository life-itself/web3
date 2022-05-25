import React, { useEffect, useState } from 'react';

export const Heading = ({ level, observer }) => (props) => {
  useEffect(() => {
    if (observer) {
      observer.observe(document.getElementById(props.id));
    }
  });

  return React.createElement(`h${level}`, { ...props })
}
