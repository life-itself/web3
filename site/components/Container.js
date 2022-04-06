export default function Container({
  children,
  fluid = false,
  flex = false,
  wide = false,
  flexReverse = false,
  cssBreakingPoint = "md",
  className = "",
}) {
  const commonClassNames = `${flex ? `${cssBreakingPoint}:flex` : "block"} ${
    flexReverse ? `${cssBreakingPoint}:flex-row-reverse ` : ""
  } ${className} px-4 sm:px-6`;
  const wideClassNames = `max-w-screen-xl ${commonClassNames}`;
  const regularClassNames = `max-w-4xl ${commonClassNames}`;
  const normalClassNames = `${
    wide ? wideClassNames : regularClassNames
  } mx-auto ${commonClassNames}`;
  const fluidClassNames = `${commonClassNames}`;
  return (
    <div className={fluid ? fluidClassNames : normalClassNames}>{children}</div>
  );
}
