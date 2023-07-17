'use client'
import Link from "next/link"
import { useState } from 'react'

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
    <footer className="pb-8 font-raleway">
      <div className="flex flex-col items-center">
        <hr className="w-1/2 border-secondary" />
        <div className="py-3">
          <h1 className="text-primary text-xl">@ 2023 Leonille Matunan</h1>
        </div>
        <div>
          <ul className="flex flex-wrap space-x-5 text-primary">
            <li>

            </li>
            <li>
              <a
                className="hover:text-dark duration-500 hover:text-lg"
                href="/">
                Resume
              </a>
            </li>
            <li>
              <button
                className="hover:text-dark duration-500 hover:text-lg"
                onClick={copyToClipboard}
              >
                Email
              </button>
              {isCopied && <span className="ml-2 text-green-500">Copied!</span>}
            </li>
            <li>
              <Link
                className="hover:text-dark duration-500 hover:text-lg"
                href="https://github.com/LeonilleM"
                target="_blanks"
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-dark duration-500 hover:text-lg"
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