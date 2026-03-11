import { motion } from "framer-motion";
import Langage from "../assets/langage.jpg";


const skills = [
  "React","JavaScript","Tailwind CSS", "HTML","CSS","Git","Python", "Java",
];

function About() {
  return (
    <section className="min-h-screen dark:text-white p-8 md:p-20 text-center">
      <h2 className=" text-4xl font-bold  mb-6  py-16">
        À propos de moi
        <span className="block w-20 h-1 bg-blue-500 mx-auto mt-2 rounded"></span>
      </h2>

    
      <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto items-start">

        <motion.div
                initial={{ opacity: 0, y: 70 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.3 }}
               className="flex flex-col gap-6">
          <p className=" text-lg">
          Passionné par le développement web, je crée des interfaces modernes et des expériences digitales engageantes.
                   </p>

          <h3 className=" font-semibold text-lg mt-4 mb-2">
            Compétences & Technologies
          </h3>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-blue-300 bg-opacity-50 border border-blue-500  hover:bg-blue-600 text-black rounded-full px-4 py-1 text-sm cursor-default object-cover hover:shadow-lg transition-shadow hover:shadow-blue-700"
                >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="flex justify-center md:justify-end">
          <motion.img
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: false }}
           src={Langage}

            alt="Langages de programmation"
            className="rounded-xl shadow-lg max-w-md w-full border-4 border-blue-500 hover:shadow-2xl transition-shadow hover:shadow-blue-700"
           
          />
        </div>
      </div>
    </section>
  );
}

export default About;