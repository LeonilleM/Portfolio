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
  return (
    <main className ="bg-light">
      <NavBar />
      <div className="relative">
                {/* Conditionally render stars based on screen size */}
                <Image src={Star5} className="hidden lg:block absolute md:top-44 xl:left-32 w-10 h-12 sm:w-12 sm:h-12 ml-2 sm:ml-4 mb-2 sm:mb-0" />
                <Image src={Star} className="hidden lg:block absolute top-48 right-[30rem] w-14 h-14" />
                <Image src={Star4} className="hidden lg:block absolute top-80 xl:left-9 left-[34rem] w-8 h-8 sm:w-10 sm:h-10 ml-2 sm:ml-4 mb-2 sm:mb-0" />
                <Image src={Star2} className="hidden lg:block absolute top-80 right-80 w-8 h-8 sm:w-14 sm:h-14 ml-2 sm:ml-4 mb-2 sm:mb-0" />
                <Image src={Star3} className="hidden lg:block absolute top-28 left-64 translate-x-96 -translate-y-1/2 w-8 h-8 sm:w-24 sm:h-24 ml-2 sm:ml-4 mb-2 sm:mb-0" />
                <Image src={Star6} className="hidden lg:block absolute top-96 right-0 -translate-x-96 translate-y-1/3n w-8 h-8 sm:w-24 sm:h-24 ml-2 sm:ml-4 mb-2 sm:mb-0" />
            </div>
      <Main />
      <ProjectSection />
      <Footer />
    </main>
  )
}
