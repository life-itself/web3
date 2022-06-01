import { useState, useEffect } from 'react';


/* Creates an Intersection Observer to keep track of headings intersecting
 * a section of the viewport defined by the rootMargin */
const getIntersectionObserver = (callback) => {
  return new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        callback(entry);
      });
    },
    {
      root: null,
      threshold: 0.55,
      rootMargin: "-65px 0% -85% 0%" // 65px is a navbar height
    }
  );
};

const useHeadingsObserver = () => {
  const [activeHeading, setActiveHeading] = useState("");
  const [observer, setObserver] = useState(null);

  /* Runs only after the first render, in order to preserve the observer
   * between component rerenderings (e.g. after activeHeading change). */
  useEffect((() => {
    const observer = getIntersectionObserver((entry) => {
      if (entry.isIntersecting) {
        setActiveHeading(entry.target.id);
      }
    });
    setObserver(observer);

    return observer.disconnect();
  }), [])

  /* On initial render activeHeading will be `null`, since the observer
   * has not been instantiated yet. However, we still want to highlight
   * the current heading in the ToC based on the current url. */
  useEffect(() => {
    if (!activeHeading) {
      return
    }

    const tocLink = document.querySelector(`.toc-link[href="#${activeHeading}"]`)
    tocLink.classList.add("active");

    return () => {
      tocLink.classList.remove("active")
    }
  }, [activeHeading])

  return observer;
}

export default useHeadingsObserver;
