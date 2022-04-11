export default function GetInvolved() {
  return (
  <div className="relative bg-white dark:bg-transparent pt-16 pb-32 overflow-hidden">
    <div className="text-center">
      <h2 className="text-3xl tracking-tight font-extrabold text-white sm:text-4xl">Get Involved</h2>
      <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
      This is a collective effort and we’re keen to involve collaborators and contributors.
      </p>
    </div>
    <div className="mt-20">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
        <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
          <div>
            <div className="mt-6">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-slate-100">
              Here's how you can get involved:
              </h2>
              <ul className="mt-4 text-lg text-gray-500 list-disc list-inside">
                <li> Contribute to the <a href="/library" className="text-white underline">library</a>, </li>
                <li> Write up key concepts, </li>
                <li> Proof edit articles and transcribe dialogs, </li>
                <li> Share the work with others. </li>
                </ul>
              <div className="mt-6">
                <a
                  href="/contribute/"
                  className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-500 hover:bg-yellow-400"
                >
                  Get Involved
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 lg:mt-0">
          <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
            <img
              className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-md"
              src="/img/undraw_development_re_g5hq_dyesjo.svg"
              alt="Get Involved"
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
              We’d also love to have feedback through our forum:
              </h2>
              <ul className="mt-4 text-lg text-gray-500 list-disc list-inside">
                <li> Are there particular topics or areas we should cover? </li>
                <li> Do you disagree with any of our assessments? </li>
                <li> Have we missed or misunderstood something? </li>
                <li> Do you have feedback on how we structure or present the thinking? </li>
                </ul>
              <div className="mt-6">
                <a
                  href="https://github.com/life-itself/web3/discussions"
                  className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-500 hover:bg-yellow-400"
                >
                  Our Forum
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
          <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
            <img
              className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-md"
              src="/img/undraw_posts_re_ormv_bxhknn.svg"
              alt="Our Forum"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
