import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'

import siteConfig from '../config/siteConfig.js'
import navLinks from '../config/navLinks.js'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav() {
  return (
    <Disclosure as="nav" className="shadow-md bg-slate-900 sticky top-0 z-10">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center xl:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 mr-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex justify-between">
                <div className="text-sm sm:text-base flex-shrink-0 flex items-center uppercase text-yellow-500">
                  <Link href="/">
                    <a>{siteConfig.title}</a>
                  </Link>
                </div>
                <div className="hidden xl:flex mx-auto space-x-4">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  {navLinks.map((item, i) => (
                    <Link key={i} href={item.href}>
                      <a
                        key={item.name}
                        href={item.href}
                        className={
                          item.current
                            ? "border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                            : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        }
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
                <div className="hidden md:flex items-center justify-end space-x-4">
                  {siteConfig.social.map(
                    ({ name, href, icon: Icon }) =>
                      ["YouTube", "GitHub", "Life Itself"].includes(name) && (
                        <div
                          key={name}
                          className="inline-flex items-center space-x-2 pt-1 opacity-100 hover:opacity-70"
                        >
                          <Icon className="w-[16px] inline-flex items-center" />
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-gray-500 hover:underline"
                          >
                            {name}
                          </a>
                        </div>
                      )
                  )}
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="xl:hidden">
            <div className="pt-2 pb-4 space-y-1">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              {navLinks.map((item, i) => (
                <Link key={i} href={item.href}>
                  <a
                    key={item.name}
                    href={item.href}
                    className={
                      item.current
                        ? "bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                        : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                    }
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
