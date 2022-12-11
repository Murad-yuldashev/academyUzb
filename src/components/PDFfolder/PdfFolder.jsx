import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { useParams } from "react-router-dom";
import "./PdfFolder.css";
import { data } from "../../data/data";

function PdfFolder() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offSet) {
    setPageNumber((prevPageNumber) => prevPageNumber + offSet);
  }

  function changePageBack() {
    changePage(-1);
  }

  function changePageNext() {
    changePage(+1);
  }

  const malumot = useParams();

  return (
    <div className="App">
      {data
        .filter((e) => e.id === Number(malumot.id.replace(":", "")))
        .map((item) => (
          <>
            <header className="App-header">
              <Document
                file={item.pdf}
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <Page height="600" pageNumber={pageNumber} />
              </Document>
              <p>
                {" "}
                Page {pageNumber} of {numPages}
              </p>
              {pageNumber > 1 && (
                <button onClick={changePageBack}>Previous Page</button>
              )}
              {pageNumber < numPages && (
                <button onClick={changePageNext}>Next Page</button>
              )}
            </header>
            {/* <center>
              <div>
                <Document
                  file={item.pdf}
                  onLoadSuccess={onDocumentLoadSuccess}
                >
                  {Array.from(new Array(numPages), (el, index) => (
                    <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                  ))}
                </Document>
              </div>
            </center> */}
          </>
        ))}
    </div>
  );
}

export default PdfFolder;
