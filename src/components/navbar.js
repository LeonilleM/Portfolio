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
          <Link href ="/about" 
          className="text-lg font-medium">
               {/* first hover effect */}<p className="relative group hover:text-dark">  <span>About</span>  <span className="absolute -bottom-0 left-0 w-0 h-7 bg-darker/30 transition-all duration-500 group-hover:w-full"></span></p>
          </Link>
          <Link href ="/#project-section" className="text-lg font-medium">
         {/* first hover effect */}<p className="relative group hover:text-dark">  <span>Portfolio</span>  <span className="absolute -bottom-0 left-0 w-0 h-7 bg-darker/30 transition-all duration-500 group-hover:w-full"></span></p>
          </Link>
          <Link href ="/" className="text-lg font-medium">
          {/* first hover effect */}<p className="relative group hover:text-dark">  <span>Resume</span>  <span className="absolute -bottom-0 left-0 w-0 h-7 bg-darker/30 transition-all duration-500 group-hover:w-full"></span></p>
          </Link>
          </ul>
        </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar