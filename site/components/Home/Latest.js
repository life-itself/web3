
const posts = [
  {
    title: 'Open Collective, Steward Ownership & Exit to Community with Pia Mancini',
    href: 'https://www.youtube.com/watch?v=C2KYJiQVtIM',
    category: { name: 'Video', href: '#' },
    description: 'In this episode with Pia Mancini about her work to make community finance transparent and sustainable with Open Collective, her commitment ot steward ownership and the value of an exit to community.',
    imageUrl: '/img/Pia Mancini Thumbnail.jpg'
  },
  {
    title: 'Collective Action Problems & Climate Change',
    href: 'https://www.youtube.com/watch?v=SLXtnCL6IxE',
    category: { name: 'Video', href: '#' },
    description: 'In this episode we use the example of KlimaDAO to explore the interaction between climate change and the public goods problem.',
    datetime: '2022-03-01',
    imageUrl: '/img/Collective Action Climate.png'
  },
  {
    title: 'Web3 and Post-State Technocracy',
    href: 'https://www.youtube.com/watch?v=gZ0iCJkM3PU',
    category: { name: 'Video', href: '#' },
    description: 'In this episode we explore the aspirational transition from the existing US-led international order to a world in which blockchain technology and technocracy are the new foundations for global human governance.',
    datetime: '2022-02-17',
    imageUrl: '/img/technocracy.jpg',
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
