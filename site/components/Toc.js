import { useState } from "react";
import { ScrollSpy, Link } from "./Scrollspy";
import ArrowRight from "./icons/ArrowRight";

export default function TOC({
  className,
  cssBreakingPoint = "xl",
  toc,
  contentSelector,
  depth = 2,
  isMobile,
}) {
  if (!toc || !toc.length) return null;
  const minLevel = toc.reduce(
    (mLevel, item) => (!mLevel || item.lvl < mLevel ? item.lvl : mLevel),
    0
  );
  const tocItems = toc
    .filter((item) => item.lvl <= minLevel + depth)
    .map((item) => ({
      ...item,
      content: item.content
        .replace(/[\s]?\{\#[\w\d\-_]+\}$/, "")
        .replace(/(<([^>]+)>)/gi, ""),
      //For TOC rendering in specification files in the spec repo we have "a" tags added manually to the spec markdown document
      //MDX takes these "a" tags and uses them to render the "id" for headers like a-namedefinitionsapplicationaapplication
      //slugWithATag contains transformed heading name that is later used for scroll spy identification
      slugWithATag: item.content
        .replace(/<|>|"|\\|\/|=/gi, "")
        .replace(/\s/gi, "-")
        .toLowerCase(),
    }));
  const [open, setOpen] = useState(true);
  return (
    <div
      className={`${className} ${
        tocItems.length ? "" : "hidden"
      } ${cssBreakingPoint}:block z-20 w-full`}
      style={{
        width: isMobile ? "100%" : "20%",
      }}
    >
      <div
        className={`flex cursor-pointer ${
          tocItems.length ? "" : "hidden"
        } ${cssBreakingPoint}:cursor-auto`}
        onClick={() => setOpen(!open)}
      >
        <h5
          className={`${
            open && "mb-4"
          } flex-1 text-primary-500 font-medium uppercase tracking-wide text-sm font-sans antialiased ${cssBreakingPoint}:mb-4 ${cssBreakingPoint}:text-xs ${cssBreakingPoint}:text-gray-500 ${cssBreakingPoint}:font-thin`}
        >
          On this page
        </h5>
        <div
          className={`text-underline text-center p4 ${cssBreakingPoint}:hidden`}
        >
          <ArrowRight
            className={`${
              open ? "-rotate-90" : "rotate-90"
            } transform transition duration-200 ease-in-out h-6 -mt-0.5 text-primary-500`}
          />
        </div>
      </div>
      <div className={`${!open && "hidden"} ${cssBreakingPoint}:block`}>
        <ScrollSpy>
          {tocItems.map((item, index) => (
            <Link
              key={index}
              currentClassName="text-base font-extrabold text-yellow-500"
              section={item.slug}
              className={`pl-${
                (item.lvl - minLevel) * 2
              } block mb-1 transition duration-100 ease-in-out no-underline font-normal text-sm font-sans antialiased hover:underline`}
            >
              {item.content}
            </Link>
            // <a
            //   key={index}
            //   className={`pl-${
            //     (item.lvl - minLevel) * 2
            //   } block mb-1 transition duration-100 ease-in-out no-underline font-normal text-sm font-sans antialiased hover:underline`}
            //   href={`#${item.slug}`}
            // >
            //   {item.content}
            // </a>
          ))}
          {/* <Link section="1">Section 1</Link>
          <Link section="2">Section 2</Link>
          <Link section="3">Section 3</Link> */}
        </ScrollSpy>
      </div>
    </div>
  );
}
