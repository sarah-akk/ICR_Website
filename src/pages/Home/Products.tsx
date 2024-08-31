import React from "react";
import clock from "../../assets/clock.png";
import asset7 from "../../assets/asset7.png";

interface Product {
  imgSrc: string;
  title: string;
  description: string;
}

const products: Product[] = [
  {
    imgSrc: clock,
    title: "Invest your time",
    description: "Get your products out there quickly.",
  },
  {
    imgSrc: clock,
    title: "Maximize Efficiency",
    description: "Use our tools to improve your workflow.",
  },
  {
    imgSrc: clock,
    title: "Grow Your Business",
    description: "Expand your reach with our platform.",
  },
];

const Products = () => {
  return (
    /* Desktop */
    <>
      <div className="hidden md:flex w-full p-10 ">
        <div className="flex flex-col">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row">
              <div className="h-14 w-1 bg-blue-800 mr-4"></div>
              <div className="flex flex-col gap-10 w-full">
                <p className="text-3xl font-bold text-black">
                  Show your products
                </p>
                <p className="text-xl w-full">
                  Powerful tricks to showcase your products, on your computer,
                  tablet, smartphone.
                </p>
              </div>
            </div>
            <img src={asset7} />
          </div>

          <div className="w-full mx-auto flex justify-between gap-x-5 gap-y-10 flex-wrap mt-4">
            {products.map((card, index) => (
              <div
                key={index}
                className="w-72 rounded h-60 bg-slate-100 flex flex-col p-5 gap-5 transform transition-transform duration-300 ease-in-out hover:scale-105"
              >
                <img src={card.imgSrc} className="w-20" alt={card.title} />
                <p className="text-xl font-bold text-black">{card.title}</p>
                <p className="text-sm text-black">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex-row">
        <div className="flex flex-col p-5 gap-3">
          <div className="flex flex-row items-center ">
            <div className="h-10 w-0.5 bg-blue-800 mr-2"></div>
            <p className="text-xl font-bold text-black">Show your products</p>
          </div>
          <p className="text-sm ">
            Powerful tricks to showcase your products, on your computer, tablet,
            smartphone.
          </p>
          <img src={asset7} />
          <div className="flex flex-col justify-between items-center space-y-10 mt-4">
            {products.map((card, index) => (
              <div
                key={index}
                className="w-72 rounded h-52 bg-slate-100 flex flex-col p-5 gap-2 transform transition-transform duration-300 ease-in-out hover:scale-105"
              >
                <img src={card.imgSrc} className="w-20" alt={card.title} />
                <p className="text-xl font-bold text-black">{card.title}</p>
                <p className="text-sm text-black">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
