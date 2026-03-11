import { useState } from "react";
import { motion } from "framer-motion";

function Navbar({ darkMode, setDarkMode }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -70 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="bg-blue-500 text-white fixed top-0 left-0 right-0 z-50 dark:bg-blue-800 shadow-md p-4 md:p-6 flex justify-between items-center"
    >
      <h1 className="text-lg md:text-xl font-bold">Mohamed.DEV</h1>

      {/* Hamburger */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Menu */}
      <ul
        className={`
          ${open ? "block" : "hidden"} 
          md:flex md:items-center md:gap-6 
          space-y-4 md:space-y-0 mt-4 md:mt-0
          absolute md:static top-full left-0 w-full md:w-auto bg-blue-500 md:bg-transparent p-4 md:p-0
        `}
      >
        <li>
          <a href="#home" className="font-semibold hover:text-white dark:hover:text-blue-500 hover:underline underline-offset-8" onClick={() => setOpen(false)}>Home</a>
        </li>
        <li>
          <a href="#about" className="font-semibold hover:text-white dark:hover:text-blue-500 hover:underline underline-offset-8" onClick={() => setOpen(false)}>About</a>
        </li>
        <li>
          <a href="#projects" className="font-semibold hover:text-white dark:hover:text-blue-500 hover:underline underline-offset-8" onClick={() => setOpen(false)}>Projects</a>
        </li>
        <li>
          <a href="#contact" className="font-semibold hover:text-white dark:hover:text-blue-500 hover:underline underline-offset-8" onClick={() => setOpen(false)}>Contact</a>
        </li>

        {/* Dark Mode */}
        <li>
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 border rounded w-full md:w-auto">
            {darkMode ? "Light" : "Dark"}
          </button>
        </li>
      </ul>
    </motion.nav>
  );
}

export default Navbar;