
import Image from 'next/image'
import NavBar from '@/components/navbar'
import Footer from '@/components/footer'

export default async function About() {
    return  (
        <div>
            <NavBar />
            <div className="pt-20 pb-20 container mx-auto lg:px-40 text-darkgray-c">
                <h1 className="text-5xl text-darker font-roboto">About Me</h1>
                <div className="py-2 space-y-20">
                    <div className="flex flex-col md:flex-row md:space-x-24">
                        <div className="border rounded-lg border-darker w-[600px] h-[400px]"></div>
                        <div className="flex flex-col md:flex-row md:space-x-24 font-roboto">
                            <div className ="flex flex-col">
                            <h2 className="text-3xl">Project Title</h2>
                            <p>Short Descp.</p>
                            </div>
                            <p>Project description goes here.</p>
                        </div>
                    </div>  
                </div>
            </div>
            <Footer />
        </div>
    )
}
