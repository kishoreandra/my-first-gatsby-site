import * as React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Main } from "../components/Common.Style";

const IndexPage = () => {
  return (
    <Main>
      <Navbar />
      {/* <About />
      <Projects />
      <Contact /> */}
    </Main>
  );
};

export default IndexPage;

export const Head = () => <title>KishoreKcH sample portfolio site</title>;
