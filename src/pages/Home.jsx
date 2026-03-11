import { motion } from "framer-motion";
import ONE from "../assets/one.jpeg";

function Home() {
  return (
    <div className="min-h-screen py-12 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 px-4 md:px-6">

      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-center md:text-left max-w-xl"
      >
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Bonjour, je suis <span className="text-blue-500">Mohamed Ndiaye</span>
        </h1>

        <p className="text-base md:text-lg mb-6">
          Développeur web passionné par la création de sites modernes et interactifs.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 shadow-lg transition-shadow hover:shadow-blue-700"
          >
            Voir mes projets
          </a>

          <a
            href="#contact"
            className="border px-6 py-3 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-600 shadow-md transition-shadow hover:shadow-gray-500 dark:hover:shadow-gray-700"
          >
            Me contacter
          </a>
        </div>
      </motion.div>

      <motion.img
        src={ONE}
        alt="Mohamed Ndiaye"
        className="w-60 h-68 md:w-64 md:h-66 lg:w-60 lg:h-66 object-cover rounded-full border-4 border-blue-500 shadow-blue-500 hover:shadow-lg transition-shadow hover:shadow-blue-700"
        initial={{ x: 100, opacity: 0, scale: 0.6 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: false }}
      />
    </div>
  );
}

export default Home;