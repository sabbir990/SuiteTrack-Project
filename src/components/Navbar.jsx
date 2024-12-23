import Link from "next/link"
const Navbar = () => {
  return (
    <header className="py-4  text-lightPrimary">
      <div className="container flex justify-between items-center h-16 mx-auto">
        <Link href="/"  rel="noopener noreferrer" aria-label="Back to homepage" className="flex items-center p-2">
          <h2 className="text-2xl lg:text-3xl font-bold">Suite<span className="text-lightSecondary">Track</span></h2>
        </Link>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <Link rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Home</Link>
          </li>
          <li className="flex">
            <Link rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">About</Link>
          </li>
          <li className="flex">
            <Link rel="noopener noreferrer" href="gallery" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Gallery</Link>
          </li>
          <li className="flex">
            <Link rel="noopener noreferrer" href="event" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Event</Link>
          </li>
          <li className="flex">
            <Link rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Blog</Link>
          </li>
          <li className="flex">
            <Link rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Contact</Link>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button className="self-center px-8 py-3 rounded">Sign in</button>
          <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Sign up</button>
        </div>
        <button className="p-4 lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </header>
  )
}
export default Navbar
