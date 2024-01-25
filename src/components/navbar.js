'use client'
import Link from "next/link"
import Resume from '../../public/resume/Leonille_Matunan_Resumev2.pdf'
import { useState } from "react"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsClicked(!isClicked);
  }


  return (
    <div>
      <div className="flex flex-wrap items-center justify-between py-5 container mx-auto  font-raleway text-5F826D">
        <Link href="/">
          <h1 className="text-3xl font-medium mx-2">Leonille Matunan</h1>
        </Link>
        <div className="hidden sm:block">
          <ul className="flex flex-wrap justify-between items-center space-x-5">
            <Link href="/about"
              className="text-lg font-medium">
              <p className="relative group hover:text-4E4E4E">  <span>About</span>  <span className="absolute -bottom-0 left-0 w-0 h-7 bg-303837/30 transition-all duration-500 group-hover:w-full"></span></p>
            </Link>
            <Link href="/#project-section"
              className="text-lg font-medium">
              <p className="relative group hover:text-4E4E4E">  <span>Portfolio</span>  <span className="absolute -bottom-0 left-0 w-0 h-7 bg-303837/30 transition-all duration-500 group-hover:w-full"></span></p>
            </Link>
            <Link href={Resume}
              target="_blank"
              className="text-lg font-medium">
              <p className="relative group hover:text-4E4E4E">  <span>Resume</span>  <span className="absolute -bottom-0 left-0 w-0 h-7 bg-303837/30 transition-all duration-500 group-hover:w-full"></span></p>
            </Link>
          </ul>
        </div>
        {/* Mobile */}
        <div className="sm:hidden relative">
          <button
            onClick={toggleDropdown}
            className="text-white text-xl p-2 focus:outline-none"
          >
            {/* Hamburger icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#5F826D"
              className={`transform w-8 h-8 duration-500 z-50 ${isClicked ? 'rotate-180' : ''}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Mobile menu items */}
          {isOpen && (
            <div
              className="fixed top-0 left-0 w-full h-full backdrop-blur-sm z-40 flex pt-4 justify-center "
              onClick={toggleDropdown}
            >
              <div className={`max-w-full mt-16  z-10 text-5F826D transform transition-transform duration-200 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <ul className="flex flex-wrap justify-between items-center space-x-5">
                  <Link href="/about" className="text-lg font-medium">
                    <p className="relative group hover:text-4E4E4E">
                      <span>About</span>{" "}
                      <span className="absolute -bottom-0 left-0 w-0 h-7 bg-303837/30 transition-all duration-500 group-hover:w-full"></span>
                    </p>
                  </Link>
                  <Link href="/#project-section" className="text-lg font-medium">
                    <p className="relative group hover:text-4E4E4E">
                      <span>Portfolio</span>{" "}
                      <span className="absolute -bottom-0 left-0 w-0 h-7 bg-303837/30 transition-all duration-500 group-hover:w-full"></span>
                    </p>
                  </Link>
                  <Link href={Resume} target="_blank" className="text-lg font-medium">
                    <p className="relative group hover:text-4E4E4E">
                      <span>Resume</span>{" "}
                      <span className="absolute -bottom-0 left-0 w-0 h-7 bg-303837/30 transition-all duration-500 group-hover:w-full"></span>
                    </p>
                  </Link>
                </ul>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default NavBar