import './App.css';
import { Worker } from "@react-pdf-viewer/core";
import MasterRoute from "./routes/MasterRoute";

function App() {
  return (
    <Worker workerUrl={"https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js"}>
      <MasterRoute/>
    </Worker>
  );
}

export default App;
