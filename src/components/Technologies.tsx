// import { RiReactjsLine } from "react-icons/ri";
// import { FaLaravel } from "react-icons/fa";
// import { SiTailwindcss } from "react-icons/si";
// import { DiMysql } from "react-icons/di";
// import { SiInertia } from "react-icons/si";
// import { FaJs } from "react-icons/fa6";
// import { motion, Variants } from "framer-motion";

// const iconVariants = (duration: number): Variants => ({
//   initial: { y: -10 },
//   animate: {
//     y: [10, -10],
//     transition: {
//       duration: duration,
//       ease: "linear",
//       repeat: Infinity,
//       repeatType: "reverse",
//     },
//   },
// });

// const Technologies = () => {
//   return (
//     <div className="border-b border-neutral-800 pb-24">
//       <motion.h1
//         whileInView={{ opacity: 1, x: 0 }}
//         initial={{ opacity: 0, y: -100 }}
//         transition={{ duration: 1.5 }}
//         className="my-20 text-center text-4xl"
//       >
//         Technologies
//       </motion.h1>
//       <motion.div
//         whileInView={{ opacity: 1, x: 0 }}
//         initial={{ opacity: 0, x: -100 }}
//         transition={{ duration: 1.5 }}
//         className="flex flex-wrap items-center justify-center gap-4"
//       >
//         <motion.div
//           variants={iconVariants(1.5)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-2"
//         >
//           <RiReactjsLine className="text-7xl text-cyan-400" />
//         </motion.div>
//         <motion.div
//           variants={iconVariants(1)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-2"
//         >
//           <FaLaravel className="text-7xl text-red-600" />
//         </motion.div>
//         <motion.div
//           variants={iconVariants(1.5)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-2"
//         >
//           <SiTailwindcss className="text-7xl text-cyan-400" />
//         </motion.div>
//         <motion.div
//           variants={iconVariants(2)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-2"
//         >
//           <DiMysql className="text-7xl text-blue-800" />
//         </motion.div>
//         <motion.div
//           variants={iconVariants(2.5)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-2"
//         >
//           <SiInertia className="text-7xl text-white-400" />
//         </motion.div>
//         <motion.div
//           variants={iconVariants(3)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-2"
//         >
//           <FaJs className="text-7xl text-yellow-400" />
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default Technologies;

import { RiReactjsLine } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { SiInertia } from "react-icons/si";
import { FaJs } from "react-icons/fa6";
import { motion, Variants } from "framer-motion";

const iconVariants = (duration: number): Variants => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <div className="my-20 text-center text-4xl">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="text-center text-4xl mb-4"
        >
          Technologies
        </motion.h1>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex items-center justify-center gap-4 pt-10"
        >
          <motion.div
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
            className="rounded-lg border-4 border-neutral-700 p-4 "
          >
            <RiReactjsLine className="text-5xl text-cyan-400" />
          </motion.div>
          <motion.div
            variants={iconVariants(1)}
            initial="initial"
            animate="animate"
            className="rounded-lg border-4 border-neutral-700 p-4"
          >
            <FaLaravel className="text-5xl text-red-600" />
          </motion.div>
          <motion.div
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
            className="rounded-lg border-4 border-neutral-700 p-4"
          >
            <SiTailwindcss className="text-5xl text-cyan-400" />
          </motion.div>
          <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-lg border-4 border-neutral-700 p-4"
          >
            <DiMysql className="text-5xl text-blue-800" />
          </motion.div>
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-lg border-4 border-neutral-700 p-4"
          >
            <SiInertia className="text-5xl text-white-400" />
          </motion.div>
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-lg border-4 border-neutral-700 p-4"
          >
            <FaJs className="text-5xl text-yellow-400" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
