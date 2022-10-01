import { FiLinkedin, FiGithub } from "react-icons/fi";
import { IoLogoBitbucket } from "react-icons/io";
import { HeaderData } from "../../data/HeaderData";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://linkedin.com/in/lucasbear/"
        target="_blank"
        rel="tooltip noopener noreferrer"
        title="Watch my profile in LinkedIn"
      >
        <FiLinkedin />
      </a>
      <a
        href="https://github.com/tGraffe/"
        target="_blank"
        rel="tooltip noopener noreferrer"
        title="My projects in GitHub"
      >
        <FiGithub />
      </a>
      <a
        href="https://bitbucket.com/lucasB_py/"
        target="_blank"
        rel="tooltip noopener noreferrer"
        title="My projects in BitBucket"
      >
        <IoLogoBitbucket />
      </a>
    </div>
  );
};

export default HeaderSocials;