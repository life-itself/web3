export default function Container({
  children,
  isMobile
}) {
  return (
    <div
      className={`flex ${
        isMobile && "flex-col-reverse"
      } max-w-7xl mx-auto px-2 sm:px-6 lg:px-8`}
    >
      {children}
    </div>
  );
}
