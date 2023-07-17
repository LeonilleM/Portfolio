
import Image from 'next/image'
import ProfilePic from '@images/Profile.png'
import NavBar from '@/components/navbar'
import Footer from '@/components/footer'

export default async function About() {
    return (
        <div className="bg-light">
            <NavBar />
            <div className="pt-20 pb-20 container mx-auto lg:px-40 text-darkgray-c">
                <div className="py-2 space-y-6">
                    <h1 className="text-5xl text-darker font-roboto">Hello, I'm Leonille!</h1>
                    <div className="flex flex-row space-x-5 space-y-3 items-center">
                        <Image src={ProfilePic} className="rounded-full w-[350px] h-[350px]" />
                        <div className =  "flex flex-col space-y-2" >
                        <p>I'm currently a student at the University of Washington, majoring in computer science.
                            I'm currently proficient in languages such as Java, C++, some basic web-developments languages like CSS, HTML, and a little bit of
                            Javascript. I'm currently learning C# through one of my courses, and have worked with some experiences with frameworks such as Nuxt3, NextJS, and React.</p>
                        <p> Aside from coding, I'm currently working as the Dir. of Finance & Budget for ASUWB, as well as seriving as the current Culture chair
                            for the Filipino-American Student Association.
                        </p>
                        </div>

                      
                    </div>


                </div>
            </div>
            <Footer />
        </div>
    )
}
