import React, { useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useReactToPrint } from "react-to-print";

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
  standardFontDataUrl: 'standard_fonts/',
};

export default function PdfPage() {
  const [numPages, setNumPages] = useState(null);

  const componentRef = useRef();

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'pdf-print-test',
    onBeforePrint: () => console.log("Start printing"),
    onAfterPrint: () => console.log("Print success"),
  })


  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="container">
      <button className={"pdf_button"} onClick={handlePrint}>Print</button>
      <div  className="pdf_container">
        <Document file={"./sample.pdf"} onLoadSuccess={onDocumentLoadSuccess} options={options}>
          {Array.from(new Array(numPages), (el, index) => (
            <Page ref={componentRef} key={`page_${index + 1}`} pageNumber={index + 1} />
          ))}
        </Document>
      </div>
    </div>
  )
}