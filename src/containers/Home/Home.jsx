import "./Home.css";
import { Hero, ScrollableSection, Viewer, Navigation } from "../../components";
import headshot from "../../images/headshot-final.png";
import { useState } from "react";
import resume from "./Kirby Browning Résumé_2022.pdf";
import { Button } from "../../components";

export const Home = () => {
  const [isOpen, setOpen] = useState(false);

  function toggle(isOpen) {
    setOpen((isOpen) => !isOpen);
  }

  return (
    <div className="home-container">
      <Navigation
        emailIcon="ic:round-email"
        linkedinIcon="ph:linkedin-logo-fill"
        ghIcon="ri:github-fill"
      ></Navigation>
      <ScrollableSection id="home">
        <Hero
          id="hero1"
          headerText="Kirby Browning"
          subheaderText="Product Strategy, User Experience, Front-End Development"
        >
          <div className="header-img-container">
            <img className="headshot" src={headshot} />
          </div>
        </Hero>
      </ScrollableSection>

      <ScrollableSection id="work">
        <Hero
          id="hero2"
          headerText="Skills & Experience"
          subheaderText="Review some of my work experience here."
        >
          <Viewer
            file={resume}
            height={420}
            arrowIconLeft="ic:round-arrow-left"
            arrowIconRight="ic:round-arrow-right"
          ></Viewer>
          {/* <Button buttonText="hello" buttonLink="google.com" /> */}
        </Hero>
      </ScrollableSection>

      <ScrollableSection id="code">
        <Hero headerText="Code Projects" subheaderText=""></Hero>
      </ScrollableSection>
    </div>
  );
};
