import "./HeroHeadings.css";

export const HeroHeadings = ({ headerText, subheaderText, children }) => {
  return (
    <div className="text-wrapper">
      <h1 className="hero-header">{headerText}</h1>
      <p className="hero-subhead">{subheaderText}</p>
      {children}
    </div>
  );
};
