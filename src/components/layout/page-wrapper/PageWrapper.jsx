import React from "react";
import Header from "../header/Header";
import "./style.css";
import Main from "../../blocks/main/Main";
import MainPage from "../../pages/main-page/MainPage";

export default function PageWrapper( ...prop ) {
  return (
    <>
      <Header />
      <main className="page-wrapper__main">
        <Main />
        <MainPage {...prop}/>
      </main>
    </>
  );
}
