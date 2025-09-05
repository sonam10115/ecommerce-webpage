import React from "react";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Benifits from "./component/Benifits";
import Courses from "./component/Courses";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <Benifits />
      <Courses />
    </>
  );
};

export default App;
