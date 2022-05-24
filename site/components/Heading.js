import React, { useEffect } from 'react';

export const Heading = ({ level, activeHeading, setActiveHeading }) => (props) => {
  console.log(activeHeading, setActiveHeading)
  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
            setActiveHeading(entry.target.id);
            }
        });
        },
        { rootMargin: `0% 0% -80% 0%` }
    );

    observer.observe(document.getElementById(props.id));

    return () => {
      observer.unobserve(document.getElementById(props.id));
    };
  });

  return React.createElement(`h${level}`, { ...props })
}
