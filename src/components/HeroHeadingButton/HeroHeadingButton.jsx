import "./HeroHeadingButton.css";
import { Button } from "../../components";

export const HeroHeadingButton = ({
  headerText,
  subheaderText,
  children,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="text-wrapper">
      <h1 className="hero-header">{headerText}</h1>
      <p className="hero-subhead">{subheaderText}</p>
      <Button buttonText={buttonText} buttonLink={buttonLink} />
      {children}
    </div>
  );
};
