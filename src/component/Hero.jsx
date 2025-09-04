import React from "react";

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
                src="/image/shape-1.png"
                alt="title shape"
                width={39}
                height={43}
              />
            </span>
            <div className="">
              <span>
                <img
                  src="/image/shape-2.png"
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
        </div>
        <figure></figure>
      </div>
    </section>
  );
};

export default Hero;
