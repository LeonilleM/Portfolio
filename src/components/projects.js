import Image from 'next/image'
import habitTracker from '@images/habitTracker.jpg'

const ProjectsPortion = () => {
    return (
        <div id="project-section">
            <div className="pt-20 pb-20 container mx-auto lg:px-40 text-darkgray-c">
                <h1 className="text-5xl text-darker font-roboto">Portfolio</h1>
                <div className="py-2 space-y-20">
                    {/* Project One */}
                    <div className="flex flex-row md:flex-row md:space-x-16">
                        <Image src={habitTracker} className="w-[400px] h-[250px] rounded-lg" />
                        <div className="flex flex-col md:flex-row font-roboto md:items-start items-center md:space-x-16">
                            <div className="flex flex-col">
                                <h2 className="text-3xl font-bold">Habit Tracker</h2>
                                <p>A simple app to let users track their habits</p>
                            </div>
                            <p>My very first introduction in web-development. This was a full-stack project that I was apart of
                                creating for my CSS 360 class (Software Engienering). I was mostly focused on the front-end of the project, and little
                                bit of the back-end (authentication).
                            </p>
                        </div>
                    </div>

                    {/* Project Two */}
                    <div className="flex flex-col md:flex-row md:space-x-16">
                    <Image src={habitTracker} className="w-[400px] h-[250px] rounded-lg" />
                        <div className="flex flex-col md:flex-row md:space-x-16 font-roboto md:items-start items-center">
                            <div className="flex flex-col">
                                <h2 className="text-3xl font-bold">Husky Connect</h2>
                                <p>
                                    Simple app to connect students & clubs within the UWB campus
                                </p>
                            </div>
                            <p>My first own solo project, used Express.Js, SQL, Docker, as well as React for the project. Also used multiple
                                libraries within the project </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProjectsPortion