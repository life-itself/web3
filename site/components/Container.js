export default function Container({
  children,
}) {
  return (
    <div className="flex max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}
