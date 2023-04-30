import "./Home.css";
import { Hero } from "../../components";
import { ScrollableSection } from "../../components";
import { Navigation } from "../../components";
import headshot from "../../images/IMG_9019.png";

export const Home = () => {
  return (
    <div className="home-container">
      <Navigation></Navigation>
      <ScrollableSection id="home">
        <Hero
          id="one"
          headerText="Portfolio"
          subheaderText="Portfolio Subheader"
        >
          <div className="header-img-container">
            <img className="headshot" src={headshot} />
          </div>
        </Hero>
      </ScrollableSection>

      <ScrollableSection id="work">
        <Hero
          headerText="Portfolio 2"
          subheaderText="Portfolio Subheader 2"
        ></Hero>
      </ScrollableSection>

      <ScrollableSection id="code">
        <Hero></Hero>
      </ScrollableSection>
    </div>
  );
};
