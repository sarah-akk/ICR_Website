import React from "react";
import Rectangle from "../../assets/towRectanglebig.png";
import logoTransparent from "../../assets/logoTransparent.png";

const Features = () => {
  const cards = [
    {
      title: "Company website design",
      description:
        "We offer the best website design offers for your own company; To increase the number of customers on the company’s website and develop your business; To achieve more success.",
    },
    {
      title: "Clean code",
      description:
        "Welcome peace of mind, we constantly test and carefully verify files, so you can be confident in using them.",
    },
    {
      title: "Technical support",
      description:
        "A specialized team is indispensable for technical support for the site; To answer all inquiries and solve all problems.",
    },
    {
      title: "After-sales service",
      description:
        "We provide after-sales service training for your own business; To get its most important advantages.",
    },
    {
      title: "Powerful performance",
      description:
        "We do not impose specific designs and colors on you, but rather we leave you complete freedom to choose them.",
    },
  ];

  return (
    <>
      {/* Desktop */}
      <div className="hidden md:flex flex-col items-center justify-center mt-20 gap-10">
        <div className="flex flex-row justify-between w-full">
          {cards.slice(0, 3).map((card, index) => (
            <div
              key={index}
              className="flex flex-col text-center w-1/3 p-10 gap-5 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
            >
              <div className="flex flex-row">
                <img src={Rectangle} className="w-10 mr-2" />
                <p className="text-xl font-bold text-black">{card.title}</p>
              </div>
              <p className="text-lg text-center">{card.description}</p>
            </div>
          ))}
        </div>
        <img src={logoTransparent} className="-z-10 absolute"></img>
        <div className="flex flex-row justify-center w-full">
          {cards.slice(3).map((card, index) => (
            <div
              key={index}
              className="flex flex-col text-center w-1/3 p-10 gap-5 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
            >
              <div className="flex flex-row">
                <img src={Rectangle} className="w-10 mr-2" />
                <p className="text-xl font-bold text-black">{card.title}</p>
              </div>
              <p className="text-lg text-center">{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex flex-col items-center justify-center gap-10 p-5">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col text-center w-full p-5 gap-5 rounded-lg "
          >
            <div className="flex flex-row justify-center items-center">
              <img src={Rectangle} className="w-8 mr-2" />
              <p className="text-lg font-bold text-black">{card.title}</p>
            </div>
            <p className="text-sm">{card.description}</p>
          </div>
        ))}
        <img src={logoTransparent} className="-z-10 absolute"></img>
      </div>
    </>
  );
};

export default Features;
