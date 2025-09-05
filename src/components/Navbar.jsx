// import { FaGithub } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { TfiEmail } from "react-icons/tfi";
// import { BiPhone } from "react-icons/bi";
// const Navbar = () => {
//   return (
//     <nav className="mb-20 flex items-center justify-between py-6">
//       <div className="flex flex-shrink-0 items-center">
//         <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-blue-800 bg-clip-text text-transparent">
//           SL
//         </h1>
//       </div>
//       <div className="ml-auto flex items-center gap-5 text-2xl pr-10">
//         <FaGithub />
//         <TfiEmail />
//         <BiPhone />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { BiPhone } from "react-icons/bi";

const Navbar = ({ contactsRef }) => {
  // Accept contactsRef as a prop
  const scrollToContacts = () => {
    contactsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-blue-800 bg-clip-text text-transparent">
          SL
        </h1>
      </div>
      <div className="ml-auto flex items-center gap-5 text-2xl pr-10">
        <a
          href="https://github.com/Steph177183"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a href="mailto:stephanielucero177@gmail.com">
          <TfiEmail />
        </a>
        <span onClick={scrollToContacts} style={{ cursor: "pointer" }}>
          <BiPhone />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
