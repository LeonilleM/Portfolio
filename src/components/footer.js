'use client'
import Link from "next/link"
import { useState } from 'react'
import Resume from "../../public/resume/Leonille_Matunan_Resumev2.pdf"
import Star1 from '@design/Star4.png'



function footer() {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    const email = 'leonille@uw.edu';
    navigator.clipboard.writeText(email);
    setIsCopied(true);
    //Delay
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);

  };

  return (
    <footer className="pb-24 font-raleway bottom-0 container mx-auto">
      <div className="flex flex-col items-center">
        <hr className="w-full  border-D3C3B3" />
        <div className="pt-3">
          <h1 className="text-5F826D text-lg">@ 2023 Leonille Matunan</h1>
        </div>
        <div>
          <ul className="flex flex-wrap space-x-6 text-5F826D">
            <li>
              <a
                className="group relative w-max ease-in-out duration-700  hover:text-1E1E1E"
                href={Resume}
                target="_blank"
              >
                <span className="text-4E4E4E text-xl font-semibold"> &gt;</span> Resume
                <span className="absolute -bottom-1 left-0 w-0 transition-all ease-in-out duration-300 h-0.5 bg-1E1E1E group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <button
                className="group relative w-max ease-in-out duration-700  hover:text-1E1E1E"
                onClick={copyToClipboard}
              >
                <span className="text-4E4E4E text-xl font-semibold"> &gt;</span>Email
                <span className="absolute -bottom-1 left-0 w-0 transition-all ease-in-out duration-300 h-0.5 bg-1E1E1E group-hover:w-full"></span>
              </button>
              {isCopied && <span className="ml-2 text-1E1E1E">Copied!</span>}
            </li>
            <li>
              <Link
                className="group relative w-max ease-in-out duration-700  hover:text-1E1E1E"
                href="https://github.com/LeonilleM"
                target="_blanks"
              >
                <span className="text-4E4E4E text-xl font-semibold"> &gt;</span>GitHub
                <span className="absolute -bottom-1 left-0 w-0 transition-all ease-in-out duration-300 h-0.5 bg-1E1E1E group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                className="group relative w-max ease-in-out duration-700  hover:text-1E1E1E"
                href="https://www.linkedin.com/in/leonille-matunan/"
                target="_blanks"
              >
                <span className="text-4E4E4E text-xl font-semibold"> &gt;</span> LinkedIn
                <span className="absolute -bottom-1 left-0 w-0 transition-all ease-in-out duration-300 h-0.5 bg-1E1E1E group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default footer