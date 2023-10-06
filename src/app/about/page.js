import Image from 'next/image'
import ProfilePic from '@images/Profile.png'
import NavBar from '@/components/navbar'
import Footer from '@/components/footer'

export default async function About() {
    return (
        <div className="bg-light min-h-screen">
            <NavBar />
            <div className="pt-20 pb-52 container mx-auto lg:px-40 text-darkgray-c">
                <div className="py-2 space-y-6 items-center">
                    <h1 className="text-5xl text-darker font-roboto sm:text-start text-center font-bold">Hello, I'm Leonille!</h1>
                    <div className="flex sm:flex-row flex-col sm:space-x-5 mx-1 space-y-3">
                        <Image src={ProfilePic} className="rounded-full sm:w-[350px] sm:h-[350px] w-auto h-auto" />
                        <div className="flex flex-col space-y-2 text-lg" >
                            <p>I'm currently a student at the University of Washington, majoring in computer science, who's passionate
                                in building programs and applications that improve or ease the lives of others. My keen interest relies a lot 
                                in figuring out how we can utilize apps in our day to day lives to make things easier for us. Some languages I've worked with
                                include Java, C++, and some Javascript. I've also learned many libraries and frameworks such as React, Next.js, and Nuxt3. I'm also currently 
                                working on learning SQL as well as Express.js to further my knowledge in backend development.
                            </p>
                            <p> Aside from coding, I'm currently working as the Dir. of Finance & Budget for ASUWB, as well as seriving as the current Culture chair
                                for the Filipino-American Student Association.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
