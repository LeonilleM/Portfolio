import  Link  from "next/link"

const NavBar = () => {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between py-5 container mx-auto font-raleway text-primary">
        <Link href="/">
        <h1 className="text-3xl font-medium">Leonille Matunan</h1>
        </Link>
      
        <div>
          <div className="hidden sm:block">
          <ul className="flex flex-wrap justify-between items-center space-x-5">
          <Link href ="/about" className="text-lg font-medium">
          About
          </Link>
          <Link href ="/" className="text-lg font-medium">
          Portfolio
          </Link>
          <Link href ="/" className="text-lg font-medium">
          Resume
          </Link>
          </ul>
        </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar