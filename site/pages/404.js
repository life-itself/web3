import Link from "next/link";

export default function () {
    return (
      <div className="flex flex-col items-center justify-center mt-12 sm:mt-20 xl:mt-36">
        <img src="/img/undraw_page_not_found.svg" alt="404" className="px-8 sm:px-0 max-w-xs m-auto" />
        <p className="text-lg mt-4">Page not found</p>
        <Link href="/">
          <a className="underline text-sm mt-2 hover:text-gray-500">Return to Homepage</a>
        </Link>
      </div>
    );
}