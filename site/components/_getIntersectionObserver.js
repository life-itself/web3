// an Intersection Observer to keep track of currently viewed headings
const getIntersectionObserver = (callback) => {
  return new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        callback(entry);
      });
    },
    {
      root: null,
      rootMargin: "-65px 0% -90% 0%" // 65px is a navbar height
    }
  );
};

export default getIntersectionObserver;
