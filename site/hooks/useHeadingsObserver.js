import { useState, useEffect } from "react";

const useHeadingsObserver = () => {
  const [observer, setObserver] = useState(null);

  const activeHeading = "";
  const timeoutId = null;

  /* Runs only after the first render, in order to preserve the observer
   * between component rerenderings. */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // highlight only the first intersecting heading in the ToC
        const firstIntersectingHeading = entries.find(
          (entry) => entry.isIntersecting
        );
        const newActiveHeading = firstIntersectingHeading?.target.id;
        if (!newActiveHeading || activeHeading === newActiveHeading) {
          return;
        }
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
          // remove highlight of the previous active heading in the ToC
          document
            .querySelector(`.toc-link[href="#${activeHeading}"]`)
            ?.classList.remove("active");

          // add highlight to the new active heading in the ToC
          document
            .querySelector(`.toc-link[href="#${newActiveHeading}"]`)
            ?.classList.add("active");

          activeHeading = newActiveHeading;
        }, 300);
      },
      {
        root: null,
        rootMargin: "-65px 0% -85% 0%", // 65px is a navbar height
      }
    );

    setObserver(observer);

    return () => {
      observer.disconnect();
    };
  }, []);

  return observer;
};

export default useHeadingsObserver;
