import React from "react";
import purple from "../../assets/Ellipsepurple.png";
import blue from "../../assets/Ellipseblue.png";

const OnlineStore = () => {
  return (
    /* Desktop*/
    <>
      <div className="hidden md:flex m-20 flex-col gap-10 overflow-hidden">
        <div className="flex flex-col gap-10 overflow-hidden">
          <div className="flex flex-row items-center">
            <div className="h-14 w-1 bg-blue-800 mr-4"></div>
            <p className="text-3xl font-bold text-black">Online store design</p>
          </div>
        </div>
        <div className="w-full h-96 bg-slate-100 flex flex-col items-center justify-center gap-10">
          <p className="w-2/3 text-center">
            It's time to get your own store with an innovative look. This often
            requires saving large sums of money. At Hello, we offer solutions
            and products at different prices to suit all needs. Creativity,
            coordination, ease, complete and seamless control.
          </p>
          <button className="rounded-2xl text-white bg-blue-800 w-1/4 h-14 shadow-gray-400 shadow-md">
            Great details see the features
          </button>
        </div>

        <img
          src={blue}
          className="absolute -translate-x-40 translate-y-72 overflow-hidden"
        />
        <img
          src={purple}
          className="absolute -translate-x-52 translate-y-40 overflow-hidden"
        />
        <img
          src={purple}
          className="absolute right-0 translate-x-20 translate-y-48 overflow-hidden"
        />
        <img
          src={blue}
          className="absolute right-0 translate-x-10 translate-y-10 overflow-hidden"
        />
      </div>

      {/*mobile*/}
      <div className="md:hidden flex-col p-5 gap-10 overflow-hidden">
        <div className="flex flex-col gap-10 overflow-hidden">
          <div className="flex flex-row items-center mb-5">
            <div className="h-10 w-0.5 bg-blue-800 mr-2"></div>
            <p className="text-lg font-bold text-black ">Online store design</p>
          </div>
        </div>
        <div className="z-50 w-full h-96 bg-slate-100 flex flex-col items-center justify-center gap-10">
          <p className="w-2/3 text-center">
            It's time to get your own store with an innovative look. This often
            requires saving large sums of money. At Hello, we offer solutions
            and products at different prices to suit all needs. Creativity,
            coordination, ease, complete and seamless control.
          </p>
          <button className=" text-sm rounded-xl text-white bg-blue-800 p-2 h-10 shadow-gray-400 shadow-md">
            Great details see the features
          </button>
        </div>

        <img
          src={blue}
          className="absolute -translate-x-20 -translate-y-96 w-20 z-10"
        />
        <img
          src={purple}
          className="absolute -translate-x-20 -translate-y-80 w-24 z-10"
        />
        <img
          src={purple}
          className="absolute translate-x-72 -translate-y-20 w-32 z-10"
        />
      </div>
    </>
  );
};

export default OnlineStore;
