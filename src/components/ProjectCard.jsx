import { motion } from "framer-motion";
function ProjectCard({ title, description, link, image }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{delay:0.3, duration: 0.8 , ease: "easeIn" }}
      viewport={{ once: false }}
      className="bg-blue-200 dark:bg-blue-800 border-4 border-blue-500 rounded-lg shadow-lg transition-shadow hover:shadow-blue-700 hover:scale-105 transition-transform"
    >
      {image && <img src={image} alt={title} className="w-full h-48 object-cover mb-4" />}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-200">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-white mt-3 inline-block border-2 border-blue-500 px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition">
        Voir le projet
      </a>
    </motion.div>
  );
}

export default ProjectCard;