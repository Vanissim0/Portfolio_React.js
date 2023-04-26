import React from "react";
import About from "../../blocks/about/About";
import Header from "../header/Header";
import './style.css'
import Main from "../../blocks/main/Main";

export default function PageWrapper() {
  return (
    <>
      <Header />
      <main className="page-wrapper__main">
        <Main/>
        <About />
      </main>
      
    </>
  );
}
