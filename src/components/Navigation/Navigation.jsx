import { Link } from "react-router-dom";
import "./Navigation.css";

export const Navigation = () => {
  return (
    <header>
      <div className="floating-nav-container">
        <a className="nav-link hover-underline-animation" href="#home">
          Home
        </a>
        <a className="nav-link hover-underline-animation" href="#">
          Nav Link 2
        </a>
        <a className="nav-link hover-underline-animation" href="#">
          Nav Link 3
        </a>
      </div>
    </header>
  );
};
