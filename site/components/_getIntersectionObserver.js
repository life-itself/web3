const getIntersectionObserver = (callback) => {
  return new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        callback(entry);
      });
    },
    {
      root: null,
      // 65px is a navbar height
      rootMargin: `-65px 0% -90% 0%`
    }
  );
};

export default getIntersectionObserver;
