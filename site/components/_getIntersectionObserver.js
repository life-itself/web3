const getIntersectionObserver = (callback) => {
  if (typeof window !== 'undefined') {
    return new IntersectionObserver(
      (entries) => {
        const intersectingEntries = entries.filter((e) => e.isIntersecting);
        const firstEntry = intersectingEntries[0];
        if (firstEntry) {
          callback(firstEntry);
        }
        // entries.forEach((entry) => {
        //   callback(entry);
        // });
      },
      { root: null,
        threshold: 0.9,
        rootMargin: `0% 0% -90% 0%`
      }
    );
  }
};

export default getIntersectionObserver;
