import "./Home.css";
import {
  Hero,
  ScrollableSection,
  Viewer,
  Navigation,
  HeroWithButton,
  WorkImgGrid,
  ProjectImgLink,
} from "../../components";
import headshot from "../../images/headshot-final.png";
import { useState } from "react";
import resume from "./Kirby Browning Résumé_2022.pdf";
import project1 from "./code-screenshot.png";
import project2 from "./rendia-ppt.png";
import project3 from "./mobile-ui-test-overview.png";

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

      <ScrollableSection id="experience">
        <HeroWithButton
          id="hero2"
          headerText="Skills & Work Experience"
          subheaderText="Critical, creative thinker. Key areas of focus include product management and roadmapping, product/user research, UI/UX design and development (web/mobile) & customer journey mapping."
          buttonText="View Full Résumé"
          buttonLink="/resume"
        >
          <Viewer
            file={resume}
            height={420}
            arrowIconLeft="ic:round-arrow-left"
            arrowIconRight="ic:round-arrow-right"
          ></Viewer>
        </HeroWithButton>
      </ScrollableSection>

      <ScrollableSection id="work">
        <Hero
          id="hero3"
          headerText="My Work"
          subheaderText="A collection of completed and active projects"
        >
          <WorkImgGrid>
            <ProjectImgLink
              gridImg={project2}
              projectLink="/home"
              projectLinkText="Product Management"
            />

            <ProjectImgLink
              gridImg={project3}
              projectLink="/home"
              projectLinkText="User Experience"
            />
            <ProjectImgLink
              gridImg={project1}
              projectLink="/home"
              projectLinkText="Code Projects"
            />
          </WorkImgGrid>
        </Hero>
      </ScrollableSection>
    </div>
  );
};
