import React from "react";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Benifits from "./component/Benifits";
import Courses from "./component/Courses";
import Testimonials from "./component/Testimonials";
import FaqSec from "./component/FaqSec";
import Footer from "./component/Footer";


const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
         <Benifits />
      <Courses />
      <Testimonials />
      <FaqSec/>
      </main>
      
      <Footer /> 
      
    </>
  );
};

export default App;
