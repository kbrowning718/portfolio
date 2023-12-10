import "./Hero.css";
import { HeroHeadings, Button } from "../../components";

export const Hero = ({
  id,
  headerText,
  subheaderText,
  children,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="hero-container">
      <div className="hero-img-container" id={id}>
        <HeroHeadings headerText={headerText} subheaderText={subheaderText} />
        {children}
      </div>
    </div>
  );
};
