import "./Home.css";
import { Hero } from "../../components";
import { ScrollableSection } from "../../components";
import { Navigation } from "../../components";
import headshot from "../../images/headshot-final.png";

export const Home = () => {
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
        <Hero headerText="My Work" subheaderText=""></Hero>
      </ScrollableSection>

      <ScrollableSection id="code">
        <Hero headerText="Code Projects" subheaderText=""></Hero>
      </ScrollableSection>
    </div>
  );
};
