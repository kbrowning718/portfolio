import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./Viewer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

export const Viewer = ({ children, file }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  useEffect(() => {
    changePage(pageNumber);
  });

  return (
    <div className="viewer">
      <Document
        file={file}
        options={{ workerSrc: "/pdf.worker.js" }}
        onSourceError={(err) => console.log(err)}
        onSourceSuccess={() => console.log("SUCCESS")}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={() => console.log("ERR")}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
      </p>
      <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
        <i style={{ fontSize: 25 }} className="fa fa-fw fa-arrow-left"></i>
      </button>
      <button
        type="button"
        disabled={pageNumber >= numPages}
        onClick={nextPage}
      >
        <i style={{ fontSize: 25 }} className="fa fa-fw fa-arrow-right"></i>
      </button>
      {children}
    </div>
  );
};
