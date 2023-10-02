import Image from 'next/image'
import habitTracker from '@images/habitTracker.jpg'
import huskyConnect from '@images/huskyConnect.jpg'

const ProjectsPortion = () => {
    return (
        <div id="project-section">
            <div className="pt-32 mt-32 pb-20 container mx-auto lg:px-40 text-darkgray-c">
                <h1 className="text-5xl text-darker font-roboto">Portfolio</h1>
                <div className="py-2 space-y-20">
                    {/* Project One */}
                    <div className="flex flex-col md:flex-row md:space-x-16">
                    <Image src={habitTracker} className="w-[400px] h-[250px] rounded-lg" />
                        <div className="flex flex-col md:flex-row md:space-x-16 font-roboto md:items-start items-center">
                            <div className="flex flex-col">
                                <h2 className="text-3xl font-bold">Habit Tracker</h2>
                                <p>
                                An app that let's users track their habits to see their progress and meet their goals.
                                </p>
                            </div>
                            <p>One of my first full-stack projects that I did with 3 other group members. It utilized the frameowork Nuxt3, in which we utlized TypeScript as well as 
                                Supabase for the backend. We also used another popular framework called TailWindCSS to style the app.
                            </p>
                        </div>
                    </div>

                    {/* Project Two */}
                    <div className="flex flex-col md:flex-row md:space-x-16">
                    <Image src={huskyConnect} className="w-[400px] h-[250px] rounded-lg" />
                        <div className="flex flex-col md:flex-row md:space-x-16 font-roboto md:items-start items-center">
                            <div className="flex flex-col">
                                <h2 className="text-3xl font-bold">Husky Connect</h2>
                                <p>
                                An app that let's UWB students connect with clubs and organizations on campus.
                                </p>
                            </div>
                            <p> My personal project that's still in progress. It's built upon React for my frontend, and TailWindCSS for styling. I've also utialized Docker 
                                to containerize database which is MySQL, and I'm currently working on the backend with Express.js. I plan to deploy this app once it's finished.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProjectsPortion