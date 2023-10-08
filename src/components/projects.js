import Image from 'next/image'
import habitTracker from '@images/habitTracker.png'
import huskyConnect from '@images/huskyConnect.jpg'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import Link from 'next/link'

const Projects = () => {
    return (
        <div>
            <div className="pt-36 pb-20 container mx-auto px-4 lg:px-40 text-darkgray-c space-y-6" id="project-section">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.25 }}
                >
                    <h1 className="text-5xl text-4E4E4E font-roboto mb-4">Portfolio</h1>
                </motion.div>
                <div className="py-2 space-y-20">
                    {/* Project One */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                    >
                        <div className="md:grid grid-flow-row-dense grid-cols-3 gap-4 space-y-2 sm:space-y-0 text-303837">
                            <Image src={habitTracker} alt="Habit Tracker" className="rounded-lg sm:h-[225px] sm:w-[400px] w-auto h-auto border border-D3C3B3/30" />
                            <div className="flex flex-col space-y-2 sm:pl-10">
                                <h1 className="text-4xl font-bold text-4E4E4E font-roboto"> MOMENTUM</h1>
                                <p className="font-medium">Tracking your habit progress</p>
                                <button className="bg-transparent border border-303837 roounded text-303837 font-semibold px-2 py-1 rounded-lg w-24  hover:bg-D3C3B3 hover:border-transparent hover:text-white">
                                    <Link href="https://css-habits.vercel.app/" target='_blank'>View</Link>
                                </button>
                            </div>
                            <p className="sm:pt-0 pt-3">
                                One of my first full-stack projects was completed with three other group members.
                                We utilized the Nuxt 3 framework, which is based on Vite, Vue.js, and Nitro, to create our front end.
                                For styling, we used Tailwind CSS. Lastly, we used Supabase as our database.
                                While working with Supabase, we incorporated TypeScript for type checking and improved code quality.
                            </p>
                        </div>
                    </motion.div>
                    {/* Project Two */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                    >
                        <div className="md:grid grid-flow-row-dense grid-cols-3 gap-4 space-y-2 sm:space-y-0 text-303837">
                            <Image src={huskyConnect} alt="Husky Connect" className="rounded-lg sm:h-[225px] sm:w-[400px] border border-D3C3B3/30" />
                            <div className="flex flex-col space-y-2 sm:pl-10">
                                <h1 className="text-4xl font-bold text-4E4E4E font-roboto"> HUSKY CONNECT</h1>
                                <p className="font-medium">Connecting students & clubs</p>
                                <button className="bg-transparent border border-303837 roounded text-303837 font-semibold px-2 py-1 rounded-lg w-24  hover:bg-D3C3B3 hover:border-transparent hover:text-white">
                                    Soon!
                                </button>
                            </div>
                            <p className="sm:pt-0 pt-3">
                                I'm working on a project combining React for the frontend, Tailwind CSS for styling, and Express.js for the backend.
                                I've containerized the MySQL database with Docker.
                                The goal is to create a user-friendly web app, and I plan to deploy it once it's finished.
                            </p>
                        </div>
                    </motion.div>



                </div>
            </div>
        </div>
    )
}

export default Projects