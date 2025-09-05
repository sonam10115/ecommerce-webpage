import React from "react";
import Title from "./Title";
import { benefitItems } from "../constant/data.js";
import { RiArrowRightUpLine } from "@remixicon/react";

const Benifits = () => {
  return (
    <section className=".section">
      <div className="container">
        {/* title  */}
        <Title
          title="Benifits"
          text="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          link="view all"
        />

        {/* card wrapper  */}
        <div className="">
          {benefitItems.map((item) => (
            // card
            <div className=" ">
              {/* // icon */}
              <div className="">
                <img src={item.icon} alt={item.title} width={64} height={64} />
              </div>
              {/* content  */}
              <div className="">
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>

              {/* button  */}
              <button>
                <RiArrowRightUpLine size={26} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benifits;
