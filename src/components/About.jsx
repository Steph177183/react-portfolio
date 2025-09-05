import aboutImg from "../assets/about_me.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-6xl"
      >
        About
        <span className="text-neutral-500"> Me</span>
      </motion.h1>
      <div className="flex flex-wrap items-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-4"
        >
          <div className="flex items-center justify-center">
            <img
              className="h-auto w-full max-w-sm rounded-2xl"
              src={aboutImg}
              alt="about"
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-4"
        >
          <div className="flex flex-col">
            {ABOUT_TEXT.map((paragraph, index) => (
              <p
                key={index}
                className="my-2 max-w-xl py-6 font-light text-lg tracking-tighter"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
