import { FiLinkedin, FiGithub } from "react-icons/fi";
import { IoLogoBitbucket } from "react-icons/io";
import { HeaderData } from "../../data/Data";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href={HeaderData[0].url}
        target="_blank"
        rel="tooltip noopener noreferrer"
        title={HeaderData[0].title}
      >
        <FiLinkedin />
      </a>
      <a
        href={HeaderData[1].url}
        target="_blank"
        rel="tooltip noopener noreferrer"
        title={HeaderData[1].title}
      >
        <FiGithub />
      </a>
      <a
        href={HeaderData[2].url}
        target="_blank"
        rel="tooltip noopener noreferrer"
        title={HeaderData[2].title}
      >
        <IoLogoBitbucket />
      </a>
    </div>
  );
};

export default HeaderSocials;