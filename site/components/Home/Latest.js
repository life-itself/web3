// import { useState } from "react"
import Link from "next/link"
import { YOUTUBE_REGEX } from "../../lib/constants"
import { getYoutube } from "../../utils/getYoutube"

export function Latest({ posts }) {
  // const initialValue = 6
  // const [ value, setValue ] = useState(initialValue)
  // const initialPosts = posts && posts.slice(0, value)

  // const handleButton = () => {
  //   setValue(prev => 
  //     initialPosts.length === posts.length 
  //     ? initialValue
  //     : prev + 3)
  // }

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
          {posts && posts.map(({ _id, title, description, image, youtube, link }) => {
            const { thumbnail } = getYoutube(youtube)
            const imageSource = image || thumbnail
            return (
              <div key={_id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="h-48 bg-stone-100 flex-shrink-0">
                    {imageSource ?
                      <img className="" width="100%" height="100%" src={imageSource} alt={title} />
                      : (
                        <div className="border-2 border-slate-900 m-2 inline-flex h-full text-xl font-bold tracking-tight text-left items-center p-4 text-[#000]">
                          <Link href={link}>
                            <a>{title}</a>
                          </Link>
                        </div>
                        )
                    }
                  </div>
                <div className="flex-1 bg-slate-800 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600 dark:text-yellow-500">
                      {youtube && YOUTUBE_REGEX.test(youtube) ? (
                        <a target="_blank" rel="noopener" href={youtube} className="hover:underline">
                        Video
                      </a>) : <p>Article</p>}
                    </p>
                    <Link href={link}>
                      <a className="block mt-2">
                        {(imageSource) && <p className="text-xl font-semibold text-slate-900 dark:text-slate-300">{title}</p>}
                        <p className="mt-3 text-base text-gray-500">
                          {description && description.length > 150
                            ? `${description.slice(0, imageSource ? 120 : 240)} ...` 
                            : description
                          }
                        </p>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        {/* <div className="w-full flex justify-center pt-12">
          {!(posts.length === initialPosts.length && value === initialValue) &&
            <button onClick={handleButton}>{initialPosts.length === posts.length ? "show less" : "show more"}</button>
          }
        </div> */}
      </div>
    </div>
  )
}
