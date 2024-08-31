import React from "react";
import asset5 from "../../assets/asset5.png";
import asset6 from "../../assets/asset6.png";
import string3 from "../../assets/string3.png";

const Achievements = () => {
  const cards = [
    { imgSrc: asset5, alt: "Achievement 1" },
    { imgSrc: asset6, alt: "Achievement 2" },
    { imgSrc: asset5, alt: "Achievement 3" },
    { imgSrc: asset6, alt: "Achievement 4" },
    { imgSrc: asset5, alt: "Achievement 5" },
  ];

  return (
    <>
      {/* Desktop Layout */}
      <div className="hidden md:flex flex-col items-center justify-center gap-10 mt-10">
        <img src={string3} className=" absolute -z-10" />
        <div className="flex flex-col items-center justify-center gap-10">
          <p className="text-3xl font-bold text-black">
            ICR Foundation's latest achievements
          </p>
          <div className="w-1/2 h-1 bg-blue-800 mr-4"></div>
          <p className="text-lg text-center pr-10 w-1/2">
            At Hello, you find a lot of creative ideas, hard work, and reliable
            relationships with customers. “We work the way you want.”
          </p>
        </div>
        <div className="flex flex-row justify-between w-full">
          {cards.slice(0, 3).map((card, index) => (
            <div key={index} className="flex flex-col items-center w-1/3 p-5 ">
              <img
                src={card.imgSrc}
                alt={card.alt}
                className="rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-between w-full">
          {cards.slice(3).map((card, index) => (
            <div key={index} className="flex flex-col items-center w-1/2 p-5">
              <img
                src={card.imgSrc}
                alt={card.alt}
                className="rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col items-center gap-5 mt-10">
        <div className="flex flex-col items-center justify-center gap-5">
          <p className="text-lg font-bold text-black">
            ICR Foundation's latest achievements
          </p>
          <div className="w-3/4 h-0.5 bg-blue-800 "></div>
          <p className="text-lg text-center p-2">
            At Hello, you find a lot of creative ideas, hard work, and reliable
            relationships with customers. “We work the way you want.”
          </p>
        </div>
        {cards.map((card, index) => (
          <div key={index} className="w-full p-5">
            <img
              src={card.imgSrc}
              alt={card.alt}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Achievements;
