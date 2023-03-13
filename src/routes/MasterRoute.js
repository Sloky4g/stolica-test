import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PdfPage from "../pages/PdfPage";

export default function MasterRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage/>}/>
        <Route path={"/pdf"} element={<PdfPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}