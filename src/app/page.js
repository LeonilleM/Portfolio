import Image from 'next/image'
import Main from '../components/main.js'
import NavBar from '../components/navbar.js'
import Footer from '../components/footer.js'
import ProjectSection from "../components/projects.js"

export default function Home() {
  return (
    <main className ="bg-light">
      <NavBar />
      <Main />
      <ProjectSection />
      <Footer />
    </main>
  )
}
