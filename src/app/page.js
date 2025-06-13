'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Main from '../components/main.js'
import NavBar from '../components/navbar.js'
import Footer from '../components/footer.js'
import ProjectSection from "../components/projects.js"

export default function Home() {
  const [isStarHovered, setIsStarHovered] = useState(false);

  return (
    <main className="bg-F5F0E7">
      <NavBar />
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75 }}
        viewport={{ once: true }}
        className="relative">
        <Image src="/design/Shape5.png" className="hidden lg:block absolute top-36 left-1/2 -translate-x-[34rem] " alt="Star" width={56} height={56} />
        <Image src="/design/Shape4.png" className="hidden lg:block absolute top-32 right-1/2 translate-x-[22rem]  " alt="Star" width={56} height={56} />
        <Image src="/design/Shape1.png" className="hidden lg:block absolute top-80  left-1/2 -translate-x-[28rem] " alt="Star" width={28} height={28} />
        <Image src="/design/Shape2.png" className="absolute top-[24rem] -translate-x-10 right-0 md:right-1/2 md:translate-x-96 transition duration-500 hover:rotate-180 " alt="Star" width={48} height={48} />
        <Image src="/design/Shape3.png" className="hidden sm:block absolute md:right-1/2 translate-x-80  md:translate-x-12 top-24 transition duration-300 hover:-rotate-180 " alt="Star" width={48} height={48} />
        <Image src="/design/Shape6.png"
          width={56}
          height={56}
          className={`absolute top-[26rem] right-1/2 translate-x-10 md:top-96 md:translate-x-36 translate-y-1/3  transition duration-500
                ${isStarHovered ? 'scale-125 -rotate-180' : 'scale-100'}`}
          onMouseEnter={() => setIsStarHovered(true)}
          onMouseLeave={() => setIsStarHovered(false)}
          alt="Star"
        />
      </motion.div>
      <Main />
      <ProjectSection />
      <Footer />
    </main>
  )
}