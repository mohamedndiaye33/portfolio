import { useState } from "react";
import { motion } from "framer-motion";

function Navbar({ darkMode, setDarkMode }) {
  const [open] = useState(false);

  return (
    <motion.nav 
    initial={{ opacity: 0, y: -70 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="bg-blue-500 text-white fixed top-0 left-0 right-0 z-50 dark:bg-blue-800 shadow-md p-6 flex justify-between items-center">
      <h1 className="text-xl font-bold">Mohamed.DEV</h1>

      <ul className={`md:flex md:items-center md:gap-6 ${open ? "block" : "hidden"}`}>
        <li><a href="#home" className="font-semibold hover:text-white dark:hover:text-blue-500 hover:underline underline-offset-8">Home </a></li>
        <li><a href="#about" className="font-semibold hover:text-white dark:hover:text-blue-500 hover:underline underline-offset-8">About</a></li>
        <li><a href="#projects" className="font-semibold hover:text-white dark:hover:text-blue-500 hover:underline underline-offset-8">Projects</a></li>
        <li><a href="#contact" className="font-semibold hover:text-white dark:hover:text-blue-500 hover:underline underline-offset-8">Contact</a></li>

        <li>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 p-1 border rounded"
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </li>
      </ul>
    </motion.nav>
  );
}

export default Navbar;