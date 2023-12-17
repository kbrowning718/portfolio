import "./WorkImgGrid.css";
// import {  } from "../../components";

export const WorkImgGrid = ({ gridImg1, gridImg2, gridImg3, children }) => {
  return (
    <div className="grid-wrapper">
      <div className="grid-img-container">
        <img className="grid-img" src={gridImg1} />
      </div>
      <div className="grid-img-container">
        {" "}
        <img className="grid-img" src={gridImg2} />
      </div>
      <div className="grid-img-container">
        <img className="grid-img" src={gridImg3} />
      </div>
      {children}
    </div>
  );
};
