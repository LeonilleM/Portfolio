import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link'
import MindfulU from '@images/MindfulU/mindfulUApp.png';
import ClubHub from '@images/Clubhub/ClubHub.png';
import StudySpotter from '@images/StudySpotter/StudySpotter.png';


const Projects = () => {
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight || document.documentElement.clientHeight;
                const sectionHeight = rect.bottom - rect.top;
                const threshold40 = sectionHeight * 0.4;

                // Check if at least 40% of the section is visible
                const is40PercentVisible = rect.top < windowHeight - threshold40 && rect.bottom > threshold40;
                // Check if the entire section is in view
                if (is40PercentVisible) {
                    setIsInView(true);
                } else if (rect.bottom < 0 || rect.top > windowHeight) {
                    setIsInView(false);
                }
            }
        };

        handleScroll(); // Initial check on mount
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div
            className={`mt-16 py-44 transition-colors ease-in-out duration-700 ${isInView ? 'bg-[#3C3C3C]' : 'bg-[#F5F0E7]'
                }`}
            id="project-section"
            ref={sectionRef}
        >
            <div className="md:container md:mx-auto mx-4" >
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.25 }}
                    viewport={{ once: true }}
                >
                    <h1 className="text-5xl text-[#F5F0E7] font-raleway font-semibold">Projects</h1>
                </motion.div>
                <div className="flex flex-col mt-12 space-y-56">
                    {/* Project 1 */}
                    <div className="flex lg:flex-row flex-col lg:space-y-0 space-y-4 ">
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            <Image src={MindfulU} className="object-fill" alt="MindfulU" draggable='false' />

                        </motion.div>
                        <div className="flex flex-col items-end md:justify-between space-y-5 ">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                whileHover={{ scale: 1.02, x: 25, duration: 0.25 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                            >
                                <Link href="https://www.figma.com/design/Ut6ZqiysC4O7DzB5JfuqfP/DubHacks?node-id=0-1&node-type=canvas&t=fx8OXK155LE88inv-0"
                                    className="block cursor-pointer group relative"
                                    target="_blank"
                                >
                                    <div className="bg-[#1E1E1E] xl:w-[43rem] xl:h-[26rem] rounded-3xl lg:-translate-x-24 lg:translate-y-12 md:p-16 p-8 text-white space-y-4 
                        transition-all duration-300 ease-in-out
                        hover:shadow-2xl hover:shadow-blue-400/20 
                        relative overflow-hidden
                        before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-400/0 before:to-blue-400/10 before:opacity-0 before:transition-opacity before:duration-300
                        hover:before:opacity-100">
                                        {/* View Website Indicator */}
                                        <div className="absolute top-6 right-6 flex items-center space-x-2 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300
                          bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                                            <span className="text-white text-sm font-medium">View Figma</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 text-white transform group-hover:translate-x-1 transition-transform duration-300"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                />
                                            </svg>
                                        </div>


                                        <div className="relative z-10">
                                            <h1 className="text-4xl font-semibold transform group-hover:translate-x-2 transition-transform duration-300">
                                                MindfulU
                                            </h1>
                                            <p className="lg:text-2xl text-base transform group-hover:translate-x-2 transition-transform duration-300 delay-75">
                                                Improving the mental health of college students through daily mood tracking and personalized mindfulness exercises.
                                            </p>
                                            <div className="flex flex-row space-x-4 sm:pt-14 text-xs sm:text-xl text-[#1E1E1E] italic font-semibold transform group-hover:translate-x-2 transition-transform duration-300 delay-100">
                                                <h1 className="bg-white rounded-full py-2 px-2">Full-Stack</h1>
                                                <h1 className="bg-white rounded-full py-2 px-2">Web Application</h1>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                            <motion.div
                                className="lg:mr-24"
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                            >
                                <Link href='/projects/mindfulu' className="text-xl">
                                    <button className="btn relative inline-flex items-center justify-start overflow-hidden font-medium rounded-full transition-all group py-1.5 px-2.5">
                                        <span className="w-56 h-48 px-5 rounded-full bg-white absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                        <span className="relative w-full text-left text-[#F5F0E7] transition-colors duration-300 ease-in-out group-hover:text-1E1E1E items-center flex flex-row gap-2">
                                            Read More
                                            <span className="transition-colors duration-300 ease-in-out group-hover:text-1E1E1E">
                                                <svg
                                                    width="43"
                                                    height="30"
                                                    viewBox="0 0 43 30"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="transition-colors duration-300 ease-in-out"
                                                >
                                                    <path
                                                        d="M41.5196 16.3038C42.2907 15.5127 42.2746 14.2465 41.4836 13.4756L28.5948 0.912302C27.8039 0.141357 26.5377 0.157638 25.7666 0.948664C24.9956 1.73969 25.0117 3.00592 25.8026 3.77686L37.2594 14.9442L26.0906 26.4024C25.3195 27.1935 25.3356 28.4597 26.1265 29.2306C26.9175 30.0016 28.1837 29.9853 28.9547 29.1943L41.5196 16.3038ZM1.02545 17.4102L40.113 16.9077L40.0621 12.908L0.974549 13.4106L1.02545 17.4102Z"
                                                        fill="#F5F0E7"
                                                        className="transition-colors duration-300 ease-in-out group-hover:fill-[#1E1E1E]"
                                                    />
                                                </svg>
                                            </span>
                                        </span>
                                    </button>
                                </Link>
                            </motion.div>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="flex lg:flex-row flex-col lg:space-y-0 space-y-4 ">
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            <Image src={ClubHub} className="object-fill rounded" alt="MindfulU" draggable='false' />

                        </motion.div>
                        <div className="flex flex-col items-end md:justify-between space-y-5 ">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                whileHover={{ scale: 1.02, x: 25, duration: 0.25 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                            >
                                <Link href="https://github.com/krsina/capstone"
                                    className="block cursor-pointer group relative"
                                    target="_blank"
                                >
                                    <div className="bg-[#1E1E1E] xl:w-[43rem] xl:h-[26rem] rounded-3xl lg:-translate-x-24 lg:translate-y-12 md:p-16 p-8 text-white space-y-4 
                        transition-all duration-300 ease-in-out
                        hover:shadow-2xl hover:shadow-blue-400/20 
                        relative overflow-hidden
                        before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-400/0 before:to-blue-400/10 before:opacity-0 before:transition-opacity before:duration-300
                        hover:before:opacity-100">
                                        {/* View Website Indicator */}
                                        <div className="absolute top-6 right-6 flex items-center space-x-2 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300
                          bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                                            <span className="text-white text-sm font-medium">View Repo</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 text-white transform group-hover:translate-x-1 transition-transform duration-300"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                />
                                            </svg>
                                        </div>
                                        <div className="relative z-10">
                                            <h1 className="text-4xl font-semibold transform group-hover:translate-x-2 transition-transform duration-300">
                                                UW Club Hub
                                            </h1>
                                            <p className="lg:text-2xl text-base transform group-hover:translate-x-2 transition-transform duration-300 delay-75">
                                                A platform for UW students to discover and connect with clubs and organizations on campus.
                                            </p>
                                            <div className="flex flex-row space-x-4 sm:pt-14 text-xs sm:text-xl text-[#1E1E1E] italic font-semibold transform group-hover:translate-x-2 transition-transform duration-300 delay-100">
                                                <h1 className="bg-white rounded-full py-2 px-2">Full-Stack</h1>
                                                <h1 className="bg-white rounded-full py-2 px-2">Web Application</h1>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                            <motion.div
                                className="lg:mr-24"
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                            >
                                <Link href='/projects/clubhub' className="text-xl">
                                    <button className="btn relative inline-flex items-center justify-start overflow-hidden font-medium rounded-full transition-all group py-1.5 px-2.5">
                                        <span className="w-56 h-48 rounded-full bg-white absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                        <span className="relative w-full text-left text-[#F5F0E7] transition-colors duration-300 ease-in-out group-hover:text-1E1E1E items-center flex flex-row gap-2">
                                            Read More
                                            <span className="transition-colors duration-300 ease-in-out group-hover:text-1E1E1E">
                                                <svg
                                                    width="43"
                                                    height="30"
                                                    viewBox="0 0 43 30"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="transition-colors duration-300 ease-in-out"
                                                >
                                                    <path
                                                        d="M41.5196 16.3038C42.2907 15.5127 42.2746 14.2465 41.4836 13.4756L28.5948 0.912302C27.8039 0.141357 26.5377 0.157638 25.7666 0.948664C24.9956 1.73969 25.0117 3.00592 25.8026 3.77686L37.2594 14.9442L26.0906 26.4024C25.3195 27.1935 25.3356 28.4597 26.1265 29.2306C26.9175 30.0016 28.1837 29.9853 28.9547 29.1943L41.5196 16.3038ZM1.02545 17.4102L40.113 16.9077L40.0621 12.908L0.974549 13.4106L1.02545 17.4102Z"
                                                        fill="#F5F0E7"
                                                        className="transition-colors duration-300 ease-in-out group-hover:fill-[#1E1E1E]"
                                                    />
                                                </svg>
                                            </span>
                                        </span>
                                    </button>
                                </Link>
                            </motion.div>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="flex lg:flex-row flex-col lg:space-y-0 space-y-4 ">
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            <Image src={StudySpotter} className="object-fill rounded" alt="MindfulU" draggable='false' />

                        </motion.div>
                        <div className="flex flex-col items-end md:justify-between space-y-5 ">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                whileHover={{ scale: 1.02, x: 25, duration: 0.25 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                            >
                                <Link href="https://github.com/LeonilleM/studdyspotter/tree/master"
                                    className="block cursor-pointer group relative"
                                    target="_blank"
                                >
                                    <div className="bg-[#1E1E1E] xl:w-[43rem] xl:h-[26rem] rounded-3xl lg:-translate-x-24 lg:translate-y-12 md:p-16 p-8 text-white space-y-4 
                        transition-all duration-300 ease-in-out
                        hover:shadow-2xl hover:shadow-blue-400/20 
                        relative overflow-hidden
                        before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-400/0 before:to-blue-400/10 before:opacity-0 before:transition-opacity before:duration-300
                        hover:before:opacity-100">
                                        {/* View Website Indicator */}
                                        <div className="absolute top-6 right-6 flex items-center space-x-2 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300
                          bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                                            <span className="text-white text-sm font-medium">View Repo</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 text-white transform group-hover:translate-x-1 transition-transform duration-300"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                />
                                            </svg>
                                        </div>

                                        <div className="relative z-10">
                                            <h1 className="text-4xl font-semibold transform group-hover:translate-x-2 transition-transform duration-300">
                                                Studdy Spotter
                                            </h1>
                                            <p className="lg:text-2xl text-base transform group-hover:translate-x-2 transition-transform duration-300 delay-75">
                                                A platform that was mostly aimed for UW students to discover new study spots on, near, or far from campus.
                                                Aimed to encourage students to explore new study spots and to get out of their comfort zone.
                                            </p>
                                            <p className="text-xs transform group-hover:translate-x-2 py-2 sm:py-0 transition-transform duration-300 delay-75 italic underline">Database currently got deleted by Supabase, needs to be restarted</p>
                                            <div className="flex flex-row space-x-4 sm:pt-14 text-xs sm:text-xl text-[#1E1E1E] italic font-semibold transform group-hover:translate-x-2 transition-transform duration-300 delay-100">
                                                <h1 className="bg-white rounded-full py-2 px-2">Full-Stack</h1>
                                                <h1 className="bg-white rounded-full py-2 px-2">Web Application</h1>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                            <motion.div
                                className="lg:mr-24"
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                            >
                                <Link href='/projects/studyspotter' className="text-xl">
                                    <button className="btn relative inline-flex items-center justify-start overflow-hidden font-medium rounded-full transition-all group py-1.5 px-2.5">
                                        <span className="w-56 h-48 rounded-full bg-white absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                        <span className="relative w-full text-left text-[#F5F0E7] transition-colors duration-300 ease-in-out group-hover:text-1E1E1E items-center flex flex-row gap-2">
                                            Read More
                                            <span className="transition-colors duration-300 ease-in-out group-hover:text-1E1E1E">
                                                <svg
                                                    width="43"
                                                    height="30"
                                                    viewBox="0 0 43 30"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="transition-colors duration-300 ease-in-out"
                                                >
                                                    <path
                                                        d="M41.5196 16.3038C42.2907 15.5127 42.2746 14.2465 41.4836 13.4756L28.5948 0.912302C27.8039 0.141357 26.5377 0.157638 25.7666 0.948664C24.9956 1.73969 25.0117 3.00592 25.8026 3.77686L37.2594 14.9442L26.0906 26.4024C25.3195 27.1935 25.3356 28.4597 26.1265 29.2306C26.9175 30.0016 28.1837 29.9853 28.9547 29.1943L41.5196 16.3038ZM1.02545 17.4102L40.113 16.9077L40.0621 12.908L0.974549 13.4106L1.02545 17.4102Z"
                                                        fill="#F5F0E7"
                                                        className="transition-colors duration-300 ease-in-out group-hover:fill-[#1E1E1E]"
                                                    />
                                                </svg>

                                            </span>
                                        </span>
                                    </button>
                                </Link>
                            </motion.div>
                        </div>
                    </div>


                </div>
            </div>
        </div >
    )
}

export default Projects