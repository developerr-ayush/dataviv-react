import React from "react";
import Owner from "./about/Owner";
import Countries from "./landing/Countries";
import Leading from "./landing/Leading";
import Banner from './header/Banner'


export default function About() {
  return (
    <>

      <Leading />
      <Owner />
      <Countries />
    </>
  );
}
