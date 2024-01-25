'use client'
import Link from "next/link";
import Image from "next/image";
import LinkedInLogo from "../../public/images/LinkedIn.png";
import GitHubLogo from "../../public/images/GitHub.png";
import ScrollButton from "@design/scrollButton.svg"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Main() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [scrollingDown, setScrollingDown] = useState(true); // Initialize as scrolling down
  const [reloadCount, setReloadCount] = useState(0);

  useEffect(() => {
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

  useEffect(() => {
    const reloadCount = localStorage.getItem('reloadCount');
    if (reloadCount) {
      setReloadCount(parseInt(reloadCount));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('reloadCount', reloadCount);
  }, [reloadCount]);

  const handleReload = () => {
    setReloadCount(reloadCount + 1);
  };

  const shouldAnimate = reloadCount < 2;

  return (
    <div className="px-2 flex flex-col md:items-center">
      <div className="pt-16 pb-28  sm:px-8 md:px-16 lg:px-24">
        {shouldAnimate ? (
          <motion.div
            initial={{ y: -25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <h1 className="text-2xl text-5F826D font-raleway font-light">Programmer / Student </h1>
            <h1 className="text-7xl font-roboto text-5F826D font-extrabold">Leonille</h1>
            <h1 className="text-7xl font-roboto text-5F826D font-extrabold">Matunan</h1>
          </motion.div>
        ) : (
          <>
            <h1 className="text-2xl text-5F826D font-raleway font-light">Programmer / Student </h1>
            <h1 className="text-7xl font-roboto text-5F826D font-extrabold">Leonille</h1>
            <h1 className="text-7xl font-roboto text-5F826D font-extrabold">Matunan</h1>
          </>
        )}
        <div className="flex items-center mt-4 pt-5 sm:mt-8 px-2 lg:w-[720px]">
          {/* Vertical line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: shouldAnimate ? 0.3 : 0 }}
            className="mr-4 border-l-2 border-solid h-48"
            style={{ borderColor: "#D3C3B3" }}
          ></motion.div>
          {/* Paragraph and Logos */}
          <div className="flex flex-col">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: shouldAnimate ? 0.3 : 0 }}
              className="text-5F826D text-xl sm:text-3xl mb-4 font-roboto"
            >
              I'm an aspiring <span className="font-bold">Software Engineer</span>, who's looking forward to exploring new technologies and learning.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: shouldAnimate ? 0.5 : 0 }}
              className="flex"
            >
              <Link href="https://www.linkedin.com/in/leonille-matunan/" target="_blank">
                <Image
                  src={LinkedInLogo}
                  className="w-8 h-8 sm:w-10 sm:h-10 ml-2 sm:ml-4 mb-2 transition-transform ease-in-out delay-150 duration-300 transform hover:scale-125"
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
          <Link href="#project-section">
            <motion.div
              className="flex flex-row mt-52 animate-bounce"
              initial={{ opacity: 1 }}
              animate={{ opacity: inView && scrollingDown ? 0 : 1 }}
              transition={{ duration: 2 }}
            >
              <Image src={ScrollButton} className="w-10 h-10" alt="ScrollButton" />
              <h1 className="my-2">Scroll Down</h1>
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Main;
