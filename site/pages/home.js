export default function Home(props) {
  const posts = [
  {
    title: 'Crypto, Traders and Unfettered Financial Markets',
    href: 'https://www.youtube.com/watch?v=K5JtPTyc0y0',
    category: { name: 'Video', href: '#' },
    description: 'In this episode we discuss the view that crypto are just risky assets and unfettered and unregulated financial markets are desirable.',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
  },
  {
    title: 'On the Potential of DAOs & Web3 with Jordan Hall',
    href: 'https://www.youtube.com/watch?v=aQvpgYW0o7M',
    category: { name: 'Video', href: '#' },
    description: 'In this episode with Jordan Hall we discuss the potential of DAOs and Web3 for social change.',
    datetime: '2022-03-01',
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
  },
  {
    title: 'Web3, Bitcoin & Neo-Metallism',
    href: 'https://www.youtube.com/watch?v=_o7pRFLzJHY',
    category: { name: 'Video', href: '#' },
    description: 'In this episode we examine Bitcoin and the Neo-Metallist thesis i.e. that a gold-standard was a good idea and a Bitcoin-standard would be even better.',
    datetime: '2022-02-17',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
  },
]

  return (
  <>
  <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
    <div className="mx-auto max-w-7xl lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
          <div className="lg:py-24">
            <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
              <span className="block">Making Sense of</span>
              <span className="block text-yellow-500">Web3 &amp; Crypto</span>
            </h1>
            <p className="mt-3 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Web3 is a huge phenomenon but it can be hard to make sense of. We're here to help with introductions to key concepts and in-depth exploration of the claims for its concrete social and economic impact.
            </p>
            <div className="mt-10 sm:mt-12">
              <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                <div className="sm:flex">
                  <div className="min-w-0 flex-1">
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                    />
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <button
                      type="submit"
                      className="block w-full py-3 px-4 rounded-md shadow bg-yellow-500 text-sm text-slate-50 font-medium hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                    >
                      Get Updates
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
            <img
              className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
              src="/img/undraw_digital_currency_qpak.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>

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
  </>
  )
}

Home.layout = 'js'
