import Head from 'next/head'

import siteConfig from '../config/siteConfig'
import navLinks from '../config/navLinks'
import Nav from './Nav'
import Sidebar from './Sidebar'


export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚀</text></svg>" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </Head>
      <Nav />
      <main className="max-w-7xl mx-auto px-2 sm:px-6 md:px-8 border-2 border-green-500">
        {/* <div className="hidden md:block w-[16rem] fixed top-16 left-[max(0px,calc(50%-40rem))] bottom-0 right-auto px-8 overflow-y-auto border-2 border-red-500"> */}
        {/*   <Sidebar /> */}
        {/* </div> */}
          {children}
      </main>
      <footer className="w-full h-24 mt-16">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 md:px-8">
          <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
            {navLinks.map((item) => (
              <div key={item.name} className="px-5 py-2">
                <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                  {item.name}
                </a>
              </div>
            ))}
          </nav>
          <div className="mt-8 flex justify-center space-x-6">
            {siteConfig.social.map((item) => !["Life Itself"].includes(item.name) && (
              <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="flex items-center justify-center mt-8">
            Created by
            <a
              href={siteConfig.authorUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={siteConfig.authorLogo} alt={siteConfig.author} width="20" height="20" className="mx-2 h-6 inline-block" />
              {siteConfig.author}
              {' '}
              Licensed under a CC-By 4.0 International License
            </a>
          </p>
        </div>
      </footer>
    </>
  )
}
