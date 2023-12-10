import resume from "./Kirby Browning Résumé_2022 copy.pdf";
import { Viewer } from "../../components";
import "./Resume.css";

export const Resume = () => {
  return <Viewer file={resume}></Viewer>;
};
