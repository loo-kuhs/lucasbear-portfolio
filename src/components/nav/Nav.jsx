import "./nav.css";
import { BiMailSend } from "react-icons/bi";
import { GiClassicalKnowledge } from "react-icons/gi";
import { MdWorkOutline } from "react-icons/md";
import { SiAboutdotme } from "react-icons/si";
import { VscHome } from "react-icons/vsc";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        href="#me"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
        rel="tooltip"
        title="Home"
      >
        <VscHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
        rel="tooltip"
        title="About me"
      >
        <SiAboutdotme />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
        rel="tooltip"
        title="My experience"
      >
        <GiClassicalKnowledge />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
        rel="tooltip"
        title="My works"
      >
        <MdWorkOutline />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
        rel="tooltip"
        title="Keep in touch"
      >
        <BiMailSend />
      </a>
    </nav>
  );
};

export default Nav;