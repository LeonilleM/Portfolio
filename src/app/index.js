'use client'
import { useState } from 'react'
import Image from 'next/image'
import Main from '../components/main.js'
import NavBar from '../components/navbar.js'
import Footer from '../components/footer.js'
import ProjectSection from "../components/projects.js"
import Star from '@design/Shape1.png'
import Star2 from '@design/Shape2.png'
import Star3 from '@design/Shape3.png'
import Star4 from '@design/Shape4.png'
import Star5 from '@design/Shape5.png'
import Star6 from '@design/Shape6.png'


export default function Home() {
  const [isStarHovered, setIsStarHovered] = useState(false);

  return (
    <main className="bg-F5F0E7">
      <NavBar />
      <div className="relative">
        {/* Conditionally render stars based on screen size */}
        <Image src={Star5} className="hidden lg:block absolute top-36 left-1/2 -translate-x-[34rem] sm:w-14 sm:h-14" alt="Star" />
        <Image src={Star4} className="hidden lg:block absolute top-32 right-1/2 translate-x-[22rem] w-24 h-28" alt="Star" />
        <Image src={Star} className="hidden lg:block absolute top-80  left-1/2 -translate-x-[28rem] sm:w-10 sm:h-10" alt="Star" />
        <Image src={Star2} className="absolute top-[24rem] -translate-x-10 right-0 md:right-1/2 md:translate-x-96 transition duration-500 hover:rotate-180 w-14 h-14" alt="Star" />
        <Image src={Star3} className="hidden sm:block absolute md:right-1/2 translate-x-80  md:translate-x-12 top-24 transition duration-300 hover:-rotate-180 w-24 h-24" alt="Star" />
        <Image src={Star6}
          className={`absolute top-[26rem] right-1/2 translate-x-10 md:top-96 md:translate-x-36 translate-y-1/3 w-24 h-24 transition duration-500
                ${isStarHovered ? 'scale-125 -rotate-180' : 'scale-100'}`}
          onMouseEnter={() => setIsStarHovered(true)}
          onMouseLeave={() => setIsStarHovered(false)}
          alt="Star"
        />
      </div>

      <ProjectSection />
      <Footer />
    </main>
  )
}
