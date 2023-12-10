import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./Viewer.css";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { Icon } from "@iconify/react";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

export const Viewer = ({
  children,
  file,
  height,
  width,
  arrowIconRight,
  arrowIconLeft,
}) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    //changePage(pageNumber);
  });

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  const previousPage = () => {
    changePage(-1);
  };

  const nextPage = () => {
    changePage(1);
  };

  return (
    <div className="viewer">
      <Document
        file={file}
        page={pageNumber}
        onLoadSuccess={onDocumentLoadSuccess}
        style={{ width: "150px", height: "300px" }}
      >
        <Page pageNumber={pageNumber} height={height} width={width} />
      </Document>

      <div className="page-info-button-wrapper">
        <div className="button-wrapper">
          <button
            className="previous-page"
            type="button"
            disabled={pageNumber === 1}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "50px",
              height: "25px",
              fontSize: "1.5rem",
            }}
            onClick={previousPage}
          >
            {/* <i className="fa fa-fw fa-arrow-left"></i> */}
            <Icon className="iconify arrow-left" icon={arrowIconLeft} />
          </button>
          <button
            className="next-page"
            type="button"
            disabled={pageNumber >= numPages}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "50px",
              height: "25px",
              fontSize: "1.5rem",
            }}
            onClick={nextPage}
          >
            {/* <i className="fa fa-fw fa-arrow-right"></i> */}
            <Icon className="iconify arrow-right" icon={arrowIconRight} />
          </button>
        </div>
        <p className="page-info">
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>
        {children}
      </div>
    </div>
  );
};
