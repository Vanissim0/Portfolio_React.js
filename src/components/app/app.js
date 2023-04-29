import React from "react";
import PageWrapper from "../layout/page-wrapper/PageWrapper";
import skillsList from "../../mocks/skillsList";
import './style.css'

export default function App() {
  return <PageWrapper skills={skillsList} />;
}
