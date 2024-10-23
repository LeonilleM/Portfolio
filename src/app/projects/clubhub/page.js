'use client'
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Button from '@/components/button';
import Footer from '@/components/footer';
import NavBar from '@/components/navbar';
import Arrow from '@design/Arrow.svg';
import headerImage from '@images/Clubhub/ClubHubHeader.png';
import Process from '@images/Clubhub/ClubHubProcess.png';
import TechStack from '@images/Clubhub/TechStack.png';
import Gantchart from '@images/Clubhub/Gantchart.png';
import Design from '@images/Clubhub/Design.png';
import Develop from '@images/Clubhub/Develop.png';

function Clubhub() {
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
                        <h1 className="text-4xl font-bold text-1E1E1E ">UW Club Hub - Student Web App</h1>
                        <p className="italic font-bold text-1E1E1E">Connecting UW Students</p>
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
                            <p className="text-xl">3 Months</p>
                        </div>
                        <div>
                            <h1 className="font-bold text-3xl">Team</h1>
                            <p className="text-xl">Leonille</p>
                            <p className="text-xl">Krisna</p>
                            <p className="text-xl">Don</p>
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
                            UW Club Hubs aims to fix  the current web application that the University of Washington uses to connect students with clubs and organizations.
                            The current web applications was quite slow, and not user friendly.
                            We wanted to create a more user friendly and faster web application that would allow students to easily find clubs and organizations
                            that they were interested in.
                        </p>
                    </div>
                    <hr className="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded dark:bg-1E1E1E lg:hidden" />
                    <div className="space-y-2 lg:w-2/3 w-full lg:border-l-2 lg:border-black lg:pl-24">
                        <h1 className="text-3xl">What is UW Club Hub?</h1>
                        <p className="text-xl">
                            UW Club Hub is a web application that allows students to easily find clubs and organizations that they are interested in.
                            It's aim was to fix the outdated website, by modernizing the look, but also adding
                            features that would make it easier for students to find clubs and organizations that they were interested in.
                            Thse includes finding clubs much easier, resources to start a club, and managing connections with Admins and Members
                            easier as well.
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
                    <p className="text-xl font-bold text-yellow-400">Outdated platform</p>
                    <p className=" md:text-xl md:w-2/3  ">
                        One of the biggest problems with the current web application is that it is slow and not user-friendly.
                        It was quite hard to navigate, and just wasn't intuitive when it came to finding current actives clubs. Also finding resources
                        to start a club was quite difficult as well. Lastly, managing connections with Admins and Members was basically non-existent.
                        All these problems discouraged students from using the platform.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.25, delay: 0.15 }}
                    viewport={{ once: true }}
                    className="bg-white lg:px-36 px-4 py-14 md:w-3/5  md:rounded-l-full  self-end flex flex-col items-end justify-end text-end text-1E1E1E space-y-2 ">
                    <h1 className="text-3xl font-bold font-raleway">Solution</h1>
                    <p className="text-xl font-bold text-32006E">Improved UX and New Features</p>
                    <p className=" md:text-xl md:w-2/3">
                        To address these problems, we decided to create a web application that was more user-friendly and faster.
                        We wanted to make it easier for students to find clubs and organizations that they were interested in, and to make it easier for them to connect with Admins and Members.
                        We also wanted to make it easier for students to find resources to start a club, such as all the required forms and information.
                    </p>
                </motion.div>
            </div >

            {/* Research */}
            <div className="container mx-auto space-y-24 flex flex-col pb-12 text-3x text-1E1E1E xl:px-0 px-4 font-lato ">
                <section>
                    <h1 className="text-4xl font-raleway font-bold">Research and Beginning</h1>
                    <p className="text-xl">
                        We began our research by asking student officers and students who were involved in clubs and organizations
                        what they liked and disliked about the current web application. We also asked them what features they would like to see in a new web application.
                        We then used these informations to create User Stories and Use Cases, which we used to create a prototype of our application.
                    </p>
                </section>
                <section>
                    <h1 className="text-4xl font-raleway font-bold">Process</h1>
                    <p className="text-xl">
                        For our process we broke it down into 5 parts. Research, Document, Design, Develop, and Iterate. These
                        five steps helped us prioritize what we needed to do, and helped us stay on track with our project.
                        Looking below, we can see how we broke down each step, through our process.
                    </p>
                </section>
            </div>


            <div className="w-full bg-32006E ">
                <motion.div
                    initial={{ y: 125, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.00 }}
                    className="container mx-auto  py-20 items-center ">
                    <Image
                        src={Process}
                        alt="Process"
                        draggable="false"
                    />
                </motion.div>
            </div>

            {/* Process in depth */}
            <div className="lg:px-0 items-center justify-center container mx-auto overflow-x-hidden overflow-y-hidden">
                {/* Process 1 */}
                <div className="flex lg:flex-row flex-col s space-y-4">
                    <div className="lg:bg-[#DDD7CC] lg:w-2/3 lg:py-36 lg:px-24 p-4 order-2 lg:order-1 transition-colors duration-300 items-center justify-center flex">
                        <Image
                            className="hover:scale-110 w-11/12 lg:w-full "
                            src={TechStack}
                            alt="Gantchart"
                            draggable="false"
                        />
                    </div>
                    <motion.div
                        initial={{ y: 125, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.00 }}
                        viewport={{ once: true }}
                        className="lg:bg-inherit bg-white sm:mx-0 rounded-lg lg:mx-0 mx-4 lg:pl-24 lg:py-24 px-12 py-12 order-1 lg:order-2 flex flex-col justify-center lg:w-1/3 space-y-4 font-lato"
                    >
                        <h1 className="text-2xl lg:text-4xl font-raleway font-bold">Technologies</h1>
                        <p className="lg:text-xl text-lg">
                            After thorough research, we decided to compile a list of technologies that we would use to build our web application,
                            we utilized technologies such as React, TailWindCSS, and Supabase to build our web application.
                        </p>
                        <p className="text-32006E text-sm italic pt-2 font-semibold"> Process 1/4</p>
                    </motion.div>
                </div>
                {/* Process 2 */}
                <div className="flex lg:flex-row flex-col s space-y-4">
                    <div className="lg:bg-[#DDD7CC] lg:w-2/3 lg:py-36 lg:px-24 p-4 order-2 lg:order-1  transition-colors duration-300 items-center justify-center flex">
                        <Image
                            className="hover:scale-110 w-11/12 lg:w-full "
                            src={Gantchart}
                            alt="Gantchart"
                            draggable="false"
                        />
                    </div>
                    <motion.div
                        initial={{ y: 125, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.00 }}
                        viewport={{ once: true }}
                        className="lg:bg-inherit bg-white sm:mx-0 rounded-lg lg:mx-0 mx-4 lg:pl-24 lg:py-24 px-12 py-12 order-1 lg:order-2 flex flex-col justify-center lg:w-1/3 space-y-4 font-lato">
                        <h1 className="text-2xl lg:text-4xl font-raleway font-bold">Documentation</h1>
                        <p className="lg:text-xl text-lg ">
                            Documentation stage began with properly documenting our research, and then utilizing all the information we gathered to create a
                            Gant Chart that would help us stay on track with our project. These including listing due dates, and what needed to be done for each
                            iteration.
                        </p>
                        <p className="text-32006E text-sm italic pt-2 font-semibold"> Process 2/4</p>
                    </motion.div>
                </div>
                {/* Process 3 */}
                <div className="flex lg:flex-row flex-col s space-y-4">
                    <div className="lg:bg-[#DDD7CC] lg:w-2/3 lg:py-36 lg:px-24 p-4 order-2 lg:order-1  transition-colors duration-300 items-center justify-center flex">
                        <Image
                            className="hover:scale-110 w-11/12 lg:w-full "
                            src={Design}
                            alt="Gantchart"
                            draggable="false"
                        />
                    </div>
                    <motion.div
                        initial={{ y: 125, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.00 }}
                        viewport={{ once: true }}
                        className="lg:bg-inherit bg-white sm:mx-0 rounded-lg lg:mx-0 mx-4 lg:pl-24 lg:py-24 px-12 py-12 order-1 lg:order-2 flex flex-col justify-center lg:w-1/3 space-y-4 font-lato">
                        <h1 className="text-2xl lg:text-4xl font-raleway font-bold">Design</h1>
                        <p className="lg:text-xl text-lg ">
                            Once we had our technologies and documentation in place, we began designing our web application. Due to the nature of our project,
                            We wanted to make sure we had enough time to develop our website, so we skipped wireframes and began designing and prototyping our web application.
                        </p>
                        <p className="text-32006E text-sm italic pt-2 font-semibold"> Process 3/4</p>
                    </motion.div>
                </div>
                {/* Process 4 */}
                <div className="flex lg:flex-row flex-col s space-y-4">
                    <div className="lg:bg-[#DDD7CC] lg:w-2/3 lg:py-36 lg:px-24 p-4 order-2 lg:order-1  transition-colors duration-300 items-center justify-center flex">
                        <Image
                            className="hover:scale-110 w-11/12 lg:w-full "
                            src={Develop}
                            alt="Gantchart"
                            draggable="false"
                        />
                    </div>
                    <motion.div
                        initial={{ y: 125, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.00 }}
                        viewport={{ once: true }}
                        className="lg:bg-inherit bg-white sm:mx-0 rounded-lg lg:mx-0 mx-4 lg:pl-24 lg:py-24 px-12 py-12 order-1 lg:order-2 flex flex-col justify-center lg:w-1/3 space-y-4 font-lato">
                        <h1 className="text-2xl lg:text-4xl font-raleway font-bold">Develop</h1>
                        <p className="lg:text-xl text-lg ">
                            Once we had our design in place, we began developing our web application.
                            We utilized GitHub to manage our codebase, and utilized our Kanban board to stay on track with our project.
                            This stage was the longest, as we had to make sure our web application was bug free, and that it was user friendly.
                        </p>
                        <p className="text-32006E text-sm italic pt-2 font-semibold"> Process 4/4</p>
                    </motion.div>
                </div>
            </div>

            <div className=" bg-1E1E1E">
                <div className="container mx-auto py-24 px-4 space-y-4 font-lato">
                    <h1 className="text-4xl text-white font-raleway font-bold">Conclusion</h1>
                    <p className="text-white text-xl">
                        After 3 months of hard work, we were able to create a web application that was more user-friendly and faster than the current web application.
                        We were able to create a web application that made it easier for students to find clubs and organizations that they were interested in, and to connect with Admins and Members.
                        We were also able to create a web application that made it easier for students to find resources to start a club, such as all the required forms and information.
                    </p>
                    <h1 className="text-4xl text-white font-raleway font-bold">Future</h1>
                    <p className="text-white text-xl">
                        In the future, we would like to add more features to our web application, such as a chat feature that would allow students to communicate with each other.
                        We would also like to add a feature that would allow students to create sign ins within the app to track Students that attend their events.
                        We would also like to add a feature that would allow students to create polls and surveys, and to view the results of those polls and surveys.
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

export default Clubhub