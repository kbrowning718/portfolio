import "./Hero.css";
import { useState } from "react";
import { useEffect } from "react";
import { HeroHeadings } from "../../components";

export const Hero = ({ img }) => {
  return (
    <div className="hero-container">
      <div className="bg-img"> </div>
      <HeroHeadings
        headerText="Portfolio Header"
        subheaderText="Subheader Text"
      />
    </div>
  );
};
