import { Link } from "react-router-dom";
import "./Navigation.css";
import { Icon } from "@iconify/react";

export const Navigation = ({ emailIcon, linkedinIcon, ghIcon }) => {
  return (
    <header className="nav-wrapper">
      <div className="floating-nav-container">
        <div className="nav-link-wrapper">
          <a className="nav-link hover-underline-animation" href="#home">
            Home
          </a>
          <a className="nav-link hover-underline-animation" href="#work">
            My Work
          </a>
          <a className="nav-link hover-underline-animation" href="#code">
            Code Projects
          </a>
        </div>

        <div className="contact-nav-container">
          <div className="icon-wrapper">
            <a className="nav-link" href="mailto:browning.kirby1@gmail.com">
              {" "}
              <Icon className="iconify" icon={emailIcon} />
            </a>
            <a
              className="nav-link"
              href="https://www.linkedin.com/in/kirbybrowning/"
              target="_blank"
            >
              <Icon className="iconify" icon={linkedinIcon} />{" "}
            </a>
            <a
              className="nav-link"
              href="https://github.com/kbrowning718"
              target="_blank"
            >
              <Icon className="iconify" icon={ghIcon} />
            </a>
          </div>
          <a className="nav-link hover-underline-animation" href="#">
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};
