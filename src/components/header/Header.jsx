import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import ME from "../../assets/img/me.png";
import ReactTyped from "react-typed";
import "./header.css";
import "react-typed/dist/animatedCursor.css";
import React from "react";
const Header = () => {
  return (
    <header id="me">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>
          <ReactTyped
            strings={["Carlos Lucas"]}
            smartBackspace
            typeSpeed={150}
            backSpeed={60}
            startDelay={100}
            backDelay={55}
            loop
          />
        </h1>
        <h5 className="text-light">
          Software{" "}
          <span>
            <ReactTyped
              strings={["Enginee", "Develope", "Code"]}
              smartBackspace
              typeSpeed={70}
              backSpeed={65}
              cursorChar="r"
              loop
            />
          </span>
        </h5>

        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="Person profile" title="Yep, that's me!" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;