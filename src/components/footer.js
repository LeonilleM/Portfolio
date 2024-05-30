'use client'
import Link from "next/link"
import { useState } from 'react'
import Resume from '../../public/resume/LM_RESUME.pdf'
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
    <footer className="pb-8 font-raleway bottom-0">
      <div className="flex flex-col items-center">
        <hr className="md:w-1/2 w-3/4 border-D3C3B3" />
        <div className="py-3">
          <h1 className="text-5F826D text-lg">@ 2023 Leonille Matunan</h1>
        </div>
        <div>
          <ul className="flex flex-wrap space-x-5 text-5F826D">
            <li>
              <a
                className="hover:text-dark duration-500 hover:text-lg hover:text-303837"
                href={Resume}
                target="_blank"
              >
                Resume
              </a>
            </li>
            <li>
              <button
                className="hover:text-dark duration-500 hover:text-lg hover:text-303837"
                onClick={copyToClipboard}
              >
                Email
              </button>
              {isCopied && <span className="ml-2 text-dark">Copied!</span>}
            </li>
            <li>
              <Link
                className="hover:text-dark duration-500 hover:text-lg hover:text-303837"
                href="https://github.com/LeonilleM"
                target="_blanks"
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-dark duration-500 hover:text-lg hover:text-303837"
                href="https://www.linkedin.com/in/leonille-matunan/"
                target="_blanks"
              >
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default footer