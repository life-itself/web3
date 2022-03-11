export function Hero() {
  return (
    <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div className="lg:py-24">
              <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                <span className="block">Making Sense of</span>
                <span className="block text-yellow-500">Crypto &amp; Web3</span>
              </h1>
              <p className="mt-3 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Crypto & Web3 are a huge phenomenon but can be hard to make sense of. We help with introductions to key concepts and in-depth evaluations of the claims for its social and economic impact.
              </p>
              <div className="mt-10 sm:mt-12">
                <form className="sm:max-w-xl sm:mx-auto lg:mx-0" method="POST" name="get-updates" data-netlify="true" action="/subscribed">
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
  )
}