import React from "react";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Benifits from "./component/Benifits";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <Benifits />
    </>
  );
};

export default App;
