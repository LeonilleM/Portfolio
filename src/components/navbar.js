'use client'
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const Path = ({ stroke, ...props }) => (
  <motion.path
    fill="transparent"
    strokeLinecap="round"
    strokeWidth="2"
    stroke={stroke}
    {...props}
  />
);

const MenuButton = ({ isOpen, toggle, className, closedColor, openColor }) => {
  return (
    <motion.button
      onClick={toggle}
      className={`p-2 focus:outline-none ${className}`}
      animate={isOpen ? "open" : "closed"}
    >
      <svg width="24" height="24" viewBox="0 0 24 24">
        <Path
          stroke={isOpen ? openColor : closedColor}
          variants={{
            closed: { d: "M 4 6 L 20 6" },
            open: { d: "M 5 5 L 19 19" }
          }}
          transition={{ duration: 0.3 }}
        />
        <Path
          stroke={isOpen ? openColor : closedColor}
          variants={{
            closed: { d: "M 4 12 L 20 12", opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={{ duration: 0.3 }}
        />
        <Path
          stroke={isOpen ? openColor : closedColor}
          variants={{
            closed: { d: "M 4 18 L 20 18" },
            open: { d: "M 5 19 L 19 5" }
          }}
          transition={{ duration: 0.3 }}
        />
      </svg>
    </motion.button>
  );
};

const NavBar = ({
  // Closed state colors
  closedBg = '',
  closedText = 'text-5F826D',
  closedMenuColor = '#5F826D',
  // Open state colors
  openBg = 'bg-white',
  openText = 'text-5F826D',
  openMenuColor = '#5F826D',
  // Mobile menu colors
  mobileMenuBg = 'bg-white',
  mobileOverlayBg = 'bg-white/80',
  // Hover effects
  hoverBg = 'bg-303837/30',
  hoverText = 'text-4E4E4E'
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Dynamically determine current colors based on menu state
  const currentBg = isOpen ? openBg : closedBg;
  const currentText = isOpen ? openText : closedText;

  return (
    <div className={`${currentBg} relative z-50 `}>
      <div className={`flex flex-wrap items-center justify-between py-5 container mx-auto font-raleway`}>
        <Link href="/">
          <h1 className={`text-3xl font-medium mx-2 ${currentText}`}>Leonille Matunan</h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden sm:block">
          <ul className="flex flex-wrap justify-between items-center space-x-5">
            <NavLink href="/about" text="About" textColor={currentText} hoverBg={hoverBg} hoverText={hoverText} />
            <NavLink href="/#project-section" text="Portfolio" textColor={currentText} hoverBg={hoverBg} hoverText={hoverText} />
            <NavLink href="/resume" text="Resume" target="_blank" textColor={currentText} hoverBg={hoverBg} hoverText={hoverText} />
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <MenuButton
            isOpen={isOpen}
            toggle={toggleMenu}
            closedColor={closedMenuColor}
            openColor={openMenuColor}
            className={`${isOpen ? 'fixed top-5 right-1 z-50' : ''}`}
          />
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }} // Slightly longer duration for fade
              className={`fixed inset-0 ${mobileOverlayBg} backdrop-blur-sm z-40`}
              onClick={toggleMenu}
            >
              <motion.div
                initial={{ y: "-100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }} // Added opacity to exit for smoother transition
                transition={{
                  type: "spring",
                  damping: 20, // Reduce damping for a more responsive feel
                  stiffness: 150, // Adjust stiffness for a more controlled spring
                  mass: 0.5 // Lighter mass for quicker response
                }}
                className={`absolute top-0 left-0 w-full ${mobileMenuBg} shadow-lg pt-24 pb-8 px-6`}
                onClick={e => e.stopPropagation()}
              >
                <div className="flex flex-col items-center space-y-6">
                  <NavLink href="/about" text="About" mobile textColor={openText} hoverBg={hoverBg} hoverText={hoverText} />
                  <NavLink href="/#project-section" text="Portfolio" mobile textColor={openText} hoverBg={hoverBg} hoverText={hoverText} />
                  <NavLink href="/resume" text="Resume" target="_blank" mobile textColor={openText} hoverBg={hoverBg} hoverText={hoverText} />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const NavLink = ({ href, text, target, mobile, textColor, hoverBg, hoverText }) => (
  <Link
    href={href}
    target={target}
    className={`text-lg font-medium ${textColor} ${mobile ? 'block w-full text-center' : ''}`}
  >
    <p className={`relative group hover:${hoverText}`}>
      <span>{text}</span>
      <span className={`absolute -bottom-0 left-0 w-0 h-7 ${hoverBg} transition-all duration-500 group-hover:w-full`}></span>
    </p>
  </Link>
);

export default NavBar;