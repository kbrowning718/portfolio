import "./ProjectImgLink.css";
// import {  } from "../../components";

export const ProjectImgLink = ({ gridImg, projectLink, projectLinkText }) => {
  return (
    <div className="grid-img-container">
      <img className="grid-img" src={gridImg} />
      <a className="grid-img-link" src={projectLink}>
        {projectLinkText}
      </a>
    </div>
  );
};
