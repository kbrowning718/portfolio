import resume from "./Kirby Browning Résumé_2022 copy.pdf";
import { Viewer } from "../../components";
import "./Resume.css";

export const Resume = () => {
  return (
    <div class="resume-wrapper">
      <Viewer
        file={resume}
        arrowIconLeft="ic:round-arrow-left"
        arrowIconRight="ic:round-arrow-right"
      ></Viewer>
    </div>
  );
};
