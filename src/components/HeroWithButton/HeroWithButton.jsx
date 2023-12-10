import "./HeroWithButton.css";
import { HeroHeadingButton, Button } from "../../components";

export const HeroWithButton = ({
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
        <HeroHeadingButton
          headerText={headerText}
          subheaderText={subheaderText}
          buttonText={buttonText}
          buttonLink={buttonLink}
        />
        {children}
      </div>
    </div>
  );
};
