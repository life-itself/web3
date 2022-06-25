import Link from "next/link"
import { YOUTUBE_ID_REGEX } from "../../lib/constants"

export function Latest({ posts }) {
  return (
    <div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-white sm:text-4xl">Latest Releases</h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Our latest articles and explorations.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-6 lg:grid-cols-3 lg:max-w-none">
          {posts && posts.map(({ title, description, image, youtube, link }) => (
              <div key={link} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="h-48 bg-stone-100 flex-shrink-0">
                    {image && <img className="" width="100%" height="100%" src={image} alt={title} />}
                  </div>
                <div className="flex-1 bg-slate-800 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600 dark:text-yellow-500">
                      {youtube && YOUTUBE_ID_REGEX.test(youtube) ? (
                        <a target="_blank" rel="noopener" href={youtube} className="hover:underline">
                        Video
                      </a>) : <p>Article</p>}
                    </p>
                    <Link href={link}>
                      <a className="block mt-2">
                        <p className="text-xl font-semibold text-slate-900 dark:text-slate-300">{title}</p>
                        <p className="mt-3 text-base text-gray-500">
                          {description && description.length > 150
                            ? `${description.slice(0, 120)} ...` 
                            : description
                          }
                        </p>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  )
}
