import "./Hero.css";
import { useState } from "react";
import { useEffect } from "react";
import { HeroHeadings } from "../../components";

export const Hero = ({ id, headerText, subheaderText, children }) => {
  return (
    <div className="hero-container">
      <div className="hero-img-container" id={id}>
        <HeroHeadings headerText={headerText} subheaderText={subheaderText} />
        {children}
      </div>
    </div>
  );
};
