import Link from 'next/link'


export const Toc = ({ headings }) => {
  return (
    <nav>
      <h4>
        On this page
      </h4>
      { headings.map(({url, title, level}, i) => (
        <div key={i} className={`flex leading-5 pl-${(level-1)*4}`}>
          <Link href={`#${url}`} >
            <a className="py-1 text-slate-400 hover:text-white no-underline transition-colors">
              { title }
            </a>
          </Link>
        </div>
    ))}
    </nav>
  )
}
