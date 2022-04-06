import Link from "next/link";
import { useRouter } from "next/router";

function LeftToc({ data, isMobile }) {
  const router = useRouter();
  return (
    <div
      className={`${
        isMobile && "hidden"
      } flex flex-col sticky top-0 overflow-y-auto max-h-screen`}
      style={{
        width: "20%",
      }}
    >
      {Object.entries(data).map(([key, value]) => {
        return (
          <div className="font-bold text-base text-white" key={key}>
            <p>{key.charAt(0).toUpperCase() + key.slice(1)}</p>
            <div>
              {value.children.map((child) => {
                return (
                  <div className="ml-2 mt-4 font-normal text-sm text-slate-300">
                    <Link href={child.link}>
                      <a
                        className={` ${
                          router.asPath.includes(child.link) &&
                          "text-yellow-500"
                        } block mb-1 transition duration-100 ease-in-out no-underline font-normal text-sm font-sans antialiased hover:underline`}
                      >
                        {child.name}
                      </a>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default LeftToc;
