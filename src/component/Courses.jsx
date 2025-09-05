import React from "react";
import Title from "./Title";
import { coursesSecItems } from "../constant/data";

const Courses = () => {
  return (
    <section className="">
      <div className="container">
        {/* title  */}
        <Title
          title="Our Course"
          text="lorem  is the name of th emaining ufll is the way to dfi ne the matire o of the na jsuhudhd "
          link="View All"
        />

        {/* card wrapper */}
        <div className="grid gap-5 lg:grid-cols-2 mt-8 lg:mt-16 ">
          {coursesSecItems.map((item) => (
            // card
            <div className="bg-white p-7 lg:p-10 rounded-[10px] " key={item.id}>
              {/* img  */}
              <div className="">
                <img src={item.img} alt={item.title} width={560} height={265}
                 className="w-full h-full object-cover ronded-[10px] "/>
              </div>
              {/* content  */}
              <div className="mt-6">
                {/* tags  */}
                <div className="flex items-center flex-wrap gap-2.5">
                  {item.tags.map((tag, index) => (
                    <span className="border border-orange-75 p-3 rounded-md bg-orange-97 mr-2 " key={index}>
                      {tag.tag}
                    </span>
                  ))}
                  <p className="ml-auto font-medium">{item.instructor}</p>
                </div>
                {/* meta data  */}
                <div className="mt-6 space-y-1.5">
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
               </div>
              </div>
              {/* btn  */}
              <button className="bg-white-97 w-full p-3.5 rounded-md border border-white-97 hover:text-orange-50 hover:border-orange-50 transition"> Git it now </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
