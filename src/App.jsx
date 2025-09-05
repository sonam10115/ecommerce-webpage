import React from "react";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Benifits from "./component/Benifits";
import Courses from "./component/Courses";
import Testimonials from "./component/Testimonials";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <Benifits />
      <Courses />
      <Testimonials />
    </>
  );
};

export default App;
