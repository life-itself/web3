const getIntersectionObserver = (callback) => {
  if (typeof window !== 'undefined') {
    return new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          callback(entry);
        });
      },
      { root: null,
        rootMargin: `0% 0% -85% 0%`
      }
    );
  }
};

export default getIntersectionObserver;
