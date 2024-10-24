'use client'
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ScrollButton from "@design/scrollButton.svg";
import LinkedInLogo from "@images/LinkedIn.png";
import GitHubLogo from "@images/GitHub.png";


function Main() {
  const [skipInView, setSkipInView] = useState(true);
  const [ref, inView] = useInView({
    triggerOnce: true,
    skip: skipInView,
  });

  const [scrollingDown, setScrollingDown] = useState(false); // Initialize as scrolling down

  useEffect(() => {
    setSkipInView(false);
    let lastScrollPosition = window.scrollY;

    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      if (currentScrollPosition > lastScrollPosition) {
        // Scrolling down
        setScrollingDown(true);
      } else {
        // Scrolling up
        setScrollingDown(false);
      }

      lastScrollPosition = currentScrollPosition;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToProjects = () => {
    const projectSection = document.getElementById('project-section');
    window.scrollTo({
      top: projectSection.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div className="px-2 flex flex-col md:items-center">
      <div className="pt-16 pb-28  sm:px-8 md:px-16 lg:px-24">
        <motion.div
          initial={{ y: -25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75 }}
          className="font-raleway"
        >
          <h1 className="text-2xl text-5F826D  font-light">Programmer / Student </h1>
          <h1 className="text-7xl text-5F826D">Leonille</h1>
          <h1 className="text-7xl text-5F826D ">Matunan</h1>
        </motion.div>

        <div className="flex items-center mt-4 pt-5 sm:mt-8 px-2 lg:w-[720px] font-lato">
          {/* Vertical line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mr-4 border-l-2 border-solid h-48"
            style={{ borderColor: "#D3C3B3" }}
          ></motion.div>
          {/* Paragraph and Logos */}
          <div className="flex flex-col">
            <motion.p
              initial={{ x: -45, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.10 }}
              viewport={{ once: true }}
              className="text-5F826D text-xl sm:text-3xl mb-4 font-roboto"
            >
              I'm an aspiring <span className="font-bold">Software Engineer</span>, who's looking forward to exploring new technologies and learning.
            </motion.p>
            <motion.div
              initial={{ x: -45, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.10 }}
              viewport={{ once: true }}
              className="flex"
            >
              <Link href="https://www.linkedin.com/in/leonille-matunan/" target="_blank">
                <Image
                  src={LinkedInLogo}
                  className="w-8 h-8 sm:w-10 sm:h-10 ml-2 sm:ml-4 mb-2 transition-transform ease-in-out delay-75 duration-300 transform hover:scale-125"
                  alt="LinkedIn Logo"
                />
              </Link>
              <Link href="https://github.com/LeonilleM" target="_blank">
                <Image
                  src={GitHubLogo}
                  className="w-8 h-8 sm:w-10 sm:h-10 ml-2 sm:ml-4 transition-transform ease-in-out delay-150 duration-300 transform hover:scale-125 "
                  alt="GitHub Logo"
                />
              </Link>
            </motion.div>
          </div>
        </div>

        <div ref={ref}>
          <button onClick={handleScrollToProjects}>
            <motion.div
              className="flex flex-row mt-52 animate-bounce"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              animate={{ opacity: inView && scrollingDown ? 0 : 1 }}
              transition={{ duration: 2 }}
            >
              <Image src={ScrollButton} className="w-10 h-10" alt="ScrollButton" />
              <h1 className="my-2 font-raleway">View Work!</h1>
            </motion.div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
