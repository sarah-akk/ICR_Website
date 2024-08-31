/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import ReactSwiper from "../../components/ReactSwiper/ReactSwiper";

const Title = () => {
  const websiteDesignSections = [
    { id: 0, text: "E-commerce" },
    { id: 1, text: "Talabat website" },
    { id: 2, text: "E-commerce" },
    { id: 3, text: "Talabat website" },
    { id: 4, text: "E-commerce" },
    { id: 5, text: "Talabat website" },
    { id: 6, text: "E-commerce" },
    { id: 7, text: "Talabat website" },
    { id: 8, text: "E-commerce" },
    { id: 9, text: "Talabat website" },
  ];

  const [id, setId] = useState(0);

  return (
    <>
      {/* Desktop  */}
      <div className="hidden md:flex flex-col items-center justify-center gap-10 mt-10">
        <div className="flex flex-col items-center justify-center gap-10">
          <p className="text-3xl font-bold text-black">Application Design</p>
          <div className="w-96 h-1 bg-blue-800 mr-4"></div>
        </div>
        <ReactSwiper data={websiteDesignSections} id={id} setId={setId} />
      </div>

      {/* Mobile  */}
      <div className="md:hidden flex flex-col items-center justify-center gap-5 mt-5 p-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-2xl font-bold text-black">Application Design</p>
          <div className="w-full h-1 bg-blue-800"></div>
        </div>
        <ReactSwiper data={websiteDesignSections} id={id} setId={setId} />
      </div>
    </>
  );
};

export default Title;
