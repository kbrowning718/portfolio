import { Link } from "react-router-dom";
import "./Navigation.css";
import { Icon } from "@iconify/react";
import { useState } from "react";

export const Navigation = ({ emailIcon, linkedinIcon, ghIcon }) => {
  const [isOpen, setOpen] = useState(false);

  function toggle(isOpen) {
    setOpen((isOpen) => !isOpen);
  }
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
              <Icon className="iconify contact-link" icon={emailIcon} />
            </a>
            <a
              className="nav-link"
              href="https://www.linkedin.com/in/kirbybrowning/"
              target="_blank"
            >
              <Icon className="iconify contact-link" icon={linkedinIcon} />{" "}
            </a>
            <a
              className="nav-link"
              href="https://github.com/kbrowning718"
              target="_blank"
            >
              <Icon className="iconify contact-link" icon={ghIcon} />
            </a>
          </div>
          <a className="nav-link hover-underline-animation" href="#">
            Contact
          </a>
        </div>
      </div>

      <div className="mobile-nav-wrapper">
        <div onClick={toggle} className="mobile-scroll-icon-container">
          <Icon
            className="iconify mobile-scroll-icon"
            icon={
              isOpen === false ? "gg:menu-round" : "zondicons:close-outline"
            }
          />
          <div
            className={
              isOpen === false ? "mobile-nav-menu hide" : "mobile-nav-menu"
            }
          >
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
        </div>
      </div>
    </header>
  );
};
