import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profile.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap items-start">
        <div className="w-full lg:w-1/2 lg:pr-8">
          <div className="flex flex-col items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-12 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl"
            >
              Stephanie Lucero
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Web Developer
            </motion.span>
            {HERO_CONTENT.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="my-2 max-w-xl py-4 font-light text-lg tracking-tighter"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-20 lg:pb-8">
          <div className="flex items-start justify-start">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="h-auto w-full max-w-sm rounded-lg"
              src={profilePic}
              alt="Stephanie"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
