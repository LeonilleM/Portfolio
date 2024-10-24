'use client'
import { useEffect, useState } from 'react';
import { motion, useScroll } from "framer-motion";
import Image from 'next/image'
import Button from '@/components/button';
import Footer from '@/components/footer';
import NavBar from '@/components/navbar';
import Arrow from '@design/Arrow.svg';
import headerImage from '@images/StudySpotter/StudySpotterHeader.png';


function studyspotter() {
    const { scrollYProgress } = useScroll()
    const [isVisible, setIsVisible] = useState(false)


    const goBack = () => {
        window.history.back()
    }

    const handleScroll = () => {
        if (window.scrollY > 800) {
            setIsVisible(true)
        }
        else {
            setIsVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }
        , [])

    return (
        <div className="bg-F5F0E7">
            <motion.div
                className="fixed top-0 left-0 right-0 h-3 shadow-md bg-1E1E1E transform origin-left z-50"
                style={{ scaleX: scrollYProgress }}
                aria-hidden="true"
            />
            <NavBar
                // Closed state (white text on transparent background)
                closedText="text-white"
                closedBg="bg-32006E"
                closedMenuColor="#ffffff"
                // Open state (white text on blue background)
                openText="text-32006E"
                openMenuColor="32006E"
                // Mobile menu styling
                mobileMenuBg="bg-white"
                mobileOverlayBg="bg-32006E/70"
            />


            {/* Header */}
            <div className="flex lg:flex-row flex-col  bg-32006E md:px-36 px-4 gap-24 py-14 font-raleway">
                <motion.div
                    className="object-fill lg:w-1/2 sm:block hidden" // Updated here
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: .75 }}
                    viewport={{ once: true }}
                >
                    <Image
                        src={headerImage}
                        className="w-full"
                        alt="MindfulU"
                        draggable="false"
                    />
                </motion.div>
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: .75 }}
                    viewport={{ once: true }}
                    className="flex flex-col  lg:w-1/2">
                    <div className="bg-white rounded-2xl py-8 px-10 space-y-5">
                        <h1 className="text-2xl text-32006E ">Student App</h1>
                        <h1 className="text-4xl font-bold text-1E1E1E ">Study Spotter - Student Web App</h1>
                        <p className="italic font-bold text-1E1E1E">Leadership Project</p>
                    </div>
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.0 }}
                        viewport={{ once: true }}
                        className="text-white space-y-12 pt-16 px-2">
                        <div>
                            <h1 className="font-bold text-3xl">Role</h1>
                            <p className="text-xl">Developer & Designer</p>
                        </div>
                        <div>
                            <h1 className="font-bold text-3xl">Project Duration</h1>
                            <p className="text-xl">2 Weeks</p>
                        </div>
                        <div>
                            <h1 className="font-bold text-3xl">Team</h1>
                            <p className="text-xl">Leonille</p>
                            <p className="text-xl">3 Non Developers</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>


            {/* Project Overview */}
            <div className="bg-white py-20 text-[#4E4E4E]">
                <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12">
                    <div className="space-y-2 lg:w-1/3 w-full">
                        <h1 className="text-3xl">Project Overview</h1>
                        <p className="text-xl">
                            Study Spotter was a project that my group created for our Leadership Class during Summer Quarter of 2024 at the University of Washington.
                            We were given about 2-3 weeks to create anything, as long as we used the skills we learned in class.
                        </p>
                    </div>
                    <hr className="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded dark:bg-1E1E1E lg:hidden" />
                    <div className="space-y-2 lg:w-2/3 w-full lg:border-l-2 lg:border-black lg:pl-24">
                        <h1 className="text-3xl">What is Studdy Spotter?</h1>
                        <p className="text-xl">
                            StudySpotter was our take on a Yelp-Like application, that let's UW Students rate study spots on or near campus.
                            These including star ratings, as well as reviews about the study spot. Study spots are broken down into different
                            categories such as, "Quiet", "Group Study", "Food & Drink", and "Outdoors", and a few other such as WiFi, and Power Outlets.
                            Lastly, it takes the unique aspect of Instagram, and allows students to post pictures of what the study spot looks like.
                        </p>
                    </div>
                </div>
            </div>


            {/* Problem and Solution */}
            <div className="flex flex-col py-24 space-y-12 overflow-x-hidden font-lato">
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.25, delay: 0.15 }}
                    viewport={{ once: true }}
                    className="bg-32006E lg:px-36 px-4 py-14 md:w-3/5  md:rounded-r-full text-white space-y-2 ">
                    <h1 className="text-3xl font-bold font-raleway">Problem</h1>
                    <p className="text-xl font-bold text-yellow-400">Unknown Study Spots</p>
                    <p className=" md:text-xl md:w-2/3  ">
                        For our class, we were required to solve a any problem, and create a solution for it.
                        We noticed that some students were having trouble finding study spots on campus, specifically during busy weeks such as
                        Midterms and Finals. We came up with an App that let's students rate study spots on or near campus, and share it
                        with other students to find the best study spots.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.25, delay: 0.15 }}
                    viewport={{ once: true }}
                    className="bg-white lg:px-36 px-4 py-14 md:w-3/5  md:rounded-l-full  self-end flex flex-col items-end justify-end text-end text-1E1E1E space-y-2 ">
                    <h1 className="text-3xl font-bold font-raleway">Solution</h1>
                    <p className="text-xl font-bold text-32006E">Yelp like App</p>
                    <p className=" md:text-xl md:w-2/3">
                        Our solution was to create a Yelp like application that let's students rate study spots on or near campus, but with specific requirements for
                        what Students may want to see before going to a study spot. Included also categories from on campus, to off campus such as coffee shops. Lastly,
                        we wanted to maker sure Users can post images of the study spot.
                    </p>
                </motion.div>
            </div >

            {/* Creation */}
            <div className="w-full bg-32006E ">
                <div className="container mx-auto space-y-12 py-24 flex flex-col  text-white xl:px-0 px-4 font-lato ">
                    <section className="space-y-4">
                        <h1 className="text-4xl font-raleway font-bold">Creation</h1>
                        <p className="text-xl">
                            Due to our team having no developers, other than myself, I took
                            the lead on developing the whole project. Luckily, we still broke it down into different parts and how we would
                            tackle such a project. We broke it down into sprints, with 2-day iterations so that we can stay on track with our project.
                            Our process began with weekly meetings, and broke it down to designing, and defining our core functional requirements, so
                            that we atleast a a minimum viable product.
                        </p>
                    </section>


                </div>
            </div>

            {/* Creation in depth */}
            <div className="lg:px-0 items-center justify-center container mx-auto overflow-x-hidden overflow-y-hidden">
                {/* Process 1 */}
                <motion.div className="flex lg:flex-row flex-col py-24 lg:gap-24 gap-12 justify-center items-center"
                    initial={{ y: 125, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.00 }}
                    viewport={{ once: true }}
                >
                    <section className="flex flex-col justify-center items-center lg:w-1/4 space-y-1 font-lato">
                        <p className="text-32006E text-sm  pt-2 font-bold font-raleway"> Process 1/3</p>
                        <h1 className="text-4xl font-raleway font-bold text-1E1E1E">Realistic Views</h1>
                    </section>
                    <section className="bg-white lg:w-2/5 p-12 rounded-xl font-lato md:mx-0 mx-4">
                        <p className="text-xl font-lato text-4E4E4E">
                            For our project, we had knew we had to be realistic even though we wanted many features to be included with the Finals
                            project. With that in mind, we wrote down all the features we wanted which were:
                        </p>
                        <ul className="list-disc pl-12 pt-2 text-xl font-lato text-4E4E4E">
                            <li>Study Spot Tags, which include: WiFi, Quiet, friendly</li>
                            <li>Study Spot Ratings 1-5</li>
                            <li>Study Spot Reviews</li>
                            <li>Study Spot Pictures</li>
                            <li>Account Creation</li>

                        </ul>
                    </section>
                </motion.div>

                {/* Process 2 */}
                <motion.div className="flex lg:flex-row flex-col py-24 lg:gap-24 gap-12 justify-center items-center"
                    initial={{ y: 125, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.00 }}
                    viewport={{ once: true }}
                >
                    <section className="flex flex-col justify-center items-center lg:w-1/4 space-y-1 font-lato">
                        <p className="text-32006E text-sm  pt-2 font-bold font-raleway"> Process 2/3</p>
                        <h1 className="text-4xl font-raleway font-bold text-1E1E1E">Challenges</h1>
                    </section>
                    <section className="bg-white lg:w-2/5 p-12 rounded-xl font-lato md:mx-0 mx-4">
                        <p className="text-xl font-lato text-4E4E4E">
                            Since I was the only developer, we did face lots of challenges and had to make some sacrifices to make sure we had
                            a product to deliver in the end. This meant that I re-used some design elements from other projects, and used
                            the same color scheme to make sure we had a product to deliver in the end. I decided to utilize a Tech Stack I've used before
                            which was Vercel for Hosting, Supabase for the Database, React for the frontend, while also utilizing TailwindCSS for the styling.
                        </p>
                    </section>
                </motion.div>

                {/* Process 3 */}
                <motion.div className="flex lg:flex-row flex-col py-24 lg:gap-24 gap-12 justify-center items-center"
                    initial={{ y: 125, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.00 }}
                    viewport={{ once: true }}
                >
                    <section className="flex flex-col justify-center items-center lg:w-1/4 space-y-1 font-lato">
                        <p className="text-32006E text-sm  pt-2 font-bold font-raleway"> Process 3/3</p>
                        <h1 className="text-4xl font-raleway font-bold text-1E1E1E">Outcome</h1>
                    </section>
                    <section className="bg-white lg:w-2/5 p-12 rounded-xl font-lato md:mx-0 mx-4">
                        <p className="text-xl font-lato text-4E4E4E">
                            In the end, we were able to deliver a product that was more user-friendly and faster than the current web application.
                            Some of the features I updated were that locations were now clickable, and would take you to the location on Google Maps,
                            and if a User wanted to rate a location that was already rated, they could just re-use the location that's already been rated
                            in the database.
                        </p>
                    </section>
                </motion.div>

            </div>

            <div className=" bg-1E1E1E">
                <div className="container mx-auto py-24 px-4 space-y-4 font-lato">
                    <h1 className="text-4xl text-white font-raleway font-bold">Conclusion</h1>
                    <p className="text-white text-xl">
                        One thing I really took away from this was the trigger functions
                        that Supabase had, which allowed me to create a trigger functions that depended on the data that was being inputted into the database.
                        This meant that when a User was going to re-use a study spot, trigger functions would check if the study spot was already rated, and if it was,
                        it would just re-use the data that was already in the database. This was a great learning experience for me, and I was able to learn a lot
                    </p>
                    <h1 className="text-4xl text-white font-raleway font-bold">Future</h1>
                    <p className="text-white text-xl">
                        In the future, I would like to change the theme of the website, and not follow the same color scheme as the other projects I've done.
                        I would also implement a google map's api so that users can see the location of the study spot. Lastly, I would like to implement a way for
                        Users to delete old ratings, as well as a way for the User to view all the study spots they've rated.
                    </p>

                    <button
                        onClick={goBack}
                        className="relative group w-max flex flex-row space-x-2 items-center text-xl pt-24">
                        <Image
                            src={Arrow}
                            alt="back_button"
                            className="rotate-180 transition-transform duration-300 group-hover:translate-x-[-5px]"
                            draggable="false"
                        />
                        <h1 className="transition-colors duration-300 text-white">View more Projects</h1>
                        <span className="absolute -bottom-1 right-0 w-0 transition-all ease-in-out duration-300 h-0.5 bg-white group-hover:w-full"></span>
                    </button>
                </div>

            </div>

            {
                isVisible && (
                    <div className="transition ease-in-out duration-300">
                        <Button />
                    </div>
                )
            }

            <Footer />
        </div >
    )
}

export default studyspotter