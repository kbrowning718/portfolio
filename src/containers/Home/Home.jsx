import "./Home.css";
import { Hero } from "../../components";
import { ScrollableSection } from "../../components";
import { Navigation } from "../../components";

export const Home = () => {
  return (
    <div className="home-container">
      <Navigation></Navigation>
      <ScrollableSection id="home">
        <Hero headline="Portfolio" text="Portfolio Subheader"></Hero>
      </ScrollableSection>

      <ScrollableSection id="work">
        <Hero headline="Portfolio" text="Portfolio Subheader"></Hero>
      </ScrollableSection>

      <ScrollableSection id="code">
        <Hero></Hero>
      </ScrollableSection>
    </div>
  );
};
