export default function Features() {
  return (
    <div className="relative bg-white dark:bg-transparent pt-16 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-slate-100">
                  A Guide to Crypto and Web3
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Blockchain, tokens, NFTs, DAOs - what does it all mean? Our guide provides an accessible overview of the key concepts in Crypto and Web3. 
                </p>
                <div className="mt-6">
                  <a
                    href="/guide/"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-500 hover:bg-yellow-400"
                  >
                    Discover
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://res.cloudinary.com/ds7qslkd0/image/upload/v1646739494/Web3/undraw_mind_map_re_nlb6_qh0jel.svg"
                alt="Discover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-slate-100">
                  Library
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Want to learn more? We are maintaining a comprehensive library of articles, papers, books and other materials related to the space and the surrounding discourse. It provides deeper background on specific topics along with everything you need to fully engage with, and evaluate, Web3 and the claims being made about it. 
                </p>
                <div className="mt-6">
                  <a
                    href="/library/"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-500 hover:bg-yellow-400"
                  >
                    Explore
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://res.cloudinary.com/ds7qslkd0/image/upload/v1646739680/Web3/undraw_bibliophile_re_xarc_ssxnqe.svg"
                alt="Library"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-slate-100">
                Claims for Crypto and Web3
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                Crypto and Web3 are associated with many bold claims. From classic technology boosterism of better and faster, to the radical transformation of our societies. But huge controversy surrounds these claims, and there’s a lack of agreement on even basic points and definitions.
                </p>
                <div className="mt-6">
                  <a
                    href="/claims"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-500 hover:bg-yellow-400"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://res.cloudinary.com/ds7qslkd0/image/upload/v1646745400/Web3/undraw_instant_analysis_re_mid5_i8r1hp.svg"
                alt="Learn More"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}