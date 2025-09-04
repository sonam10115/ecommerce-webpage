import React from "react";
import { heroLogos } from "../constant/data";

const Hero = () => {
  return (
    <section>
      <div className="container">
        {/* content */}
        <div className="">
          {/* {title} */}
          <div className="className">
            <span className="">
              <img
                src="/images/shape-1.png"
                alt="title shape"
                width={39}
                height={43}
              />
            </span>
            <div className="">
              <span>
                <img
                  src="/images/shape-2.png"
                  alt="title shape"
                  width={48}
                  height={48}
                />
              </span>
              <h1>
                <span className="">unlock</span> your creative potential
              </h1>
            </div>
          </div>
          <p>with Online Design and Development Courses.</p>
          <p>Learn from Industry Experts and Enhance Your Skills.</p>

          {/* buttons wrapper */}
          <div className="">
            <button>Explore Courses</button>
            <button>View Pricing</button>
          </div>

          {/* client logo */}
          <div className="">
            <div>
              {heroLogos.map((logo) => (
                //logo
                <div className="" key={logo.id}>
                  <img
                    src={logo.img}
                    alt="logo"
                    width={logo.width}
                    height={28}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Banner */}
        <figure>
          <img
            src="/images/hero-banner.png"
            alt="hero-banner"
            width={940}
            height={500}
          />

          {/* dark overlay */}
          <div className=""></div>

          {/* play button */}
          <div className="">
            <span></span>
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
