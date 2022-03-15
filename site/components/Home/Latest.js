
const posts = [
  {
    title: 'Crypto, Traders and Unfettered Financial Markets',
    href: 'https://www.youtube.com/watch?v=K5JtPTyc0y0',
    category: { name: 'Video', href: '#' },
    description: 'In this episode we discuss the view that crypto are just risky assets and unfettered and unregulated financial markets are desirable.',
    imageUrl: 'https://res.cloudinary.com/ds7qslkd0/image/upload/v1647344961/Web3/Market_Fundamentalism_Thumbnail_nn19qa.png'
  },
  {
    title: 'On the Potential of DAOs & Web3 with Jordan Hall',
    href: 'https://www.youtube.com/watch?v=aQvpgYW0o7M',
    category: { name: 'Video', href: '#' },
    description: 'In this episode with Jordan Hall we discuss the potential of DAOs and Web3 for social change.',
    datetime: '2022-03-01',
    imageUrl: 'https://res.cloudinary.com/ds7qslkd0/image/upload/v1647344961/Web3/Potential_of_DAOs_Thumb_ko4vpa.png'
  },
  {
    title: 'Web3, Bitcoin & Neo-Metallism',
    href: 'https://www.youtube.com/watch?v=_o7pRFLzJHY',
    category: { name: 'Video', href: '#' },
    description: 'In this episode we examine Bitcoin and the Neo-Metallist thesis i.e. that a gold-standard was a good idea and a Bitcoin-standard would be even better.',
    datetime: '2022-02-17',
    imageUrl: 'https://res.cloudinary.com/ds7qslkd0/image/upload/v1647344961/Web3/Neo-metallism_Thumb_vo3dhs.png',
  },
]


export function Latest() {
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
          {posts.map((post) => (
            <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
              </div>
              <div className="flex-1 bg-slate-800 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600 dark:text-yellow-500">
                    <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a>
                  </p>
                  <a href={post.href} className="block mt-2">
                    <p className="text-xl font-semibold text-slate-900 dark:text-slate-300">{post.title}</p>
                    <p className="mt-3 text-base text-gray-500">{post.description}</p>
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
