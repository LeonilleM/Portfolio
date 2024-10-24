'use client'
import React, { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion'
import Image from 'next/image'
import NavBar from '@/components/navbar'
import Footer from '@/components/footer'
import headerImage from '@images/MindfulU/MindfulU.png'
import Onboarding from '@images/AppM.png'
import MainApp from '@images/AppM2.png'
import Arrow from '@design/Arrow.svg'
import Button from '@/components/button'

function MindfulU() {
    const { scrollYProgress } = useScroll()
    const [isVisible, setIsVisible] = useState(false)

    const goBack = () => {
        window.history.back()
    }

    const handleScroll = () => {
        if (window.scrollY > 300) {
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
                className="fixed top-0 left-0 right-0 h-3 shadow-md bg-1E1E1E transform origin-left"
                style={{ scaleX: scrollYProgress }}
                aria-hidden="true"
            />
            <NavBar
                // Closed state (white text on transparent background)
                closedText="text-white"
                closedBg="bg-7CAFEB"
                closedMenuColor="#ffffff"
                // Open state (white text on blue background)
                openText="text-7CAFEB"
                openMenuColor="#7CAFEB"
                // Mobile menu styling
                mobileMenuBg="bg-white"
                mobileOverlayBg="bg-7CAFEB/80"
            />


            {/* Header */}
            <div className="flex lg:flex-row flex-col  bg-7CAFEB md:px-36 px-4 gap-36 py-14 font-raleway">
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
                        <h1 className="text-2xl text-7CAFEB ">MindfulU - Mental Health App</h1>
                        <h1 className="text-4xl font-bold text-1E1E1E ">MindfulU - Mental Health App</h1>
                        <p className="italic font-bold text-1E1E1E">Runner Up Vitality Track</p>
                    </div>
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.0 }}
                        viewport={{ once: true }}
                        className="text-white space-y-12 pt-16 px-2">
                        <div>
                            <h1 className="font-bold text-3xl">Role</h1>
                            <p className="text-xl font-lato">Developer & Designer</p>
                        </div>
                        <div>
                            <h1 className="font-bold text-3xl">Project Duration</h1>
                            <p className="text-xl font-lato">24 Hours</p>
                        </div>
                        <div>
                            <h1 className="font-bold text-3xl">Team</h1>
                            <p className="text-xl font-lato">Leonille</p>
                            <p className="text-xl font-lato">Ethan</p>
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
                            Improving mental health through a mobile application that provides users with a variety of tools to help them manage their mental health.
                            The app includes features such as a mood tracker, journaling, and guided meditation.
                        </p>
                    </div>
                    <hr className="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded dark:bg-1E1E1E lg:hidden" />
                    <div className="space-y-2 lg:w-2/3 w-full lg:border-l-2 lg:border-black lg:pl-24">
                        <h1 className="text-3xl">What is mindfulU?</h1>
                        <p className="text-xl">
                            MindfulU came about as a solution to the growing mental health crisis, specifically in the college student population.
                            The app is designed to provide students with a variety of tools to help them manage their mental health.
                            Our project was inspired by the idea that mental health is just as important as physical health, and that it should be treated as such.
                            We drew inspiration from other mental health apps, such as Headspace and Calm, and sought to create an app that was both user-friendly and effective.
                            We then conceptualized and designed the app, and created a prototype using Figma for the <span className="font-bold">Dubhacks 2023 Hackathon</span>, where
                            we were awarded the Runner Up Vitality Track.
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
                    className="bg-7CAFEB lg:px-36 px-4 py-14 md:w-3/5  md:rounded-r-full text-white space-y-2 ">
                    <h1 className="text-3xl font-bold font-raleway">Problem</h1>
                    <p className="text-xl font-bold text-1E1E1E">Lack of help for college students</p>
                    <p className=" md:text-xl md:w-2/3  ">
                        We found that there was a lack of resources available to college students who were struggling with their mental health.
                        Many students were unaware of the resources that were available to them, and those who were aware often found that the resources were not helpful.
                        We also found that many students were hesitant to seek help due to the stigma surrounding mental health.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.25, delay: 0.15 }}
                    viewport={{ once: true }}
                    className="bg-white lg:px-36 px-4 py-14 md:w-3/5  md:rounded-l-full  self-end flex flex-col items-end justify-end text-end text-1E1E1E space-y-2 ">
                    <h1 className="text-3xl font-bold font-raleway">Solution</h1>
                    <p className="text-xl font-bold text-7CAFEB"> Stress management</p>
                    <p className=" md:text-xl md:w-2/3">
                        Our solution was to combine a variety of tools into a single app that would help students manage their mental health.
                        These including daily mood tracking, as well as journaling and guided meditation exercises that are tailored to the user's needs.
                        Lastly, we wanted to create an application that was easy to use and accessible to all students, regardless of their level of experience with mental health apps.
                    </p>
                </motion.div>
            </div >

            {/* Process */}
            <div className="container mx-auto space-y-24 flex flex-col pb-12 text-3x text-1E1E1E xl:px-0 px-4 font-lato ">
                <div>
                    <h1 className="text-4xl font-raleway font-bold">Creation</h1>
                    <p className="text-xl">
                        Our thought process began with nailing down key functional requirements that we wanted to include in the app.
                        We then created a wireframe of the app, which we used to create a prototype using Figma. We then used React Native to create the app itself, and tested it to ensure that it was user-friendly and effective.
                        We opted for a simple clean design, and wanted welcome colors, and decided to go with a mixture of blues, whites, and greys to create a calming effect.

                    </p>
                </div>
                <div className="flex sm:flex-row flex-col gap-16">
                    <div className="md:w-1/2">
                        <h1 className="text-4xl font-raleway font-bold">Setbacks</h1>
                        <p className="text-xl">
                            Our biggest setback was the time contstraint as well as our team size. We had to work quickly to create a prototype that was both user-friendly and effective, and we had to do so with a team of only two people.
                            Unfortunately, we were unable to implement all of the features that we wanted to include in the app, but we were able to create a prototype that we were proud of. Also,
                            we had little experience with React Native, as I myself have only worked with Web Development, so there was a learning curve that we had to overcome.
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <h1 className="text-4xl font-raleway font-bold">Outcomes</h1>
                        <p className="text-xl">
                            Despite the setbacks, we were able to create a prototype that we were proud of. We were able to create an app that was both user-friendly and effective, and that we believe has the potential to help many students manage their mental health.

                        </p>
                    </div>
                </div>

                {/* Screens */}
                <div className="space-y-4">
                    <h1 className="text-4xl font-raleway font-bold">Final Screen</h1>
                    <div className="flex flex-col md:flex-row gap-16 items-center justify-between py-8">
                        <div className="flex flex-col text-center space-y-2 md:w-1/2 ">
                            <h1 className="text-2xl italic">Onboarding</h1>
                            <Image src={Onboarding} className="w-full" alt="Onboarding" draggable="false" />
                            <p className="text-xl">
                                For onboarding, we decided to keep it simple and clean.
                                It begins with a User either Logging in or Signing up.
                                Then the User goes through a series of questions to help the app tailor the experience to the User.
                                These includes listing some self-care activities, and then setting their current mood
                            </p>
                        </div>
                        <div className="flex flex-col text-center space-y-2  md:w-1/2">
                            <h1 className="text-2xl italic">Main Application</h1>
                            <Image src={MainApp} className="w-full" alt="Main Application" draggable="false" />
                            <p className="text-xl">
                                The main application includes a mood tracker, reflection journal, as well as daily self-care activites that
                                the user listed to do. Journey tracks how many times they've done the activity,
                                and their daily mood. Includes Focus of the Day which are different guided meditations that the user can do.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Moving Forward & Outcomes */}
                <div>
                    <h1 className="text-4xl font-raleway font-bold">Conclusion</h1>
                    <p className="text-xl">
                        Somethings I've learned were working under a big time  constraint, for it being my second hackathon with a team of two, and having to learn how we can
                        implement the features we wanted to include in the app.
                    </p>
                </div>
                <div>
                    <h1 className="text-4xl font-raleway font-bold">Moving Forward</h1>
                    <p className="text-xl">
                        Moving forward, I'd love to further flesh out the mood tracker from once a day to multiple times a day,
                        as well as implementing features for notifying users to do their daily self-care habits.
                    </p>
                </div>
                <button
                    onClick={goBack}
                    className="relative group w-max flex flex-row space-x-2 items-center text-xl pt-24">
                    <Image
                        src={Arrow}
                        alt="back_button"
                        className="rotate-180 transition-transform duration-300 group-hover:translate-x-[-5px]"
                        draggable="false"
                    />
                    <h1 className="transition-colors duration-300 hover:text-[#1E1E1E]">View more Projects</h1>
                    <span className="absolute -bottom-1 right-0 w-0 transition-all ease-in-out duration-300 h-0.5 bg-[#1E1E1E] group-hover:w-full"></span>
                </button>
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

export default MindfulU