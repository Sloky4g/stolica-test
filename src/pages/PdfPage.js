import React from "react";
import { Viewer } from "@react-pdf-viewer/core";
import { printPlugin } from "@react-pdf-viewer/print";

import "@react-pdf-viewer/print/lib/styles/index.css";

export default function PdfPage() {
  const printPluginInstance = printPlugin();
  const pageLayout = {
    buildPageStyles: () => ({
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
    }),
    transformSize: ({size}) => ({height: size.height + 30, width: size.width + 10}),
  }
  const {Print} = printPluginInstance;

  return (
      <div
        className={"pdf_container"}
      >
        <div className={"pdf_inner_container"}>
          <Print>
            {(props) => (
              <button
                className={"pdf_button"}
                onClick={props.onClick}
              >
                Print
              </button>
            )}
          </Print>
        </div>
        <div className={"pdf_content"}>
          <Viewer
            pageLayout={pageLayout}
            fileUrl={"./sample.pdf"}
            plugins={[printPluginInstance]}
          />
        </div>
      </div>
  )
}