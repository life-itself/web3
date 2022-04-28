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
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts && posts.map((post) => (
            <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                {post.image ? <img className="h-48 w-full object-cover" src={post.image} alt={post.title} />
                 : <div className="h-20 w-full bg-slate-500" />
                }
              </div>
              <div className="flex-1 bg-slate-800 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600 dark:text-yellow-500">
                    {post.youtube && ["watch", "embed"].some(v => post.youtube.includes(v)) && (
                      <a href={post.youtube} className="hover:underline">
                      Video
                    </a>)}
                  </p>
                  <a href={post.link} className="block mt-2">
                    <p className="text-xl font-semibold text-slate-900 dark:text-slate-300">{post.title}</p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.description && post.description.length > 150 && !!post.image
                        ? `${post.description.slice(0, 150)} ...` 
                        : post.description
                      }
                    </p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
