export default function Sidebar (props) {
  // max-w-7xl = max-w-80rem
  // w-60 = 15rem
  return (
      <div className="hidden lg:block w-[16rem] fixed top-16 left-[max(0px,calc(50%-40rem))] bottom-0 right-auto px-2 sm:px-6 lg:px-8 overflow-y-auto">
        {/* TODO LHS TOC */}
        <nav>
          <ul>
            <li>Heading 1</li>
            <li>Heading 2</li>
            <li>Heading 3</li>
            <li>Heading 4</li>
            <li>Heading 5</li>
          </ul>
        </nav>
      </div>)
}
