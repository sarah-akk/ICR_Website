/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import logoBig from "../../assets/logoBig.png";
import blue from "../../assets/Ellipseblue.png";

const Cards = () => {
  const cards = [1, 2, 3, 4];

  return (
    <>
      {/* Desktop */}
      <div className="hidden md:flex  flex-col p-10">
        <div className=" justify-between flex flex-row  gap-5 ">
          {cards.map((card, index) => (
            <>
              <div
                key={index}
                className="flex flex-row items-center justify-center w-1/4 h-60  p-5 bg-slate-100 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
              >
                <img src={logoBig} className="w-32 mb-4" />
              </div>
              {index < cards.length - 1 && (
                <div className="h-14 w-1 bg-blue-800 mt-20"></div>
              )}
            </>
          ))}
        </div>
        <div className="flex flex-row items-center justify-center h-40 p-5 bg-slate-100 rounded-lg shadow-lg mt-10 gap-20 overflow-hidden">
          <img
            src={blue}
            className=" relative overflow-hidden w-32 -translate-y-20"
          ></img>
          {cards.map((card, index) => (
            <div className="flex flex-row items-center">
              <div className="h-10 w-1 bg-blue-800 mr-4"></div>
              <p className="text-lg  text-black">Whmcs script design</p>
            </div>
          ))}
          <img
            src={blue}
            className=" relative overflow-hidden w-32 right-0 -translate-y-20"
          ></img>
        </div>
      </div>

      {/* Mobile*/}
      <div className="md:hidden">
        <div className="md:hidden flex flex-col mt-10 p-10 gap-5">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-5 h-40 bg-slate-100 rounded-lg shadow-md"
            >
              <img src={logoBig} className="w-32 " />
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center  bg-slate-100 rounded-lg shadow-lg  gap-10 overflow-hidden">
          <img
            src={blue}
            className=" relative overflow-hidden w-32 -translate-x-20 -translate-y-20"
          ></img>
          {cards.map((card, index) => (
            <div className="flex flex-row items-center">
              <div className="h-10 w-1 bg-blue-800 mr-4"></div>
              <p className="text-xl  text-black">Whmcs script design</p>
            </div>
          ))}
          <img
            src={blue}
            className=" relative overflow-hidden w-32 translate-x-28 translate-y-20"
          ></img>
        </div>
      </div>
    </>
  );
};

export default Cards;
